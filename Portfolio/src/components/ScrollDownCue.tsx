import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const ScrollDownCue = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      const doc = document.documentElement
      const hasScroll = doc.scrollHeight - window.innerHeight > 80
      const isNearBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 56
      setIsVisible(hasScroll && !isNearBottom)
    }

    updateVisibility()
    window.addEventListener("scroll", updateVisibility, { passive: true })
    window.addEventListener("resize", updateVisibility)

    return () => {
      window.removeEventListener("scroll", updateVisibility)
      window.removeEventListener("resize", updateVisibility)
    }
  }, [])

  if (!isVisible) return null

  return (
    <motion.button
      type="button"
      aria-label="Bajar"
      onClick={() =>
        window.scrollBy({
          top: Math.min(window.innerHeight * 0.65, 420),
          behavior: "smooth",
        })
      }
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: [0.7, 1, 0.7], y: [0, 8, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-11 h-11 rounded-full border border-border/70 bg-secondary/70 backdrop-blur-md text-primary hover:border-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 ease-out active:scale-95"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-5 h-5 mx-auto">
        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.button>
  )
}

export default ScrollDownCue
