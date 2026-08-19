import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-5 py-8 dark:border-ink-700 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React, TypeScript &amp; Tailwind CSS.</p>
      </div>
    </footer>
  )
}
