import { useEffect } from "react"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import ContactHero from "../components/ContactHero"
import CaseStudies from "../components/CaseStudies"
import Testimonials from "../components/Testimonials"
import ContactAbout from "../components/ContactAbout"
import ContactProcess from "../components/ContactProcess"
import ContactForm from "../components/ContactForm"
import WhatsAppFloat from "../components/WhatsAppFloat"

// Landing para clientes: destino del link directo y del QR de la tarjeta.
// Orden pensado para generar confianza: quién soy y cómo contactarme, casos reales,
// testimonios, la persona detrás, cómo trabajamos y, al final, el formulario corto.
const ContactPage = () => {
  const { language } = useLanguage()
  const pageTitle = translations[language].contact.pageTitle

  useEffect(() => {
    const previousTitle = document.title
    document.title = pageTitle
    return () => {
      document.title = previousTitle
    }
  }, [pageTitle])

  return (
    <>
      <ContactHero />
      <CaseStudies />
      <Testimonials />
      <ContactAbout />
      <ContactProcess />
      <ContactForm />
      <WhatsAppFloat />
    </>
  )
}

export default ContactPage
