import { NavLink } from 'react-router-dom'

import commercialImage from '../../assets/images/hero/FRC-Comercial.png'
import residentialImage from '../../assets/images/hero/FRC-Urba.png'
import eventsImage from '../../assets/images/hero/FRC-Eventos.png'

import { siteConfig } from '../../config/siteConfig'
import { useLanguage } from '../../hooks/useLanguage'

import '../../styles/home/services-preview.css'

function ServicesPreview() {
  const { t } = useLanguage()
  const section = t.home.services

  const services = [
    {
      key: 'commercial',
      image: commercialImage,
      icon: 'bi-buildings',
      ...section.items.commercial,
    },
    {
      key: 'residential',
      image: residentialImage,
      icon: 'bi-houses',
      ...section.items.residential,
    },
    {
      key: 'events',
      image: eventsImage,
      icon: 'bi-calendar-event',
      ...section.items.events,
    },
  ]

  return (
    <section className="services-preview-section">
      <div className="section-container">
        <header className="split-section-header services-preview-header">
          <div>
            <span className="section-eyebrow">
              {section.eyebrow}
            </span>

            <h2>
              {section.title}{' '}
              <span>{section.titleHighlight}</span>
            </h2>
          </div>

          <div className="services-preview-header-copy">
            <p>{section.description}</p>

            <NavLink
              to={siteConfig.navigation.services}
              className="services-preview-view-all"
            >
              {section.viewAll}

              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              />
            </NavLink>
          </div>
        </header>

        <div className="services-preview-grid">
          {services.map((service) => (
            <NavLink
              key={service.key}
              to={siteConfig.navigation.services}
              className="service-preview-card"
              aria-label={`${section.learnMore}: ${service.title}`}
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
              />

              <div
                className="service-preview-overlay"
                aria-hidden="true"
              />

              <div
                className="service-preview-icon"
                aria-hidden="true"
              >
                <i className={`bi ${service.icon}`} />
              </div>

              <div className="service-preview-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="service-preview-link">
                  {section.learnMore}

                  <i
                    className="bi bi-arrow-up-right"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview