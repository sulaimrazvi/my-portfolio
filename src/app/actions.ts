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