
import { motion } from 'framer-motion'
import {
  Code2,
  BarChart3,
  BrainCircuit,
  Wrench,
  Sparkles,
} from 'lucide-react'

const categories = [
  {
    number: '01',
    title: 'Programming & Web',
    subtitle: 'Programming foundations',
    icon: Code2,
    skills: ['C', 'Java', 'Python', 'HTML', 'CSS'],
  },
  {
    number: '02',
    title: 'Data Analytics',
    subtitle: 'Data analysis and visualization',
    icon: BarChart3,
    skills: [
      'Microsoft Excel',
      'Power BI',
      'DAX',
      'SQL',
      'Data Visualization',
      'KPI Tracking',
    ],
  },
  {
    number: '03',
    title: 'Data Science & AI',
    subtitle: 'Exploring intelligent systems',
    icon: BrainCircuit,
    skills: ['Pandas', 'NumPy', 'Machine Learning Fundamentals'],
  },
  {
    number: '04',
    title: 'Tools & Database',
    subtitle: 'Development and data management',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'DBMS'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const skillVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.88 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 17,
      delay: index * 0.055,
    },
  }),
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-10 sm:px-10 lg:px-16"
    >
      {/* BACKGROUND LIGHTING */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.08, 0.17, 0.08],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600 blur-[110px]"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-violet-600 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="text-xs font-bold tracking-[0.3em] text-cyan-300">
              02 / SKILLS
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technical
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Arsenal.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-slate-300 sm:text-base">
              My technical skills across programming, analytics,
              data science and development tools.
            </p>
          </div>
        </motion.div>

        {/* SKILL CARDS */}
        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon

            return (
              <motion.div
                key={category.number}
                custom={categoryIndex}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#14213D]/90 via-[#101A32]/90 to-[#11152D]/90 p-5 shadow-xl shadow-black/10 transition duration-500 hover:border-cyan-300/35 hover:shadow-[0_12px_40px_rgba(0,180,255,0.10)] sm:p-6"
              >
                {/* HOVER LIGHT */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-700 group-hover:bg-cyan-400/20" />

                <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-violet-500/0 blur-3xl transition duration-700 group-hover:bg-violet-500/15" />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_15px_rgba(0,229,255,0.06)] transition duration-300 group-hover:border-cyan-300/40 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                    >
                      <Icon size={21} />
                    </motion.div>

                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-300/70">
                        {category.number}
                      </span>
                      <h3 className="mt-0.5 text-base font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-3 text-xs text-slate-400">
                    {category.subtitle}
                  </p>

                  <div className="flex min-h-[65px] flex-wrap content-start gap-2">
                    {category.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        custom={index}
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        whileHover={{
                          scale: 1.07,
                          y: -3,
                          boxShadow: '0 0 18px rgba(0,229,255,0.13)',
                        }}
                        className="cursor-default rounded-lg border border-cyan-300/15 bg-gradient-to-r from-cyan-400/[0.07] to-violet-400/[0.07] px-3 py-2 text-xs font-medium text-slate-200 transition-colors duration-300 hover:border-cyan-300/45 hover:from-cyan-400/20 hover:to-violet-400/20 hover:text-white sm:text-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-5 h-px w-full bg-gradient-to-r from-cyan-400/40 via-blue-400/20 to-transparent transition duration-500 group-hover:from-violet-400/60" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* LEARNING MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-400"
        >
          <Sparkles size={14} className="text-cyan-300" />
          Learning, experimenting and growing every day.
        </motion.div>
      </div>
    </section>
  )
}
