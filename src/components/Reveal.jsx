import { motion } from 'framer-motion'

const Reveal = ({ children, delay = 0, y = 50, duration = 0.6, className = '', as = 'div', ...props }) => {
  const MotionTag = motion[as]

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
