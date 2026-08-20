// Mantener la misma estructura en español e inglés.

export type Language = 'es' | 'en'

export const translations = {
  es: {
    navigation: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      contact: 'Contacto',
      requestService: 'Solicitar cotización',
    },

    accessibility: {
      mainNavigation: 'Navegación principal',
      openMenu: 'Abrir menú de navegación',
      closeMenu: 'Cerrar menú de navegación',
      goHome: 'F.R.C Security Services INC. - Inicio',
    },

    language: {
      label: 'Idioma',
      english: 'English',
      spanish: 'Español',
    },

    whatsapp: {
      message:
        'Hola, me gustaría recibir más información sobre los servicios de seguridad de F.R.C Security Services INC.',
      ariaLabel:
        'Contactar a F.R.C Security Services INC. por WhatsApp',
    },

    home: {
      hero: {
        badge: 'Seguridad privada en Puerto Rico',
        title: 'Protección profesional',
        titleHighlight: 'que inspira confianza.',
        description:
          'Más de 15 años brindando seguridad privada con presencia, profesionalismo y compromiso para comercios, comunidades, eventos y propiedades en Puerto Rico.',
        primaryButton: 'Solicitar cotización',
        secondaryButton: 'Ver servicios',
        coverage: 'Cobertura 24/7',
        coverageDescription: 'Disponibilidad y presencia',
        trained: 'Personal capacitado',
        trainedDescription: 'Preparación y compromiso',
        response: 'Respuesta rápida',
        responseDescription: 'Atención cuando importa',
        experience: '15+ años de experiencia',
        trust: 'Protección confiable',
        ready: '¿Necesitas seguridad?',
        contactUs: 'Habla con nuestro equipo',
      },

      services: {
        eyebrow: 'Nuestros Servicios',

        title: 'Seguridad adaptada',
        titleHighlight: 'a cada entorno.',

        description:
          'Soluciones profesionales para comercios, urbanizaciones, eventos y propiedades que requieren presencia, control y tranquilidad.',

        viewAll: 'Ver todos los servicios',

        learnMore: 'Conocer servicio',

        items: {
          commercial: {
            title: 'Seguridad Comercial',
            description:
              'Vigilancia preventiva y presencia profesional para negocios, comercios y centros de alto flujo.',
          },

          residential: {
            title: 'Urbanizaciones',
            description:
              'Control de acceso, rondas preventivas y apoyo de seguridad para comunidades residenciales.',
          },

          events: {
            title: 'Eventos y Actividades',
            description:
              'Cobertura profesional para actividades privadas, eventos corporativos y ocasiones especiales.',
          },
        },
      },

      benefits: {
        eyebrow: 'Por qué elegir F.R.C.',

        title: 'Experiencia que inspira',
        titleHighlight: 'confianza.',

        description:
          'Más de 15 años de experiencia respaldan una operación enfocada en profesionalismo, presencia y protección confiable para cada cliente.',

        items: {
          experience: {
            title: '15+ Años de Experiencia',
            description:
              'Una trayectoria sólida brindando servicios de seguridad privada en Puerto Rico.',
          },

          reliability: {
            title: 'Servicio Confiable',
            description:
              'Trabajamos con responsabilidad y compromiso para proteger lo que nuestros clientes consideran importante.',
          },

          presence: {
            title: 'Presencia Operacional',
            description:
              'Personal preparado para mantener vigilancia, control y atención constante en cada asignación.',
          },

          professional: {
            title: 'Equipo Profesional',
            description:
              'Guardias uniformados y capacitados, orientados al servicio y al cumplimiento de cada responsabilidad.',
          },
        },
      },

      fleet: {
        eyebrow: 'Nuestra Flota',
        title: 'Presencia operativa',
        titleHighlight: 'donde se necesita.',
        description:
          'Nuestra flota apoya la movilidad, supervisión y presencia de nuestras operaciones de seguridad.',
        label: 'Operación F.R.C.',
      },

      cta: {
        eyebrow: 'Seguridad con experiencia',
        title: 'Protege lo que más',
        titleHighlight: 'te importa.',
        description:
          'Conversemos sobre tus necesidades y evaluemos una solución de seguridad adecuada para tu operación.',
        primaryButton: 'Solicitar cotización',
        secondaryButton: 'Llamar ahora',
        careersEyebrow: 'Oportunidades de empleo',
        careersTitle: '¿Quieres formar parte de nuestro equipo?',
        careersDescription:
          'Buscamos personas responsables, profesionales y comprometidas con brindar un servicio de seguridad de calidad.',
        careersButton: 'Trabaja con nosotros',
      },
    },

    aboutPage: {
      hero: {
        eyebrow: 'Sobre F.R.C.',

        title: 'Experiencia dedicada',
        titleHighlight: 'a proteger.',

        description:
          'Por más de 15 años, F.R.C Security Services INC. ha brindado servicios de seguridad privada con un enfoque basado en responsabilidad, presencia y profesionalismo.',

        experienceLabel: 'Años de experiencia',

        locationLabel: 'Servicio y presencia local',

        badge: 'Seguridad profesional',
      },

      story: {
        eyebrow: 'Nuestra Trayectoria',

        title: 'Más que seguridad,',
        titleHighlight: 'generamos confianza.',

        description1:
          'F.R.C Security Services INC. cuenta con más de 15 años de experiencia ofreciendo servicios de seguridad privada en Puerto Rico para comercios, comunidades, eventos y otras operaciones que requieren protección profesional.',

        description2:
          'Nuestra experiencia nos ha permitido desarrollar un servicio enfocado en la prevención, la presencia y la atención responsable de las necesidades de cada cliente.',

        highlight:
          'Nuestro compromiso es ofrecer una presencia profesional que contribuya a proteger personas, propiedades y operaciones.',
      },

      purpose: {
        mission: {
          eyebrow: 'Nuestra Misión',

          title: 'Proteger con profesionalismo',

          description:
            'Brindar servicios de seguridad privada confiables y responsables, mediante personal preparado y una operación enfocada en la prevención, el servicio y la tranquilidad de nuestros clientes.',
        },

        vision: {
          eyebrow: 'Nuestra Visión',

          title: 'Ser una referencia de confianza',

          description:
            'Continuar fortaleciendo nuestra presencia en Puerto Rico mediante un servicio profesional, consistente y comprometido con las necesidades de cada cliente.',
        },
      },

      values: {
        eyebrow: 'Nuestros Valores',

        title: 'Principios que guían',
        titleHighlight: 'nuestro servicio.',

        description:
          'Cada operación refleja los principios que han respaldado nuestra trayectoria durante más de 15 años.',

        items: {
          commitment: {
            title: 'Compromiso',

            description:
              'Asumimos cada responsabilidad con seriedad, atención y dedicación al servicio.',
          },

          professionalism: {
            title: 'Profesionalismo',

            description:
              'Promovemos una presencia responsable, preparada y orientada al cumplimiento.',
          },

          trust: {
            title: 'Confianza',

            description:
              'Construimos relaciones mediante comunicación, responsabilidad y consistencia en nuestro servicio.',
          },

          experience: {
            title: 'Experiencia',

            description:
              'Más de 15 años de trayectoria respaldan nuestro conocimiento y desarrollo operacional.',
          },
        },
      },

      cta: {
        eyebrow: 'Conoce nuestros servicios',

        title: 'Seguridad respaldada por experiencia.',

        description:
          'Descubre las soluciones de seguridad que F.R.C. puede ofrecer para tu negocio, comunidad, evento o propiedad.',

        button: 'Ver servicios',
      },
    },

    servicesPage: {
      hero: {
        eyebrow: 'Servicios de Seguridad',

        title: 'Protección profesional para',
        titleHighlight: 'cada entorno.',

        description:
          'Servicios de seguridad privada adaptados a comercios, comunidades, eventos, propiedades y operaciones en Puerto Rico.',

        primaryButton: 'Solicitar cotización',
        secondaryButton: 'Explorar servicios',

        trustProfessional:
          'Servicio profesional y responsable',

        trustExperience:
          'Más de 15 años de experiencia',

        cardLabel: '15+ años de experiencia',

        cardTitle:
          'Presencia profesional y soluciones adaptadas.',

        cardDescription:
          'Evaluamos cada entorno para ofrecer un servicio alineado con sus necesidades de seguridad.',

        cardStatus:
          'Disponibles para evaluar tus necesidades',
      },

      services: {
        eyebrow: 'Nuestros Servicios',

        title: 'Soluciones profesionales',
        titleHighlight: 'para diferentes necesidades.',

        description:
          'Ofrecemos servicios de seguridad comercial, urbanizaciones, eventos, seguridad armada, control de acceso y seguridad corporativa.',

        learnMore: 'Solicitar servicio',
      },

      items: {
        commercial: {
          title: 'Seguridad Comercial',

          description:
            'Vigilancia preventiva y presencia profesional para comercios, negocios y áreas de alto flujo.',
        },

        residential: {
          title: 'Seguridad para Urbanizaciones',

          description:
            'Control de acceso, rondas preventivas y vigilancia profesional para comunidades residenciales.',
        },

        events: {
          title: 'Seguridad para Eventos',

          description:
            'Cobertura profesional para actividades privadas, eventos corporativos y ocasiones especiales.',
        },

        armed: {
          title: 'Seguridad Armada',

          description:
            'Personal de seguridad armado para operaciones que requieren un nivel adicional de protección.',
        },

        access: {
          title: 'Control de Acceso',

          description:
            'Supervisión organizada de entradas, salidas, visitantes y áreas de acceso restringido.',
        },

        corporate: {
          title: 'Seguridad Corporativa',

          description:
            'Protección profesional para instalaciones, empleados, visitantes y operaciones empresariales.',
        },
      },

      sectors: {
        eyebrow: 'Áreas que atendemos',

        title: 'Cobertura en',
        titleHighlight: 'múltiples sectores.',

        description:
          'Nuestra experiencia nos permite atender diferentes tipos de propiedades, comunidades, comercios y operaciones en Puerto Rico.',

        items: {
          malls: 'Centros Comerciales',
          communities: 'Urbanizaciones',
          businesses: 'Comercios',
          corporate: 'Corporaciones',
          events: 'Eventos',
          private: 'Propiedades Privadas',
        },
      },

      cta: {
        eyebrow: '¿Necesitas seguridad?',

        title: 'Conversemos sobre tus necesidades.',

        description:
          'Nuestro equipo puede evaluar tu operación y orientarte sobre el servicio de seguridad más adecuado.',

        button: 'Solicitar cotización',
      },
    },

    contactPage: {
      hero: {
        eyebrow: 'Contáctanos',

        title: 'Hablemos sobre tus',
        titleHighlight:
          'necesidades de seguridad.',

        description:
          'Ya sea que necesites servicios de seguridad, una cotización o estés interesado en formar parte de nuestro equipo, queremos saber de ti.',

        directContact:
          'Contacto directo',

        callUs:
          'Llámanos',

        emailUs:
          'Escríbenos',

        serviceContact:
          'Servicios de Seguridad',

        serviceContactDescription:
          'Solicita información o una cotización',

        employmentContact:
          'Oportunidades de Empleo',

        employmentContactDescription:
          'Conoce cómo formar parte de nuestro equipo',
      },

      info: {
        eyebrow:
          'Estamos para ayudarte',

        title:
          'Comienza con una',

        titleHighlight:
          'conversación.',

        description:
          'Cuéntanos qué necesitas proteger o selecciona la opción de empleo si deseas conocer oportunidades para formar parte de F.R.C Security Services INC.',
      },

      directActions: {
        whatsapp: {
          title:
            'Escribir por WhatsApp',

          description:
            'Comunícate directamente con nuestro equipo.',
        },

        email: {
          title:
            'Enviar un Email',

          description:
            'Envíanos información sobre tu solicitud.',
        },
      },

      form: {
        eyebrow:
          'Solicitud de Información',

        title:
          'Cuéntanos cómo podemos ayudarte',

        description:
          'Completa la información y nuestro equipo podrá comunicarse contigo para conocer mejor tus necesidades.',

        employmentEyebrow:
          'Oportunidades de Empleo',

        employmentTitle:
          '¿Quieres formar parte de nuestro equipo?',

        employmentDescription:
          'Cuéntanos sobre tu experiencia, habilidades, disponibilidad y el tipo de trabajo de seguridad que te interesa.',

        inquiry: {
          service:
            'Servicio / Cotización',

          employment:
            'Empleo',
        },

        fields: {
          name:
            'Nombre',

          email:
            'Correo electrónico',

          phone:
            'Teléfono',

          service:
            'Asunto',

          message:
            'Mensaje',

          employmentMessage:
            'Experiencia e Interés Laboral',
        },

        placeholders: {
          name:
            'Tu nombre completo',

          email:
            'correo@ejemplo.com',

          phone:
            '787-000-0000',

          service:
            'Selecciona una opción',

          message:
            'Cuéntanos sobre tu necesidad de seguridad, propiedad, operación o servicio que estás buscando...',

          employmentMessage:
            'Cuéntanos sobre tu experiencia, habilidades, disponibilidad y el tipo de posición que te interesa...',
        },

        services: {
          quote:
            'Cotización de seguridad',

          information:
            'Información de servicios',

          employment:
            'Oportunidad de empleo',

          other:
            'Otro',
        },

        privacy:
          'Tu información será utilizada únicamente para revisar y responder a tu solicitud.',

        submit:
          'Enviar solicitud',

        employmentSubmit:
          'Enviar Solicitud de Empleo',
      },

      careers: {
        eyebrow:
          'Trabaja con Nosotros',

        title:
          'Construye tu futuro',

        titleHighlight:
          'con F.R.C.',

        description:
          'Si eres una persona responsable, profesional y comprometida con la seguridad, queremos conocer tu interés en formar parte de nuestro equipo.',

        button:
          'Solicitar Empleo',
      },

      trust: {
        response: {
          title:
            'Respuesta rápida',

          description:
            'Atendemos las solicitudes con prontitud.',
        },

        personalized: {
          title:
            'Atención personalizada',

          description:
            'Evaluamos cada necesidad de forma individual.',
        },

        tailored: {
          title:
            'Soluciones a medida',

          description:
            'Adaptamos el servicio al entorno y necesidad.',
        },

        reliable: {
          title:
            'Confianza y seguridad',

          description:
            'Profesionales comprometidos con cada asignación.',
        },
      },
    },

    notFoundPage: {
      eyebrow:
        'Página no encontrada',

      title:
        'La página que buscas no está disponible.',

      description:
        'Es posible que el enlace haya cambiado, la página haya sido movida o la dirección ingresada no sea correcta.',

      primaryButton:
        'Volver al inicio',

      secondaryButton:
        'Ver servicios',
    },

    footer: {
      description:
        'Más de 15 años brindando seguridad privada con profesionalismo, presencia y compromiso en Puerto Rico.',
      quickLinks: 'Enlaces rápidos',
      services: 'Servicios',
      contact: 'Contacto',
      serviceItems: {
        commercial: 'Seguridad Comercial',
        residential: 'Urbanizaciones',
        events: 'Eventos',
        armed: 'Seguridad Armada',
        access: 'Control de Acceso',
      },
      rights: 'Todos los derechos reservados.',
    },
  },

  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      requestService: 'Request a Quote',
    },

    accessibility: {
      mainNavigation: 'Main navigation',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      goHome: 'F.R.C Security Services INC. - Home',
    },

    language: {
      label: 'Language',
      english: 'English',
      spanish: 'Español',
    },

    whatsapp: {
      message:
        'Hello, I would like more information about the security services offered by F.R.C Security Services INC.',
      ariaLabel:
        'Contact F.R.C Security Services INC. on WhatsApp',
    },

    home: {
      hero: {
        badge: 'Private security in Puerto Rico',
        title: 'Professional protection',
        titleHighlight: 'that inspires confidence.',
        description:
          'More than 15 years providing private security with presence, professionalism, and commitment for businesses, communities, events, and properties throughout Puerto Rico.',
        primaryButton: 'Request a Quote',
        secondaryButton: 'View Services',
        coverage: '24/7 Coverage',
        coverageDescription: 'Availability and presence',
        trained: 'Trained Personnel',
        trainedDescription: 'Preparation and commitment',
        response: 'Fast Response',
        responseDescription: 'Attention when it matters',
        experience: '15+ years of experience',
        trust: 'Reliable protection',
        ready: 'Need security?',
        contactUs: 'Talk to our team',
      },

      services: {
        eyebrow: 'Our Services',

        title: 'Security tailored',
        titleHighlight: 'to every environment.',

        description:
          'Professional solutions for businesses, residential communities, events, and properties that require presence, control, and peace of mind.',

        viewAll: 'View All Services',

        learnMore: 'Learn More',

        items: {
          commercial: {
            title: 'Commercial Security',
            description:
              'Preventive monitoring and professional presence for businesses, commercial properties, and high-traffic environments.',
          },

          residential: {
            title: 'Residential Communities',
            description:
              'Access control, preventive patrols, and security support for residential communities.',
          },

          events: {
            title: 'Events & Activities',
            description:
              'Professional security coverage for private activities, corporate events, and special occasions.',
          },
        },
      },

      benefits: {
        eyebrow: 'Why Choose F.R.C.',

        title: 'Experience that inspires',
        titleHighlight: 'confidence.',

        description:
          'More than 15 years of experience support an operation focused on professionalism, presence, and reliable protection for every client.',

        items: {
          experience: {
            title: '15+ Years of Experience',
            description:
              'A solid track record providing private security services throughout Puerto Rico.',
          },

          reliability: {
            title: 'Reliable Service',
            description:
              'We work with responsibility and commitment to protect what matters most to our clients.',
          },

          presence: {
            title: 'Operational Presence',
            description:
              'Personnel prepared to maintain consistent monitoring, control, and attention throughout every assignment.',
          },

          professional: {
            title: 'Professional Team',
            description:
              'Uniformed and trained security personnel focused on service and proper execution of every responsibility.',
          },
        },
      },

      fleet: {
        eyebrow: 'Our Fleet',
        title: 'Operational presence',
        titleHighlight: 'where it matters.',
        description:
          'Our fleet supports mobility, supervision, and presence across our security operations.',
        label: 'F.R.C. Operations',
      },

      cta: {
        eyebrow: 'Security backed by experience',

        title: 'Protect what matters',
        titleHighlight: 'most.',

        description:
          'Let’s discuss your needs and evaluate a professional security solution tailored to your operation.',

        primaryButton: 'Request a Quote',
        secondaryButton: 'Call Now',

        careersEyebrow: 'Career Opportunities',

        careersTitle:
          'Grow professionally with F.R.C.',

        careersDescription:
          'We are looking for responsible and committed individuals interested in joining a professional security team.',

        careersButton:
          'View Opportunities',
      },
    },

   aboutPage: {
      hero: {
        eyebrow: 'About F.R.C.',

        title: 'Experience dedicated',
        titleHighlight: 'to protection.',

        description:
          'For more than 15 years, F.R.C Security Services INC. has provided private security services with a focus on responsibility, presence, and professionalism.',

        experienceLabel: 'Years of experience',

        locationLabel: 'Local service and presence',

        badge: 'Professional security',
      },

      story: {
        eyebrow: 'Our Experience',

        title: 'More than security,',
        titleHighlight: 'we build trust.',

        description1:
          'F.R.C Security Services INC. has more than 15 years of experience providing private security services throughout Puerto Rico for businesses, communities, events, and other operations requiring professional protection.',

        description2:
          'Our experience has allowed us to develop a service focused on prevention, presence, and responsible attention to each client’s needs.',

        highlight:
          'Our commitment is to provide a professional presence that helps protect people, property, and operations.',
      },

      purpose: {
        mission: {
          eyebrow: 'Our Mission',

          title: 'Protect with professionalism',

          description:
            'Provide reliable and responsible private security services through trained personnel and an operation focused on prevention, service, and our clients’ peace of mind.',
        },

        vision: {
          eyebrow: 'Our Vision',

          title: 'Be a trusted security provider',

          description:
            'Continue strengthening our presence in Puerto Rico through professional, consistent service committed to the needs of every client.',
        },
      },

      values: {
        eyebrow: 'Our Values',

        title: 'Principles that guide',
        titleHighlight: 'our service.',

        description:
          'Every operation reflects the principles that have supported our company for more than 15 years.',

        items: {
          commitment: {
            title: 'Commitment',

            description:
              'We approach every responsibility with seriousness, attention, and dedication to service.',
          },

          professionalism: {
            title: 'Professionalism',

            description:
              'We promote a responsible, prepared presence focused on proper execution.',
          },

          trust: {
            title: 'Trust',

            description:
              'We build relationships through communication, responsibility, and consistent service.',
          },

          experience: {
            title: 'Experience',

            description:
              'More than 15 years of service support our operational knowledge and continued development.',
          },
        },
      },

      cta: {
        eyebrow: 'Explore Our Services',

        title: 'Security backed by experience.',

        description:
          'Discover the security solutions F.R.C. can provide for your business, community, event, or property.',

        button: 'View Services',
      },
    },

    servicesPage: {
      hero: {
        eyebrow: 'Security Services',

        title: 'Professional protection for',
        titleHighlight: 'every environment.',

        description:
          'Private security services tailored to businesses, communities, events, properties, and operations throughout Puerto Rico.',

        primaryButton: 'Request a Quote',
        secondaryButton: 'Explore Services',

        trustProfessional:
          'Professional and responsible service',

        trustExperience:
          'More than 15 years of experience',

        cardLabel: '15+ years of experience',

        cardTitle:
          'Professional presence and tailored solutions.',

        cardDescription:
          'We evaluate each environment to provide a service aligned with its specific security needs.',

        cardStatus:
          'Available to evaluate your security needs',
      },

      services: {
        eyebrow: 'Our Services',

        title: 'Professional solutions',
        titleHighlight: 'for different needs.',

        description:
          'We provide commercial security, residential community security, event security, armed security, access control, and corporate security services.',

        learnMore: 'Request Service',
      },

      items: {
        commercial: {
          title: 'Commercial Security',

          description:
            'Preventive monitoring and professional presence for businesses, commercial properties, and high-traffic areas.',
        },

        residential: {
          title: 'Residential Community Security',

          description:
            'Access control, preventive patrols, and professional security presence for residential communities.',
        },

        events: {
          title: 'Event Security',

          description:
            'Professional security coverage for private activities, corporate events, and special occasions.',
        },

        armed: {
          title: 'Armed Security',

          description:
            'Armed security personnel for operations that require an additional level of protection.',
        },

        access: {
          title: 'Access Control',

          description:
            'Organized monitoring of entrances, exits, visitors, and restricted-access areas.',
        },

        corporate: {
          title: 'Corporate Security',

          description:
            'Professional protection for facilities, employees, visitors, and business operations.',
        },
      },

      sectors: {
        eyebrow: 'Areas We Serve',

        title: 'Coverage across',
        titleHighlight: 'multiple sectors.',

        description:
          'Our experience allows us to serve different types of properties, communities, businesses, and operations throughout Puerto Rico.',

        items: {
          malls: 'Shopping Centers',
          communities: 'Residential Communities',
          businesses: 'Businesses',
          corporate: 'Corporations',
          events: 'Events',
          private: 'Private Properties',
        },
      },

      cta: {
        eyebrow: 'Need Security?',

        title: 'Let’s discuss your security needs.',

        description:
          'Our team can evaluate your operation and guide you toward the security service that best fits your needs.',

        button: 'Request a Quote',
      },
    },

    contactPage: {
      hero: {
        eyebrow:
          'Contact Us',

        title:
          'Let’s talk about your',

        titleHighlight:
          'security needs.',

        description:
          'Whether you need security services, a quote, or are interested in joining our team, we want to hear from you.',

        directContact:
          'Direct Contact',

        callUs:
          'Call Us',

        emailUs:
          'Email Us',

        serviceContact:
          'Security Services',

        serviceContactDescription:
          'Request information or a quote',

        employmentContact:
          'Employment Opportunities',

        employmentContactDescription:
          'Learn how to join our team',
      },

      info: {
        eyebrow:
          'We Are Here to Help',

        title:
          'Start with a',

        titleHighlight:
          'conversation.',

        description:
          'Tell us what you need to protect or select the employment option if you are interested in joining F.R.C Security Services INC.',
      },

      directActions: {
        whatsapp: {
          title:
            'Message Us on WhatsApp',

          description:
            'Connect directly with our team.',
        },

        email: {
          title:
            'Send an Email',

          description:
            'Send us information about your request.',
        },
      },

      form: {
        eyebrow:
          'Information Request',

        title:
          'Tell us how we can help',

        description:
          'Complete the information and our team can contact you to better understand your security needs.',

        employmentEyebrow:
          'Employment Opportunities',

        employmentTitle:
          'Interested in joining our team?',

        employmentDescription:
          'Tell us about your experience, skills, availability, and the type of security work you are interested in.',

        inquiry: {
          service:
            'Service / Quote',

          employment:
            'Employment',
        },

        fields: {
          name:
            'Name',

          email:
            'Email',

          phone:
            'Phone',

          service:
            'Subject',

          message:
            'Message',

          employmentMessage:
            'Experience & Employment Interest',
        },

        placeholders: {
          name:
            'Your full name',

          email:
            'email@example.com',

          phone:
            '787-000-0000',

          service:
            'Select an option',

          message:
            'Tell us about your security needs, property, operation, or the service you are looking for...',

          employmentMessage:
            'Tell us about your experience, skills, availability, and the type of position you are interested in...',
        },

        services: {
          quote:
            'Security quote',

          information:
            'Service information',

          employment:
            'Career opportunity',

          other:
            'Other',
        },

        privacy:
          'Your information will only be used to review and respond to your request.',

        submit:
          'Send Request',

        employmentSubmit:
          'Send Employment Inquiry',
      },

      careers: {
        eyebrow:
          'Join Our Team',

        title:
          'Build your future',

        titleHighlight:
          'with F.R.C.',

        description:
          'If you are responsible, professional, and committed to security, we want to hear about your interest in joining our team.',

        button:
          'Apply for Employment',
      },

      trust: {
        response: {
          title:
            'Fast Response',

          description:
            'We handle requests promptly.',
        },

        personalized: {
          title:
            'Personalized Attention',

          description:
            'We evaluate every need individually.',
        },

        tailored: {
          title:
            'Tailored Solutions',

          description:
            'We adapt service to the environment and need.',
        },

        reliable: {
          title:
            'Trust & Security',

          description:
            'Professionals committed to every assignment.',
        },
      },
    },

    notFoundPage: {
      eyebrow:
        'Page Not Found',

      title:
        'The page you are looking for is not available.',

      description:
        'The link may have changed, the page may have been moved, or the address entered may not be correct.',

      primaryButton:
        'Back to Home',

      secondaryButton:
        'View Services',
    },

    footer: {
      description:
        'More than 15 years providing private security with professionalism, presence, and commitment throughout Puerto Rico.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      serviceItems: {
        commercial: 'Commercial Security',
        residential: 'Residential Communities',
        events: 'Events',
        armed: 'Armed Security',
        access: 'Access Control',
      },
      rights: 'All rights reserved.',
    },
  },
} as const
