import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FileText, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'border-b border-forest-800/10 bg-cream-50/85 shadow-[0_6px_24px_-16px_rgb(31_69_54/0.35)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <a href="#top" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-script text-4xl leading-none text-forest-800 transition-colors group-hover:text-forest-600">Carmel</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id} className="relative">
                <a
                  href={`#${link.id}`}
                  className={`relative z-10 block rounded-full px-4 py-2 text-[0.8rem] font-medium tracking-[0.18em] uppercase transition-colors ${
                    isActive ? 'text-forest-800' : 'text-muted hover:text-forest-800'
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-sage-100"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost hidden px-5 py-2.5 text-xs sm:inline-flex"
          >
            <FileText size={14} /> Resume
          </a>
          <a href="#contact" className="btn-primary hidden px-5 py-2.5 text-xs sm:inline-flex">
            Hire Me
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-forest-800/15 bg-white/70 text-forest-800 transition hover:bg-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden border-t border-forest-800/10 lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.ul
              className="flex flex-col gap-1 px-5 py-5 sm:px-8"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
            >
              {navLinks.map((link) => (
                <motion.li key={link.id} variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 font-serif text-2xl transition-colors ${
                      active === link.id ? 'bg-sage-100 text-forest-800' : 'text-ink hover:bg-white/80'
                    }`}
                  >
                    {link.label}
                    <span className="h-px w-8 bg-forest-800/25" />
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                className="grid grid-cols-2 gap-3 pt-3 sm:hidden"
              >
                <a href={profile.resume} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="btn-ghost">
                  <FileText size={14} /> Resume
                </a>
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary">
                  Hire Me
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
