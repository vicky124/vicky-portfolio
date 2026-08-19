import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="section-eyebrow">Experience</p>
      <h2 className="section-heading mt-2 max-w-2xl">Where I've built and led.</h2>

      <div className="relative mt-12 space-y-12 border-l border-slate-200 pl-8 dark:border-ink-600 sm:pl-10">
        {experience.map((job) => (
          <div key={job.company + job.period} className="relative">
            <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-accent-500 dark:border-ink-950 sm:-left-[49px]" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.company}</h3>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{job.period}</span>
            </div>
            <p className="text-sm font-medium text-accent-600 dark:text-accent-400">
              {job.role} · {job.location}
            </p>

            <div className="mt-6 space-y-6">
              {job.projects.map((project) => (
                <div key={project.name} className="card p-5 text-left">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white">{project.name}</h4>
                    {project.period && (
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{project.period}</span>
                    )}
                  </div>

                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                    {project.client && <span>Client: {project.client}</span>}
                    {project.role && <span>Role: {project.role}</span>}
                    {project.team && <span>Team size: {project.team}</span>}
                  </div>

                  {project.stack && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.stack.split(', ').map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="mt-4 space-y-2">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
