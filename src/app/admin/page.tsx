import Link from 'next/link'

export default function AdminDashboard() {
  const links = [
    { href: '/admin/projects', label: 'Add Project', desc: 'Log a new project to your portfolio' },
    { href: '/admin/blog', label: 'Add Journal Entry', desc: 'Write today\'s technical log' },
    { href: '/notes', label: 'Second Brain', desc: 'Your private notes & ideas' },
  ]

  return (
    <main className="min-h-screen bg-black text-zinc-200 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <p className="text-red-600 font-mono text-sm tracking-widest mb-2">// MISSION CONTROL</p>
        <h1 className="text-2xl font-bold text-white font-mono mb-10">Dashboard</h1>

        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block border border-zinc-800 rounded-lg p-5 hover:border-red-600 transition-colors group"
            >
              <h3 className="text-white font-mono group-hover:text-red-500 transition-colors">
                {link.label}
              </h3>
              <p className="text-zinc-500 text-sm mt-1">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}