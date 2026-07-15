# My Portfolio

A personal portfolio and "second brain" system — built to showcase projects, log daily technical learning, and capture rough ideas that get automatically refined by AI.

**Live site:** [my-portfolio-ten-gold-64.vercel.app](https://my-portfolio-ten-gold-64.vercel.app)

## What it does

- **Public portfolio** — projects, skills, and work experience, pulled live from a database (not hardcoded)
- **Technical journal** (`/blog`) — a daily log of what I'm learning, shown as expandable date cards
- **Private notes system** (`/notes`) — a personal idea-capture tool, protected behind GitHub OAuth login (only accessible to me)
- **AI-powered refinement** — raw, messy notes are automatically rewritten into clear, structured text using the Gemini API the moment they're saved
- **Dynamic skills tracking** — when a new project is added with a tech stack, any skill not already tracked gets automatically added to the public skills list — no manual syncing
- **Admin dashboard** (`/admin`) — a private hub to add new projects and journal entries, visible only when logged in

## Tech stack

- **Framework:** Next.js (App Router, Server Actions)
- **Database:** Supabase (PostgreSQL)
- **Auth:** NextAuth.js with GitHub OAuth
- **AI:** Google Gemini API
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Why I built it this way

Most portfolio sites are static. This one is a real full-stack app — content is managed through actual admin forms backed by a live database, not by editing code and redeploying every time I want to add a project or write a journal entry. It's also genuinely useful day-to-day as a private thinking space, not just a public-facing showcase.

## Status

Actively maintained — new projects and journal entries are added regularly as I build and learn.
