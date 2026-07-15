'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function addNote(formData: FormData) {
  const title = formData.get('title') as string
  const raw_text = formData.get('raw_text') as string
  const category = formData.get('category') as string
  const priority = formData.get('priority') as string

  const { error } = await supabase.from('notes').insert({
    title,
    raw_text,
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

  const { error } = await supabase
    .from('notes')
    .update({ title, raw_text, category, priority, status })
    .eq('id', id)

  if (error) {
    console.error('Error updating note:', error.message)
  }

  revalidatePath('/')
}