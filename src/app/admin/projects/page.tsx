import { addProject } from './actions'

export default function AdminProjects() {
  return (
    <main className="min-h-screen bg-black text-zinc-200 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <p className="text-red-600 font-mono text-sm tracking-widest mb-2">// NEW PROJECT</p>
        <h1 className="text-2xl font-bold text-white font-mono mb-8">Add Project</h1>

        <form action={addProject} className="flex flex-col gap-4">
          <input
            name="title"
            placeholder="Project title"
            required
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-red-600 focus:outline-none transition-colors"
          />

          <textarea
            name="description"
            placeholder="Description"
            rows={4}
            required
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-red-600 focus:outline-none transition-colors resize-none"
          />

          <input
            name="tech_stack"
            placeholder="Tech stack (comma-separated: React, Supabase)"
            required
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-red-600 focus:outline-none transition-colors"
          />

          <input
            name="github_link"
            placeholder="GitHub URL"
            required
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-red-600 focus:outline-none transition-colors"
          />

          <input
            name="deployed_url"
            placeholder="Deployed URL (optional)"
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-red-600 focus:outline-none transition-colors"
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 text-white font-mono text-sm tracking-wide py-3 rounded-lg transition-colors mt-2"
          >
            ADD PROJECT
          </button>
        </form>
      </div>
    </main>
  )
}