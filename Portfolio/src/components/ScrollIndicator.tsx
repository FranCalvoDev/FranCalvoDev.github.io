import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const SCROLL_THRESHOLD = 120

const ScrollIndicator = () => {
  const [visible, setVisible] = useState(false)
  const location = useLocation()
  const { language } = useLanguage()

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

  const isHome = location.pathname === "/"

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll down"
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-primary animate-bounce transition-opacity duration-500 ease-out active:scale-95 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {isHome && (
        <span className="text-xs font-medium tracking-wide px-3 py-1 rounded-full border border-primary/60 bg-transparent backdrop-blur-sm transition-colors group-hover:border-primary group-hover:bg-primary/10">
          + {translations[language].about.title}
        </span>
      )}
      <span className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/60 bg-transparent backdrop-blur-sm transition-colors group-hover:border-primary group-hover:bg-primary/10">
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
      </span>
    </button>
  )
}

export default ScrollIndicator
