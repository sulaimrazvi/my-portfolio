import { supabase } from '@/lib/supabase'
import Navbar from './components/Navbar'


export default async function Home() {
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    
    const { data: skillRows } = await supabase.from('skills').select('name')
    const skills = skillRows?.map((row) => row.name) || []

  return (
    <main className="min-h-screen bg-black text-zinc-200 overflow-hidden relative">
    <Navbar />
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="stars" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Hero */}
        <section className="mb-20">
          <p className="text-red-600 font-mono text-sm tracking-widest mb-3">// TRANSMISSION ACTIVE</p>
          <h1 className="text-5xl font-bold text-white mb-4 font-mono tracking-tight">
            Syed Sulaim Razvi
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
            Dual-degree CS + Data Science student (Government College of Engineering + IIT Madras).
            Building RAG pipelines, ML models, and full-stack systems — currently exploring what
            happens when you point AI at real, messy data.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-red-600 font-mono text-sm tracking-widest mb-5">// SYSTEMS ONLINE</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 border border-red-900 rounded-full text-sm text-zinc-300 hover:border-red-600 hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="text-red-600 font-mono text-sm tracking-widest mb-6">// FIELD DEPLOYMENT</h2>
          <div className="border border-zinc-800 rounded-lg p-5 hover:border-red-600 transition-colors">
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <h3 className="text-white text-xl font-mono">Yardi Software India Pvt. Ltd.</h3>
              <span className="text-xs text-zinc-500 font-mono">Jan 2025 – Jun 2025</span>
            </div>
            <p className="text-zinc-400 text-sm mb-3">SDE Intern — Full-Stack Development</p>
            <ul className="text-zinc-400 text-sm space-y-2 list-disc list-inside">
              <li>Sole developer on a property migration feature for Yardi&apos;s Breeze product, delivered under a strict pre-go-live deadline.</li>
              <li>Built full-stack functionality using Angular and VB.NET, with SQL/ETL for data migration and transformation.</li>
              <li>Optimized data export time from ~30–40s down to ~2–3s through query and processing improvements.</li>
              <li>Only intern selected to work independently on a live, production-bound feature.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-red-600 font-mono text-sm tracking-widest mb-6">// MISSION LOGS</h2>
          <div className="flex flex-col gap-4">
            {projects && projects.length === 0 && (
              <p className="text-zinc-500 italic">No transmissions logged yet.</p>
            )}
            {projects && projects.map((project) => (
              <a
                key={project.id}
                href={project.deployed_url || project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-zinc-800 rounded-lg p-5 hover:border-red-600 transition-colors relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 h-full w-0 bg-red-600/10 group-hover:w-full transition-all duration-500" />
                <div className="relative">
                  <h3 className="text-white text-xl font-mono mb-2 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech_stack?.map((tech: string) => (
                      <span key={tech} className="text-xs font-mono text-red-500/80">
                        [{tech}]
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">
                    {project.github_link} ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}