import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import { Briefcase, Check, MapPin } from 'lucide-react'
import { experience, type Experience as Job } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function JobCard({ job }: { job: Job }) {
  const Icon = job.icon
  const multiRole = job.roles.length > 1

  return (
    <motion.article
      className="card group relative overflow-hidden p-6 sm:p-8"
      whileHover={{ y: -6, boxShadow: '0 28px 50px -22px rgb(31 69 54 / 0.35)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div
        aria-hidden="true"
        className="blob absolute -top-16 -right-16 size-40 bg-sage-100/70 transition-transform duration-700 group-hover:scale-125"
      />

      <header className="relative flex flex-wrap items-start gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-forest-800 text-cream-50 shadow-soft">
          <Icon size={22} strokeWidth={1.7} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-2xl leading-tight font-semibold text-forest-800 sm:text-[1.7rem]">{job.company}</h3>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-sage-500" /> {job.setting}
            </span>
            <span className="text-taupe-400">•</span>
            <span>{job.period}</span>
          </p>
        </div>
        {job.current && (
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-100 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.18em] text-forest-700 uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-forest-600 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-forest-600" />
            </span>
            Current
          </span>
        )}
      </header>

      <ol className={`relative mt-6 ${multiRole ? 'space-y-6 border-l border-dashed border-sage-300 pl-6' : ''}`}>
        {job.roles.map((role, i) => (
          <li key={role.title + role.period} className="relative">
            {multiRole && (
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[1.89rem] size-3 rounded-full border-2 border-white ${
                  i === 0 ? 'bg-forest-700' : 'bg-sage-300'
                }`}
              />
            )}
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h4 className="text-[0.95rem] font-semibold tracking-wide text-ink">{role.title}</h4>
              <span className="text-xs font-medium tracking-[0.16em] text-taupe-500 uppercase">{role.period}</span>
            </div>
            <ul className="mt-3 space-y-2">
              {role.points.map((point) => (
                <li key={point} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                  <Check size={16} className="mt-1 shrink-0 text-sage-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </motion.article>
  )
}

export default function Experience() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.timeline-progress',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.timeline', start: 'top 70%', end: 'bottom 70%', scrub: 0.6 },
        },
      )
    },
    { scope: root },
  )

  return (
    <section id="experience" ref={root} className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
      <div aria-hidden="true" className="blob absolute top-40 -left-48 -z-0 size-96 bg-mist-100/80" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Work Experience"
          title="A career built on"
          accent="accuracy"
          intro="From part-time accounting staff while studying, to senior staff accountant, to remote QuickBooks bookkeeping for U.S. clients."
        />

        <div className="timeline relative mt-16">
          <div aria-hidden="true" className="absolute top-2 bottom-2 left-[1.15rem] w-px bg-forest-800/10 sm:left-6">
            <div className="timeline-progress h-full w-full origin-top bg-gradient-to-b from-forest-700 via-sage-400 to-taupe-400" />
          </div>

          <ol className="space-y-10">
            {experience.map((job) => (
              <li key={job.company} className="relative pl-12 sm:pl-20" data-reveal>
                <span
                  aria-hidden="true"
                  className="absolute top-8 left-0 grid size-[2.35rem] place-items-center rounded-full border-4 border-cream-50 bg-sage-200 text-forest-800 sm:left-[0.125rem] sm:size-11"
                >
                  <Briefcase size={16} />
                </span>
                <JobCard job={job} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
