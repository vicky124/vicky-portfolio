import { skillGroups } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 dark:bg-ink-900">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-heading mt-2 max-w-2xl">A full-stack toolbox, sharpened over 9+ years.</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="card p-6 text-left">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
