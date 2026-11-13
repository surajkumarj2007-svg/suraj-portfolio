
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { navLinks } from '../../data/profile'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = [
      'home',
      ...navLinks.map(link => link.href.slice(1)),
      'certifications',
      'hackathons',
      'education',
      'contact',
    ]

    const nodes = [...new Set(ids)]
      .map(id => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(visible.target.id)
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0, 0.15, 0.4, 0.7],
      }
    )

    nodes.forEach(node => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  const allLinks = [
    { label: 'Home', href: '#home' },
    ...navLinks.filter(link => link.href !== '#home'),
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-cyan-400/20 bg-[#080D20]/95 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-2xl'
          : 'border-white/[0.07] bg-[#080D20]/80 backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 sm:px-10">

        {/* LOGO */}
        <a
          href="#home"
          onClick={close}
          className="group font-display text-xl font-bold tracking-tight text-white transition duration-300 hover:text-cyan-300"
        >
          Suraj
          <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]">
            .
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="hidden items-center gap-7 xl:flex"
          aria-label="Primary"
        >
          {allLinks.map(link => {
            const id = link.href.slice(1)
            const isActive = active === id

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(id)}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-cyan-300'
                    : 'text-slate-300 hover:text-cyan-200'
                }`}
              >
                {link.label}

                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 shadow-[0_0_12px_rgba(0,229,255,0.8)]"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="/resume.pdf"
            download="Suraj_Kumar_Singh_Resume.pdf"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-white/[0.02] px-4 py-2.5 text-sm font-semibold text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-300/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.12)]"
          >
            <Download
              size={15}
              className="transition-transform group-hover:-translate-y-0.5"
            />
            Resume
          </a>

          <a
            href="#contact"
            onClick={() => setActive('contact')}
            className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 px-5 py-2.5 text-sm font-bold text-[#080D20] shadow-[0_0_20px_rgba(0,229,255,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,229,255,0.35)]"
          >
            Let's Connect
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(value => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/35 text-cyan-200 transition duration-300 hover:border-cyan-300 hover:bg-cyan-300/10 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? 'close' : 'menu'}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-cyan-400/15 bg-[#080D20]/98 backdrop-blur-2xl xl:hidden"
            aria-label="Mobile"
          >
            <div className="mx-auto flex max-h-[calc(100vh-76px)] max-w-7xl flex-col overflow-y-auto px-6 py-4 sm:px-10">

              {allLinks.map((link, index) => {
                const id = link.href.slice(1)
                const isActive = active === id

                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={() => {
                      setActive(id)
                      close()
                    }}
                    className={`border-b border-white/[0.07] py-4 text-base font-medium transition duration-300 ${
                      isActive
                        ? 'text-cyan-300'
                        : 'text-slate-200 hover:text-cyan-200'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                )
              })}

              <div className="flex flex-col gap-3 py-5">
                <a
                  href="/resume.pdf"
                  download="Suraj_Kumar_Singh_Resume.pdf"
                  onClick={close}
                  className="flex items-center justify-center gap-2 rounded-full border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/10"
                >
                  <Download size={16} />
                  Download Resume
                </a>

                <a
                  href="#contact"
                  onClick={() => {
                    setActive('contact')
                    close()
                  }}
                  className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 px-5 py-3 text-center text-sm font-bold text-[#080D20] shadow-[0_0_20px_rgba(0,229,255,0.18)]"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
