import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import pacificoCrest from "../assets/aboutme/CAP.png"

type Country = "france" | "spain" | "england" | "brazil"

const CountryFlag = ({ country, label }: { country: Country; label: string }) => (
  <span
    role="img"
    aria-label={label}
    className="mx-1 inline-block h-4 w-6 shrink-0 overflow-hidden rounded-sm border border-white/20 align-[-0.15em]"
  >
    <svg viewBox="0 0 30 20" className="block h-full w-full" aria-hidden="true">
      {country === "france" && (
        <>
          <rect width="10" height="20" fill="#002395" />
          <rect x="10" width="10" height="20" fill="#fff" />
          <rect x="20" width="10" height="20" fill="#ed2939" />
        </>
      )}
      {country === "spain" && (
        <>
          <rect width="30" height="20" fill="#aa151b" />
          <rect y="5" width="30" height="10" fill="#f1bf00" />
        </>
      )}
      {country === "england" && (
        <>
          <rect width="30" height="20" fill="#fff" />
          <rect x="12" width="6" height="20" fill="#c8102e" />
          <rect y="7" width="30" height="6" fill="#c8102e" />
        </>
      )}
      {country === "brazil" && (
        <>
          <rect width="30" height="20" fill="#009b3a" />
          <path d="m15 2 12 8-12 8L3 10z" fill="#ffdf00" />
          <circle cx="15" cy="10" r="4.5" fill="#002776" />
        </>
      )}
    </svg>
  </span>
)

const About = () => {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section id="about" className="bg-background/55 py-16 md:py-20 px-6 md:px-8">
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
            <p className="text-foreground text-base leading-relaxed text-justify">{t.intro}</p>
            <div className="flex items-center gap-4">
              <img
                src={pacificoCrest}
                alt="Escudo del Club Atlético Pacífico"
                className="h-24 w-24 shrink-0 object-contain"
              />
              <p className="text-foreground text-base leading-relaxed text-justify">
                {t.basketBeforeClub}
                <span className="text-primary font-medium">{t.clubName}</span>
                {t.basketAfterClub}
              </p>
            </div>
            <p className="text-foreground text-base leading-relaxed text-justify">
              {t.bmxBefore}<span className="font-semibold text-primary">{t.bmxHighlight}</span>{t.bmxAfter}
            </p>
            <p className="text-foreground text-base leading-relaxed text-justify">
              {t.photographyBefore}<span className="font-semibold text-primary">{t.photographyHighlight}</span>{t.photographyAfter}
            </p>
            <p className="text-foreground text-base leading-relaxed text-justify">
              {t.travelBefore}
              <span className="whitespace-nowrap">
                <span className="font-semibold text-primary">{t.countryFrance}</span>
                <CountryFlag country="france" label={t.countryFrance} />
              </span>
              {t.travelBetweenFranceSpain}
              <span className="whitespace-nowrap">
                <span className="font-semibold text-primary">{t.countrySpain}</span>
                <CountryFlag country="spain" label={t.countrySpain} />
              </span>
              {t.travelBetweenSpainEngland}
              <span className="whitespace-nowrap">
                <span className="font-semibold text-primary">{t.countryEngland}</span>
                <CountryFlag country="england" label={t.countryEngland} />
              </span>
              {t.travelBetweenEnglandBrazil}
              <span className="whitespace-nowrap">
                <span className="font-semibold text-primary">{t.countryBrazil}</span>
                <CountryFlag country="brazil" label={t.countryBrazil} />
              </span>
              {t.travelAfter}
            </p>
            <p className="text-foreground text-base leading-relaxed text-justify">
              {t.cookingBefore}<span className="font-semibold text-primary">{t.cookingHighlight}</span>{t.cookingAfter}
            </p>
            <p className="text-foreground text-base leading-relaxed text-justify">{t.closing}</p>
            <Link
              to="/work#experience"
              className="w-fit rounded-full border border-primary px-5 py-2.5 text-sm text-primary transition-all duration-300 ease-out hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {t.viewExperience}
            </Link>
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
                className={`rounded-3xl px-7 py-6 flex items-center gap-4 transition-transform duration-300 ease-out hover:-translate-y-1 ${
                  stat.highlight
                    ? "bg-transparent backdrop-blur-sm border border-primary/70 hover:border-primary"
                    : "bg-transparent backdrop-blur-sm border border-border/40"
                }`}
              >
                <span className="text-2xl">{stat.icon}</span>
                <div className="flex-1">
                  <p
                    className={`text-xs uppercase tracking-widest mb-1 text-primary ${
                      stat.highlight ? "font-bold" : "font-semibold"
                    }`}
                  >
                    {stat.label}
                  </p>
                  {Array.isArray(stat.value) ? (
                    <div className="flex flex-col gap-1.5">
                      {stat.value.map((line) => {
                        const cls =
                          "text-foreground text-sm font-medium underline underline-offset-4 decoration-primary/40 hover:text-primary hover:decoration-primary transition-colors"
                        return (
                          <p key={line.text} className="text-sm font-medium">
                            {!line.href ? (
                              <span className="text-foreground">{line.text}</span>
                            ) : line.href.startsWith("/") ? (
                              <Link to={line.href} className={cls}>
                                {line.text}
                              </Link>
                            ) : (
                              <a
                                href={line.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cls}
                              >
                                {line.text}
                              </a>
                            )}
                          </p>
                        )
                      })}
                    </div>
                  ) : (
                    <p className="text-foreground text-sm font-medium">
                      {stat.value}
                    </p>
                  )}
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