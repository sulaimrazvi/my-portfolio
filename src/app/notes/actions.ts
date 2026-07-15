'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)

export async function addNote(formData: FormData) {
  const title = formData.get('title') as string
  const raw_text = formData.get('raw_text') as string
  const category = formData.get('category') as string
  const priority = formData.get('priority') as string

  const refined_text = await generateRefinedText(raw_text)

  const { error } = await supabase.from('notes').insert({
    title,
    raw_text,
    refined_text,
    category,
    priority,
    status: 'New',
  })

  if (error) {
    console.error('Error adding note:', error.message)
  }

  revalidatePath('/')
}

export async function deleteNote(id: number) {
  const { error } = await supabase.from('notes').delete().eq('id', id)

  if (error) {
    console.error('Error deleting note:', error.message)
  }

  revalidatePath('/')
}

export async function updateNote(id: number, formData: FormData) {
  const title = formData.get('title') as string
  const raw_text = formData.get('raw_text') as string
  const category = formData.get('category') as string
  const priority = formData.get('priority') as string
  const status = formData.get('status') as string
  const refined_text = await generateRefinedText(raw_text)
  const { error } = await supabase
    .from('notes')
    .update({ title, raw_text, refined_text, category, priority, status })
    .eq('id', id)

  if (error) {
    console.error('Error updating note:', error.message)
  }

  revalidatePath('/')
}




async function generateRefinedText(rawText: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' })
  const prompt = `You are helping refine a rough project idea note into a clear, structured format.

    Rewrite the following raw text into:
    - A one-line summary of what it is
    - Core features (bullet points)
    - Future/stretch features (bullet points, if any mentioned)
    - Any technical considerations mentioned

    Keep it concise and skip generic headers like "Concept Overview." Just give the structured content directly.

    Raw note:
    ${rawText}`
  const result = await model.generateContent(prompt)
  return result.response.text()
}