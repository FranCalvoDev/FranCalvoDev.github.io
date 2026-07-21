import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"

const About = () => {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section id="about" className="bg-background/55 py-32 px-6 md:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-center">

          {/* Texto */}
          <div className="flex flex-col gap-8">
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
          <div className="grid grid-cols-1 gap-6">
            {t.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                className="bg-secondary/90 border border-border/40 rounded-3xl px-7 py-6 flex items-center gap-4 shadow-[0_2px_20px_rgba(0,0,0,0.22)] transition-transform duration-300 ease-out hover:-translate-y-1"
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
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  )
}

export default About