'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function addBlogEntry(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const entry_date = formData.get('entry_date') as string

  const { error } = await supabase.from('blog_entries').insert({
    title,
    content,
    entry_date,
  })

  if (error) {
    console.error('Error adding blog entry:', error.message)
    return
  }

  revalidatePath('/blog')
  revalidatePath('/admin/blog')
}