export interface CVData {
  profile: {
    name: string;
    location: string;
    phone: string;
    emails: string[];
    linkedin: string;
    github: string;
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
}

export const cvDataEN: CVData = {
  profile: {
    name: "Nelson Fernando Parra Guardia",
    location: "Sabaneta, Antioquia, Colombia",
    phone: "+57 318 8554017",
    emails: ["nelsonparra.jobs@gmail.com", "nelson.parra@udea.edu.co"],
    linkedin: "https://linkedin.com/in/nelsonfparrag/",
    github: "https://github.com/nparra-code",
    summary: "Deep interest in embedded systems development, test automation and the integration of digital electronics for real-time applications. Exploring industrial instrumentation and automation systems, including the architecture and deployment of SCADA, HMI, and industrial process control solutions. Actively learning and applying concepts in AI development (e.g., computer vision, reinforcement learning, and recurrent neural networks) and building intelligent autonomous systems. High experience with Linux OS, particularly Ubuntu distribution."
  },
  education: [
    {
      degree: "Bachelor's degree in Electronics Engineering",
      institution: "Universidad de Antioquia",
      period: "February 2020 - March 2026",
      details: [
        "164/175 approved credits. Accumulate grade: 4.06/5.",
        "Thesis (in progress): PID Autotuning for wheel speed applied in mobile robotics using ANN.",
        "Researcher, and Department's programming assistant."
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
      title: "Assistant Programmer",
      company: "Electronics Department",
      location: "Medellin, Colombia",
      period: "October 2024 - Present",
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
      period: "January 2024 - Present",
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
      period: "August 2025 - Present",
      description: "Translated insights from the VIII International PMI Congress (Medellin) into practical methodologies, identifying and adopting Project Management strategies to enhance problem-solving within ongoing projects. Planning to pursue CAPM certification."
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["C/C++", "Python", "VHDL", "LaTeX", "AWL", "Ladder Logic"]
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
    { language: "German", level: "Intermediate (B2 studies in progress)" }
  ],
  projects: [
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
    },
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
    emails: ["nelsonparra.jobs@gmail.com", "nelson.parra@udea.edu.co"],
    linkedin: "https://linkedin.com/in/nelsonfparrag/",
    github: "https://github.com/nparra-code",
    summary: "Profundo interés en el desarrollo de sistemas embebidos, automatización de pruebas e integración de electrónica digital para aplicaciones en tiempo real. Explorando sistemas de instrumentación y automatización industrial, incluyendo la arquitectura e implementación de soluciones SCADA, HMI y control de procesos industriales. Aprendiendo y aplicando activamente conceptos en desarrollo de IA (visión por computador, aprendizaje por refuerzo y redes neuronales recurrentes) y construcción de sistemas autónomos inteligentes. Alta experiencia con Linux OS, particularmente la distribución Ubuntu."
  },
  education: [
    {
      degree: "Ingeniería Electrónica",
      institution: "Universidad de Antioquia",
      period: "Febrero 2020 - Marzo 2026",
      details: [
        "164/175 créditos aprobados. Promedio acumulado: 4.06/5.",
        "Tesis (en progreso): Autosintonización PID para velocidad de ruedas aplicada en robótica móvil usando ANN.",
        "Investigador y asistente de programación del Departamento."
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
      title: "Programador Asistente",
      company: "Departamento de Electrónica",
      location: "Medellín, Colombia",
      period: "Octubre 2024 - Presente",
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
      period: "Enero 2024 - Presente",
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
      period: "Agosto 2025 - Presente",
      description: "Traduje insights del VIII Congreso Internacional PMI (Medellín) en metodologías prácticas, identificando y adoptando estrategias de Gestión de Proyectos para mejorar la resolución de problemas en proyectos en curso. Planeando obtener certificación CAPM."
    }
  ],
  skills: [
    {
      category: "Lenguajes de Programación",
      items: ["C/C++", "Python", "VHDL", "LaTeX", "AWL", "Ladder Logic"]
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
    { language: "Alemán", level: "Intermedio (Estudios B2 en progreso)" }
  ],
  projects: [
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
    },
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
