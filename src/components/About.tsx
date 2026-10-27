import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { about } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const toneClasses = {
  mist: 'bg-mist-200 text-forest-800',
  sage: 'bg-sage-300 text-white',
  taupe: 'bg-taupe-300 text-white',
} as const

export default function About() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count)
        const counter = { value: 0 }
        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(counter.value).toString()
          },
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="about" ref={root} className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-cream-50 to-cream-100" />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="About Me" title="Books you can" accent="trust" />
          <dl className="mt-12 grid grid-cols-3 gap-4" data-reveal>
            {about.stats.map((stat) => (
              <div key={stat.label} className="border-l border-forest-800/15 pl-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-4xl font-medium text-forest-800 sm:text-5xl">
                  <span data-count={stat.value}>{stat.value}</span>
                  {stat.suffix}
                </dd>
                <dd aria-hidden="true" className="mt-2 text-xs leading-snug tracking-wide text-muted sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-ink/85">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} data-reveal>
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <ul className="card grid divide-y divide-forest-800/10 bg-cream-50/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0" data-reveal>
          {about.pillars.map(({ icon: Icon, title, text, tone }) => (
            <li key={title} className="group flex items-center gap-5 px-7 py-7">
              <span
                className={`grid size-14 shrink-0 place-items-center rounded-full transition-transform duration-500 group-hover:scale-110 ${toneClasses[tone]}`}
              >
                <Icon size={24} strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-sm font-semibold tracking-[0.22em] text-forest-800 uppercase">{title}</p>
                <p className="font-serif text-xl text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
