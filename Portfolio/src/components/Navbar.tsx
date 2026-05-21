import { useEffect, useMemo, useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language].nav

  const links = useMemo(
    () => [
      { label: t.home, href: "#home" },
      { label: t.about, href: "#about" },
      { label: t.skills, href: "#skills" },
      { label: t.projects, href: "#projects" },
      { label: t.experience, href: "#experience" },
      { label: t.contact, href: "#contact" },
    ],
    [t]
  )

  const [activeSection, setActiveSection] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [links])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-secondary transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/30 border-b border-border" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo / Nombre */}
        <a
          href="#home"
          className="text-primary font-bold text-xl hover:opacity-80 transition"
        >
          Francisco Calvo 
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 relative pb-1
                  ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }
                `}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </a>
            </li>
          ))}

          {/* Botón de traducción — desktop */}
          <li>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-md border border-primary text-primary hover:bg-primary hover:text-secondary transition-all duration-200"
              aria-label="Cambiar idioma"
            >
              🌐 {language === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>

        {/* Botón hamburguesa — solo mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

      </div>

      {/* Menú mobile desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-8 py-4 gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className={`block text-sm font-medium py-2 transition-all duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Botón de traducción — mobile */}
          <li>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm font-medium py-2 text-primary hover:opacity-80 transition"
              aria-label="Cambiar idioma"
            >
              🌐 {language === "es" ? "Switch to English" : "Cambiar a Español"}
            </button>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar
