import { NavLink } from 'react-router-dom'

import backgroundImage from '../../assets/images/hero/FRC-Cob&Com.png'
import { siteConfig } from '../../config/siteConfig'
import { useLanguage } from '../../hooks/useLanguage'

import '../../styles/home/home-cta.css'

function HomeCta() {
  const { t } = useLanguage()
  const section = t.home.cta

  return (
    <section className="home-cta-section">
      <div className="home-cta-container">
        <img
          src={backgroundImage}
          alt=""
          className="home-cta-background"
          loading="lazy"
        />

        <div className="home-cta-overlay" />

        <div className="home-cta-content">
          <span className="section-eyebrow light">
            {section.eyebrow}
          </span>

          <h2>
            {section.title}{' '}
            <span>{section.titleHighlight}</span>
          </h2>

          <p>{section.description}</p>

          <div className="home-cta-actions">
            <NavLink
              to={siteConfig.navigation.contact}
              className="button home-cta-primary-button"
            >
              {section.primaryButton}

              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              />
            </NavLink>

            <a
              href={`tel:${siteConfig.phone.href}`}
              className="button home-cta-secondary-button"
            >
              <i
                className="bi bi-telephone"
                aria-hidden="true"
              />

              {section.secondaryButton}
            </a>
          </div>

          <div className="home-cta-trust">
            <div>
              <i
                className="bi bi-shield-check"
                aria-hidden="true"
              />

              <span>
                {siteConfig.experience.display}
              </span>

              <small>
                {section.eyebrow}
              </small>
            </div>

            <div>
              <i
                className="bi bi-geo-alt"
                aria-hidden="true"
              />

              <span>
                {siteConfig.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="careers-strip">
        <div className="careers-icon" aria-hidden="true">
          <i className="bi bi-person-plus" />
        </div>

        <div className="careers-content">
          <span className="careers-eyebrow">
            {section.careersEyebrow}
          </span>

          <h3>
            {section.careersTitle}
          </h3>

          <p>
            {section.careersDescription}
          </p>
        </div>

        <NavLink
          to="/contact#careers"
          className="button careers-button"
        >
          {section.careersButton}

          <i
            className="bi bi-arrow-right"
            aria-hidden="true"
          />
        </NavLink>
      </div>
    </section>
  )
}

export default HomeCta