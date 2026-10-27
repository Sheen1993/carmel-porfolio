import { useState } from 'react'
import { Check, Copy, FileText, Mail, MapPin, Phone } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { profile } from '../data/portfolio'

const contactItems = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: true },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: MapPin, label: 'Location', value: profile.location },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="absolute -top-24 -left-24 size-80 rounded-full bg-mist-100" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* "Let's work together" panel, after the cover's sage corner */}
        <div
          className="relative grid gap-12 overflow-hidden rounded-[2.5rem] bg-sage-300 p-8 text-white shadow-lift sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16"
          data-reveal
        >
          <div aria-hidden="true" className="blob absolute -right-24 -bottom-32 size-96 bg-sage-400/60" />
          <div aria-hidden="true" className="absolute -top-20 -left-20 size-64 rounded-full bg-white/10" />

          <div className="relative">
            <p className="text-xs font-medium tracking-[0.32em] text-white/80 uppercase">Contact</p>
            <h2 className="mt-4">
              <span className="block font-script text-6xl leading-none sm:text-7xl">Let’s Work</span>
              <span className="mt-2 block text-sm font-medium tracking-[0.42em] uppercase">Together</span>
            </h2>
            <div className="mt-5 h-px w-16 bg-white/70" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90">
              Need help with reconciliations, AP/AR, or tax-season data entry? I’d love to hear about your business.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="btn bg-forest-800 text-cream-50 shadow-soft hover:-translate-y-0.5 hover:bg-forest-900"
              >
                <Mail size={16} /> Email Me
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="btn border border-white/60 text-white hover:-translate-y-0.5 hover:bg-white hover:text-forest-800"
              >
                <FileText size={16} /> View Resume
              </a>
            </div>
          </div>

          <ul className="relative space-y-3">
            {contactItems.map(({ icon: Icon, label, value, href, copy }) => (
              <li key={label} className="flex items-center gap-4 rounded-2xl bg-white/15 p-3 pr-4 backdrop-blur-sm">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-forest-800">
                  <Icon size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.65rem] font-medium tracking-[0.22em] text-white/75 uppercase">{label}</p>
                  {href ? (
                    <a href={href} className="block truncate font-medium hover:underline">
                      {value}
                    </a>
                  ) : (
                    <p className="truncate font-medium">{value}</p>
                  )}
                </div>
                {copy && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-white/20 transition hover:bg-white/35"
                    aria-label={copied ? 'Email address copied' : 'Copy email address'}
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                )}
              </li>
            ))}
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-forest-800/90 p-3 pr-4 transition hover:bg-forest-800"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-forest-800">
                  <FaLinkedinIn size={17} />
                </span>
                <span className="font-medium">Connect on LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
