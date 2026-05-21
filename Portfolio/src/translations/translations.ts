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

export type StatItem = {
  icon: string
  label: string
  value: string
}

export type SkillCategory = {
  category: string
  items: string[]
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
    },
    hero: {
      greeting: "Hola, soy",
      titleLine1: "-Desarrollador Web",
      titleLine1Highlight: "Full-Stack",
      titleLine2: "-Analista de",
      titleLine2Highlight: "Sistemas",
      descPart1:
        "Analizo y creo los requerimientos para convertirlos en soluciones. Como Analista en Sistemas y Desarrollador Full-Stack, diseño y construyo soluciones web modernas, escalables y eficientes.",
      descBilingual: "Bilingüe — ",
      descBilingualHighlight: "Español / Inglés B2",
      viewProjects: "Ver proyectos",
      contactMe: "Contactame",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Sobre mí",
      p1a: "Soy estudiante avanzado de la ",
      p1b: ", con más de un año de experiencia práctica en desarrollo web Full-Stack. Me apasiona construir soluciones de software que tengan un impacto real.",
      p2a: "Trabajo con tecnologías como ",
      p2b: ", y me enfoco en escribir código limpio, escalable y con buenas prácticas.",
      p3a: "Soy ",
      p3bilingual: "bilingüe (Español - Inglés B2)",
      p3b: ", lo que me permite colaborar en entornos internacionales. Mi experiencia como ",
      p3referee: "Árbitro Federado de Básquet",
      p3c:
        " me formó en liderazgo, comunicación y toma de decisiones bajo presión — habilidades que aplico día a día en mi trabajo como desarrollador.",
      p4: "Busco integrarme a un equipo donde pueda aportar mis conocimientos técnicos, seguir creciendo profesionalmente y contribuir a proyectos de impacto real.",
      stats: [
        { icon: "🎓", label: "Educación", value: "Tecnicatura en Análisis de Sistemas (+90%)" },
        { icon: "🌍", label: "Idiomas", value: "Español nativo — Inglés B2 (Cambridge)" },
        { icon: "📍", label: "Ubicación", value: "Buenos Aires, Argentina" },
        { icon: "🏀", label: "Extracurricular", value: "Árbitro Federado de Básquet" },
      ] as StatItem[],
    },
    skills: {
      title: "Habilidades Técnicas",
      categories: [
        { category: "Lenguajes", items: ["Python", "JavaScript", "SQL", "HTML", "CSS", "JSON"] },
        { category: "Frameworks & Librerías", items: ["React.js", "Vue.js", "Angular"] },
        { category: "Bases de Datos", items: ["MySQL", "MongoDB"] },
        { category: "Herramientas", items: ["Git", "GitHub", "GitLab", "Docker", "Figma", "Notion", "Miro"] },
        { category: "Desarrollo Web", items: ["Sitios responsivos", "Manipulación del DOM", "APIs REST", "UX/UI"] },
      ] as SkillCategory[],
    },
    projects: {
      title: "Proyectos",
      inProgress: "En proceso",
      imageSoon: "Imagen próximamente",
      linksSoon: "Links disponibles próximamente",
      items: [
        {
          title: "SneakerHub",
          description:
            "Aplicación web de e-commerce orientada a la venta de zapatillas. Desarrollo Full-Stack con interfaz dinámica y gestión de productos.",
          techs: ["JavaScript", "React.js", "MySQL", "CSS"],
          github: "https://github.com/FranCalvoDev/SneakerHub-Final",
          demo: null,
          status: "finished",
          images: ["/projects/sneakerhub-1.jpg", "/projects/sneakerhub-2.jpg", "/projects/sneakerhub-3.jpg"],
        },
        {
          title: "Portfolio Personal",
          description:
            "Portfolio profesional desarrollado con React y TypeScript. Muestra de proyectos, habilidades y experiencia laboral.",
          techs: ["React.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/FranCalvoDev/Portfolio",
          demo: null,
          status: "finished",
          images: ["/projects/portfolio-1.jpg", "/projects/portfolio-2.jpg", "/projects/portfolio-3.jpg"],
        },
        {
          title: "Migración de Software PHP",
          description:
            "Migración y modernización de sistema legacy desarrollado en PHP. Proyecto en proceso de desarrollo activo.",
          techs: ["PHP", "MySQL", "JavaScript"],
          github: null,
          demo: null,
          status: "inprogress",
          images: ["/projects/php-1.jpg", "/projects/php-2.jpg", "/projects/php-3.jpg"],
        },
      ] as ProjectItem[],
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          role: "Analista de Sistemas / Desarrollador",
          company: "Estudio Contable Privado",
          period: "Abril 2024 – Diciembre 2024",
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
  },
  en: {
    nav: {
      home: "Home",
      about: "About me",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      titleLine1: "-Full-Stack Web",
      titleLine1Highlight: "Developer",
      titleLine2: "-Systems",
      titleLine2Highlight: "Analyst",
      descPart1:
        "I analyze and create requirements to turn them into solutions. As a Systems Analyst and Full-Stack Developer, I design and build modern, scalable and efficient web solutions.",
      descBilingual: "Bilingual — ",
      descBilingualHighlight: "Spanish / English B2",
      viewProjects: "View projects",
      contactMe: "Contact me",
      downloadCV: "Download CV",
    },
    about: {
      title: "About me",
      p1a: "I'm an advanced student of the ",
      p1b: ", with more than a year of hands-on experience in Full-Stack web development. I'm passionate about building software solutions that have a real impact.",
      p2a: "I work with technologies like ",
      p2b: ", and I focus on writing clean, scalable code with good practices.",
      p3a: "I'm ",
      p3bilingual: "bilingual (Spanish - English B2)",
      p3b: ", which allows me to collaborate in international environments. My experience as a ",
      p3referee: "Certified Basketball Referee",
      p3c:
        " shaped me in leadership, communication and decision-making under pressure — skills I apply every day in my work as a developer.",
      p4: "I'm looking to join a team where I can contribute my technical knowledge, continue growing professionally and contribute to real-impact projects.",
      stats: [
        { icon: "🎓", label: "Education", value: "Systems Analysis Degree (+90%)" },
        { icon: "🌍", label: "Languages", value: "Native Spanish — English B2 (Cambridge)" },
        { icon: "📍", label: "Location", value: "Buenos Aires, Argentina" },
        { icon: "🏀", label: "Extracurricular", value: "Certified Basketball Referee" },
      ] as StatItem[],
    },
    skills: {
      title: "Technical Skills",
      categories: [
        { category: "Languages", items: ["Python", "JavaScript", "SQL", "HTML", "CSS", "JSON"] },
        { category: "Frameworks & Libraries", items: ["React.js", "Vue.js", "Angular"] },
        { category: "Databases", items: ["MySQL", "MongoDB"] },
        { category: "Tools", items: ["Git", "GitHub", "GitLab", "Docker", "Figma", "Notion", "Miro"] },
        { category: "Web Development", items: ["Responsive sites", "DOM Manipulation", "REST APIs", "UX/UI"] },
      ] as SkillCategory[],
    },
    projects: {
      title: "Projects",
      inProgress: "In progress",
      imageSoon: "Image coming soon",
      linksSoon: "Links coming soon",
      items: [
        {
          title: "SneakerHub",
          description:
            "E-commerce web application focused on sneaker sales. Full-Stack development with dynamic interface and product management.",
          techs: ["JavaScript", "React.js", "MySQL", "CSS"],
          github: "https://github.com/FranCalvoDev/SneakerHub-Final",
          demo: null,
          status: "finished",
          images: ["/projects/sneakerhub-1.jpg", "/projects/sneakerhub-2.jpg", "/projects/sneakerhub-3.jpg"],
        },
        {
          title: "Personal Portfolio",
          description:
            "Professional portfolio built with React and TypeScript. Showcase of projects, skills and work experience.",
          techs: ["React.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/FranCalvoDev/Portfolio",
          demo: null,
          status: "finished",
          images: ["/projects/portfolio-1.jpg", "/projects/portfolio-2.jpg", "/projects/portfolio-3.jpg"],
        },
        {
          title: "PHP Software Migration",
          description:
            "Migration and modernization of a legacy system developed in PHP. Project under active development.",
          techs: ["PHP", "MySQL", "JavaScript"],
          github: null,
          demo: null,
          status: "inprogress",
          images: ["/projects/php-1.jpg", "/projects/php-2.jpg", "/projects/php-3.jpg"],
        },
      ] as ProjectItem[],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Systems Analyst / Developer",
          company: "Private Accounting Firm",
          period: "April 2024 – December 2024",
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
  },
}
