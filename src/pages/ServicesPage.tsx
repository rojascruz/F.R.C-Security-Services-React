import { NavLink } from 'react-router-dom'

import commercialImage from '../assets/images/services/FRC-Comercial.png'
import residentialImage from '../assets/images/services/FRC-Urba.png'
import eventsImage from '../assets/images/services/FRC-Eventos.png'
import armedImage from '../assets/images/services/FRC-Armado.png'
import accessImage from '../assets/images/services/FRC-ControlAcceso.png'
import corporateImage from '../assets/images/services/FRC-Coorporativo.png'
import heroImage from '../assets/images/services/FRC-MALL.png'

import { siteConfig } from '../config/siteConfig'
import { useLanguage } from '../hooks/useLanguage'

import '../styles/pages/services.css'

function ServicesPage() {
  const { t } = useLanguage()
  const page = t.servicesPage

  const services = [
    {
      key: 'commercial',
      image: commercialImage,
      icon: 'bi-buildings',
      ...page.items.commercial,
    },
    {
      key: 'residential',
      image: residentialImage,
      icon: 'bi-houses',
      ...page.items.residential,
    },
    {
      key: 'events',
      image: eventsImage,
      icon: 'bi-calendar-event',
      ...page.items.events,
    },
    {
      key: 'armed',
      image: armedImage,
      icon: 'bi-shield-lock',
      ...page.items.armed,
    },
    {
      key: 'access',
      image: accessImage,
      icon: 'bi-person-check',
      ...page.items.access,
    },
    {
      key: 'corporate',
      image: corporateImage,
      icon: 'bi-building-check',
      ...page.items.corporate,
    },
  ]

  const sectorIcons = [
    'bi-shop',
    'bi-houses',
    'bi-building',
    'bi-calendar-event',
    'bi-briefcase',
    'bi-geo-alt',
  ]

  const sectors = Object.values(page.sectors.items)

  return (
    <main className="services-page">
      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="services-page-hero">
        <div className="services-page-hero-container">
          <div className="services-page-hero-copy">
            <span className="section-eyebrow light">
              {page.hero.eyebrow}
            </span>

            <h1>
              {page.hero.title}{' '}
              <span>{page.hero.titleHighlight}</span>
            </h1>

            <p>{page.hero.description}</p>

            <div className="services-page-hero-actions">
              <NavLink
                to={siteConfig.navigation.contact}
                className="button services-hero-primary-button"
              >
                {page.hero.primaryButton}

                <i
                  className="bi bi-arrow-right"
                  aria-hidden="true"
                />
              </NavLink>

              <a
                href="#all-services"
                className="button services-hero-secondary-button"
              >
                <i
                  className="bi bi-grid"
                  aria-hidden="true"
                />

                {page.hero.secondaryButton}
              </a>
            </div>

            <div className="services-hero-trust">
              <div>
                <i
                  className="bi bi-shield-check"
                  aria-hidden="true"
                />

                <span>{page.hero.trustProfessional}</span>
              </div>

              <div>
                <i
                  className="bi bi-award"
                  aria-hidden="true"
                />

                <span>{page.hero.trustExperience}</span>
              </div>
            </div>
          </div>

          {/* Imagen destacada */}
          <article className="services-hero-card">
            <img
              src={heroImage}
              alt={page.hero.cardTitle}
            />

            <div
              className="services-hero-card-overlay"
              aria-hidden="true"
            />

            <div className="services-hero-card-content">
              <div
                className="services-hero-card-icon"
                aria-hidden="true"
              >
                <i className="bi bi-shield-check" />
              </div>

              <span>{page.hero.cardLabel}</span>

              <h2>{page.hero.cardTitle}</h2>

              <p>{page.hero.cardDescription}</p>

              <div className="services-hero-status">
                <span
                  className="services-status-dot"
                  aria-hidden="true"
                />

                <strong>
                  {page.hero.cardStatus}
                </strong>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          SERVICES
          ===================================================== */}
      <section
        id="all-services"
        className="all-services-section"
      >
        <div className="section-container">
          <header className="split-section-header services-section-header">
            <div>
              <span className="section-eyebrow">
                {page.services.eyebrow}
              </span>

              <h2>
                {page.services.title}{' '}
                <span>
                  {page.services.titleHighlight}
                </span>
              </h2>
            </div>

            <p>{page.services.description}</p>
          </header>

          <div className="all-services-grid">
            {services.map((service) => (
              <article
                key={service.key}
                className="full-service-card"
              >
                <div className="full-service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />

                  <div
                    className="full-service-image-overlay"
                    aria-hidden="true"
                  />

                  <div
                    className="full-service-icon"
                    aria-hidden="true"
                  >
                    <i className={`bi ${service.icon}`} />
                  </div>
                </div>

                <div className="full-service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <NavLink
                    to={siteConfig.navigation.contact}
                  >
                    {page.services.learnMore}

                    <i
                      className="bi bi-arrow-up-right"
                      aria-hidden="true"
                    />
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTORS
          ===================================================== */}
      <section className="service-sectors-section">
        <div className="section-container">
          <header className="split-section-header dark services-sectors-header">
            <div>
              <span className="section-eyebrow light">
                {page.sectors.eyebrow}
              </span>

              <h2>
                {page.sectors.title}{' '}
                <span>
                  {page.sectors.titleHighlight}
                </span>
              </h2>
            </div>

            <p>{page.sectors.description}</p>
          </header>

          <div className="service-sectors-grid">
            {sectors.map((sector, index) => (
              <article key={sector}>
                <div
                  className="sector-icon"
                  aria-hidden="true"
                >
                  <i
                    className={`bi ${
                      sectorIcons[index] ?? 'bi-shield-check'
                    }`}
                  />
                </div>

                <strong>{sector}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
          ===================================================== */}
      <section className="services-bottom-cta">
        <div className="section-container services-bottom-cta-card">
          <div
            className="services-bottom-cta-icon"
            aria-hidden="true"
          >
            <i className="bi bi-shield-check" />
          </div>

          <div className="services-bottom-cta-copy">
            <span className="section-eyebrow">
              {page.cta.eyebrow}
            </span>

            <h2>{page.cta.title}</h2>

            <p>{page.cta.description}</p>
          </div>

          <NavLink
            to={siteConfig.navigation.contact}
            className="button button-primary services-bottom-cta-button"
          >
            {page.cta.button}

            <i
              className="bi bi-arrow-right"
              aria-hidden="true"
            />
          </NavLink>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage