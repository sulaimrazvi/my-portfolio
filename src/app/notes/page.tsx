import { supabase } from '@/lib/supabase'
import { addNote } from './actions'
import NoteCard from './NoteCard'

export default async function Home() {
  const { data: notes, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <main className="min-h-screen bg-black text-zinc-200 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <p className="text-red-600 font-mono text-sm tracking-widest mb-2">// PRIVATE</p>
        <h1 className="text-2xl font-bold text-white font-mono mb-8">My Second Brain</h1>

        <form action={addNote} className="flex flex-col gap-4 mb-12">
          <input
            name="title"
            placeholder="Title"
            required
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-red-600 focus:outline-none transition-colors"
          />
          <textarea
            name="raw_text"
            placeholder="Your raw idea..."
            rows={4}
            required
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:border-red-600 focus:outline-none transition-colors resize-none"
          />
          <select
            name="category"
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors"
          >
            <option value="Project idea">Project idea</option>
            <option value="Problem observed">Problem observed</option>
            <option value="Learning goal">Learning goal</option>
            <option value="Random thought">Random thought</option>
          </select>
          <select
            name="priority"
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 text-white font-mono text-sm tracking-wide py-3 rounded-lg transition-colors"
          >
            SAVE NOTE
          </button>
        </form>

        {error && <p className="text-red-500">Error: {error.message}</p>}

        <h2 className="text-red-600 font-mono text-sm tracking-widest mb-4">// ENTRIES</h2>
        {notes && notes.length === 0 && (
          <p className="text-zinc-500 italic">No notes yet — add your first one above.</p>
        )}
        <div className="flex flex-col gap-3">
          {notes && notes.map((note) => <NoteCard key={note.id} note={note} />)}
        </div>
      </div>
    </main>
  )
}