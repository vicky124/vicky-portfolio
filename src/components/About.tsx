import { profile } from '../data/resume'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="section-eyebrow">About</p>
      <h2 className="section-heading mt-2 max-w-2xl">Full-stack engineering leadership, grounded in delivery.</h2>

      <div className="mt-8 grid gap-10 md:grid-cols-3">
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 md:col-span-2">
          {profile.summary}
        </p>

        <div className="card space-y-3 p-6 text-left text-sm">
          <div className="flex justify-between gap-4">
            <span className="text-slate-500 dark:text-slate-400">Location</span>
            <span className="font-medium text-slate-800 dark:text-slate-100">{profile.location}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500 dark:text-slate-400">Email</span>
            <a href={`mailto:${profile.email}`} className="font-medium text-accent-600 hover:underline dark:text-accent-400">
              {profile.email}
            </a>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500 dark:text-slate-400">Phone</span>
            <span className="font-medium text-slate-800 dark:text-slate-100">{profile.phone}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500 dark:text-slate-400">GitHub</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent-600 hover:underline dark:text-accent-400"
            >
              jadhav-vicky
            </a>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500 dark:text-slate-400">LinkedIn</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent-600 hover:underline dark:text-accent-400"
            >
              vicky-jadhav
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
