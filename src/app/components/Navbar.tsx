import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export default async function Navbar() {
  const session = await getServerSession(authOptions)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-white font-mono text-sm tracking-wide">SULAIM RAZVI</span>

        <div className="flex gap-5 items-center">
          <a
            href="/"
            className="text-zinc-400 hover:text-red-500 transition-colors text-sm font-mono"
            aria-label="Home"
          >
            HOME
          </a>
          <a
            href="/blog"
            className="text-zinc-400 hover:text-red-500 transition-colors text-sm font-mono"
            aria-label="Blog"
          >
            LOG
          </a>

          {session && (
            <a
              href="/admin"
              className="text-red-500 hover:text-red-400 transition-colors text-sm font-mono"
              aria-label="Dashboard"
            >
              DASHBOARD
            </a>
          )}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-red-500 transition-colors"
            aria-label="Resume"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M9 15h6" />
              <path d="M9 11h6" />
            </svg>
          </a>
          <a
            href="https://github.com/sulaimrazvi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-red-500 transition-colors"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/sulaim-razvi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-red-500 transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:sulaim.razvi11@gmail.com"
            className="text-zinc-400 hover:text-red-500 transition-colors"
            aria-label="Email"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4V4z" />
              <path d="M4 4l8 8 8-8" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}