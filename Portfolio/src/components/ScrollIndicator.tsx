import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const SCROLL_THRESHOLD = 120

const ScrollIndicator = () => {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  // En la landing el Hero ya trae su propia invitación a bajar ("+ Sobre mí"):
  // la flecha fija recién aparece al dejar atrás el Hero, así no tapa sus botones.
  const isHome = location.pathname === "/"

  useEffect(() => {
    // Leer scrollHeight fuerza un cálculo de layout: con requestAnimationFrame se hace
    // una vez por frame en lugar de en cada evento de scroll.
    let frame = 0
    const checkScrollable = () => {
      frame = 0
      const remaining =
        document.documentElement.scrollHeight - window.innerHeight - window.scrollY
      const pastHero = !isHome || window.scrollY > window.innerHeight * 0.6
      setVisible(pastHero && remaining > SCROLL_THRESHOLD)
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(checkScrollable)
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(checkScrollable)
    }

    // Al cambiar de página el alto del documento cambia; recalculamos tras el render.
    const timeout = window.setTimeout(schedule, 50)
    checkScrollable()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)

    // El contenido puede cambiar de alto (imágenes, fuentes, animaciones) sin
    // disparar scroll/resize, así que también observamos el body.
    const observer = new ResizeObserver(schedule)
    observer.observe(document.body)

    return () => {
      window.clearTimeout(timeout)
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      observer.disconnect()
    }
  }, [isHome, location.pathname])

  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" })
  }

  // En la landing de contacto ya está el botón flotante de WhatsApp; la flecha taparía contenido.
  if (location.pathname === "/contact") return null

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll down"
      tabIndex={visible ? 0 : -1}
      // En la esquina y no al centro: todo el contenido del sitio va centrado y la flecha lo tapaba.
      className={`group fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-[calc(1.25rem+env(safe-area-inset-right,0px))] z-40 flex flex-col items-center gap-2 text-primary motion-safe:animate-bounce transition-opacity duration-500 ease-out active:scale-95 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/60 bg-secondary/50 backdrop-blur-sm shadow-lg shadow-black/20 transition-colors group-hover:border-primary group-hover:bg-secondary/80">
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
