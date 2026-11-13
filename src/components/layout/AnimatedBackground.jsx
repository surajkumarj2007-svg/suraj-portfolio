
import { motion } from 'framer-motion'

const stars = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  left: `${(i * 37.7 + 11) % 100}%`,
  top: `${(i * 61.3 + 7) % 100}%`,
  size: i % 9 === 0 ? 3 : i % 4 === 0 ? 2 : 1,
  duration: 2.5 + (i % 7) * 1.2,
  delay: (i % 11) * -0.8,
}))

const shootingStars = [
  { top: '15%', left: '75%', delay: 2 },
  { top: '38%', left: '90%', delay: 11 },
  { top: '65%', left: '65%', delay: 20 },
]

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 53 + 17) % 100}%`,
  top: `${(i * 43 + 21) % 100}%`,
  duration: 9 + (i % 6) * 2,
  delay: (i % 8) * -1.5,
}))

export default function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">

      {/* Deep space */}
      <div className="space-base" />

      {/* Nebula lighting */}
      <motion.div
        className="nebula nebula-blue"
        animate={{
          x: [0, 70, -35, 0],
          y: [0, 35, 75, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="nebula nebula-purple"
        animate={{
          x: [0, -65, 35, 0],
          y: [0, 55, -30, 0],
          scale: [1, 0.9, 1.12, 1],
        }}
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="nebula nebula-cyan"
        animate={{
          x: [0, 45, -55, 0],
          y: [0, -35, 30, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Star field */}
      <div className="star-field">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="cosmic-star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.15, 0.9, 0.3, 0.15],
              scale: [0.7, 1.35, 0.8],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Floating cosmic dust */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="cosmic-dust"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -55, 0],
            x: [0, 15, -10, 0],
            opacity: [0.05, 0.65, 0.1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star, index) => (
        <motion.span
          key={index}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
          }}
          animate={{
            x: [0, -360],
            y: [0, 190],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 18 + index * 5,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Subtle depth grid */}
      <div className="cosmic-grid" />

    </div>
  )
}
