import { ArrowUp, Mail, Phone } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { navLinks, profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-900 text-cream-100">
      <div aria-hidden="true" className="blob absolute -top-32 -right-32 size-96 bg-forest-800" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-script text-6xl leading-none">{profile.firstName}</p>
            <p className="mt-2 text-xs font-medium tracking-[0.36em] text-sage-200 uppercase">
              {profile.middleName} {profile.lastName}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/70">{profile.tagline.join(' ')}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium tracking-[0.2em] uppercase">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-cream-100/75 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            {[
              { href: `mailto:${profile.email}`, label: 'Email', icon: <Mail size={17} /> },
              { href: profile.phoneHref, label: 'Phone', icon: <Phone size={17} /> },
              { href: profile.linkedin, label: 'LinkedIn', icon: <FaLinkedinIn size={16} />, external: true },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="grid size-11 place-items-center rounded-full border border-cream-100/20 transition hover:-translate-y-0.5 hover:border-sage-200 hover:bg-sage-200 hover:text-forest-900"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-cream-100/15 pt-8 text-sm text-cream-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.displayName}. All rights reserved.</p>
          <a href="#top" className="group inline-flex items-center gap-2 transition-colors hover:text-white">
            Back to top
            <span className="grid size-8 place-items-center rounded-full border border-cream-100/25 transition group-hover:-translate-y-1 group-hover:bg-white group-hover:text-forest-900">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
