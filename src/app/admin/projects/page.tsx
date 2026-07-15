import { addProject } from './actions'

export default function AdminProjects() {
  return (
    <div style={{ maxWidth: 500, margin: '60px auto', fontFamily: 'sans-serif' }}>
      <h1>Add Project</h1>
      <form action={addProject} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <input name="title" placeholder="Project title" required />
        <textarea name="description" placeholder="Description" rows={4} required />
        <input name="tech_stack" placeholder="Tech stack (comma-separated: React, Supabase)" required />
        <input name="github_link" placeholder="GitHub URL" required />
        <input name="deployed_url" placeholder="Deployed URL (optional)" />
        <button type="submit">Add Project</button>
      </form>
    </div>
  )
}