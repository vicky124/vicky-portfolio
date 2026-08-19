import { profile, stats } from '../data/resume'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
      <div
        aria-hidden
        className="animate-blob absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-500/20"
      />
      <div
        aria-hidden
        className="animate-blob absolute -right-24 top-32 h-72 w-72 rounded-full bg-accent-700/10 blur-3xl dark:bg-accent-700/20"
        style={{ animationDelay: '3s' }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="animate-fade-up chip mb-6">Available for select technical leadership roles</div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              Hi, I'm <span className="text-accent-600 dark:text-accent-400">{profile.name}</span> - I build and
              lead enterprise-scale web platforms.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              {profile.title} with 9+ years shipping React.js, Node.js, GraphQL and AWS platforms for global
              clients. Currently leading offshore engineering as Technical Lead at Synechron.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/20 transition-transform hover:-translate-y-0.5 hover:bg-accent-700"
              >
                Get in touch
              </a>
              <a
                href="#journey"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-ink-600 dark:text-slate-200 dark:hover:text-accent-400"
              >
                View journey
              </a>
              <a
                href="Vicky_Jadhav_Resume.pdf"
                download="Vicky_Jadhav_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-ink-600 dark:text-slate-200 dark:hover:text-accent-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
                Download Resume
              </a>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="card px-4 py-5 text-left">
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-400/30 to-accent-700/20 blur-xl"
            />
            <div className="card relative aspect-square overflow-hidden rounded-[2rem] p-2">
              <img
                src="avatar.svg"
                alt={profile.name}
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="card absolute -bottom-5 -left-5 hidden items-center gap-2 px-4 py-3 sm:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                Open to new opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
