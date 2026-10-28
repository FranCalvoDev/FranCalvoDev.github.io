import { m, useReducedMotion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import { fadeUp, staggerContainer } from "../utils/animations"
import { CONTACT_FORM_ID, whatsappUrl } from "../utils/contactInfo"
import { CheckCircleIcon, PinIcon, WhatsAppIcon } from "./ContactIcons"
import avatar from "../assets/contact/francisco-avatar.webp"

const ContactHero = () => {
  const { language } = useLanguage()
  const t = translations[language].contact.hero
  const whatsappMessage = translations[language].contact.whatsappMessage
  const reduceMotion = useReducedMotion()

  const scrollToForm = () =>
    document
      .getElementById(CONTACT_FORM_ID)
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" })

  return (
    <section className="bg-background/55 px-6 pt-24 pb-14 md:px-8 md:pt-36 md:pb-24">
      <m.div
        className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* Persona real detrás del sitio: foto, nombre y ubicación */}
        <m.div variants={fadeUp} className="flex items-center gap-4 text-left">
          <img
            src={avatar}
            alt="Francisco Calvo"
            width={80}
            height={80}
            className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-primary/70 ring-offset-4 ring-offset-background md:h-20 md:w-20"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-lg font-semibold leading-tight text-white md:text-xl">Francisco Calvo</span>
            <span className="text-sm text-foreground">{t.role}</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              <PinIcon />
              {t.location}
            </span>
          </div>
        </m.div>

        {/* Frase de posicionamiento */}
        <m.div variants={fadeUp} className="flex flex-col items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-widest text-primary md:text-sm">
            {t.kicker}
          </span>
          <h1 className="text-balance text-[2rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.08]">
            {t.titleStart}
            <span className="text-primary">{t.titleHighlight}</span>
            {t.titleEnd}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-foreground md:text-lg">{t.lead}</p>
        </m.div>

        {/* CTAs: WhatsApp primero, formulario como alternativa */}
        <m.div variants={fadeUp} className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={whatsappUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_0_28px_rgba(121,191,15,0.35)] transition-all duration-300 ease-out hover:opacity-90 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <WhatsAppIcon />
              {t.whatsappCta}
            </a>
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center rounded-full border border-primary px-7 py-3.5 text-base font-semibold text-primary transition-all duration-300 ease-out hover:bg-primary hover:text-primary-foreground active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {t.formCta}
            </button>
          </div>
          <p className="inline-flex items-start gap-2 text-left text-sm text-foreground sm:items-center">
            <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:mt-0" />
            {t.reassurance}
          </p>
        </m.div>
      </m.div>
    </section>
  )
}

export default ContactHero
