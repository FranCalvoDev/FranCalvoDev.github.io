import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const Experience = () => {
  const { language } = useLanguage()
  const t = translations[language].experience

  return (
    <section id="experience" className="bg-background/55 py-16 md:py-20 px-6 md:px-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >

        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center tracking-tight">
          {t.title}
        </h2>

        <div className="flex flex-col gap-10">
          {t.items.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              className="bg-secondary/90 border border-border/40 rounded-3xl p-7 md:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.22)] transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-primary font-semibold text-lg">
                    {exp.role}
                  </h3>
                  <p className="text-foreground font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-primary text-sm">{exp.period}</p>
                  <p className="text-muted-foreground text-sm">{exp.location}</p>
                </div>
              </div>

              {/* Lista de tareas */}
              <ul className="flex flex-col gap-2">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex gap-2 text-sm text-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}

export default Experience