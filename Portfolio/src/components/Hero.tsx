import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "../utils/animations"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import { CONTACT } from "../utils/contactInfo"
import { LinkedInIcon } from "./ContactIcons"

// NOTA: foto/carrusel del hero deshabilitados temporalmente a la espera
// de la reestructuración visual (ver comentarios más abajo).
// import foto1 from "../assets/hero/Foto1.jpg"
// import foto2 from "../assets/hero/Foto2.jpg"
// import foto3 from "../assets/hero/Foto3.jpg"
// const photos = [foto1, foto2, foto3]

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.19-3.37-1.19-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.24 9.24 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
)

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5" />
    <path d="M12 11v6" />
    <path d="m9 14 3 3 3-3" />
  </svg>
)

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5" />
    <path d="M12 11v6" />
    <path d="m9 14 3 3 3-3" />
  </svg>
)

// Efecto "máquina de escribir": tipea el texto letra a letra y deja
// un cursor parpadeante al final, de forma sutil.
const useTypewriter = (text: string, speed = 28) => {
  // El progreso guarda a qué texto pertenece: si cambia el texto (idioma), arranca de cero sin un setState extra
  const [typed, setTyped] = useState({ text, count: 0 })

  useEffect(() => {
    let count = 0
    const interval = window.setInterval(() => {
      count += 1
      setTyped({ text, count })
      if (count >= text.length) window.clearInterval(interval)
    }, speed)
    return () => window.clearInterval(interval)
  }, [text, speed])

  return typed.text === text ? text.slice(0, typed.count) : ""
}

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language].hero
  const typedDescPart1 = useTypewriter(t.descPart1)

  const cvFile =
    language === "es"
      ? "/FranciscoCalvo-CV-(Español).pdf"
      : "/FranciscoCalvo-CV-(English).pdf"

  return (
    <section
      id="home"
      className="bg-background/55 min-h-screen flex items-center px-6 md:px-8 pt-28 pb-16 md:pt-24 md:pb-20"
    >
      <div className="max-w-3xl mx-auto w-full flex justify-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col items-center gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* Saludo + Nombre */}
            <motion.div variants={fadeLeft} className="flex flex-col items-center gap-1">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                {t.greeting}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-[80px] font-semibold text-foreground leading-tight lg:leading-[84px] lg:tracking-[-1.2px]">
                Francisco <br />
                <span className="text-primary">Calvo</span>
              </h1>
            </motion.div>

            {/* Título */}
            <motion.h2
              variants={fadeRight}
              className="gap-1 text-xl md:text-2xl text-muted-foreground font-medium"
            >
              {t.titleLine1}{" "}
              <span className="text-primary">{t.titleLine1Highlight} </span> <br />
              {t.titleLine2}{" "}
              <span className="text-primary">{t.titleLine2Highlight}</span>
            </motion.h2>

            {/* Descripción */}
            <motion.p
              variants={fadeUp}
              className="text-foreground text-base leading-relaxed max-w-md text-justify"
            >
              <span>
                {typedDescPart1}
                <span className="typewriter-caret inline-block w-0.5 h-4 -mb-0.5 ml-0.5 bg-primary align-middle" />
              </span>
              <span className="mt-2 block">
                {t.descBilingual}
                <span className="text-primary">{t.descBilingualHighlight}</span>.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link
                to="/work"
                className="bg-primary text-primary-foreground font-semibold text-base px-7 py-3.5 rounded-full hover:opacity-90 transition-all duration-300 ease-out active:scale-95"
              >
                {t.viewProjects}
              </Link>
              <Link
                to="/contact"
                className="border border-primary text-primary font-semibold text-base px-7 py-3.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-out active:scale-95"
              >
                {t.contactMe}
              </Link>
            </motion.div>

            {/* Acciones minimalistas */}
            <motion.div variants={fadeUp} className="flex items-start justify-center gap-8 sm:gap-12">
              {[
                { href: "https://github.com/FranCalvoDev", label: "GitHub", ariaLabel: "GitHub", icon: <GitHubIcon /> },
                { href: cvFile, label: t.cvLabel, ariaLabel: t.downloadCV, icon: <DownloadIcon />, download: true },
                { href: CONTACT.linkedin, label: "LinkedIn", ariaLabel: "LinkedIn", icon: <LinkedInIcon /> },
              ].map(({ href, label, ariaLabel, icon, download }, i) => (
                <a
                  key={label}
                  href={href}
                  {...(download
                    ? { download: true }
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  aria-label={ariaLabel}
                  className={`group flex w-20 flex-col items-center gap-1.5 ${download ? "-translate-y-2" : ""}`}
                >
                  <span className="neon-hover flex items-center justify-center w-11 h-11 rounded-full border border-border/60 text-foreground transition-all duration-300 ease-out group-active:scale-95">
                    {icon}
                  </span>
                  {/* Flecha neón apuntando al botón (solo en el CV); en los
                      demás queda invisible para que los textos sigan alineados */}
                  <span
                    aria-hidden="true"
                    className={download ? "neon-arrow" : "invisible"}
                    style={{ animationDelay: `${i * 1.3}s` }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M12 19V5" />
                      <path d="m6 11 6-6 6 6" />
                    </svg>
                  </span>
                  <span
                    aria-hidden="true"
                    className="neon-label text-[11px] font-semibold tracking-[0.15em] uppercase whitespace-nowrap"
                    style={{ animationDelay: `${i * 1.3}s` }}
                  >
                    {label}
                  </span>
                </a>
              ))}
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
