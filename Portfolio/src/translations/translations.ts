import fc from "../assets/projects/FC_new.png"
import sneakerhub1 from "../assets/projects/sneakerhub-1.png"
import sneakerhub2 from "../assets/projects/sneakerhub-2.png"
import sneakerhub3 from "../assets/projects/sneakerhub-3.png"
import sneakerhub4 from "../assets/projects/sneakerhub-4.png"
import sneakerhub5 from "../assets/projects/sneakerhub-5.png"
import distribuidoraVarela1 from "../assets/projects/Prototipo_DistribuidoraVarela-1.png"
import distribuidoraVarela2 from "../assets/projects/Prototipo_DistribuidoraVarela-2.png"
import distribuidoraVarela3 from "../assets/projects/Prototipo_DistribuidoraVarela-3.png"
import distribuidoraVarela4 from "../assets/projects/Prototipo_DistribuidoraVarela-4.png"
import distribuidoraVarela5 from "../assets/projects/Prototipo_DistribuidoraVarela-5.png"
import distribuidoraVarela6 from "../assets/projects/Prototipo_DistribuidoraVarela-6.png"
import distribuidoraVarela7 from "../assets/projects/Prototipo_DistribuidoraVarela-7.png"
import protoRominetta from "../assets/projects/Proto-Rominetta.png"
import protoRominetta1 from "../assets/projects/Proto-Rominetta1.png"
import protoRominetta2 from "../assets/projects/Proto-Rominetta2.png"
import protoRominetta3 from "../assets/projects/Proto-Rominetta3.png"
import hsghogar1 from "../assets/projects/HSG-hogar.png"
import hsghogar2 from "../assets/projects/HSG-hogar2.png"
import hsghogar3 from "../assets/projects/HSG-hogar3.png"
import hsghogar4 from "../assets/projects/HSG-hogar4.png"
import hsghogar5 from "../assets/projects/HSG-hogar5.png"
import tbd1 from "../assets/projects/TBD-1.png"
import tbd2 from "../assets/projects/TBD-2.png"
import tbdLogo from "../assets/projects/TBD-logo.png"
import tbd4 from "../assets/projects/TBD-4.png"


export type ProjectItem = {
  title: string
  category: string
  description: string
  techs: string[]
  github: string | null
  demo: string | null
  status: string
  images: string[]
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  location: string
  description: string[]
}

export type StatLine = {
  icon: string
  text: string
  href?: string
}

export type StatItem = {
  icon: string
  label: string
  value: string | StatLine[]
  highlight?: boolean
}

export type SkillCategory = {
  category: string
  items: string[]
}

export type CaseStudy = {
  client: string
  sector: string
  status: "finished" | "inprogress"
  headline: string
  challenge: string
  solution: string
  results: string[]
  techs: string[]
  images: string[]
  coverAlt: string
}

export type Testimonial = {
  quote: string
  name: string
  business: string
}

export type ContactFact = {
  icon: string
  title: string
  text: string
}

export type EducationItem = {
  title: string
  institution: string
  period: string
  status?: string
  href?: string
}

export type EducationGroup = {
  label: string
  items: EducationItem[]
}

export type QuizOption = {
  id: string
  icon: string
  label: string
  hint?: string
}

export type QuizQuestion = {
  id: string
  step: string
  title: string
  multiple?: boolean
  options: QuizOption[]
}

// Caso real que se muestra al final según el rubro y los objetivos elegidos
export type QuizMatch = {
  business: string[]
  goals: string[]
  text: string
}

export type ProcessStep = {
  title: string
  text: string
}

export type SpecItemTranslation = {
  name: string
  labels: Record<string, string>
  values?: Record<string, string>
}

const esSpecItems: Record<string, SpecItemTranslation> = {
  pc: {
    name: "PC",
    labels: { cpu: "CPU", gpu: "GPU", ram: "RAM", storage: "Almacenamiento", os: "SO" },
  },
  monitor: {
    name: "Monitor",
    labels: { model: "Modelo", size: "Tamaño", resolution: "Resolución", refreshRate: "Tasa de refresco", panel: "Panel" },
    values: { monitorSize: "24 pulgadas" },
  },
  laptop: {
    name: "Laptop",
    labels: { model: "Modelo", cpu: "CPU", gpu: "GPU", ram: "RAM", storage: "Almacenamiento" },
  },
  keyboard: {
    name: "Teclado",
    labels: { layout: "Diseño" },
    values: { keyboardLayout: "A definir" },
  },
  mouse: {
    name: "Mouse",
    labels: { model: "Modelo", dpi: "DPI" },
  },
  camera: {
    name: "Cámara",
    labels: { model: "Modelo", videoResolution: "Resolución de video" },
    values: { cameraVideoResolution: "Hasta 4K a 30 fps, 2.7K a 60 fps y 1080p a 120 fps" },
  },
  "portable-speaker": {
    name: "Parlante portátil",
    labels: { model: "Modelo" },
  },
  whiteboard: {
    name: "Pizarra",
    labels: { taskManager: "Gestor de tareas", emptiedForPhotos: "Vacío para fotos" },
    values: { whiteboardTaskManager: "Todo lo que necesitás" },
  },
  tripod: {
    name: "Trípode",
    labels: { brand: "Marca" },
  },
  chair: {
    name: "Silla",
    labels: { brand: "Marca", comfort: "Comodidad" },
    values: { chairBrand: "Desconocida" },
  },
  headphones: {
    name: "Auriculares",
    labels: { model: "Modelo" },
  },
  "carry-bag": {
    name: "Bolso",
    labels: { brand: "Marca", extras: "Extras" },
    values: { carryBagExtras: "Bolsillo para botella de agua" },
  },
}

const enSpecItems: Record<string, SpecItemTranslation> = {
  pc: {
    name: "PC",
    labels: { cpu: "CPU", gpu: "GPU", ram: "RAM", storage: "Storage", os: "OS" },
  },
  monitor: {
    name: "Monitor",
    labels: { model: "Model", size: "Size", resolution: "Resolution", refreshRate: "Refresh rate", panel: "Panel" },
    values: { monitorSize: "24 inches" },
  },
  laptop: {
    name: "Laptop",
    labels: { model: "Model", cpu: "CPU", gpu: "GPU", ram: "RAM", storage: "Storage" },
  },
  keyboard: {
    name: "Keyboard",
    labels: { layout: "Layout" },
    values: { keyboardLayout: "TBD" },
  },
  mouse: {
    name: "Mouse",
    labels: { model: "Model", dpi: "DPI" },
  },
  camera: {
    name: "Camera",
    labels: { model: "Model", videoResolution: "Video Resolution" },
    values: { cameraVideoResolution: "Up to 4K at 30 fps, 2.7K at 60 fps, and 1080p at 120 fps" },
  },
  "portable-speaker": {
    name: "Portable Speaker",
    labels: { model: "Model" },
  },
  whiteboard: {
    name: "Whiteboard",
    labels: { taskManager: "TaskManager", emptiedForPhotos: "Emptied for photos" },
    values: { whiteboardTaskManager: "All you need" },
  },
  tripod: {
    name: "Tripod",
    labels: { brand: "Brand" },
  },
  chair: {
    name: "Chair",
    labels: { brand: "Brand", comfort: "Comfort" },
    values: { chairBrand: "Unknown" },
  },
  headphones: {
    name: "Headphones",
    labels: { model: "Model" },
  },
  "carry-bag": {
    name: "Carry Bag",
    labels: { brand: "Brand", extras: "Extras" },
    values: { carryBagExtras: "Pocket for water bottle" },
  },
}

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Skills",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      blog: "Blog",
      work: "Trabajo",
      more: "Más",
    },
    hero: {
      greeting: "Hola, soy",
      titleLine1: "-Desarrollador ",
      titleLine1Highlight: "Full-Stack",
      titleLine2: "-Analista de",
      titleLine2Highlight: "Sistemas",
      descPart1:
        "Analizo y creo los requerimientos para convertirlos en soluciones.",
      descBilingual: "Bilingüe — ",
      descBilingualHighlight: "Español / Inglés B2",
      viewProjects: "Ver proyectos",
      contactMe: "Contactame",
      downloadCV: "Descargar CV",
      cvLabel: "Currículum",
    },
    about: {
      title: "Sobre mí",
      intro:
        "¡Hola! Soy Francisco, de Bahía Blanca, y también tengo nacionalidad española. Las computadoras me atraparon a los 15 años y desde entonces no las solté: nunca tuve una consola, mi lugar siempre fue frente a la PC, probando cosas y aprendiendo.",
      basketBeforeClub:
        "En Bahía Blanca, la capital del básquet, este deporte se vive distinto. Fui jugador y hoy lo sigo disfrutando desde la tribuna como hincha de ",
      clubName: "Club Atlético Pacífico",
      basketAfterClub:
        ": no hay nada como una noche de partido con la hinchada a pleno.",
      bmxBefore: "Pasé varios años arriba de una bicicleta compitiendo en ",
      bmxHighlight: "BMX Racing",
      bmxAfter:
        ", y llegué a ser el segundo mejor de Argentina en mi categoría. De esa etapa me quedaron la disciplina, las ganas de mejorar en cada carrera y algún que otro golpe que me enseñó a levantarme rápido.",
      photographyBefore: "La ",
      photographyHighlight: "fotografía",
      photographyAfter:
        " la llevo en la sangre: crecí entre cámaras gracias a mi viejo, que se dedicaba a eso, y desde entonces sacar fotos es mi forma de mirar el mundo.",
      travelBefore: "Me encanta viajar, y si hay viaje, hay fotos. Tuve la suerte de conocer ",
      countryFrance: "Francia",
      countrySpain: "España",
      countryEngland: "Inglaterra",
      countryBrazil: "Brasil",
      travelBetweenFranceSpain: ", ",
      travelBetweenSpainEngland: ", ",
      travelBetweenEnglandBrazil: " y ",
      travelAfter: ", y cada destino me dejó con ganas de conocer el próximo.",
      cookingBefore: "Y como buen hermano de ",
      cookingHighlight: "chef",
      cookingAfter:
        ", también me gusta cocinar, aunque las comparaciones con él mejor evitarlas.",
      closing:
        "Si compartimos alguna de estas pasiones, escribime: siempre hay tema para charlar.",
      viewExperience: "Ver experiencia",
      stats: [
        {
          icon: "🎓",
          label: "Educación",
          value: [
            { icon: "🎓", text: "Análisis de Sistemas · Juan XXIII · 2023–2026", href: "https://juan23.edu.ar/carreras/tecnicatura-superior-en-analisis-de-sistemas/" },
            { icon: "💻", text: "BackEnd Developer · UTN · 2026", href: "https://sceu.frba.utn.edu.ar/e-learning/detalle/curso/3801/curso-de-backend-developer-turno-manana" },
            { icon: "🐍", text: "Python Inicial · Min. Educación CABA · 2024" },
            { icon: "🎨", text: "Web Designer · Digital House · 2024", href: "https://www.digitalhouse.com/productos/programacion/web-designer" },
            { icon: "🇬🇧", text: "First Certificate B2 · Cambridge · 2022", href: "https://www.cambridgeenglish.org/es/exams-and-tests/first/" },
          ],
        },
        {
          icon: "💼",
          label: "Experiencia reciente",
          value: [
            { icon: "🛠️", text: "Analista / Soporte IT", href: "/work#projects" },
            { icon: "👟", text: "Sistema para zapatería", href: "/work#projects" },
            { icon: "📦", text: "ERP para PyB Pigüé", href: "/work#projects" },
          ],
        },
        { icon: "🌍", label: "Idiomas", value: "Español · Inglés" },
        { icon: "📍", label: "Ubicación", value: "Bahía Blanca y CABA, Argentina" },
        {
          icon: "🏀",
          label: "Extra",
          value: [
            { icon: "🏀", text: "Árbitro Federado de Básquetbol" },
            { icon: "📷", text: "Fotógrafo Profesional", href: "/gallery" },
          ],
          highlight: true,
        },
      ] as StatItem[],
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "Tecnologías utilizadas · Ordenadas por nivel de experiencia (izquierda → derecha)",
      categories: [
        { category: "Lenguajes", items: ["Python", "JavaScript", "JSON", "SQL", "HTML", "CSS", "TypeScript", "PHP"] },
        { category: "Frameworks & Librerías", items: ["React.js", "Tailwind CSS", "Node.js", "Next.js", "Vue.js", "Angular"] },
        { category: "Bases de Datos", items: ["MySQL", "PostgreSQL", "SQLite", "Supabase", "MongoDB"] },
        { category: "Herramientas", items: ["Git", "GitHub", "Figma", "Docker", "Notion", "GitLab", "Miro"] },
        { category: "Desarrollo Web", items: ["Sitios responsivos", "Manipulación del DOM", "APIs REST", "UX/UI", "Internacionalización (i18n)", "Deploy"] },
      ] as SkillCategory[],
    },
    projects: {
      title: "Proyectos",
      inProgress: "En proceso",
      imageSoon: "Imagen próximamente",
      linksSoon: "Links disponibles próximamente",
      privateProject: "Proyecto privado",
      galleryHint: "Clickea y navega",
      galleryOpen: "Abrir la galería de {title}",
      galleryLabel: "Galería de imágenes de {title}",
      galleryClose: "Cerrar la galería",
      galleryPrevious: "Imagen anterior",
      galleryNext: "Imagen siguiente",
      screenshotAlt: "{title}: captura {n}",
      items: [
             {
          title: "Portfolio Personal",
          category: "Portfolio profesional y showcase",
          description:
            "**Portfolio profesional** desarrollado con React y TypeScript. Muestra de proyectos, habilidades y experiencia laboral.",
          techs: ["React.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/FranCalvoDev/Portfolio",
          demo: null,
          status: "finished",
          images: [fc],
        },
        {
          title: "SneakerHub",
          category: "E-commerce de calzado",
          description:
            "**Aplicación web de e-commerce** orientada a la venta de zapatillas. Desarrollo Full-Stack con interfaz dinámica y gestión de productos.",
          techs: ["JavaScript", "React.js", "MySQL", "CSS"],
          github: null,
          demo: null,
          status: "finished",
          images: [sneakerhub1, sneakerhub2, sneakerhub3, sneakerhub4, sneakerhub5],
        },
  
        {
          title: "PyB Pigüé",
          category: "ERP para distribuidora comercial",
          description:
            "**ERP a medida** para PyB Pigüé, distribuidora comercial: ventas y pedidos, stock, clientes, reparto y finanzas en un solo sistema. Proyecto en desarrollo activo.",
          techs: ["PHP", "MySQL", "JavaScript"],
          github: null,
          demo: null,
          status: "inprogress",
          images: [
            distribuidoraVarela1,
            distribuidoraVarela2,
            distribuidoraVarela3,
            distribuidoraVarela4,
            distribuidoraVarela5,
            distribuidoraVarela6,
            distribuidoraVarela7,
          ],
        },
        {
          title: "Rominetta",
          category: "Gestión de inventario y punto de venta",
          description:
            "**Sistema de control de inventario** por matriz de tallas, punto de venta, registro de ventas y facturación electrónica con ARCA para una tienda de calzado.",
          techs: ["React", "TypeScript", "Node.js", "SQLite"],
          github: null,
          demo: null,
          status: "Finalizado",
          images: [
            protoRominetta,
            protoRominetta1,
            protoRominetta2,
            protoRominetta3,
          ],
        },
        {
          title: "HSG Hogar",
          category: "Catálogo digital para el hogar",
          description:
            "**Aplicación web tipo catálogo** para la venta de productos para el hogar. Desarrollo Full-Stack con interfaz dinámica, gestión de productos y contacto directo por WhatsApp. No procesa pagos online por pedido del cliente.",
          techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
          github: null,
          demo: null,
          status: "inprogress",
          images: [
            hsghogar1,
            hsghogar2,
            hsghogar3,
            hsghogar4,
            hsghogar5,
          ],
        },
        {
          title: "TBD · MiSemana",
          category: "Planificador semanal y metas",
          description:
            "**App de planificación semanal** para web y Android: semana tipo por bloques, tareas que se ubican en los huecos libres, metas semanales y estadísticas. Funciona sin conexión y sincroniza entre dispositivos con un servidor autoalojado.",
          techs: ["JavaScript", "Vite", "Capacitor", "Android", "PostgreSQL", "Docker", "Vitest"],
          github: "https://github.com/FranCalvoDev/TBD",
          demo: null,
          status: "finished",
          images: [tbdLogo, tbd1, tbd2, tbd4],
        },
      ] as ProjectItem[],
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          role: "Desarrollador Full-Stack / Analista de Sistemas — Freelance",
          company: "Proyectos independientes",
          period: "2025 – Actualidad",
          location: "Bahía Blanca, Buenos Aires",
          description: [
            "Desarrollo de soluciones de software orientadas a necesidades reales de negocio, participando en el análisis de requerimientos, diseño, desarrollo, integración de datos, despliegue y documentación.",
            "Participación en el ciclo completo de desarrollo, desde el relevamiento de necesidades y definición de alcance hasta la implementación, pruebas, despliegue y entrega de las soluciones.",
            "Diseño y desarrollo de aplicaciones web Full-Stack, interfaces dinámicas y sistemas de gestión adaptados a los procesos de cada proyecto.",
            "Diseño, modelado y administración de bases de datos, junto con la integración de servicios, APIs y procesos de negocio.",
            "Implementación de automatizaciones, control de acceso, gestión de información y funcionalidades orientadas a mejorar la eficiencia operativa.",
            "Soporte, resolución de incidencias, capacitación de usuarios y elaboración de documentación técnica para facilitar la continuidad y el mantenimiento de las soluciones.",
          ],
        },
        {
          role: "Analista de Sistemas / Desarrollador",
          company: "Estudio Contable Privado",
          period: "Abril 2025 – Diciembre 2025",
          location: "Bahía Blanca, Buenos Aires",
          description: [
            "Relevamiento, análisis y organización de información en entornos digitales utilizando Python para automatización de tareas y procesamiento de datos.",
            "Gestión y consulta de bases de datos relacionales con MySQL y manejo de estructuras de datos.",
            "Soporte técnico y desarrollo de scripts para automatización de procesos internos.",
            "Uso de Git para control de versiones y gestión de cambios.",
            "Colaboración en el desarrollo de interfaces web con JavaScript y React.js.",
            "Trabajo con metodologías ágiles y documentación técnica en plataformas colaborativas.",
          ],
        },
        {
          role: "Proyectos Académicos",
          company: "Instituto Juan XXIII",
          period: "2023 – Presente",
          location: "Bahía Blanca, Buenos Aires",
          description: [
            "Desarrollo de aplicaciones web Full-Stack con JavaScript, HTML, CSS y consumo de APIs REST.",
            "Implementación de interfaces dinámicas y reactivas con React.js, Vue.js y Angular.",
            "Modelado y administración de bases de datos con MySQL y MongoDB.",
            "Escritura de scripts en Python para procesamiento y análisis de datos.",
            "Uso de Git y GitHub para control de versiones en equipo de 8 personas.",
            "Contenerización de proyectos con Docker para gestión de entornos de desarrollo.",
          ],
        },
   
      ] as ExperienceItem[],
    },
    contact: {
      pageTitle: "Contacto · Francisco Calvo — Sistemas a medida en Bahía Blanca y CABA",
      whatsappMessage: "¡Hola, Francisco! Vi tu página y quiero consultarte por un sistema para mi negocio.",
      hero: {
        role: "Analista de Sistemas · Desarrollador",
        location: "Bahía Blanca y CABA",
        kicker: "Sistemas a medida para comercios y pymes",
        titleStart: "Ordená tu negocio con un sistema ",
        titleHighlight: "hecho a tu medida",
        titleEnd: ".",
        lead: "Stock, ventas, pedidos y clientes en un solo lugar. Lo diseño y lo programo yo, pensando en cómo trabaja tu negocio.",
        whatsappCta: "Escribime por WhatsApp",
        formCta: "Contame tu caso en 1 minuto",
        reassurance: "Hablás directamente conmigo. La primera charla es sin compromiso.",
      },
      cases: {
        title: "Casos reales",
        subtitle: "Dos negocios, dos problemas concretos y una solución a medida para cada uno.",
        challengeLabel: "El desafío",
        solutionLabel: "La solución",
        resultsLabel: "Resultado",
        progressLabel: "Lo que ya incluye",
        finished: "Finalizado",
        inProgress: "En desarrollo",
        techLabel: "Hecho con",
        viewScreens: "Ver capturas",
        items: [
          {
            client: "Rominetta",
            sector: "Tienda de calzado",
            status: "finished",
            headline: "Stock por talle, ventas y facturación con ARCA en un solo sistema.",
            challenge:
              "En una zapatería, cada modelo se vende en siete talles. Sin un sistema, saber qué queda, qué se vendió y qué hay que reponer lleva tiempo y genera errores.",
            solution:
              "Diseñé y programé un sistema de gestión para el local: matriz de talles, punto de venta y registro de cada venta.",
            results: [
              "Stock de cada modelo por talle, del 35 al 41, en una sola pantalla.",
              "Cada venta descuenta el stock en el momento.",
              "Facturación electrónica integrada con ARCA (ex AFIP).",
              "Alertas cuando un talle está por agotarse.",
              "Cobro con tarjeta, sin contacto o en efectivo, y resumen de las ventas del día.",
            ],
            techs: ["React", "TypeScript", "Node.js", "SQLite"],
            images: [protoRominetta1, protoRominetta3, protoRominetta2],
            coverAlt:
              "Panel del sistema de Rominetta con las ventas del día, el valor del stock y las alertas de talles por agotarse",
          },
          {
            client: "PyB Pigüé",
            sector: "Distribuidora comercial",
            status: "inprogress",
            headline: "Ventas, stock, reparto y finanzas en un solo ERP hecho a medida.",
            challenge:
              "Una distribuidora maneja al mismo tiempo ventas, pedidos, stock, reparto y cobranzas, y necesita ver todo en un solo lugar para tener el control.",
            solution:
              "Un ERP a medida que reúne ventas, pedidos, stock, clientes, reparto y finanzas en un solo sistema.",
            results: [
              "Toma de pedidos y listas de precios según el tipo de cliente.",
              "Hojas de ruta y seguimiento de cada envío.",
              "Stock con alertas de mínimo y control de mermas.",
              "Cobranzas, cuentas corrientes y control de caja diaria.",
              "Un acceso para cada rol: administración, preventa y reparto.",
            ],
            techs: ["PHP", "MySQL", "JavaScript"],
            images: [
              distribuidoraVarela2,
              distribuidoraVarela3,
              distribuidoraVarela6,
              distribuidoraVarela5,
              distribuidoraVarela4,
              distribuidoraVarela7,
            ],
            coverAlt:
              "Menú principal del ERP de PyB Pigüé, con los módulos de venta, entregas, finanzas, stock y clientes",
          },
        ] as CaseStudy[],
      },
      testimonials: {
        title: "Lo que dicen mis clientes",
        // La sección se muestra sola cuando hay al menos un testimonio real, con nombre y negocio:
        // { quote: "…", name: "Nombre Apellido", business: "Negocio, ciudad" }
        items: [] as Testimonial[],
      },
      about: {
        title: "Quién está detrás",
        intro:
          "Soy Francisco Calvo, analista de sistemas y desarrollador. Trabajo con comercios y pymes: entiendo cómo funciona tu negocio y lo convierto en un sistema que usás todos los días.",
        photoAlt: "Retrato de Francisco Calvo",
        location: {
          icon: "📍",
          title: "Bahía Blanca y CABA",
          text: "Vivo entre las dos ciudades y trabajo con negocios de ambas y sus alrededores, en persona o a distancia.",
        } as ContactFact,
        educationTitle: "Formación",
        education: [
          {
            label: "Educación formal",
            items: [
              {
                title: "Técnico Superior en Análisis de Sistemas",
                institution: "Instituto Juan XXIII",
                period: "2023 – 2026",
                status: "En curso, +90 %",
                href: "https://juan23.edu.ar/carreras/tecnicatura-superior-en-analisis-de-sistemas/",
              },
              {
                title: "Bachiller en Economía y Administración",
                institution: "Escuela Superior de Comercio “Prof. Prudencio Cornejo” (EPUNS)",
                period: "2021",
              },
            ],
          },
          {
            label: "Cursos y certificaciones",
            items: [
              {
                title: "Backend Developer",
                institution: "Universidad Tecnológica Nacional (UTN)",
                period: "2026",
                status: "En curso",
                href: "https://sceu.frba.utn.edu.ar/e-learning/detalle/curso/3801/curso-de-backend-developer-turno-manana",
              },
              {
                title: "Web Designer",
                institution: "Digital House, con aval de Mercado Libre y Globant",
                period: "2024",
                href: "https://www.digitalhouse.com/productos/programacion/web-designer",
              },
              {
                title: "Python — Programación Inicial",
                institution: "Ministerio de Educación de la Ciudad de Buenos Aires",
                period: "2024",
              },
              {
                title: "First Certificate in English (B2)",
                institution: "Cambridge Assessment English",
                period: "2022",
                href: "https://www.cambridgeenglish.org/es/exams-and-tests/first/",
              },
            ],
          },
        ] as EducationGroup[],
        linkedin: "Ver mi perfil en LinkedIn",
        moreWork: "Ver todos mis proyectos",
      },
      process: {
        title: "Cómo trabajamos",
        subtitle: "Un proceso simple, sin tecnicismos y sin sorpresas.",
        steps: [
          {
            title: "Charlamos",
            text: "Me contás cómo trabajás hoy y qué te complica. Si estás en Bahía Blanca o en CABA, lo vemos en persona.",
          },
          {
            title: "Te paso una propuesta",
            text: "Por escrito: qué incluye, en cuánto tiempo y cuánto cuesta. Sin letra chica.",
          },
          {
            title: "Lo construimos juntos",
            text: "Te muestro avances para que los pruebes y ajustemos sobre la marcha.",
          },
          {
            title: "Te lo entrego y te acompaño",
            text: "Lo dejo funcionando, te enseño a usarlo y te dejo todo documentado. Después, sigo dando soporte.",
          },
        ] as ProcessStep[],
      },
      form: {
        title: "Contame tu caso",
        subtitle: "Cinco preguntas rápidas, menos de un minuto. Al final dejás tu email y te respondo personalmente.",
        channelsTitle: "¿Preferís hablar ahora?",
        channelsText: "Escribime o llamame directamente.",
        phoneLabel: "Teléfono",
        emailLabel: "Email",
        locationLabel: "Ubicación",
        locations: ["Bahía Blanca, Buenos Aires", "CABA, Buenos Aires"],
      },
      quiz: {
        stepWord: "Paso",
        ofWord: "de",
        back: "Atrás",
        next: "Siguiente",
        multipleHint: "Podés elegir varias opciones.",
        contactStep: "Tus datos",
        // Los "id" no se traducen: se usan para guardar el progreso y elegir el caso parecido
        questions: [
          {
            id: "negocio",
            step: "Negocio",
            title: "¿Qué tipo de negocio tenés?",
            options: [
              { id: "comercio", icon: "🛍️", label: "Comercio o local", hint: "Ropa, calzado, ferretería, almacén…" },
              { id: "distribuidora", icon: "🚚", label: "Distribuidora o mayorista" },
              { id: "produccion", icon: "🏭", label: "Fábrica o taller" },
              { id: "servicios", icon: "💼", label: "Servicios", hint: "Estudio, consultorio, agencia…" },
              { id: "gastronomia", icon: "🍽️", label: "Gastronomía" },
              { id: "otro", icon: "✨", label: "Otro rubro" },
            ],
          },
          {
            id: "objetivos",
            step: "Objetivos",
            title: "¿Qué te gustaría resolver?",
            multiple: true,
            options: [
              { id: "stock", icon: "📦", label: "Controlar el stock" },
              { id: "ventas", icon: "💰", label: "Ventas y caja" },
              { id: "facturacion", icon: "🧾", label: "Facturación con ARCA" },
              { id: "pedidos", icon: "🛒", label: "Pedidos y clientes" },
              { id: "reparto", icon: "🗺️", label: "Reparto y logística" },
              { id: "online", icon: "🌐", label: "Vender online o por WhatsApp" },
              { id: "reportes", icon: "📈", label: "Reportes del negocio" },
              { id: "automatizar", icon: "⚙️", label: "Automatizar tareas repetitivas" },
            ],
          },
          {
            id: "situacion",
            step: "Situación actual",
            title: "¿Cómo lo manejás hoy?",
            options: [
              { id: "papel", icon: "📝", label: "En papel o en un cuaderno" },
              { id: "planillas", icon: "🗂️", label: "Con planillas de Excel" },
              { id: "sistema", icon: "💻", label: "Con un sistema que ya no me alcanza" },
              { id: "nada", icon: "🌱", label: "Todavía no lo manejo, estoy arrancando" },
            ],
          },
          {
            id: "equipo",
            step: "Equipo",
            title: "¿Cuántas personas trabajan en el negocio?",
            options: [
              { id: "solo", icon: "👤", label: "Solo yo" },
              { id: "chico", icon: "👥", label: "De 2 a 5" },
              { id: "mediano", icon: "🏬", label: "De 6 a 20" },
              { id: "grande", icon: "🏢", label: "Más de 20" },
            ],
          },
          {
            id: "plazo",
            step: "Plazo",
            title: "¿Para cuándo lo necesitás?",
            options: [
              { id: "ya", icon: "🔥", label: "Lo antes posible" },
              { id: "pronto", icon: "📅", label: "En 1 a 3 meses" },
              { id: "explorando", icon: "🧭", label: "Sin apuro, estoy averiguando" },
            ],
          },
        ] as QuizQuestion[],
        contactTitle: "¡Último paso! Dejame tus datos y te respondo.",
        summaryTitle: "Tu caso",
        matches: [
          {
            business: ["comercio"],
            goals: ["stock", "ventas", "facturacion"],
            text: "Es parecido al sistema que hice para Rominetta: stock por talle, ventas y facturación con ARCA.",
          },
          {
            business: ["distribuidora"],
            goals: ["pedidos", "reparto", "stock"],
            text: "Es parecido al ERP que desarrollamos para PyB Pigüé: pedidos, stock, reparto y finanzas en un solo sistema.",
          },
          {
            business: [],
            goals: ["online"],
            text: "Es parecido al catálogo online de HSG Hogar, con pedidos coordinados por WhatsApp.",
          },
          {
            business: ["servicios"],
            goals: ["automatizar"],
            text: "Es parecido a lo que hice en un estudio contable: automatizar tareas administrativas con Python.",
          },
        ] as QuizMatch[],
        matchFallback: "Cada sistema lo diseño a medida de cómo trabaja tu negocio.",
        promise: "Te respondo personalmente con una primera idea para tu caso, sin compromiso.",
        nameLbl: "Nombre",
        namePlaceholder: "Nombre y apellido",
        emailLbl: "Email",
        emailPlaceholder: "tu@email.com",
        phoneLbl: "WhatsApp (opcional)",
        phonePlaceholder: "Ej.: 291 000-0000",
        phoneHint: "Con característica, por ejemplo: 291 000-0000",
        addComment: "Agregar un comentario",
        commentLbl: "Comentario (opcional)",
        commentPlaceholder: "Contame algo más de tu negocio, si querés.",
        send: "Enviar mis respuestas",
        sending: "Enviando…",
        privacy: "Uso tus datos solo para responderte.",
        successTitle: "¡Gracias, {name}!",
        successText: "Recibí tus respuestas. Te escribo a {email} a la brevedad.",
        successUrgent: "¿Es urgente? Mandame tus respuestas por WhatsApp:",
        error: "No se pudieron enviar tus respuestas. Probá de nuevo o mandámelas por WhatsApp:",
        whatsappIntro: "¡Hola, Francisco! Completé el cuestionario de tu web:",
      },
    },
    footer: {
      rights: "Todos los derechos reservados",
    },
    blog: {
      title: "Blog",
      pageIntro: "Acá comparto lo que voy creando: videos, ideas y notas sobre desarrollo y tecnología.",
      feedTitle: "Actualizado en tiempo real desde Reddit.",
      loading: "Cargando publicaciones...",
      empty: "Todavía no hay publicaciones para mostrar.",
      error: "No pude cargar el RSS de Reddit en este momento.",
      noExcerpt: "Sin extracto disponible.",
      openInReddit: "Abrir en Reddit",
      youtubeEmpty: "Todavía no hay videos para mostrar.",
      tiktokSoon: "Próximamente mi TikTok.",
      visitTiktok: "Ver perfil",
    },
    more: {
      title: "Extra",
      subtitle: "Un espacio para cosas que voy a ir sumando con el tiempo.",
      back: "Volver a Extra",
      gallery: {
        title: "Galería",
        description: "Fotos y capturas de proyectos, eventos y más.",
      },
      specs: {
        title: "Especificaciones",
        description: "El setup y las herramientas con las que trabajo.",
        viewSpecs: "Ver especificaciones",
        notFound: "Elemento no encontrado",
        allItems: "Todos los elementos",
        items: esSpecItems,
      },
      comingSoon: "Próximamente",
      comingSoonDesc: "Estoy preparando más secciones para acá. ¡Volvé pronto!",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About me",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      blog: "Blog",
      work: "Work",
      more: "More",
    },
    hero: {
      greeting: "Hello, I'm",
      titleLine1: "-Full-Stack ",
      titleLine1Highlight: "Developer",
      titleLine2: "-Systems",
      titleLine2Highlight: "Analyst",
      descPart1:
        "I analyze and create requirements to turn them into solutions.",
      descBilingual: "Bilingual — ",
      descBilingualHighlight: "Spanish / English B2",
      viewProjects: "View projects",
      contactMe: "Contact me",
      downloadCV: "Download CV",
      cvLabel: "Resume",
    },
    about: {
      title: "About me",
      intro:
        "Hi! I'm Francisco, from Bahía Blanca, and I also have Spanish citizenship. Computers got me hooked when I was 15, and I haven't let go since: I never had a game console; my place has always been in front of a PC, trying things out and learning.",
      basketBeforeClub:
        "In Bahía Blanca, the capital of basketball, the sport is experienced differently. I used to play, and now I enjoy it from the stands as a fan of ",
      clubName: "Club Atlético Pacífico",
      basketAfterClub:
        ": there's nothing like a game night with the stands packed with passionate fans.",
      bmxBefore: "I spent several years competing in ",
      bmxHighlight: "BMX Racing",
      bmxAfter:
        ", and became the second-best rider in Argentina in my category. That chapter taught me discipline, the drive to improve in every race, and—after a few crashes—how to get back up quickly.",
      photographyBefore: "",
      photographyHighlight: "Photography",
      photographyAfter:
        " is in my blood: I grew up around cameras thanks to my dad, who worked in photography, and taking pictures has been my way of seeing the world ever since.",
      travelBefore:
        "I love traveling, and if there's a trip, there are photos. I've been lucky enough to visit ",
      countryFrance: "France",
      countrySpain: "Spain",
      countryEngland: "England",
      countryBrazil: "Brazil",
      travelBetweenFranceSpain: ", ",
      travelBetweenSpainEngland: ", ",
      travelBetweenEnglandBrazil: " and ",
      travelAfter: ", and every destination has left me eager to discover the next one.",
      cookingBefore: "And as the brother of a ",
      cookingHighlight: "chef",
      cookingAfter:
        ", I also enjoy cooking—though it's probably best not to compare our cooking.",
      closing:
        "If we share any of these passions, get in touch: there's always something to talk about.",
      viewExperience: "View experience",
      stats: [
        {
          icon: "🎓",
          label: "Education",
          value: [
            { icon: "🎓", text: "Systems Analysis · Juan XXIII · 2023–2026", href: "https://juan23.edu.ar/carreras/tecnicatura-superior-en-analisis-de-sistemas/" },
            { icon: "💻", text: "BackEnd Developer · UTN · 2026", href: "https://sceu.frba.utn.edu.ar/e-learning/detalle/curso/3801/curso-de-backend-developer-turno-manana" },
            { icon: "🐍", text: "Intro Python · BA Ministry of Education · 2024" },
            { icon: "🎨", text: "Web Designer · Digital House · 2024", href: "https://www.digitalhouse.com/productos/programacion/web-designer" },
            { icon: "🇬🇧", text: "First Certificate B2 · Cambridge · 2022", href: "https://www.cambridgeenglish.org/es/exams-and-tests/first/" },
          ],
        },
        {
          icon: "💼",
          label: "Recent experience",
          value: [
            { icon: "🛠️", text: "Systems Analyst / IT Support", href: "/work#projects" },
            { icon: "👟", text: "Shoe store system", href: "/work#projects" },
            { icon: "📦", text: "ERP for PyB Pigüé", href: "/work#projects" },
          ],
        },
        { icon: "🌍", label: "Languages", value: "Spanish · English" },
        { icon: "📍", label: "Location", value: "Bahía Blanca and CABA, Argentina" },
        {
          icon: "🏀",
          label: "Extra",
          value: [
            { icon: "🏀", text: "Certified Basketball Referee" },
            { icon: "📷", text: "Professional Photographer", href: "/gallery" },
          ],
          highlight: true,
        },
      ] as StatItem[],
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Technologies used · Sorted by experience level (left → right)",
      categories: [
        { category: "Languages", items: ["Python", "JavaScript", "JSON", "SQL", "HTML", "CSS", "TypeScript", "PHP"] },
        { category: "Frameworks & Libraries", items: ["React.js", "Tailwind CSS", "Node.js", "Next.js", "Vue.js", "Angular"] },
        { category: "Databases", items: ["MySQL", "PostgreSQL", "SQLite", "Supabase", "MongoDB"] },
        { category: "Tools", items: ["Git", "GitHub", "Figma", "Docker", "Notion", "GitLab", "Miro"] },
        { category: "Web Development", items: ["Responsive sites", "DOM Manipulation", "REST APIs", "UX/UI", "Internationalization (i18n)", "Deployment"] },
      ] as SkillCategory[],
    },
    projects: {
      title: "Projects",
      inProgress: "In progress",
      imageSoon: "Image coming soon",
      linksSoon: "Links coming soon",
      privateProject: "Private project",
      galleryHint: "Click and browse",
      galleryOpen: "Open {title} image gallery",
      galleryLabel: "{title} image gallery",
      galleryClose: "Close image gallery",
      galleryPrevious: "Previous image",
      galleryNext: "Next image",
      screenshotAlt: "{title} screenshot {n}",
      items: [
         {
          title: "Personal Portfolio",
          category: "Professional portfolio & showcase",
          description:
            "**Professional portfolio** built with React and TypeScript. Showcase of projects, skills and work experience.",
          techs: ["React.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/FranCalvoDev/Portfolio",
          demo: null,
          status: "finished",
          images: [fc],
        },
        {
          title: "SneakerHub",
          category: "Footwear e-commerce",
          description:
            "**E-commerce web application** focused on sneaker sales. Full-Stack development with dynamic interface and product management.",
          techs: ["JavaScript", "React.js", "MySQL", "CSS"],
          github: null,
          demo: null,
          status: "finished",
          images: [sneakerhub1, sneakerhub2, sneakerhub3, sneakerhub4, sneakerhub5],
        },
        {
          title: "PyB Pigüé",
          category: "ERP for a commercial distributor",
          description:
            "**Custom ERP** for PyB Pigüé, a commercial distributor: sales and orders, stock, customers, deliveries and finance in one system. Project under active development.",
          techs: ["PHP", "MySQL", "JavaScript"],
          github: null,
          demo: null,
          status: "inprogress",
          images: [
            distribuidoraVarela1,
            distribuidoraVarela2,
            distribuidoraVarela3,
            distribuidoraVarela4,
            distribuidoraVarela5,
            distribuidoraVarela6,
            distribuidoraVarela7,
          ],
        },
        {
          title: "Rominetta Management System Prototype",
          category: "Inventory management & point of sale",
          description:
            "**Inventory control system** by size matrix, point of sale, sales tracking and electronic invoicing through ARCA (Argentina's tax agency) for a footwear store.",
          techs: ["React", "TypeScript", "Node.js", "SQLite"],
          github: null,
          demo: null,
          status: "Finished",
          images: [
            protoRominetta1,
            protoRominetta2,
            protoRominetta3,
          ],
        },
        {
          title: "HSG Hogar",
          category: "Digital home goods catalog",
          description:
            "**Catalog-style web application** for selling home products. Full-Stack development with a dynamic interface, product management and direct contact through WhatsApp. Online payments are not processed by client request.",
          techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
          github: null,
          demo: null,
          status: "inprogress",
          images: [
            hsghogar1,
            hsghogar2,
            hsghogar3,
            hsghogar4,
            hsghogar5,
          ],
        },
        {
          title: "TBD · MiSemana",
          category: "Weekly planner & goals",
          description:
            "**Weekly planning app** for web and Android: a template week built from time blocks, tasks that slot into free gaps, weekly goals and statistics. Works offline and syncs across devices through a self-hosted server.",
          techs: ["JavaScript", "Vite", "Capacitor", "Android", "PostgreSQL", "Docker", "Vitest"],
          github: "https://github.com/FranCalvoDev/TBD",
          demo: null,
          status: "finished",
          images: [tbdLogo, tbd1, tbd2, tbd4],
        },
      ] as ProjectItem[],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Full-Stack Developer / Systems Analyst — Freelance",
          company: "Independent Projects",
          period: "2025 – Present",
          location: "Bahía Blanca, Buenos Aires",
          description: [
            "Development of software solutions focused on real business needs, participating in requirements analysis, design, development, data integration, deployment and documentation.",
            "Participation in the complete development lifecycle, from gathering needs and defining scope to implementation, testing, deployment and delivery of solutions.",
            "Design and development of Full-Stack web applications, dynamic interfaces and management systems adapted to each project's processes.",
            "Database design, modeling and administration, together with the integration of services, APIs and business processes.",
            "Implementation of automations, access control, information management and features aimed at improving operational efficiency.",
            "Support, issue resolution, user training and technical documentation to facilitate the continuity and maintenance of solutions.",
          ],
        },
        {
          role: "Systems Analyst / Developer",
          company: "Private Accounting Firm",
          period: "April 2025 – December 2025",
          location: "Bahía Blanca, Buenos Aires",
          description: [
            "Information gathering, analysis and organization in digital environments using Python for task automation and data processing.",
            "Management and querying of relational databases with MySQL and data structure handling.",
            "Technical support and script development for internal process automation.",
            "Use of Git for version control and change management.",
            "Collaboration in web interface development with JavaScript and React.js.",
            "Work with agile methodologies and technical documentation on collaborative platforms.",
          ],
        },
        {
          role: "Academic Projects",
          company: "Instituto Juan XXIII",
          period: "2023 – Present",
          location: "Bahía Blanca, Buenos Aires",
          description: [
            "Full-Stack web application development with JavaScript, HTML, CSS and REST API consumption.",
            "Implementation of dynamic and reactive interfaces with React.js, Vue.js and Angular.",
            "Database modeling and administration with MySQL and MongoDB.",
            "Writing Python scripts for data processing and analysis.",
            "Use of Git and GitHub for version control in a team of 8 people.",
            "Project containerization with Docker for development environment management.",
          ],
        },
      ] as ExperienceItem[],
    },
    contact: {
      pageTitle: "Contact · Francisco Calvo — Custom software in Bahía Blanca & Buenos Aires",
      whatsappMessage: "Hi, Francisco! I saw your website and I'd like to ask about a system for my business.",
      hero: {
        role: "Systems Analyst · Developer",
        location: "Bahía Blanca & Buenos Aires",
        kicker: "Custom software for shops and small businesses",
        titleStart: "Get your business in order with a ",
        titleHighlight: "custom-built system",
        titleEnd: ".",
        lead: "Stock, sales, orders and customers in one place. I design and build it myself, around the way your business works.",
        whatsappCta: "Message me on WhatsApp",
        formCta: "Answer 5 quick questions",
        reassurance: "You talk to me directly. The first conversation comes with no commitment.",
      },
      cases: {
        title: "Real cases",
        subtitle: "Two businesses, two concrete problems and a custom solution for each one.",
        challengeLabel: "The challenge",
        solutionLabel: "The solution",
        resultsLabel: "Result",
        progressLabel: "What it already includes",
        finished: "Completed",
        inProgress: "In progress",
        techLabel: "Built with",
        viewScreens: "View screenshots",
        items: [
          {
            client: "Rominetta",
            sector: "Shoe store",
            status: "finished",
            headline: "Stock by size, sales and electronic invoicing in one system.",
            challenge:
              "In a shoe store, every model comes in seven sizes. Without a system, knowing what's left, what sold and what to restock takes time and leads to mistakes.",
            solution:
              "I designed and built a management system for the store: a size matrix, a point of sale and a record of every sale.",
            results: [
              "Stock for every model by size, from 35 to 41, on a single screen.",
              "Every sale updates the stock instantly.",
              "Electronic invoicing integrated with ARCA, Argentina's tax agency.",
              "Alerts when a size is about to run out.",
              "Card, contactless and cash payments, plus a daily sales summary.",
            ],
            techs: ["React", "TypeScript", "Node.js", "SQLite"],
            images: [protoRominetta1, protoRominetta3, protoRominetta2],
            coverAlt: "Rominetta's dashboard showing today's sales, stock value and low-stock size alerts",
          },
          {
            client: "PyB Pigüé",
            sector: "Commercial distributor",
            status: "inprogress",
            headline: "Sales, stock, deliveries and finance in one custom-built ERP.",
            challenge:
              "A distributor handles sales, orders, stock, deliveries and collections all at once, and needs to see everything in one place to stay in control.",
            solution:
              "A custom ERP that brings sales, orders, stock, customers, deliveries and finance together in one system.",
            results: [
              "Order taking and price lists by customer type.",
              "Delivery routes and tracking for every shipment.",
              "Stock with minimum-level alerts and shrinkage control.",
              "Collections, customer accounts and daily cash control.",
              "Separate access for each role: admin, sales and delivery.",
            ],
            techs: ["PHP", "MySQL", "JavaScript"],
            images: [
              distribuidoraVarela2,
              distribuidoraVarela3,
              distribuidoraVarela6,
              distribuidoraVarela5,
              distribuidoraVarela4,
              distribuidoraVarela7,
            ],
            coverAlt: "Main menu of PyB Pigüé's ERP, with sales, deliveries, finance, stock and customer modules",
          },
        ] as CaseStudy[],
      },
      testimonials: {
        title: "What my clients say",
        items: [] as Testimonial[],
      },
      about: {
        title: "Who's behind this",
        intro:
          "I'm Francisco Calvo, a systems analyst and developer. I work with shops and small businesses: I learn how your business runs and turn it into a system you use every day.",
        photoAlt: "Portrait of Francisco Calvo",
        location: {
          icon: "📍",
          title: "Bahía Blanca & Buenos Aires",
          text: "I split my time between both cities and work with businesses in each and the surrounding areas, in person or remotely.",
        } as ContactFact,
        educationTitle: "Education",
        education: [
          {
            label: "Formal education",
            items: [
              {
                title: "Systems Analysis Technician",
                institution: "Instituto Juan XXIII",
                period: "2023 – 2026",
                status: "In progress, 90%+",
                href: "https://juan23.edu.ar/carreras/tecnicatura-superior-en-analisis-de-sistemas/",
              },
              {
                title: "High school diploma in Economics and Administration",
                institution: "Escuela Superior de Comercio “Prof. Prudencio Cornejo” (EPUNS)",
                period: "2021",
              },
            ],
          },
          {
            label: "Courses & certifications",
            items: [
              {
                title: "Backend Developer",
                institution: "Universidad Tecnológica Nacional (UTN)",
                period: "2026",
                status: "In progress",
                href: "https://sceu.frba.utn.edu.ar/e-learning/detalle/curso/3801/curso-de-backend-developer-turno-manana",
              },
              {
                title: "Web Designer",
                institution: "Digital House, endorsed by Mercado Libre and Globant",
                period: "2024",
                href: "https://www.digitalhouse.com/productos/programacion/web-designer",
              },
              {
                title: "Python — Introduction to Programming",
                institution: "Ministry of Education, City of Buenos Aires",
                period: "2024",
              },
              {
                title: "First Certificate in English (B2)",
                institution: "Cambridge Assessment English",
                period: "2022",
                href: "https://www.cambridgeenglish.org/es/exams-and-tests/first/",
              },
            ],
          },
        ] as EducationGroup[],
        linkedin: "See my LinkedIn profile",
        moreWork: "See all my projects",
      },
      process: {
        title: "How we'll work",
        subtitle: "A simple process, no jargon and no surprises.",
        steps: [
          {
            title: "We talk",
            text: "You tell me how you work today and what's getting in the way. If you're in Bahía Blanca or Buenos Aires, we can meet in person.",
          },
          {
            title: "You get a proposal",
            text: "In writing: what's included, how long it takes and what it costs. No fine print.",
          },
          {
            title: "We build it together",
            text: "I show you progress so you can try it out and we can adjust as we go.",
          },
          {
            title: "Delivery and support",
            text: "I leave it up and running, show you how to use it and document everything. After that, I keep providing support.",
          },
        ] as ProcessStep[],
      },
      form: {
        title: "Tell me about your case",
        subtitle: "Five quick questions, under a minute. At the end you leave your email and I'll reply personally.",
        channelsTitle: "Prefer to talk now?",
        channelsText: "Message or call me directly.",
        phoneLabel: "Phone",
        emailLabel: "Email",
        locationLabel: "Location",
        locations: ["Bahía Blanca, Argentina", "Buenos Aires, Argentina"],
      },
      quiz: {
        stepWord: "Step",
        ofWord: "of",
        back: "Back",
        next: "Next",
        multipleHint: "You can pick more than one.",
        contactStep: "Your details",
        questions: [
          {
            id: "negocio",
            step: "Business",
            title: "What kind of business do you run?",
            options: [
              { id: "comercio", icon: "🛍️", label: "Shop or store", hint: "Clothing, shoes, hardware, groceries…" },
              { id: "distribuidora", icon: "🚚", label: "Distributor or wholesaler" },
              { id: "produccion", icon: "🏭", label: "Factory or workshop" },
              { id: "servicios", icon: "💼", label: "Services", hint: "Firm, practice, agency…" },
              { id: "gastronomia", icon: "🍽️", label: "Food and hospitality" },
              { id: "otro", icon: "✨", label: "Something else" },
            ],
          },
          {
            id: "objetivos",
            step: "Goals",
            title: "What would you like to solve?",
            multiple: true,
            options: [
              { id: "stock", icon: "📦", label: "Stock control" },
              { id: "ventas", icon: "💰", label: "Sales and checkout" },
              { id: "facturacion", icon: "🧾", label: "Electronic invoicing (ARCA)" },
              { id: "pedidos", icon: "🛒", label: "Orders and customers" },
              { id: "reparto", icon: "🗺️", label: "Deliveries and logistics" },
              { id: "online", icon: "🌐", label: "Selling online or via WhatsApp" },
              { id: "reportes", icon: "📈", label: "Business reports" },
              { id: "automatizar", icon: "⚙️", label: "Automating repetitive tasks" },
            ],
          },
          {
            id: "situacion",
            step: "Current setup",
            title: "How do you handle it today?",
            options: [
              { id: "papel", icon: "📝", label: "On paper or in a notebook" },
              { id: "planillas", icon: "🗂️", label: "With Excel spreadsheets" },
              { id: "sistema", icon: "💻", label: "With a system that no longer fits" },
              { id: "nada", icon: "🌱", label: "I don't yet, I'm just starting" },
            ],
          },
          {
            id: "equipo",
            step: "Team",
            title: "How many people work in the business?",
            options: [
              { id: "solo", icon: "👤", label: "Just me" },
              { id: "chico", icon: "👥", label: "2 to 5" },
              { id: "mediano", icon: "🏬", label: "6 to 20" },
              { id: "grande", icon: "🏢", label: "More than 20" },
            ],
          },
          {
            id: "plazo",
            step: "Timeline",
            title: "When do you need it?",
            options: [
              { id: "ya", icon: "🔥", label: "As soon as possible" },
              { id: "pronto", icon: "📅", label: "Within 1 to 3 months" },
              { id: "explorando", icon: "🧭", label: "No rush, just exploring" },
            ],
          },
        ] as QuizQuestion[],
        contactTitle: "Last step! Leave your details and I'll reply.",
        summaryTitle: "Your case",
        matches: [
          {
            business: ["comercio"],
            goals: ["stock", "ventas", "facturacion"],
            text: "It's similar to the system I built for Rominetta: stock by size, sales and electronic invoicing.",
          },
          {
            business: ["distribuidora"],
            goals: ["pedidos", "reparto", "stock"],
            text: "It's similar to the ERP we're building for PyB Pigüé: orders, stock, deliveries and finance in one system.",
          },
          {
            business: [],
            goals: ["online"],
            text: "It's similar to HSG Hogar's online catalog, with orders handled over WhatsApp.",
          },
          {
            business: ["servicios"],
            goals: ["automatizar"],
            text: "It's similar to my work at an accounting firm: automating admin tasks with Python.",
          },
        ] as QuizMatch[],
        matchFallback: "Every system I build is designed around the way your business works.",
        promise: "I'll reply personally with a first idea for your case, no commitment.",
        nameLbl: "Name",
        namePlaceholder: "First and last name",
        emailLbl: "Email",
        emailPlaceholder: "you@email.com",
        phoneLbl: "WhatsApp (optional)",
        phonePlaceholder: "e.g. +54 291 000-0000",
        phoneHint: "Include the area code, e.g. +54 291 000-0000",
        addComment: "Add a comment",
        commentLbl: "Comment (optional)",
        commentPlaceholder: "Tell me a bit more about your business, if you like.",
        send: "Send my answers",
        sending: "Sending…",
        privacy: "I'll only use your details to get back to you.",
        successTitle: "Thanks, {name}!",
        successText: "I got your answers. I'll write to {email} shortly.",
        successUrgent: "Urgent? Send me your answers on WhatsApp:",
        error: "Your answers couldn't be sent. Please try again or send them to me on WhatsApp:",
        whatsappIntro: "Hi, Francisco! I filled out the questionnaire on your website:",
      },
    },
    footer: {
      rights: "All rights reserved",
    },
    blog: {
      title: "Blog",
      pageIntro: "Here I share what I'm building: videos, ideas and notes about development and tech.",
      feedTitle: "Live updates from Reddit.",
      loading: "Loading posts...",
      empty: "There are no posts to show yet.",
      error: "I could not load the Reddit RSS feed right now.",
      noExcerpt: "No excerpt available.",
      openInReddit: "Open on Reddit",
      youtubeEmpty: "There are no videos to show yet.",
      tiktokSoon: "My TikTok is coming soon.",
      visitTiktok: "View profile",
    },
    more: {
      title: "Extra",
      subtitle: "A space for things I'll keep adding over time.",
      back: "Back to Extra",
      gallery: {
        title: "Gallery",
        description: "Photos and screenshots from projects, events and more.",
      },
      specs: {
        title: "Specs",
        description: "The setup and tools I work with.",
        viewSpecs: "View specs",
        notFound: "Item not found",
        allItems: "All items",
        items: enSpecItems,
      },
      comingSoon: "Coming soon",
      comingSoonDesc: "I'm preparing more sections for here. Check back soon!",
    },
  },
}
