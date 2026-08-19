import { certifications, education } from '../data/resume'

export default function Certifications() {
  return (
    <section id="certifications" className="bg-slate-50 dark:bg-ink-900">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="section-eyebrow">Certifications</p>
            <h2 className="section-heading mt-2">Credentials</h2>
            <div className="mt-6 space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="card flex items-start gap-4 p-5 text-left">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent-100 text-accent-700 dark:bg-accent-500/15 dark:text-accent-400">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{cert.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="section-eyebrow">Education</p>
            <h2 className="section-heading mt-2">Academics</h2>
            <div className="mt-6 space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="card p-5 text-left">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-semibold text-slate-900 dark:text-white">{edu.degree}</p>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{edu.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{edu.school}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{edu.university}</p>
                  <span className="chip mt-3">{edu.grade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
