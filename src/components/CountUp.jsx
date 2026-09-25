import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

const CountUp = ({ to, suffix = '', duration = 2, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const timeout = setTimeout(() => {
      const controls = animate(0, to, {
        duration,
        ease: 'easeOut',
        onUpdate: (latest) => setDisplay(Math.round(latest)),
      })
      return controls.stop
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [isInView, to, duration, delay])

  return <span ref={ref}>{display}{suffix}</span>
}

export default CountUp
