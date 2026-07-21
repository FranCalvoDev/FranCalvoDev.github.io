import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const Skills = () => {
  const { language } = useLanguage()
  const t = translations[language].skills

  return (
    <section id="skills" className="bg-background/55 py-32 px-6 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >

        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center tracking-tight">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.categories.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="bg-secondary/90 border border-border/40 rounded-3xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.22)] transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              <h3 className="text-primary font-semibold text-lg mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-muted text-foreground text-sm px-3 py-1 rounded-full border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}

export default Skills