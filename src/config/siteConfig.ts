// Datos globales de la empresa. Los textos ES/EN viven en translations.ts.

export const siteConfig = {
  businessName: 'F.R.C Security Services INC.',
  location: 'Puerto Rico',

  phone: {
    display: '787-690-5396',
    href: '+17876905396',
  },

  email: 'frc_6905396@hotmail.com',

  whatsapp: {
    number: '17876905396',
  },

  businessHours: {
    days: 'Lunes a Viernes',
    hours: '8:00 AM - 6:00 PM',
  },

  experience: {
    years: 15,
    display: '15+',
  },

  navigation: {
    home: '/',
    about: '/about',
    services: '/services',
    contact: '/contact',
  },
} as const
