import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const SCROLL_THRESHOLD = 120

const ScrollIndicator = () => {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const checkScrollable = () => {
      const remaining =
        document.documentElement.scrollHeight - window.innerHeight - window.scrollY
      setVisible(remaining > SCROLL_THRESHOLD)
    }

    checkScrollable()
    window.addEventListener("scroll", checkScrollable, { passive: true })
    window.addEventListener("resize", checkScrollable)

    // El contenido puede cambiar de alto (imágenes, fuentes, animaciones) sin
    // disparar scroll/resize, así que también observamos el body.
    const observer = new ResizeObserver(checkScrollable)
    observer.observe(document.body)

    return () => {
      window.removeEventListener("scroll", checkScrollable)
      window.removeEventListener("resize", checkScrollable)
      observer.disconnect()
    }
  }, [])

  // Al cambiar de página el alto del documento cambia; recalculamos tras el render.
  useEffect(() => {
    const id = window.setTimeout(() => {
      const remaining =
        document.documentElement.scrollHeight - window.innerHeight - window.scrollY
      setVisible(remaining > SCROLL_THRESHOLD)
    }, 50)
    return () => window.clearTimeout(id)
  }, [location.pathname])

  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll down"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center w-10 h-10 rounded-full border border-primary/60 bg-secondary/50 backdrop-blur-sm text-primary shadow-lg shadow-black/20 animate-bounce transition-opacity duration-500 ease-out hover:border-primary hover:bg-secondary/80 active:scale-95 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  )
}

export default ScrollIndicator
