import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Github } from '../icons/BrandIcons'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close project details"
            className="absolute inset-0 bg-black/70"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#101013] p-7 shadow-2xl sm:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{project.index}</p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
            <h3 id="project-dialog-title" className="mt-4 font-display text-3xl tracking-tight text-white sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-2 text-lg text-zinc-300">{project.subtitle}</p>
            <p className="mt-6 leading-relaxed text-zinc-400">{project.summary}</p>
            <ul className="mt-8 space-y-3">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-zinc-200">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-300" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-solid">
                  <Github size={16} />
                  GitHub
                </a>
              ) : (
                <button type="button" className="btn-line" disabled title="Repository link has not been added yet">
                  <Github size={16} />
                  GitHub
                </button>
              )}
              <span className="text-xs text-zinc-500">
                {project.github ? 'Repository' : 'Repository link to be added'}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
