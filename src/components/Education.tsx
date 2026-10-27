import { motion } from 'framer-motion'
import { Award, BookOpen, GraduationCap } from 'lucide-react'
import { education } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="relative bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Education" title="Grounded in" accent="finance" align="center" />

        <motion.article
          data-reveal
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="card relative mt-14 overflow-hidden p-8 sm:p-12"
        >
          <div aria-hidden="true" className="absolute -top-20 -left-20 size-56 rounded-full bg-mist-100" />
          <div aria-hidden="true" className="blob absolute -right-16 -bottom-24 size-64 bg-sage-100" />

          <div className="relative grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10">
            <span className="mx-auto grid size-24 place-items-center rounded-full bg-forest-800 text-cream-50 shadow-lift sm:mx-0 sm:size-28">
              <GraduationCap size={44} strokeWidth={1.5} />
            </span>

            <div className="text-center sm:text-left">
              <p className="eyebrow">{education.period}</p>
              <h3 className="mt-2 font-serif text-3xl leading-tight font-semibold text-forest-800 sm:text-4xl">{education.school}</h3>
              <p className="mt-3 text-lg text-ink/85">{education.degree}</p>

              <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full bg-sage-100 px-4 py-2 text-sm font-medium text-forest-700">
                  <Award size={16} /> {education.major}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-cream-200 px-4 py-2 text-sm font-medium text-taupe-600">
                  <BookOpen size={16} /> Worked through school
                </span>
              </div>
              <p className="mt-5 max-w-lg font-serif text-lg text-muted italic">{education.note}</p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
