import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const ProjectCarousel = ({
  images,
  title,
  onOpen,
}: {
  images: string[]
  title: string
  onOpen: () => void
}) => {
  const [current, setCurrent] = useState(0)
  const { language } = useLanguage()
  const imageSoon = translations[language].projects.imageSoon
  const galleryHint = translations[language].projects.galleryHint

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${title} image gallery`}
      className="group relative block w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/40 mb-5 bg-[#071007] cursor-zoom-in"
    >
      {images.length > 0 && (
        <div
          aria-hidden="true"
          className="absolute inset-0 scale-110 bg-cover bg-center opacity-30 blur-2xl"
          style={{ backgroundImage: `url("${images[current]}")` }}
        />
      )}

      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`${title} screenshot ${index + 1}`}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          onError={(e) => {
            const target = e.currentTarget
            target.style.display = "none"
            const parent = target.parentElement
            if (parent) {
              const placeholder = parent.querySelector(".placeholder")
              if (placeholder) (placeholder as HTMLElement).style.display = "flex"
            }
          }}
          className={`absolute inset-0 z-10 w-full h-full object-cover object-center transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Placeholder visible si no hay imágenes */}
      <div className="placeholder absolute inset-0 flex-col items-center justify-center text-muted-foreground text-sm gap-2 hidden">
        <span className="text-3xl">🖼️</span>
        <span>{imageSoon}</span>
      </div>

      <span className="absolute right-3 top-3 z-20 rounded-full bg-background/75 px-3 py-1 text-xs text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
        {galleryHint}
      </span>

      {/* Dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === current ? "bg-primary w-3" : "bg-muted-foreground opacity-50"
            }`}
          />
        ))}
      </div>
    </button>
  )
}

const ProjectLightbox = ({
  title,
  images,
  current,
  onClose,
  onChange,
}: {
  title: string
  images: string[]
  current: number
  onClose: () => void
  onChange: (index: number) => void
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowRight") onChange((current + 1) % images.length)
      if (event.key === "ArrowLeft") onChange((current - 1 + images.length) % images.length)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [current, images.length, onChange, onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image gallery`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex h-full w-full max-w-7xl flex-col items-center justify-center gap-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex w-full items-center justify-between gap-4 text-foreground">
          <h3 className="truncate text-lg font-semibold text-primary md:text-xl">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image gallery"
            className="rounded-full border border-border/70 bg-secondary/80 px-4 py-2 text-xl leading-none text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            ×
          </button>
        </div>

        <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
          <img
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onChange((current - 1 + images.length) % images.length)}
                aria-label="Previous image"
                className="absolute left-2 rounded-full bg-background/80 px-4 py-3 text-2xl text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:left-6"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => onChange((current + 1) % images.length)}
                aria-label="Next image"
                className="absolute right-2 rounded-full bg-background/80 px-4 py-3 text-2xl text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:right-6"
              >
                ›
              </button>
            </>
          )}
        </div>

        <p className="text-sm text-muted-foreground">
          {current + 1} / {images.length}
        </p>
      </div>
    </div>
  )
}

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language].projects
  const [selectedProject, setSelectedProject] = useState<{
    title: string
    images: string[]
  } | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)

  const openProjectGallery = (title: string, images: string[]) => {
    setSelectedProject({ title, images })
    setSelectedImage(0)
  }

  return (
    <section id="projects" className="bg-background/55 pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-8">
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
              className={`bg-secondary/90 rounded-3xl p-7 flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 ${
                project.status === "inprogress"
                  ? "border-2 border-primary shadow-[0_0_20px_rgba(121,191,15,0.45)]"
                  : "border border-border/40 shadow-[0_2px_20px_rgba(0,0,0,0.22)]"
              }`}
            >
              {/* Carrusel de imágenes */}
              <ProjectCarousel
                images={project.images}
                title={project.title}
                onOpen={() => openProjectGallery(project.title, project.images)}
              />

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
                {!project.github && (
                  <span className="text-xs text-muted-foreground italic">
                    {t.privateProject}
                  </span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>

      {selectedProject && (
        <ProjectLightbox
          title={selectedProject.title}
          images={selectedProject.images}
          current={selectedImage}
          onClose={() => setSelectedProject(null)}
          onChange={setSelectedImage}
        />
      )}
    </section>
  )
}

export default Projects
