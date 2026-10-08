import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import { iconFor, TechIcon } from "./TechIcon"

const Skills = () => {
  const { language } = useLanguage()
  const t = translations[language].skills

  return (
    <section id="skills" className="bg-background/55 py-16 md:py-20 px-6 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >

        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center tracking-tight">
          {t.title}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base text-center mb-16">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.categories.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="relative bg-transparent backdrop-blur-sm border border-border/40 rounded-3xl p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40"
            >
              <h3 className="text-primary font-semibold text-lg pb-4 mb-5 border-b border-border/40">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => {
                  const icon = iconFor(skill)
                  if (!icon) {
                    return (
                      <span
                        key={skill}
                        className="bg-transparent text-foreground text-sm px-4 py-2.5 rounded-xl border border-border/40 transition-all duration-300 hover:border-primary hover:shadow-[0_0_18px_rgba(121,191,15,0.4)]"
                      >
                        {skill}
                      </span>
                    )
                  }
                  return <TechIcon key={skill} name={skill} icon={icon} />
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}

export default Skills