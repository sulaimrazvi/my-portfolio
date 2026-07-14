'use client'

import { useState } from 'react'
import { deleteNote, updateNote } from './actions'

type Note = {
  id: number
  title: string
  raw_text: string
  category: string
  priority: string
  status: string
}

export default function NoteCard({ note }: { note: Note }) {
  const [isEditing, setIsEditing] = useState(false)

  async function handleDelete() {
    const confirmed = confirm('Are you sure you want to delete this note?')
    if (confirmed) {
      await deleteNote(note.id)
    }
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: 12, marginBottom: 12, borderRadius: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-start', gap: 8, marginBottom: 8 }}>
        <button onClick={() => setIsEditing(!isEditing)} title="Edit">✏️</button>
        <button onClick={handleDelete} title="Delete">🗑️</button>
      </div>

      {!isEditing ? (
        <div>
          <strong>{note.title}</strong> — <em>{note.category}</em> — {note.priority} — {note.status}
          <p>{note.raw_text}</p>
        </div>
      ) : (
        <form
          action={async (formData: FormData) => {
            await updateNote(note.id, formData)
            setIsEditing(false)
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: 6 }}
        >
          <input name="title" defaultValue={note.title} />
          <textarea name="raw_text" defaultValue={note.raw_text} rows={3} />
          <select name="category" defaultValue={note.category}>
            <option value="Project idea">Project idea</option>
            <option value="Problem observed">Problem observed</option>
            <option value="Learning goal">Learning goal</option>
            <option value="Random thought">Random thought</option>
          </select>
          <select name="priority" defaultValue={note.priority}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select name="status" defaultValue={note.status}>
            <option value="New">New</option>
            <option value="Refined">Refined</option>
            <option value="In progress">In progress</option>
            <option value="Built">Built</option>
            <option value="Archived">Archived</option>
          </select>
          <button type="submit">Save Changes</button>
        </form>
      )}
    </div>
  )
}