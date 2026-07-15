'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function addProject(formData: FormData) {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const tech_stack = (formData.get('tech_stack') as string)
    .split(',')
    .map((t) => t.trim())
  const github_link = formData.get('github_link') as string
  const deployed_url = formData.get('deployed_url') as string

  const { error } = await supabase.from('projects').insert({
    title,
    description,
    tech_stack,
    github_link,
    deployed_url: deployed_url || null,
  })

  if (error) {
    console.error('Error adding project:', error.message)
    return
  }

  const { data: skillRows, error: skillFetchError } = await supabase
    .from('skills')
    .select('name')

  if (skillFetchError) {
    console.error('Error fetching skills:', skillFetchError.message)
    return
  }

  const existingSkillNames = skillRows.map((row) => row.name)
  const missingSkills = tech_stack.filter((tech) => !existingSkillNames.includes(tech))

  if (missingSkills.length > 0) {
    const { error: skillInsertError } = await supabase
      .from('skills')
      .insert(missingSkills.map((name) => ({ name })))

    if (skillInsertError) {
      console.error('Error adding skills:', skillInsertError.message)
    }
  }

  revalidatePath('/')
  revalidatePath('/admin/projects')
}