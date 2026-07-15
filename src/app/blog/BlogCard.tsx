'use client'

import { useState } from 'react'

type BlogEntry = {
  id: number
  title: string
  content: string
  entry_date: string
}

export default function BlogCard({ entry }: { entry: BlogEntry }) {
  const [isOpen, setIsOpen] = useState(false)

  const formattedDate = new Date(entry.entry_date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer border border-zinc-800 rounded-lg p-5 hover:border-red-600 transition-colors"
      >
        <span className="text-red-500 font-mono text-xs tracking-widest">{formattedDate}</span>
        <h3 className="text-white text-lg font-mono mt-1">{entry.title}</h3>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full max-h-[80vh] overflow-y-auto bg-zinc-950 border border-red-900 rounded-lg p-8 relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-red-500 text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
            <span className="text-red-500 font-mono text-xs tracking-widest">{formattedDate}</span>
            <h2 className="text-white text-2xl font-mono mt-2 mb-5">{entry.title}</h2>
            <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap">
              {entry.content}
            </p>
          </div>
        </div>
      )}
    </>
  )
}