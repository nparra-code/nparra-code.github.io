export interface CVData {
  profile: {
    name: string;
    location: string;
    phone: string;
    emails: string[];
    linkedin: string;
    github: string;
    headline: string;
    summary: string;
  };
  education: {
    degree: string;
    institution: string;
    period: string;
    details: string[];
  }[];
  experience: {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
  }[];
  associations: {
    name: string;
    role: string;
    period: string;
    description: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  languages: {
    language: string;
    level: string;
  }[];
  projects: {
    name: string;
    description: string;
  }[];
  certifications: {
    name: string;
    description: string;
  }[];
}

export const cvDataEN: CVData = {
  profile: {
    name: "Nelson Fernando Parra Guardia",
    location: "Sabaneta, Antioquia, Colombia",
    phone: "+57 318 8554017",
    emails: ["nelsonparra.jobs@gmail.com", "npguardia@h-mv.com"],
    linkedin: "https://linkedin.com/in/nelsonfparrag/",
    github: "https://github.com/nparra-code",
    headline: "Electronics Engineer | Automation Engineer @ HMV Ingenieros | Founder @ Energeia Labs | Embedded Systems & Applied AI",
    summary: "Electronics Engineer working in substation automation at HMV Ingenieros and founder of Energeia Labs, a technology company delivering embedded systems, AI, renewable energy and technical consulting solutions. Background in embedded firmware, mobile robotics and control, with a thesis on PID autotuning using recurrent neural networks. Designs and ships production AI systems: LLM pipelines for classification and structured data extraction, retrieval-augmented generation (RAG), tool integration through the Model Context Protocol (MCP) and orchestration of AI agents to build software at high pace and precision. Actively studying project and business management to scale engineering teams."
  },
  education: [
    {
      degree: "Bachelor's degree in Electronics Engineering",
      institution: "Universidad de Antioquia",
      period: "February 2020 - March 2026",
      details: [
        "Graduated March 2026. Cumulative GPA: 4.06/5.",
        "Thesis: PID constant estimation using recurrent neural networks, applied to wheel velocity control in mobile robotics.",
        "Researcher (RoboSync Project) and Department's programming assistant."
      ]
    },
    {
      degree: "High School Diploma (IB Diploma Graduate)",
      institution: "Instituto Educacional Juan XXIII",
      period: "August 2009 - June 2019",
      details: [
        "International Baccalaureate Diploma Programme Graduate.",
        "Leader of English Preparatory Classes.",
        "Critical thinking, teamwork, commitment, communication."
      ]
    }
  ],
  experience: [
    {
      title: "Automation Engineer",
      company: "HMV Ingenieros",
      location: "Medellin, Colombia",
      period: "April 2026 - Present",
      description: "Basic engineering for substation automation projects, defining how protection, control and communication systems are architected and specified.",
      achievements: [
        "Develop substation automation system architectures and design criteria.",
        "Produce technical specifications, signal lists, equipment lists and material requisitions for substation projects.",
        "Built SSD Generator on my own initiative, a web tool that generates substation engineering documents (.xlsx tabulation formats matching the client's reference model) to make the team's document production more efficient."
      ]
    },
    {
      title: "Founder",
      company: "Energeia Labs",
      location: "Remote (Medellin, Colombia)",
      period: "August 2026 - Present",
      description: "Technology company serving the Venezuelan engineering market across four verticals: embedded systems, artificial intelligence, renewable energy and technical consulting.",
      achievements: [
        "Designed and deployed an LLM-powered WhatsApp automation system for a real estate franchise that classifies and extracts structured data from ~800 listings per day, building an inventory of ~2,000 properties at ~USD 1/day in AI cost (Node.js, PostgreSQL, Evolution API, OpenAI).",
        "Designed and deployed an LLM-powered Telegram automation system for a wholesale PVC fittings importer and distributor: records sales and inventory movements from voice notes or free text, generates PDF quotes and delivers up-to-date inventory reports, using Google Sheets as the data layer.",
        "Built and launched the company website (energeialabs.tech) with Next.js 15, Supabase and Resend: lead capture, transactional email and versioned public policies.",
        "Lead business development, pricing, contracting and project management, applying PMI practices to run the company."
      ]
    },
    {
      title: "Assistant Programmer",
      company: "Electronics Department",
      location: "Medellin, Colombia",
      period: "October 2024 - February 2026",
      description: "Assisted in optimizing the course management for the Electronics and Telecommunications Department, focusing on expanding the work throughout the whole Faculty.",
      achievements: [
        "Engineered a centralized management system via a Python desktop application, successfully coordinating course scheduling and improving data integrity using robust SQL data modeling.",
        "Achieved department's primary goal by developing proprietary software with custom features, strategically engineered for scalability and adoption across other departments.",
        "Contributed strategic insights to discussions focused on student permanency by developing superior data visualizations in Looker and Power BI."
      ]
    },
    {
      title: "Researcher",
      company: "RoboSync Project",
      location: "Medellin, Colombia",
      period: "January 2024 - February 2026",
      description: "Works in robotics with special focus on RoboCup Small-Size League tournament: autonomous robots soccer tournament. Collaborated with cross-functional teams at Mälardalens University in Sweden and the Technological University of Panama.",
      achievements: [
        "Participated in the formation of a new research group and secured project funding through the successful proposal and presentation to faculty.",
        "Led the development of the robot platform's hardware and firmware, encompassing component research, system integration, simulation model creation, and control system design.",
        "Contributed to the research of AI agents by leading the analysis of two major competition simulators and proposing data-driven paths for enhancing team intelligence capabilities."
      ]
    }
  ],
  associations: [
    {
      name: "IEEE",
      role: "Student Branch Member - Vicepresident ComSoc Chapter",
      period: "December 2024 - December 2025",
      description: "Led the organizational development and launch of the student branch, ensuring its permanent establishment within the university structure. Successfully engaged professors and students to create new chapters and secure institutional support."
    },
    {
      name: "Project Management Institute - PMI",
      role: "Member",
      period: "August 2025 - August 2026",
      description: "Translated insights from the VIII International PMI Congress (Medellin) into practical methodologies for ongoing projects. Continuous study of project management (predictive and agile, aligned with the CAPM content outline) and business management, applied to running Energeia Labs."
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["C/C++", "Python", "TypeScript/JavaScript", "Kotlin", "VHDL", "LaTeX", "AWL", "Ladder Logic"]
    },
    {
      category: "Artificial Intelligence",
      items: ["LLM pipelines (classification & structured extraction)", "RAG (embeddings, vector stores, pgvector)", "Model Context Protocol (MCP)", "AI agent orchestration", "OpenAI & Gemini APIs", "Context & token management", "Recurrent neural networks", "Computer vision", "Reinforcement learning"]
    },
    {
      category: "Web & Backend",
      items: ["React", "Next.js", "Node.js", "Supabase", "Docker", "Vercel"]
    },
    {
      category: "Tools & Platforms",
      items: ["Linux (Ubuntu, Debian, Fedora)", "ROS/ROS2", "SCADA", "HMI", "Altium", "MATLAB/Simulink", "FreeRTOS", "PostgreSQL", "Power BI", "Looker"]
    },
    {
      category: "Protocols",
      items: ["UART", "I2C", "SPI", "Ethernet", "Bluetooth", "RFID", "MQTT", "MODBUS"]
    },
    {
      category: "Equipment",
      items: ["Soldering stations", "Oscilloscopes", "Multimeters", "Power generators", "Signal generators"]
    }
  ],
  languages: [
    { language: "Spanish", level: "Native" },
    { language: "English", level: "C1 - IELTS (Fully professional proficiency)" },
    { language: "German", level: "Intermediate (B2 course completed)" }
  ],
  projects: [
    {
      name: "Real Estate WhatsApp Bot (Energeia Labs)",
      description: "Production system that reads a franchise's WhatsApp agent groups, uses an LLM to classify posts and extract structured property data (price, location, features), deduplicates listings in PostgreSQL and answers property search requests automatically."
    },
    {
      name: "PVC Distributor Telegram Assistant (Energeia Labs)",
      description: "Production LLM-powered Telegram assistant for a wholesale PVC fittings importer and distributor that turns voice notes and free-text messages into sales and inventory records, generates PDF quotes and reports current stock, replacing a fully manual spreadsheet workflow."
    },
    {
      name: "SSD Generator",
      description: "Personal initiative to make engineering document generation more efficient at work: a client-side web tool for substation documentation. Its tabulation format module exports .xlsx files with cover, presentation sheet and 8 preloaded equipment types, matching the client's reference model."
    },
    {
      name: "Energeia Labs Website",
      description: "Company website built with Next.js 15, Tailwind and a 3D hero (React Three Fiber), with a validated contact form that stores leads in Supabase and sends transactional emails via Resend."
    },
    {
      name: "Course Manager",
      description: "Centralized application made for the Electronics and Telecommunications Departments at Universidad de Antioquia to streamline the management of course classrooms and schedules for department chiefs and administrators."
    },
    {
      name: "Striker 1 Development",
      description: "Engineered and delivered the integrated hardware and firmware architecture for the Striker 1 robot platform. Success was built on strong cross-functional teamwork and critical research into optimal components and system design."
    },
    {
      name: "PicoHome (IoT Project)",
      description: "Developed a comprehensive home automation system utilizing the Raspberry Pi Pico. Engineered the solution with a web-based interface for centralized control and integrated the MQTT protocol for efficient device communication."
    },
    {
      name: "ROS2 Workshop",
      description: "25-hour dedicated ROS2 workshop deepening understanding of the ROS framework, making concepts like nodes, topics, messages, services, and actions more practical. Led by Mälardalen University with the support of Universidad de Antioquia."
    }
  ],
  certifications: [
    {
      name: "Fundamentals of Deep Learning",
      description: "Established a robust foundation in core deep learning concepts essential for designing and building effective AI infrastructure."
    }
  ]
};

export const cvDataES: CVData = {
  profile: {
    name: "Nelson Fernando Parra Guardia",
    location: "Sabaneta, Antioquia, Colombia",
    phone: "+57 318 8554017",
    emails: ["nelsonparra.jobs@gmail.com", "npguardia@h-mv.com"],
    linkedin: "https://linkedin.com/in/nelsonfparrag/",
    github: "https://github.com/nparra-code",
    headline: "Ingeniero Electrónico | Ingeniero de Automatización @ HMV Ingenieros | Fundador @ Energeia Labs | Sistemas Embebidos e IA Aplicada",
    summary: "Ingeniero Electrónico dedicado a la automatización de subestaciones en HMV Ingenieros y fundador de Energeia Labs, empresa de tecnología que ofrece soluciones en sistemas embebidos, IA, energía renovable y consultoría técnica. Formación en firmware embebido, robótica móvil y control, con tesis en autosintonización PID mediante redes neuronales recurrentes. Diseño y llevo a producción sistemas de IA: pipelines con LLM para clasificación y extracción de datos estructurados, generación aumentada por recuperación (RAG), integración de herramientas mediante Model Context Protocol (MCP) y orquestación de agentes de IA para construir software con rapidez y precisión. Estudio activamente gerencia de proyectos y de empresas para escalar equipos de ingeniería."
  },
  education: [
    {
      degree: "Ingeniería Electrónica",
      institution: "Universidad de Antioquia",
      period: "Febrero 2020 - Marzo 2026",
      details: [
        "Graduado en marzo de 2026. Promedio acumulado: 4.06/5.",
        "Tesis: estimación de constantes PID mediante redes neuronales recurrentes, aplicada al control de velocidad de ruedas en robótica móvil.",
        "Investigador (Proyecto RoboSync) y asistente de programación del Departamento."
      ]
    },
    {
      degree: "Diploma de Bachillerato (Graduado IB)",
      institution: "Instituto Educacional Juan XXIII",
      period: "Agosto 2009 - Junio 2019",
      details: [
        "Graduado del Programa de Diploma del Bachillerato Internacional.",
        "Líder de Clases Preparatorias de Inglés.",
        "Pensamiento crítico, trabajo en equipo, compromiso, comunicación."
      ]
    }
  ],
  experience: [
    {
      title: "Ingeniero de Automatización",
      company: "HMV Ingenieros",
      location: "Medellín, Colombia",
      period: "Abril 2026 - Presente",
      description: "Ingeniería básica para proyectos de automatización de subestaciones, definiendo la arquitectura y especificación de los sistemas de protección, control y comunicaciones.",
      achievements: [
        "Desarrollo arquitecturas de sistemas de automatización de subestaciones y criterios de diseño.",
        "Elaboro especificaciones técnicas, listas de señales, listas de equipos y requisiciones de material para proyectos de subestaciones.",
        "Construí por iniciativa propia SSD Generator, herramienta web que genera documentos de ingeniería de subestaciones (formatos de tabulación .xlsx idénticos al modelo del cliente) para hacer más eficiente la producción documental del equipo."
      ]
    },
    {
      title: "Fundador",
      company: "Energeia Labs",
      location: "Remoto (Medellín, Colombia)",
      period: "Agosto 2026 - Presente",
      description: "Empresa de tecnología para el mercado de ingeniería venezolano con cuatro verticales: sistemas embebidos, inteligencia artificial, energía renovable y consultoría técnica.",
      achievements: [
        "Diseñé y desplegué un sistema de automatización de WhatsApp con LLM para una franquicia inmobiliaria que clasifica y extrae datos estructurados de ~800 publicaciones diarias, construyendo un inventario de ~2.000 inmuebles con un costo de IA de ~USD 1/día (Node.js, PostgreSQL, Evolution API, OpenAI).",
        "Diseñé y desplegué un sistema de automatización de Telegram con LLM para un importador y distribuidor mayorista de conexiones de PVC: registra ventas y movimientos de inventario a partir de notas de voz o texto libre, genera cotizaciones en PDF y entrega reportes de inventario actualizados, usando Google Sheets como capa de datos.",
        "Construí y lancé el sitio de la empresa (energeialabs.tech) con Next.js 15, Supabase y Resend: captación de leads, correo transaccional y políticas públicas versionadas.",
        "Lidero desarrollo de negocio, cotización, contratación y gestión de proyectos, aplicando prácticas del PMI a la operación de la empresa."
      ]
    },
    {
      title: "Programador Asistente",
      company: "Departamento de Electrónica",
      location: "Medellín, Colombia",
      period: "Octubre 2024 - Febrero 2026",
      description: "Asistí en la optimización de la gestión de cursos para el Departamento de Electrónica y Telecomunicaciones, enfocándome en expandir el trabajo a toda la Facultad.",
      achievements: [
        "Desarrollé un sistema de gestión centralizado mediante una aplicación de escritorio en Python, coordinando exitosamente la programación de cursos y mejorando la integridad de datos usando modelado SQL robusto.",
        "Logré el objetivo principal del departamento desarrollando software propietario con características personalizadas, diseñado estratégicamente para escalabilidad y adopción en otros departamentos.",
        "Contribuí con insights estratégicos en discusiones sobre permanencia estudiantil desarrollando visualizaciones de datos superiores en Looker y Power BI."
      ]
    },
    {
      title: "Investigador",
      company: "Proyecto RoboSync",
      location: "Medellín, Colombia",
      period: "Enero 2024 - Febrero 2026",
      description: "Trabajo en robótica con enfoque especial en el torneo RoboCup Small-Size League: torneo de fútbol con robots autónomos. Colaboración con equipos multifuncionales en la Universidad de Mälardalen en Suecia y la Universidad Tecnológica de Panamá.",
      achievements: [
        "Participé en la formación de un nuevo grupo de investigación y aseguré financiamiento del proyecto mediante la propuesta y presentación exitosa ante la facultad.",
        "Lideré el desarrollo del hardware y firmware de la plataforma robótica, incluyendo investigación de componentes, integración de sistemas, creación de modelos de simulación y diseño de sistemas de control.",
        "Contribuí a la investigación de agentes de IA liderando el análisis de dos simuladores principales de competencia y proponiendo caminos basados en datos para mejorar las capacidades de inteligencia del equipo."
      ]
    }
  ],
  associations: [
    {
      name: "IEEE",
      role: "Miembro de la Rama Estudiantil - Vicepresidente Capítulo ComSoc",
      period: "Diciembre 2024 - Diciembre 2025",
      description: "Lideré el desarrollo organizacional y lanzamiento de la rama estudiantil, asegurando su establecimiento permanente dentro de la estructura universitaria. Involucré exitosamente a profesores y estudiantes para crear nuevos capítulos y asegurar apoyo institucional."
    },
    {
      name: "Project Management Institute - PMI",
      role: "Miembro",
      period: "Agosto 2025 - Agosto 2026",
      description: "Traduje aprendizajes del VIII Congreso Internacional PMI (Medellín) en metodologías prácticas para proyectos en curso. Estudio continuo de gerencia de proyectos (predictiva y ágil, alineada al contenido del CAPM) y de gerencia de empresas, aplicado a la operación de Energeia Labs."
    }
  ],
  skills: [
    {
      category: "Lenguajes de Programación",
      items: ["C/C++", "Python", "TypeScript/JavaScript", "Kotlin", "VHDL", "LaTeX", "AWL", "Ladder Logic"]
    },
    {
      category: "Inteligencia Artificial",
      items: ["Pipelines con LLM (clasificación y extracción estructurada)", "RAG (embeddings, vector stores, pgvector)", "Model Context Protocol (MCP)", "Orquestación de agentes de IA", "APIs de OpenAI y Gemini", "Gestión de contexto y tokens", "Redes neuronales recurrentes", "Visión por computador", "Aprendizaje por refuerzo"]
    },
    {
      category: "Web y Backend",
      items: ["React", "Next.js", "Node.js", "Supabase", "Docker", "Vercel"]
    },
    {
      category: "Herramientas y Plataformas",
      items: ["Linux (Ubuntu, Debian, Fedora)", "ROS/ROS2", "SCADA", "HMI", "Altium", "MATLAB/Simulink", "FreeRTOS", "PostgreSQL", "Power BI", "Looker"]
    },
    {
      category: "Protocolos",
      items: ["UART", "I2C", "SPI", "Ethernet", "Bluetooth", "RFID", "MQTT", "MODBUS"]
    },
    {
      category: "Equipos",
      items: ["Estaciones de soldadura", "Osciloscopios", "Multímetros", "Generadores de potencia", "Generadores de señal"]
    }
  ],
  languages: [
    { language: "Español", level: "Nativo" },
    { language: "Inglés", level: "C1 - IELTS (Competencia profesional completa)" },
    { language: "Alemán", level: "Intermedio (Curso B2 completado)" }
  ],
  projects: [
    {
      name: "Bot Inmobiliario de WhatsApp (Energeia Labs)",
      description: "Sistema en producción que lee los grupos de WhatsApp de los agentes de una franquicia, usa un LLM para clasificar publicaciones y extraer datos estructurados del inmueble (precio, ubicación, características), deduplica en PostgreSQL y responde automáticamente solicitudes de búsqueda."
    },
    {
      name: "Asistente de Telegram para Distribuidora de PVC (Energeia Labs)",
      description: "Asistente de Telegram con LLM en producción para un importador y distribuidor mayorista de conexiones de PVC que convierte notas de voz y mensajes de texto en registros de ventas e inventario, genera cotizaciones en PDF y reporta el stock actual, reemplazando un flujo 100% manual en hojas de cálculo."
    },
    {
      name: "SSD Generator",
      description: "Iniciativa personal para hacer más eficiente la generación de documentos de ingeniería en la empresa: herramienta web que corre 100% en el navegador para documentación de subestaciones. Su módulo de formato de tabulación exporta .xlsx con portada, hoja de presentación y 8 tipos de equipo precargados, idénticos al modelo del cliente."
    },
    {
      name: "Sitio Web de Energeia Labs",
      description: "Sitio corporativo construido con Next.js 15, Tailwind y un hero 3D (React Three Fiber), con formulario validado que guarda leads en Supabase y envía correos transaccionales vía Resend."
    },
    {
      name: "Gestor de Cursos",
      description: "Aplicación centralizada creada para los Departamentos de Electrónica y Telecomunicaciones de la Universidad de Antioquia para optimizar la gestión de aulas y horarios de cursos para jefes y administradores del departamento."
    },
    {
      name: "Desarrollo Striker 1",
      description: "Diseñé y entregué la arquitectura integrada de hardware y firmware para la plataforma robótica Striker 1. El éxito se construyó sobre un fuerte trabajo en equipo multifuncional e investigación crítica en componentes óptimos y diseño de sistemas."
    },
    {
      name: "PicoHome (Proyecto IoT)",
      description: "Desarrollé un sistema integral de automatización del hogar utilizando el Raspberry Pi Pico. Diseñé la solución con una interfaz web para control centralizado e integré el protocolo MQTT para comunicación eficiente entre dispositivos."
    },
    {
      name: "Taller ROS2",
      description: "Taller dedicado de 25 horas de ROS2 profundizando la comprensión del framework ROS, haciendo más prácticos conceptos como nodos, topics, mensajes, servicios y acciones. Dirigido por la Universidad de Mälardalen con apoyo de la Universidad de Antioquia."
    }
  ],
  certifications: [
    {
      name: "Fundamentos de Deep Learning",
      description: "Establecí una base sólida en conceptos fundamentales de deep learning esenciales para diseñar y construir infraestructura de IA efectiva."
    }
  ]
};

export const translations = {
  en: {
    nav: {
      profile: "Profile",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      languages: "Languages"
    },
    labels: {
      contact: "Contact",
      period: "Period",
      achievements: "Key Achievements",
      details: "Details",
      proficiency: "Proficiency",
      viewProject: "View on GitHub",
      downloadCV: "Download CV"
    }
  },
  es: {
    nav: {
      profile: "Perfil",
      education: "Educación",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      languages: "Idiomas"
    },
    labels: {
      contact: "Contacto",
      period: "Período",
      achievements: "Logros Clave",
      details: "Detalles",
      proficiency: "Competencia",
      viewProject: "Ver en GitHub",
      downloadCV: "Descargar CV"
    }
  }
};
