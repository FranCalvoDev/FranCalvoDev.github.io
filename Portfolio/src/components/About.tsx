import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const About = () => {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section id="about" className="bg-background/55 py-24 px-8">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div className="flex flex-col gap-6">
            <p className="text-foreground text-base leading-relaxed">
              {t.p1a}<span className="text-primary font-medium">Tecnicatura en Análisis de Sistemas</span>{t.p1b}
            </p>
            <p className="text-foreground text-base leading-relaxed">
              {t.p2a}<span className="text-primary font-medium">Python, JavaScript, React.js, MySQL y Docker</span>{t.p2b}
            </p>
            <p className="text-foreground text-base leading-relaxed">
              {t.p3a}<span className="text-primary font-medium">{t.p3bilingual}</span>{t.p3b}<span className="text-primary font-medium">{t.p3referee}</span>{t.p3c}
            </p>
            <p className="text-foreground text-base leading-relaxed">
              {t.p4}
            </p>
          </div>

          {/* Cards de datos */}
          <div className="grid grid-cols-1 gap-4">
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-secondary border border-border rounded-xl px-6 py-4 flex items-center gap-4"
              >
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className="text-foreground text-sm font-medium">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About