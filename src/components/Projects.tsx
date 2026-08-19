import { useState } from 'react'
import { projects } from '../data/resume'

export default function Projects() {
  const [active, setActive] = useState(0)
  const project = projects[active]

  return (
    <section id="projects" className="bg-slate-50 dark:bg-ink-900">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-heading mt-2 max-w-2xl">Selected work, up close.</h2>

        <div
          role="tablist"
          aria-label="Projects"
          className="mt-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible"
        >
          {projects.map((p, i) => (
            <button
              key={p.name}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                i === active
                  ? 'bg-accent-600 text-white shadow-md shadow-accent-600/20'
                  : 'border border-slate-200 text-slate-600 hover:border-accent-400 hover:text-accent-600 dark:border-ink-600 dark:text-slate-300 dark:hover:text-accent-400'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="card animate-fade-up mt-6 p-6 text-left sm:p-8" key={project.name}>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.name}</h3>
              <p className="text-sm font-medium text-accent-600 dark:text-accent-400">{project.company}</p>
            </div>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{project.period}</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
            {project.client && <span>Client: {project.client}</span>}
            {project.role && <span>Role: {project.role}</span>}
            {project.team && <span>Team size: {project.team}</span>}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.summary}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>

          <ul className="mt-5 space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
