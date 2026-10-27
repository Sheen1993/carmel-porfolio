import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CircleCheck, Download, ListChecks, Mail, MapPin } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { featuredTools, profile } from '../data/portfolio'

const bars = [38, 52, 44, 68, 58, 80, 92]

function ToolMark({ mark, bg }: { mark: string; bg: string }) {
  return (
    <span
      className="grid size-14 place-items-center rounded-full text-white shadow-md sm:size-16"
      style={{ backgroundColor: bg }}
      aria-hidden="true"
    >
      {mark === 'list' ? (
        <ListChecks size={26} strokeWidth={1.8} />
      ) : mark === 'X' ? (
        <span className="grid size-8 place-items-center rounded-md bg-white/15 font-sans text-xl font-semibold">X</span>
      ) : (
        <span className={`font-sans font-semibold ${mark === 'qb' ? 'text-2xl tracking-tight' : 'text-xl tracking-wide'}`}>{mark}</span>
      )}
    </span>
  )
}

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.fromTo(
          '.hero-script',
          { clipPath: 'inset(-30% 100% -30% -10%)' },
          { clipPath: 'inset(-30% -10% -30% -10%)', duration: 1.6, ease: 'power2.inOut' },
        )
          .from('.hero-item', { y: 28, opacity: 0, duration: 0.8, stagger: 0.09 }, 0.35)
          .from('.hero-photo', { scale: 1.08, opacity: 0, duration: 1.3 }, 0.1)
          .from('.hero-blob', { scale: 0.6, opacity: 0, duration: 1.4, stagger: 0.15 }, 0)
          .from('.hero-float', { y: 24, opacity: 0, scale: 0.92, duration: 0.8, stagger: 0.15 }, 0.9)
          .from('.hero-tool', { y: 30, opacity: 0, duration: 0.7, stagger: 0.1 }, 1)

        gsap.to('.hero-float', {
          y: '-=10',
          duration: 2.8,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          stagger: 0.6,
          delay: 1.8,
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="top" ref={root} className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      {/* Soft background shapes echoing the cover */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-blob absolute -top-28 -left-28 size-80 rounded-full bg-mist-200/70 sm:size-96" />
        <div className="hero-blob blob absolute top-24 -right-40 size-[28rem] bg-mist-100 lg:-right-24" />
        <div className="hero-blob blob absolute -bottom-40 -right-24 size-[26rem] bg-sage-200/70" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div className="relative text-center lg:text-left">
          <h1>
            <span className="sr-only">{profile.displayName}, </span>
            <span
              aria-hidden="true"
              className="hero-script block px-2 font-script text-[5.5rem] leading-[1.05] text-forest-800 sm:text-[8rem] lg:-ml-2 lg:text-[9.5rem]"
            >
              {profile.firstName}
            </span>
            <span
              aria-hidden="true"
              className="hero-item -mt-1 block font-serif text-2xl font-medium tracking-[0.2em] text-forest-800 uppercase sm:text-4xl sm:tracking-[0.22em]"
            >
              {profile.middleName} {profile.lastName}
            </span>
          </h1>
          <p className="hero-item mt-3 text-sm font-medium tracking-[0.36em] text-taupe-500 uppercase sm:text-base">
            Bookkeeping Portfolio
          </p>
          <div className="hero-item mx-auto my-7 h-px w-16 bg-forest-800/50 lg:mx-0" />

          <ul className="hero-item space-y-1.5 text-xs font-medium tracking-[0.28em] text-forest-700/85 uppercase sm:text-sm">
            {profile.tagline.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <p className="hero-item mx-auto mt-7 max-w-md font-serif text-xl leading-snug text-ink/80 italic sm:text-2xl lg:mx-0">
            {profile.title}
          </p>

          <div className="hero-item mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              <Mail size={16} /> Get in Touch
            </a>
            <a href={profile.resumeDownload} target="_blank" rel="noreferrer" className="btn-ghost w-full sm:w-auto">
              <Download size={16} /> Download Resume
            </a>
          </div>

          <ul className="hero-item mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted lg:justify-start">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-sage-500" /> {profile.location}
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition-colors hover:text-forest-800">
                <Mail size={16} className="text-sage-500" /> {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-forest-800"
              >
                <FaLinkedinIn size={15} className="text-sage-500" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-md">
          <div aria-hidden="true" className="hero-blob blob absolute -inset-6 -z-10 translate-x-6 translate-y-6 bg-sage-200/80" />
          <div aria-hidden="true" className="hero-blob absolute -top-6 -left-8 -z-10 size-40 rounded-full bg-mist-200" />

          <div className="hero-photo relative overflow-hidden rounded-t-full rounded-b-[2.5rem] border-[10px] border-white bg-cream-200 shadow-lift">
            <picture>
              <source srcSet={profile.photo.webp} type="image/webp" />
              <img
                src={profile.photo.jpg}
                alt={`Portrait of ${profile.displayName}`}
                width={900}
                height={1105}
                className="aspect-[4/5] w-full object-cover object-[50%_20%]"
                fetchPriority="high"
              />
            </picture>
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-900/25 to-transparent" />
          </div>

          <div className="hero-float card absolute top-[3%] -left-3 sm:top-[16%] flex items-center gap-3 px-4 py-3 sm:-left-16">
            <span className="grid size-10 place-items-center rounded-full bg-sage-100 text-forest-700">
              <CircleCheck size={20} />
            </span>
            <div className="text-left">
              <p className="text-[0.65rem] font-medium tracking-[0.2em] text-taupe-500 uppercase">Bank Rec</p>
              <p className="font-serif text-lg leading-tight font-semibold text-forest-800">Reconciled</p>
            </div>
          </div>

          <div className="hero-float card absolute -right-4 bottom-[14%] w-44 px-4 py-3 sm:-right-12">
            <p className="text-[0.65rem] font-medium tracking-[0.2em] text-taupe-500 uppercase">Monthly Reports</p>
            <div className="mt-2 flex h-14 items-end gap-1.5" aria-hidden="true">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className={`flex-1 rounded-t-sm ${i % 2 ? 'bg-mist-300' : 'bg-taupe-300'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured software, as on the cover */}
      <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:mt-20">
        <ul className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4" aria-label="Featured software">
          {featuredTools.map((tool) => (
            <li
              key={tool.name}
              className={`hero-tool blob group flex flex-col items-center px-4 py-7 text-center transition-transform duration-500 hover:-translate-y-1.5 ${tool.ring}`}
            >
              <span className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]">
                <ToolMark mark={tool.mark} bg={tool.bg} />
              </span>
              <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-forest-800 uppercase sm:text-sm">{tool.name}</p>
              <p className="mt-1 text-[0.7rem] tracking-[0.12em] text-muted uppercase">{tool.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
