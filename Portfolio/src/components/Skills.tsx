import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const Skills = () => {
  const { language } = useLanguage()
  const t = translations[language].skills

  return (
    <section id="skills" className="bg-background/80 py-24 px-8">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.categories.map((group) => (
            <div
              key={group.category}
              className="bg-secondary border border-border rounded-xl p-6"
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
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills