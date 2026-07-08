import { motion } from "framer-motion"
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerItem } from "../utils/animations"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import foto1 from "../assets/hero/Foto1.jpg"
import foto2 from "../assets/hero/Foto2.jpg"
import foto3 from "../assets/hero/Foto3.jpg"

const photos = [foto1, foto2, foto3]

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
      className="bg-background/80 min-h-screen flex items-center px-8 pt-24"
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

          {/* Badges */}
          <motion.div variants={staggerContainer} className="flex flex-wrap gap-3">
            {["Python", "JavaScript", "React.js", "MySQL", "Docker"].map(
              (tech) => (
                <motion.span
                  key={tech}
                  variants={staggerItem}
                  className="bg-secondary border border-border text-foreground text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>

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

          {/* Pirámide de botones */}
          <div className="flex flex-col items-center gap-3 w-full">

            {/* Punta — Descargar CV destacado */}
            <a
              href={cvFile}
              download
              className="bg-primary text-primary-foreground font-semibold text-base px-6 py-2.5 rounded-lg hover:opacity-90 transition text-center w-48"
            >
              {t.downloadCV}
            </a>

            {/* Base — GitHub + LinkedIn más chicos */}
            <div className="flex gap-3">
              <a
                href="https://github.com/FranCalvoDev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 border border-border text-foreground text-sm px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition"
              >
                🐙 GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-calvo-5445582ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 border border-border text-foreground text-sm px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition"
              >
                💼 LinkedIn ↗
              </a>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero
