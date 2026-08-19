import { experience } from '../data/resume'

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="section-eyebrow">Journey</p>
      <h2 className="section-heading mt-2 max-w-2xl">Where I've built and led.</h2>

      <div className="relative mt-12 space-y-12 border-l border-slate-200 pl-8 dark:border-ink-600 sm:pl-10">
        {experience.map((job) => {
          const highlights = job.projects.flatMap((project) => project.bullets)
          const stack = Array.from(
            new Set(job.projects.flatMap((project) => (project.stack ? project.stack.split(', ') : []))),
          )

          return (
            <div key={job.company + job.period} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-accent-500 dark:border-ink-950 sm:-left-[49px]" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.company}</h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{job.period}</span>
              </div>
              <p className="text-sm font-medium text-accent-600 dark:text-accent-400">
                {job.role} · {job.location}
              </p>

              {job.metrics.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.metrics.map((metric) => (
                    <span key={metric} className="stat-pill">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <path d="m3 17 6-6 4 4 8-8" />
                        <path d="M17 7h4v4" />
                      </svg>
                      {metric}
                    </span>
                  ))}
                </div>
              )}

              <div className="card mt-5 p-5 text-left">
                {stack.length > 0 && (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Tech stack
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {stack.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-slate-200 dark:border-ink-600" />
                  </>
                )}

                <ul className="mt-4 space-y-2.5">
                  {highlights.map((bullet, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
