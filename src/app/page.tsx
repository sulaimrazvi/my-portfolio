import { supabase } from '@/lib/supabase'
import { addNote } from './actions'

export default async function Home() {
  const { data: notes, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>My Second Brain</h1>

      <form action={addNote} style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
        <input name="title" placeholder="Title" required />
        <textarea name="raw_text" placeholder="Your raw idea..." rows={4} required />
        <select name="category">
          <option value="Project idea">Project idea</option>
          <option value="Problem observed">Problem observed</option>
          <option value="Learning goal">Learning goal</option>
          <option value="Random thought">Random thought</option>
        </select>
        <select name="priority">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Save Note</button>
      </form>

      {error && <p>Error: {error.message}</p>}

      <h2>Your Notes</h2>
      {notes && notes.length === 0 && <p>No notes yet — add your first one above.</p>}
      {notes && notes.map((note) => (
        <div key={note.id} style={{ border: '1px solid #ccc', padding: 12, marginBottom: 12, borderRadius: 8 }}>
          <strong>{note.title}</strong> — <em>{note.category}</em> — {note.priority} — {note.status}
          <p>{note.raw_text}</p>
        </div>
      ))}
    </div>
  )
}