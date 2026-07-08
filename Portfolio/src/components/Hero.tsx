import { motion } from "framer-motion"
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer } from "../utils/animations"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import foto1 from "../assets/hero/Foto1.jpg"
import foto2 from "../assets/hero/Foto2.jpg"
import foto3 from "../assets/hero/Foto3.jpg"

const photos = [foto1, foto2, foto3]

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

const PhotoCarousel = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary overflow-hidden">
      <img
        src={photos[0]}
        alt="Francisco Calvo 1"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

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
      className="bg-background/55 min-h-screen flex items-center px-8 pt-24"
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Texto — entra desde la izquierda */}
        <motion.div
          className="flex flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Saludo + Nombre */}
          <motion.div variants={fadeLeft} className="flex flex-col gap-1">
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
            className="text-foreground text-base leading-relaxed max-w-md"
          >
            {t.descPart1}
            <span className="mt-2 block">
              {t.descBilingual}
              <span className="text-primary">{t.descBilingualHighlight}</span>.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground font-semibold text-base px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              {t.viewProjects}
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary font-semibold text-base px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition"
            >
              {t.contactMe}
            </a>
          </motion.div>

        </motion.div>

        {/* Foto + Botones — entra desde la derecha */}
        <motion.div
          className="flex flex-col items-center gap-6"
          variants={fadeRight}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={scaleIn}>
            <PhotoCarousel />
          </motion.div>

          {/* Acciones minimalistas */}
          <div className="flex items-center gap-3">

            <a
              href={cvFile}
              download
              className="bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition"
            >
              {t.downloadCV}
            </a>

            <a
              href="https://github.com/FranCalvoDev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/francisco-calvo-5445582ba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition"
            >
              <LinkedInIcon />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero
