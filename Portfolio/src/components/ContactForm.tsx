import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import { CONTACT, CONTACT_FORM_ID, whatsappUrl } from "../utils/contactInfo"
import PageHeader from "./PageHeader"
import ContactQuiz from "./ContactQuiz"
import { LinkedInIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./ContactIcons"

const whatsappButtonClass =
  "inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all duration-300 ease-out hover:opacity-90 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"

const ContactForm = () => {
  const { language } = useLanguage()
  const t = translations[language].contact.form
  const whatsappCta = translations[language].contact.hero.whatsappCta
  const whatsappHref = whatsappUrl(translations[language].contact.whatsappMessage)

  const channels = [
    { href: CONTACT.phoneHref, label: t.phoneLabel, value: CONTACT.phoneDisplay, Icon: PhoneIcon, external: false },
    { href: `mailto:${CONTACT.email}`, label: t.emailLabel, value: CONTACT.email, Icon: MailIcon, external: false },
    { href: CONTACT.linkedin, label: "LinkedIn", value: "Francisco Calvo", Icon: LinkedInIcon, external: true },
  ]

  return (
    <section id={CONTACT_FORM_ID} className="scroll-mt-6 bg-background/55 px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <PageHeader title={t.title} subtitle={t.subtitle} as="h2" />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Cuestionario interactivo: preguntas de opción y al final el email */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <ContactQuiz />
          </motion.div>

          {/* Canales directos, para quien prefiere no completar nada */}
          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-6 rounded-3xl border border-primary/50 bg-secondary/30 p-6 backdrop-blur-sm sm:p-8 lg:col-span-2"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">{t.channelsTitle}</h3>
              <p className="mt-1 text-sm text-foreground">{t.channelsText}</p>
            </div>

            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={whatsappButtonClass}>
              <WhatsAppIcon />
              {whatsappCta}
            </a>

            <ul className="flex flex-col gap-4">
              {channels.map(({ href, label, value, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-widest text-foreground/80">{label}</span>
                      <span className="block break-all text-sm font-medium text-white transition-colors duration-200 group-hover:text-primary">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <PinIcon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-widest text-foreground/80">{t.locationLabel}</span>
                  {t.locations.map((place) => (
                    <span key={place} className="block text-sm font-medium text-white">
                      {place}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
