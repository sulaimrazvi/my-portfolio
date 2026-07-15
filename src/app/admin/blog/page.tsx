import { addBlogEntry } from './actions'

export default function AdminBlog() {
  const today = new Date().toISOString().split('T')[0]

  return (
    <main className="min-h-screen bg-black text-zinc-200 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <p className="text-red-600 font-mono text-sm tracking-widest mb-2">// NEW LOG ENTRY</p>
        <h1 className="text-2xl font-bold text-white font-mono mb-8">Add Journal Entry</h1>

        <form action={addBlogEntry} className="flex flex-col gap-4">
          <input
            name="title"
            placeholder="What did you learn today?"
            required
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-red-600 focus:outline-none transition-colors"
          />

          <input
            type="date"
            name="entry_date"
            defaultValue={today}
            required
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-red-600 focus:outline-none transition-colors [color-scheme:dark]"
          />

          <textarea
            name="content"
            placeholder="Write it out..."
            rows={8}
            required
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-red-600 focus:outline-none transition-colors resize-none"
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 text-white font-mono text-sm tracking-wide py-3 rounded-lg transition-colors mt-2"
          >
            SAVE ENTRY
          </button>
        </form>
      </div>
    </main>
  )
}