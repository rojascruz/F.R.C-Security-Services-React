# Guía de Modificación y Estructura

Esta guía explica **qué archivo modificar según el tipo de cambio** dentro del proyecto de F.R.C Security Services INC.

## Regla principal

```text
Texto bilingüe
→ src/i18n/translations.ts

Datos generales de la empresa
→ src/config/siteConfig.ts

Estructura visual / JSX
→ componente .tsx correspondiente

Diseño / responsive
→ archivo .css correspondiente

Nueva página o ruta
→ src/pages + App.tsx
```

## 1. Textos

Modificar:

```text
src/i18n/translations.ts
```

Evitar escribir textos bilingües directamente en componentes.

Correcto:

```tsx
<h1>{t.home.hero.title}</h1>
```

Evitar:

```tsx
<h1>Protección profesional</h1>
```

## 2. Datos generales de la empresa

Modificar:

```text
src/config/siteConfig.ts
```

Aquí deben permanecer:

- Nombre
- Teléfono
- Email
- WhatsApp
- Ubicación
- Años de experiencia
- Rutas

## 3. Header

```text
src/components/layout/Header.tsx
src/styles/layout/header.css
```

Para cambiar:

- Logo
- Navegación
- Menú móvil
- Botón de cotización
- Distribución responsive

## 4. Selector de idioma

```text
src/components/layout/LanguageSwitcher.tsx
src/styles/layout/language-switcher.css
```

La lógica del idioma se mantiene en:

```text
src/context/
src/hooks/useLanguage.ts
src/i18n/translations.ts
```

## 5. Footer

```text
src/components/layout/Footer.tsx
src/styles/layout/footer.css
```

## 6. WhatsApp

```text
src/components/layout/WhatsAppButton.tsx
src/styles/layout/whatsapp-button.css
```

Número:

```text
src/config/siteConfig.ts
```

Mensaje ES/EN:

```text
src/i18n/translations.ts
```

## 7. Home

Componentes:

```text
src/components/home/
```

### Hero

```text
Hero.tsx
styles/home/hero.css
```

### Servicios destacados

```text
ServicesPreview.tsx
styles/home/services-preview.css
```

### Beneficios

```text
Benefits.tsx
styles/home/benefits.css
```

### Flota

```text
Fleet.tsx
styles/home/fleet.css
```

### CTA

```text
HomeCta.tsx
styles/home/home-cta.css
```

La página que organiza estas secciones es:

```text
src/pages/HomePage.tsx
```

## 8. Página Nosotros

```text
src/pages/AboutPage.tsx
src/styles/pages/about.css
```

Textos:

```text
translations.ts → aboutPage
```

## 9. Página Servicios

```text
src/pages/ServicesPage.tsx
src/styles/pages/services.css
```

Textos:

```text
translations.ts → servicesPage
```

Imágenes:

```text
src/assets/images/services/
```

## 10. Página Contacto

```text
src/pages/ContactPage.tsx
src/styles/pages/contact.css
```

Textos:

```text
translations.ts → contactPage
```

## 11. Cambiar imágenes

Ubicación:

```text
src/assets/images/
```

Carpetas principales:

```text
about/
branding/
fleet/
hero/
services/
```

Si se reemplaza una imagen manteniendo exactamente el mismo nombre y ruta, normalmente no será necesario modificar el import del componente.

## 12. Crear una sección nueva

Ejemplo:

```text
src/components/home/Testimonials.tsx
src/styles/home/testimonials.css
```

El componente debe importar su propio CSS:

```tsx
import '../../styles/home/testimonials.css'
```

Luego agregar el componente a `HomePage.tsx`.

## 13. Crear una página nueva

Ejemplo:

```text
src/pages/CareersPage.tsx
src/styles/pages/careers.css
```

Añadir la ruta en:

```text
src/App.tsx
```

Si aplica, añadir también:

- Ruta en `siteConfig.ts`
- Textos en `translations.ts`
- Link en Header/Footer

## 14. global.css

Debe contener únicamente estilos verdaderamente compartidos.

Ejemplos correctos:

```text
body
img
a
button
.section-container
.section-eyebrow
.button
.split-section-header
.centered-section-header
```

Evitar colocar aquí estilos específicos de un componente.

## 15. variables.css

Utilizar para valores globales reutilizables:

```css
--color-primary
--color-accent
--color-muted
--color-border
--container
--shadow-soft
```

## 16. Responsive

Cada componente debe manejar su responsive dentro de su CSS cuando sea necesario.

Ejemplo:

```css
@media (max-width: 1000px) {
    /* Tablet */
}

@media (max-width: 640px) {
    /* Mobile */
}

@media (max-width: 360px) {
    /* Small Mobile */
}
```

Después de un cambio importante, revisar:

```text
320px
375px
390px
430px
768px
1024px
1366px
1920px
```

## 17. Iconos

El proyecto utiliza Bootstrap Icons.

```tsx
<i
  className="bi bi-shield-check"
  aria-hidden="true"
/>
```

Evitar SVG manual cuando exista un Bootstrap Icon apropiado.

## 18. Antes de eliminar un archivo

1. Buscar dónde se importa.
2. Eliminar o actualizar el import.
3. Ejecutar el proyecto.
4. Ejecutar el build.

```bash
npm run build
```

## 19. Antes de hacer commit

```bash
npm run build
git status
```

Confirmar que Git no incluya:

```text
node_modules/
dist/
.env
```

Luego:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

## 20. Regla de mantenimiento

```text
Un componente
→ una responsabilidad

Un CSS
→ una sección o componente

Un texto bilingüe
→ translations.ts

Un dato global
→ siteConfig.ts
```

Evitar volver a crear archivos CSS grandes que mezclen componentes sin relación.

## Flujo recomendado para modificar una sección

Ejemplo: cambiar Servicios del Home.

```text
1. Revisar ServicesPreview.tsx
2. Revisar services-preview.css
3. Revisar home.services en translations.ts
4. Hacer el cambio
5. Probar español
6. Probar inglés
7. Probar desktop
8. Probar tablet
9. Probar mobile
10. npm run build
11. git status
12. commit
```

Este documento debe utilizarse como referencia para futuras modificaciones de estructura y mantenimiento.
