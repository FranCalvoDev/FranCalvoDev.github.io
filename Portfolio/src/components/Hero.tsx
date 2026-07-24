import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "../utils/animations"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

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

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5A1.97 1.97 0 1 0 5.25 7.44 1.97 1.97 0 0 0 5.25 3.5ZM20.44 20.5H17.06V14.75c0-1.37-.03-3.13-1.91-3.13-1.92 0-2.21 1.5-2.21 3.04V20.5H9.56V8.5h3.24v1.64h.05c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.06 2.26 4.06 5.19V20.5Z" />
  </svg>
)

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language].hero

  const cvFile =
    language === "es"
      ? "/FranciscoCalvo-CV-(Español).pdf"
      : "/FranciscoCalvo-CV-(English).pdf"

  return (
    <section
      id="home"
      className="bg-background/55 min-h-screen flex items-center px-6 md:px-8 py-16 md:py-20"
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
              {t.descPart1}
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
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <a
                href={cvFile}
                download
                className="bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 ease-out active:scale-95"
              >
                {t.downloadCV}
              </a>

              <a
                href="https://github.com/FranCalvoDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-border/60 text-foreground hover:border-primary hover:text-primary transition-all duration-300 ease-out active:scale-95"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-calvo-5445582ba/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-border/60 text-foreground hover:border-primary hover:text-primary transition-all duration-300 ease-out active:scale-95"
              >
                <LinkedInIcon />
              </a>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
