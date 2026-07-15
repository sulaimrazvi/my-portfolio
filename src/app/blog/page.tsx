import { supabase } from '@/lib/supabase'
import Navbar from '../components/Navbar'
import BlogCard from './BlogCard'

export default async function Blog() {
  const { data: entries } = await supabase
    .from('blog_entries')
    .select('*')
    .order('entry_date', { ascending: false })

  return (
    <main className="min-h-screen bg-black text-zinc-200 relative">
      <Navbar />
      <div className="relative max-w-2xl mx-auto px-6 pt-32 pb-20">
        <p className="text-red-600 font-mono text-sm tracking-widest mb-3">// TECHNICAL JOURNEY</p>
        <h1 className="text-3xl font-bold text-white mb-10 font-mono">Daily Log</h1>

        {(!entries || entries.length === 0) && (
          <p className="text-zinc-500 italic">Coming soon — first entry incoming.</p>
        )}

        <div className="flex flex-col gap-3">
          {entries && entries.map((entry) => <BlogCard key={entry.id} entry={entry} />)}
        </div>
      </div>
    </main>
  )
}