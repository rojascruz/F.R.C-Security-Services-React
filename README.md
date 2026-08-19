# F.R.C Security Services INC.

Sitio web corporativo de **F.R.C Security Services INC.**, desarrollado con **React + TypeScript + Vite**.

El proyecto está orientado a presentar de forma moderna y profesional los servicios de seguridad privada de la compañía, facilitar solicitudes de cotización, ofrecer canales de contacto directo y presentar oportunidades de empleo.

## Características principales

- Sitio web corporativo responsive.
- Compatible con desktop, tablet y teléfonos.
- Español como idioma predeterminado.
- Opción para cambiar a inglés.
- Navegación con React Router.
- Componentes reutilizables.
- Bootstrap Icons.
- Integración con WhatsApp.
- Formulario de contacto.
- Secciones para servicios, empresa, flota y oportunidades de empleo.

## Tecnologías

- React
- TypeScript
- Vite
- React Router DOM
- React Compiler
- Bootstrap Icons
- CSS responsive
- Oxlint

## Estructura principal

```text
src/
├── assets/
│   └── images/
│       ├── about/
│       ├── branding/
│       ├── fleet/
│       ├── hero/
│       └── services/
├── components/
│   ├── home/
│   └── layout/
├── config/
│   └── siteConfig.ts
├── context/
│   ├── LanguageContext.tsx
│   └── LanguageProvider.tsx
├── hooks/
│   └── useLanguage.ts
├── i18n/
│   └── translations.ts
├── pages/
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   └── ServicesPage.tsx
├── styles/
│   ├── home/
│   ├── layout/
│   ├── pages/
│   ├── global.css
│   └── variables.css
├── App.tsx
├── index.css
└── main.tsx
```

## Idiomas

Los textos bilingües se administran desde:

```text
src/i18n/translations.ts
```

Los componentes consumen las traducciones mediante:

```tsx
const { t } = useLanguage()
```

El idioma predeterminado es **español**.

## Configuración global

Los datos generales de la compañía deben mantenerse en:

```text
src/config/siteConfig.ts
```

Ejemplos:

- Nombre de la empresa
- Teléfono
- Correo electrónico
- WhatsApp
- Ubicación
- Años de experiencia
- Rutas principales

Siempre que sea posible, reutilizar `siteConfig` en lugar de duplicar estos valores en distintos componentes.

## Organización de estilos

### Home

```text
src/styles/home/
```

Ejemplos:

- `hero.css`
- `services-preview.css`
- `benefits.css`
- `fleet.css`
- `home-cta.css`

### Layout

```text
src/styles/layout/
```

Ejemplos:

- `header.css`
- `footer.css`
- `language-switcher.css`
- `whatsapp-button.css`

### Pages

```text
src/styles/pages/
```

Ejemplos:

- `about.css`
- `services.css`
- `contact.css`

Los estilos compartidos se encuentran en:

```text
src/styles/global.css
src/styles/variables.css
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build de producción

```bash
npm run build
```

## Preview del build

```bash
npm run preview
```

## Bootstrap Icons

Instalación:

```bash
npm install bootstrap-icons
```

Import global:

```css
@import 'bootstrap-icons/font/bootstrap-icons.css';
```

## Responsive

Antes de publicar cambios visuales se recomienda probar al menos:

```text
320px
360px
375px
390px
430px
768px
1024px
1366px
1920px
```

## Seguridad

Nunca incluir directamente en el frontend:

- Contraseñas
- Credenciales SMTP
- API keys privadas
- Tokens privados
- Credenciales de base de datos

Los archivos `.env` deben permanecer fuera de Git mediante `.gitignore`.

## Confidencialidad

No deben publicarse nombres de clientes actuales sin autorización. Las referencias públicas deben mantenerse generales y profesionales.

## Git

Antes de hacer commit:

```bash
npm run build
git status
```

Ejemplo:

```bash
git add .
git commit -m "Improve corporate design and responsive layout"
git push
```

## Antes de publicación final

- Validar responsive.
- Validar ES/EN.
- Probar navegación.
- Probar formulario de contacto.
- Revisar enlaces de teléfono, correo y WhatsApp.
- Optimizar imágenes.
- Verificar SEO básico.
- Ejecutar build de producción.

---

© F.R.C Security Services INC.
