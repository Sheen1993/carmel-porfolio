import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Cpu, Calculator } from 'lucide-react'
import { skillFilters, skills, type SkillCategory } from '../data/portfolio'
import SectionHeading from './SectionHeading'

type Filter = 'all' | SkillCategory

const categoryMeta: Record<SkillCategory, { label: string; icon: typeof Cpu; iconClass: string }> = {
  core: { label: 'Core skill', icon: Calculator, iconClass: 'bg-sage-100 text-forest-700' },
  software: { label: 'Software', icon: Cpu, iconClass: 'bg-mist-100 text-[#17365d]' },
}

export default function Skills() {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = filter === 'all' ? skills : skills.filter((s) => s.category === filter)

  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="blob absolute -right-40 bottom-0 size-[30rem] bg-sage-100/70" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Skills & Software"
            title="What I bring to"
            accent="your books"
            intro="Hands-on accounting skills sharpened across corporate and remote roles, paired with the tools modern bookkeeping runs on."
          />

          <div
            role="tablist"
            aria-label="Filter skills"
            className="inline-flex self-start rounded-full border border-forest-800/10 bg-white/70 p-1.5 shadow-soft backdrop-blur lg:self-auto"
            data-reveal
          >
            {skillFilters.map((f) => {
              const selected = filter === f.id
              const count = f.id === 'all' ? skills.length : skills.filter((s) => s.category === f.id).length
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="skills-grid"
                  onClick={() => setFilter(f.id)}
                  className={`relative rounded-full px-3.5 py-2 text-[0.7rem] font-medium tracking-[0.14em] uppercase transition-colors sm:px-5 sm:text-xs ${
                    selected ? 'text-cream-50' : 'text-muted hover:text-forest-800'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="skill-filter"
                      className="absolute inset-0 rounded-full bg-forest-800"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative">
                    {f.label}
                    <span className={`ml-1.5 ${selected ? 'text-sage-200' : 'text-taupe-400'}`}>{count}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <motion.ul id="skills-grid" layout className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map(({ name, icon: Icon, category }) => {
              const meta = categoryMeta[category]
              return (
                <motion.li
                  key={name}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  whileHover={{ y: -4 }}
                  className="card group flex items-center gap-4 rounded-full py-3 pr-6 pl-3 transition-shadow hover:shadow-lift"
                >
                  <span
                    className={`grid size-12 shrink-0 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-[-8deg] ${meta.iconClass}`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.95rem] leading-snug font-medium text-ink">{name}</p>
                    <p className="text-[0.65rem] font-medium tracking-[0.2em] text-taupe-500 uppercase">{meta.label}</p>
                  </div>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}
