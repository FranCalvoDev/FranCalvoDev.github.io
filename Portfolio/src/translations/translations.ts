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


export type ProjectItem = {
  title: string
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
    },
    about: {
      title: "Sobre mí",
      p1a: "Soy estudiante avanzado de la ",
      p1b: ", Desarrollador Full-Stack en formación y estudiante avanzado (+90 %), con experiencia práctica en soluciones web y sistemas orientados a procesos de negocio. Trabajo con JavaScript, Node.js, Python, APIs REST y bases de datos SQL/NoSQL, usando Git/GitHub para control de versiones y colaboración.",
      p2a: "Trabajo con tecnologías como ",
      p2b: ", y participo desde el relevamiento de requerimientos hasta la automatización de procesos y la gestión de datos. Me caracterizan mi capacidad analítica, mi enfoque práctico y la orientación a resolver problemas.",
      p3a: "Soy ",
      p3bilingual: "bilingüe (Español - Inglés B2)",
      p3b: ", lo que me permite colaborar en entornos internacionales. Mi experiencia como ",
      p3referee: "Árbitro Federado de Básquet",
      p3c:
        " me formó en liderazgo, comunicación y toma de decisiones bajo presión — habilidades que aplico día a día en mi trabajo como desarrollador.",
      p4: "Busco incorporarme a un equipo de desarrollo Full-Stack para seguir creciendo en entornos profesionales.",
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
            { icon: "🐍", text: "Migración PHP", href: "/work#projects" },
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
        { category: "Frameworks & Librerías", items: ["React.js", "Tailwind CSS", "Node.js", "Next.js", "Vue.js", "Angular", "Laravel"] },
        { category: "Bases de Datos", items: ["MySQL", "PostgreSQL", "SQLite", "Supabase", "MongoDB"] },
        { category: "Herramientas", items: ["VS Code", "Git", "GitHub", "Notion", "Docker", "Postman", "Laragon", "GitLab", "Miro", "Figma"] },
        { category: "Desarrollo Web", items: ["Sitios responsivos", "Manipulación del DOM", "APIs REST", "UX/UI", "Internacionalización (i18n)", "Deploy"] },
        { category: "Inteligencia Artificial", items: ["Claude", "GitHub Copilot", "OpenCode"] },
      ] as SkillCategory[],
    },
    projects: {
      title: "Proyectos",
      inProgress: "En proceso",
      imageSoon: "Imagen próximamente",
      linksSoon: "Links disponibles próximamente",
      privateProject: "Proyecto privado",
      galleryHint: "Clickea y navega",
      items: [
             {
          title: "Portfolio Personal",
          description:
            "Portfolio profesional desarrollado con React y TypeScript. Muestra de proyectos, habilidades y experiencia laboral.",
          techs: ["React.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/FranCalvoDev/Portfolio",
          demo: null,
          status: "finished",
          images: [fc],
        },
        {
          title: "SneakerHub",
          description:
            "Aplicación web de e-commerce orientada a la venta de zapatillas. Desarrollo Full-Stack con interfaz dinámica y gestión de productos.",
          techs: ["JavaScript", "React.js", "MySQL", "CSS"],
          github: null,
          demo: null,
          status: "finished",
          images: [sneakerhub1, sneakerhub2, sneakerhub3, sneakerhub4, sneakerhub5],
        },
  
        {
          title: "Migración de Software PHP",
          description:
            "Migración y modernización de sistema legacy desarrollado en PHP. Proyecto en proceso de desarrollo activo.",
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
          title: "Sistema de gestión de Rominetta",
          description:
            "Sistema de control de inventario por matriz de tallas, punto de venta  y registro de ventas para una tienda de calzado.",
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
          description:
            "Aplicación web tipo catálogo para la venta de productos para el hogar. Desarrollo Full-Stack con interfaz dinámica, gestión de productos y contacto directo por WhatsApp. No procesa pagos online por pedido del cliente.",
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
      title: "Contacto",
      subtitle: "¿Tenés alguna propuesta o consulta? Escribime y te respondo a la brevedad.",
      nameLbl: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLbl: "Email",
      emailPlaceholder: "tu@email.com",
      messageLbl: "Mensaje",
      messagePlaceholder: "Escribí tu mensaje...",
      send: "Enviar mensaje",
    },
    footer: {
      rights: "Todos los derechos reservados",
    },
    blog: {
      title: "Blog",
      pageIntro: "Acá comparto lo que voy creando: videos, ideas y notas sobre desarrollo y tecnología.",
      feedTitle: "Actualizado en tiempo real desde Reddit.",
      loading: "Cargando publicaciones...",
      empty: "Todavia no hay publicaciones para mostrar.",
      error: "No pude cargar el RSS de Reddit en este momento.",
      noExcerpt: "Sin extracto disponible.",
      openInReddit: "Abrir en Reddit",
      youtubeEmpty: "Todavia no hay videos para mostrar.",
      tiktokSoon: "Proximamente mi TikTok.",
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
    },
    about: {
      title: "About me",
      p1a: "I'm an advanced student of the ",
      p1b: ", Full-Stack developer in training (+90 % completed), with hands-on experience in web solutions and business-process-oriented systems. I work with JavaScript, Node.js, Python, REST APIs and SQL/NoSQL databases, using Git/GitHub for version control and collaboration.",
      p2a: "I work with technologies like ",
      p2b: ", and I take part from requirements gathering to process automation and data management. I'm analytical, practical and focused on solving problems.",
      p3a: "I'm ",
      p3bilingual: "bilingual (Spanish - English B2)",
      p3b: ", which allows me to collaborate in international environments. My experience as a ",
      p3referee: "Certified Basketball Referee",
      p3c:
        " shaped me in leadership, communication and decision-making under pressure — skills I apply every day in my work as a developer.",
      p4: "I'm looking to join a Full-Stack development team and keep growing in professional environments.",
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
            { icon: "🐍", text: "PHP migration", href: "/work#projects" },
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
        { category: "Frameworks & Libraries", items: ["React.js", "Tailwind CSS", "Node.js", "Next.js", "Vue.js", "Angular", "Laravel"] },
        { category: "Databases", items: ["MySQL", "PostgreSQL", "SQLite", "Supabase", "MongoDB"] },
        { category: "Tools", items: ["VS Code", "Git", "GitHub", "Notion", "Docker", "Postman", "Laragon", "GitLab", "Miro", "Figma"] },
        { category: "Web Development", items: ["Responsive sites", "DOM Manipulation", "REST APIs", "UX/UI", "Internationalization (i18n)", "Deployment"] },
        { category: "Artificial Intelligence", items: ["Claude", "GitHub Copilot", "OpenCode"] },
      ] as SkillCategory[],
    },
    projects: {
      title: "Projects",
      inProgress: "In progress",
      imageSoon: "Image coming soon",
      linksSoon: "Links coming soon",
      privateProject: "Private project",
      galleryHint: "Click and browse",
      items: [
         {
          title: "Personal Portfolio",
          description:
            "Professional portfolio built with React and TypeScript. Showcase of projects, skills and work experience.",
          techs: ["React.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/FranCalvoDev/Portfolio",
          demo: null,
          status: "finished",
          images: [fc],
        },
        {
          title: "SneakerHub",
          description:
            "E-commerce web application focused on sneaker sales. Full-Stack development with dynamic interface and product management.",
          techs: ["JavaScript", "React.js", "MySQL", "CSS"],
          github: null,
          demo: null,
          status: "finished",
          images: [sneakerhub1, sneakerhub2, sneakerhub3, sneakerhub4, sneakerhub5],
        },
        {
          title: "PHP Software Migration",
          description:
            "Migration and modernization of a legacy system developed in PHP. Project under active development.",
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
          description:
            "Inventory control system by size matrix, point of sale and sales tracking for a footwear store.",
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
          description:
            "Catalog-style web application for selling home products. Full-Stack development with a dynamic interface, product management and direct contact through WhatsApp. Online payments are not processed by client request.",
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
      title: "Contact",
      subtitle: "Have a proposal or question? Write to me and I'll get back to you shortly.",
      nameLbl: "Name",
      namePlaceholder: "Your name",
      emailLbl: "Email",
      emailPlaceholder: "your@email.com",
      messageLbl: "Message",
      messagePlaceholder: "Write your message...",
      send: "Send message",
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
