import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const Experience = () => {
  const { language } = useLanguage()
  const t = translations[language].experience

  return (
    <section id="experience" className="bg-background/80 py-24 px-8">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          {t.title}
        </h2>

        <div className="flex flex-col gap-8">
          {t.items.map((exp) => (
            <div
              key={exp.role}
              className="bg-secondary border border-border rounded-xl p-6"
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

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience