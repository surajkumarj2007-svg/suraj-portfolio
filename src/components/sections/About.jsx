
import { motion } from 'framer-motion'
import {
  GraduationCap,
  MapPin,
  CalendarDays,
  Brain,
  ArrowUpRight,
  Code2,
  Sparkles,
} from 'lucide-react'

const details = [
  { label: 'EDUCATION', value: 'B.E. Computer Science Engineering', icon: GraduationCap },
  { label: 'COLLEGE', value: 'HKBK College of Engineering', icon: Code2 },
  { label: 'UNIVERSITY', value: 'Visvesvaraya Technological University', icon: GraduationCap },
  { label: 'YEARS', value: '2024 – 2028', icon: CalendarDays },
  { label: 'LOCATION', value: 'Bengaluru, India', icon: MapPin },
  { label: 'INTERESTS', value: 'AI, Data Science & Data Analytics', icon: Brain },
]

const reveal = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const listReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemReveal = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080D20] px-6 py-10 text-white sm:px-10 lg:px-16"
    >
      {/* AMBIENT LIGHTING */}
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[110px]"
      />

      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 18, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION LABEL */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-cyan-300">
            01 / ABOUT
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </motion.div>

        {/* MAIN HEADING */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[#F4F7FF] sm:text-5xl lg:text-6xl">
            A CSE student
            <br />
            aiming at{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              AI.
            </span>
          </h2>

          <p className="max-w-md text-sm leading-6 text-slate-300 sm:text-base lg:pb-1">
            A degree in progress, a growing technical foundation, and a
            clear interest in data and intelligent systems.
          </p>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* INTRODUCTION CARD */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/[0.10] via-[#101A32]/90 to-violet-600/[0.08] p-5 shadow-xl shadow-blue-950/30 transition duration-500 hover:border-cyan-300/40 hover:shadow-[0_15px_50px_rgba(0,180,255,0.12)] sm:p-6">

              {/* CARD LIGHT */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full border border-cyan-300/15"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                className="pointer-events-none absolute -right-14 -top-16 h-44 w-44 rounded-full border border-violet-400/15"
              />

              <div className="relative">
                <div className="flex items-center gap-2 text-cyan-300">
                  <Sparkles size={16} />
                  <span className="text-xs font-bold uppercase tracking-[0.25em]">
                    My introduction
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold leading-snug text-[#F4F7FF] sm:text-3xl">
                  Curious about technology.
                  <span className="text-cyan-300">
                    {' '}Driven to build.
                  </span>
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  I'm Suraj Kumar Singh, pursuing a B.E. in Computer Science
                  and Engineering at HKBK College of Engineering, affiliated
                  with Visvesvaraya Technological University.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  My interests include Data Analytics, Data Science and
                  Artificial Intelligence. I'm developing my foundation
                  through programming, analytics tools, practical projects,
                  certifications and hackathons.
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-cyan-300"
                  >
                    <Brain size={19} />
                  </motion.div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Current direction
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Data Analytics · AI · Machine Learning
                    </p>
                  </div>

                  <ArrowUpRight className="ml-auto text-cyan-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                </div>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.06 }}
              className="absolute -right-2 -top-5 hidden items-center gap-2 rounded-full border border-cyan-300/25 bg-[#101A32] px-4 py-2 shadow-[0_0_25px_rgba(0,229,255,0.15)] sm:flex"
            >
              <Sparkles size={14} className="text-cyan-300" />
              <span className="text-xs font-semibold text-slate-200">
                Always learning
              </span>
            </motion.div>
          </motion.div>

          {/* BACKGROUND DETAILS */}
          <motion.div
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            <motion.div
              variants={itemReveal}
              className="mb-3 flex items-center justify-between"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                Background
              </h3>

              <span className="rounded-full border border-cyan-300/25 bg-cyan-300/[0.05] px-3 py-1 text-[10px] font-semibold tracking-wider text-cyan-300">
                PROFILE
              </span>
            </motion.div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {details.map((item) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.label}
                    variants={itemReveal}
                    whileHover={{
                      x: 5,
                      backgroundColor: 'rgba(0,229,255,0.045)',
                    }}
                    className="group grid grid-cols-[34px_1fr] gap-3 py-3 transition sm:grid-cols-[34px_0.75fr_1.25fr] sm:items-center"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/10 bg-cyan-400/10 text-cyan-300 transition duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-400/20 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.12)]">
                      <Icon size={17} />
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.15em] text-slate-500">
                      {item.label}
                    </span>

                    <span className="col-start-2 text-sm font-medium leading-5 text-slate-200 sm:col-start-auto">
                      {item.value}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
