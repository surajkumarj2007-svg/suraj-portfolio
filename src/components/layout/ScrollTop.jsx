import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#121214] text-white transition hover:border-white/40"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={18} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
