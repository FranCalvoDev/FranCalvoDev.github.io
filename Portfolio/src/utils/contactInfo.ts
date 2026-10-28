// Datos de contacto en un solo lugar: si cambia el número o el mail, se actualiza acá.
export const CONTACT = {
  phoneDisplay: "+54 9 291 508-1681",
  phoneHref: "tel:+5492915081681",
  // Formato internacional sin "+": 54 (Argentina) + 9 (celular) + característica + número
  whatsappNumber: "5492915081681",
  email: "franciscocalvo.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/francisco-calvo-5445582ba/",
  formEndpoint: "https://formspree.io/f/mkokgyld",
} as const

// Ancla de la sección del formulario (el HashRouter usa el "#", así que se scrollea por id)
export const CONTACT_FORM_ID = "contacto-formulario"

export const whatsappUrl = (message: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
