import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const ProjectCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [current, setCurrent] = useState(0)
  const { language } = useLanguage()
  const imageSoon = translations[language].projects.imageSoon

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-border/40 mb-5 bg-muted">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`${title} screenshot ${index + 1}`}
          onError={(e) => {
            const target = e.currentTarget
            target.style.display = "none"
            const parent = target.parentElement
            if (parent) {
              const placeholder = parent.querySelector(".placeholder")
              if (placeholder) (placeholder as HTMLElement).style.display = "flex"
            }
          }}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Placeholder visible si no hay imágenes */}
      <div className="placeholder absolute inset-0 flex-col items-center justify-center text-muted-foreground text-sm gap-2 hidden">
        <span className="text-3xl">🖼️</span>
        <span>{imageSoon}</span>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === current ? "bg-primary w-3" : "bg-muted-foreground opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language].projects

  return (
    <section id="projects" className="bg-background/55 pt-24 md:pt-28 pb-32 px-6 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >

        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center tracking-tight">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="bg-secondary/90 border border-border/40 rounded-3xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.22)] flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              {/* Carrusel de imágenes */}
              <ProjectCarousel images={project.images} title={project.title} />

              {/* Header */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-primary font-semibold text-lg">
                    {project.title}
                  </h3>
                  {project.status === "inprogress" && (
                    <span className="text-xs bg-muted text-primary border border-primary px-2 py-1 rounded-full">
                      {t.inProgress}
                    </span>
                  )}
                </div>
                <p className="text-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted text-foreground text-xs px-3 py-1 rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary border border-primary px-5 py-2.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-out active:scale-95"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary border border-primary px-5 py-2.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-out active:scale-95"
                  >
                    Demo
                  </a>
                )}
                {!project.github && !project.demo && (
                  <span className="text-xs text-muted-foreground italic">
                    {t.linksSoon}
                  </span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}

export default Projects
