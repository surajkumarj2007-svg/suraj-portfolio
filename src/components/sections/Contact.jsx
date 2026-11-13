import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  Send, CheckCircle, AlertCircle, Loader,
  Mail, ArrowUpRight, MapPin, MessageSquare,
} from 'lucide-react'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import { Github as GithubIcon, Linkedin as LinkedinIcon } from '../icons/BrandIcons'
import { profile } from '../../data/profile'

/* ─── data ──────────────────────────────────────────────────────────── */

const contactCards = [
  {
    label: 'GitHub',
    value: 'surajkumarj2007-svg',
    href: profile.github,
    icon: GithubIcon,
    accent: 'from-violet-500/10 to-indigo-500/10',
    border: 'hover:border-violet-500/30',
    iconColor: 'text-violet-400',
  },
  {
    label: 'LinkedIn',
    value: 'suraj-kumar-singh',
    href: profile.linkedin,
    icon: LinkedinIcon,
    accent: 'from-blue-500/10 to-cyan-500/10',
    border: 'hover:border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    accent: 'from-fuchsia-500/10 to-violet-500/10',
    border: 'hover:border-fuchsia-500/30',
    iconColor: 'text-fuchsia-400',
  },
]

const EMPTY = { name: '', email: '', subject: '', message: '' }

/* ─── validation ─────────────────────────────────────────────────────── */

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Name is required.'
  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!fields.message.trim()) errors.message = 'Message is required.'
  return errors
}

/* ─── component ──────────────────────────────────────────────────────── */

export default function Contact() {
  const formRef = useRef(null)
  const [fields, setFields] = useState(EMPTY)
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')
  const [focused, setFocused] = useState(null)

  const errors = validate(fields)
  const isValid = Object.keys(errors).length === 0

  function handleChange(e) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  function handleBlur(e) {
    setTouched(prev => ({ ...prev, [e.target.name]: true }))
    setFocused(null)
  }
  function handleFocus(e) {
    setFocused(e.target.name)
  }

  /* ── EmailJS submit — logic unchanged ── */
  async function handleSubmit(e) {
    e.preventDefault()
    setTouched({ name: true, email: true, subject: true, message: true })
    if (!isValid) return
    if (status === 'loading') return

    setStatus('loading')
    setErrorMsg('')

    // Guard: catch missing env vars before calling EmailJS
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setErrorMsg('Email service is not configured. Please add your EmailJS credentials to the .env file and restart the dev server.')
      console.error(
        '[Contact form] Missing EmailJS env vars.\n' +
        'Create a .env file at the project root with:\n' +
        '  VITE_EMAILJS_SERVICE_ID=service_xxxxxxx\n' +
        '  VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx\n' +
        '  VITE_EMAILJS_PUBLIC_KEY=your_public_key\n' +
        'Then restart the Vite dev server.'
      )
      return
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name:  fields.name,
          from_email: fields.email,
          subject:    fields.subject || '(No subject)',
          message:    fields.message,
          to_email:   profile.email,
        },
        publicKey,
      )
      console.log('[Contact form] EmailJS response:', result)
      setStatus('success')
      setFields(EMPTY)
      setTouched({})
    } catch (err) {
      // EmailJS v5 throws plain strings, Error objects, or {status, text} objects
      console.error('[Contact form] EmailJS error:', err)
      const message =
        typeof err === 'string'
          ? err
          : err?.text
          ? `EmailJS: ${err.text} (status ${err.status})`
          : err?.message
          ? err.message
          : 'Something went wrong. Please try again or email me directly.'
      setStatus('error')
      setErrorMsg(message)
    }
  }

  /* ── input style helpers ── */
  function inputBase(name) {
    const hasError  = touched[name] && errors[name]
    const isFocused = focused === name
    return [
      'w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-sm text-white',
      'placeholder:text-zinc-600 outline-none transition-all duration-200',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      hasError
        ? 'border-red-500/50'
        : isFocused
        ? 'border-violet-500/60 shadow-[0_0_0_3px_rgba(139,92,246,0.08)]'
        : 'border-white/[0.07] hover:border-white/[0.14]',
    ].join(' ')
  }

  /* ── stagger children ── */
  const stagger = (i) => ({ delay: 0.08 * i })

  return (
    <Section
      id="contact"
      index="08"
      label="Contact"
      title="Get in touch."
      intro="Open to opportunities, collaborations and conversations. Reach out through any channel below."
    >

      {/* ══════════════════════════════════════════════
          TWO-COLUMN LAYOUT
      ══════════════════════════════════════════════ */}
      <div className="mt-2 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

        {/* ── LEFT COLUMN: info + contact cards ── */}
        <Reveal>
          <div className="flex flex-col gap-8">

            {/* headline block */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-3.5 py-1.5">
                <MessageSquare size={12} className="text-violet-400" />
                <span className="text-xs font-medium tracking-wide text-violet-300">Let's connect</span>
              </div>
              <h3 className="font-display text-2xl font-medium leading-snug text-white md:text-3xl">
                Have a project in mind<br />
                <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  or just want to say hi?
                </span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                I am always open to discussing new opportunities, interesting ideas or how we can work together.
              </p>
            </div>

            {/* location pill */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-2">
              <MapPin size={13} className="text-zinc-500" />
              <span className="text-xs text-zinc-400">{profile.location}</span>
            </div>

            {/* contact cards */}
            <div className="flex flex-col gap-3">
              {contactCards.map((card, i) => {
                const Icon = card.icon
                return (
                  <motion.a
                    key={card.label}
                    href={card.href}
                    target={card.label !== 'Email' ? '_blank' : undefined}
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 4 }}
                    className={[
                      'group flex items-center justify-between gap-4 rounded-xl border border-white/[0.07]',
                      'bg-gradient-to-r p-4 transition-all duration-300',
                      card.accent,
                      card.border,
                    ].join(' ')}
                  >
                    <span className="flex items-center gap-3.5">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.04] transition-colors group-hover:border-white/[0.14] ${card.iconColor}`}>
                        <Icon size={17} />
                      </span>
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-widest text-zinc-500">
                          {card.label}
                        </span>
                        <span className="mt-0.5 block text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
                          {card.value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-zinc-600 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300"
                    />
                  </motion.a>
                )
              })}
            </div>

          </div>
        </Reveal>

        {/* ── RIGHT COLUMN: form ── */}
        <Reveal delay={0.15}>
          <div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 md:p-8">

            {/* subtle top-gradient accent line */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), rgba(99,102,241,0.5), transparent)' }}
            />

            {/* ── SUCCESS STATE ── */}
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center gap-5 py-10 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                    <CheckCircle size={30} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-medium text-white">Message sent!</p>
                    <p className="mt-2 text-sm text-zinc-400">
                      Thank you for reaching out. I will get back to you as soon as possible.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 rounded-lg border border-white/[0.07] bg-white/[0.04] px-5 py-2.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/[0.07] hover:text-white"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-5"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                    Send a message
                  </p>

                  {/* Name + Email row */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* Name */}
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                        Name <span className="text-violet-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={fields.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        disabled={status === 'loading'}
                        autoComplete="name"
                        className={inputBase('name')}
                      />
                      {touched.name && errors.name && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle size={11} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                        Email <span className="text-violet-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={fields.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        disabled={status === 'loading'}
                        autoComplete="email"
                        className={inputBase('email')}
                      />
                      {touched.email && errors.email && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle size={11} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                      Subject <span className="text-zinc-600">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      value={fields.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      disabled={status === 'loading'}
                      className={inputBase('subject')}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                      Message <span className="text-violet-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell me what's on your mind…"
                      rows={5}
                      value={fields.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={handleFocus}
                      disabled={status === 'loading'}
                      className={`${inputBase('message')} resize-none`}
                    />
                    {touched.message && errors.message && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={11} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error banner */}
                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4"
                      >
                        <AlertCircle size={15} className="mt-0.5 shrink-0 text-red-400" />
                        <p className="text-xs leading-relaxed text-red-300">{errorMsg}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.015 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.985 } : {}}
                    className="group relative mt-1 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                    style={{
                      background: status === 'loading'
                        ? 'rgba(139,92,246,0.4)'
                        : 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #2563eb 100%)',
                      boxShadow: '0 4px 24px rgba(124,58,237,0.25)',
                    }}
                  >
                    {/* shimmer overlay on hover */}
                    <span
                      className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"
                      aria-hidden="true"
                    />

                    {status === 'loading' ? (
                      <>
                        <Loader size={15} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-zinc-600">
                    I usually reply within 24–48 hours.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

      </div>

      {/* footer line */}
      <p className="mt-16 text-sm text-zinc-700">
        {profile.name} · {profile.location}
      </p>
    </Section>
  )
}
