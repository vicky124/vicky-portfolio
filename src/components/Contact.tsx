import { profile } from '../data/resume'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="card relative overflow-hidden px-6 py-14 text-center sm:px-16">
        <div
          aria-hidden
          className="animate-blob absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-500/20"
        />
        <div className="relative">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-heading mt-2">Let's build something reliable together.</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-300">
            Open to technical leadership and senior full-stack roles. Reach out directly or connect on
            LinkedIn / GitHub.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/20 transition-transform hover:-translate-y-0.5 hover:bg-accent-700"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-ink-600 dark:text-slate-200 dark:hover:text-accent-400"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-ink-600 dark:text-slate-200 dark:hover:text-accent-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
