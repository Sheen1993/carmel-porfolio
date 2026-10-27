type SectionHeadingProps = {
  eyebrow: string
  title: string
  /** Word(s) rendered in the script face after the title. */
  accent?: string
  align?: 'left' | 'center'
  intro?: string
}

export default function SectionHeading({ eyebrow, title, accent, align = 'left', intro }: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-4xl leading-tight font-medium text-forest-800 sm:text-5xl">
        {title}
        {accent && <span className="ml-3 font-script text-5xl font-normal text-sage-500 sm:text-6xl">{accent}</span>}
      </h2>
      <div className={`mt-5 h-px w-16 bg-forest-800/40 ${centered ? 'mx-auto' : ''}`} />
      {intro && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </div>
  )
}
