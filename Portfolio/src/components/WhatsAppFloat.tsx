import { useEffect, useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import { CONTACT_FORM_ID, whatsappUrl } from "../utils/contactInfo"
import { WhatsAppIcon } from "./ContactIcons"

// Aparece cuando el botón de WhatsApp del hero ya quedó fuera de pantalla, y se oculta al llegar
// a la sección de contacto: ahí ya está la tarjeta con WhatsApp y el botón taparía el cuestionario.
const shouldShow = () => {
  if (window.scrollY <= window.innerHeight * 0.6) return false
  const section = document.getElementById(CONTACT_FORM_ID)?.getBoundingClientRect()
  return !section || section.top > window.innerHeight * 0.85 || section.bottom < 0
}

const WhatsAppFloat = () => {
  const { language } = useLanguage()
  const t = translations[language].contact
  const [visible, setVisible] = useState(false)

  // Se calcula después de montar (en el render la sección del formulario todavía no está en el DOM),
  // y en scroll/resize con requestAnimationFrame para leer el layout una vez por frame.
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setVisible(shouldShow())
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    schedule()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [])

  return (
    <a
      href={whatsappUrl(t.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.hero.whatsappCta}
      title={t.hero.whatsappCta}
      inert={!visible}
      style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
      className={`fixed right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_8px_30px_rgba(0,0,0,0.45),0_0_24px_rgba(121,191,15,0.45)] transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}

export default WhatsAppFloat
