import { NavLink } from 'react-router-dom'

import heroImage from '../../assets/images/hero/FRC-Cob&Com.png'

import { siteConfig } from '../../config/siteConfig'
import { useLanguage } from '../../hooks/useLanguage'

import '../../styles/home/hero.css'

function Hero() {
  const { t } = useLanguage()
  const hero = t.home.hero

  return (
    <section className="home-hero">
      <div
        className="home-hero-background"
        aria-hidden="true"
      />

      <div
        className="home-hero-glow home-hero-glow-left"
        aria-hidden="true"
      />

      <div
        className="home-hero-glow home-hero-glow-right"
        aria-hidden="true"
      />

      <div className="home-hero-container">
        {/* Información principal */}
        <div className="home-hero-copy">
          <span className="home-hero-badge">
            <span
              className="home-hero-badge-dot"
              aria-hidden="true"
            />

            {hero.badge}
          </span>

          <h1>
            {hero.title}{' '}
            <span>{hero.titleHighlight}</span>
          </h1>

          <p className="home-hero-description">
            {hero.description}
          </p>

          <div className="home-hero-actions">
            <NavLink
              to={siteConfig.navigation.contact}
              className="button home-hero-primary-button"
            >
              {hero.primaryButton}

              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              />
            </NavLink>

            <NavLink
              to={siteConfig.navigation.services}
              className="button home-hero-secondary-button"
            >
              <i
                className="bi bi-grid"
                aria-hidden="true"
              />

              {hero.secondaryButton}
            </NavLink>
          </div>

          {/* Señales principales de confianza */}
          <div className="home-hero-trust">
            <article>
              <div
                className="home-hero-trust-icon"
                aria-hidden="true"
              >
                <i className="bi bi-shield-check" />
              </div>

              <div className="home-hero-trust-copy">
                <strong>{hero.coverage}</strong>

                <span>
                  {hero.coverageDescription}
                </span>
              </div>
            </article>

            <article>
              <div
                className="home-hero-trust-icon"
                aria-hidden="true"
              >
                <i className="bi bi-person-badge" />
              </div>

              <div className="home-hero-trust-copy">
                <strong>{hero.trained}</strong>

                <span>
                  {hero.trainedDescription}
                </span>
              </div>
            </article>

            <article>
              <div
                className="home-hero-trust-icon"
                aria-hidden="true"
              >
                <i className="bi bi-lightning-charge" />
              </div>

              <div className="home-hero-trust-copy">
                <strong>{hero.response}</strong>

                <span>
                  {hero.responseDescription}
                </span>
              </div>
            </article>
          </div>
        </div>

        {/* Imagen principal */}
        <div className="home-hero-visual">
          <div className="home-hero-image-frame">
            <div className="home-hero-image-wrap">
              <img
                src={heroImage}
                alt="Operación de F.R.C Security Services INC."
                loading="eager"
                fetchPriority="high"
              />

              <div
                className="home-hero-image-overlay"
                aria-hidden="true"
              />
            </div>

            {/* Trayectoria */}
            <div className="hero-experience-card">
              <span className="hero-experience-number">
                {siteConfig.experience.display}
              </span>

              <div className="hero-experience-copy">
                <strong>
                  {hero.experience}
                </strong>

                <span>
                  F.R.C Security Services INC.
                </span>
              </div>
            </div>

            {/* Contacto */}
            <NavLink
              to={siteConfig.navigation.contact}
              className="hero-status-card"
            >
              <span
                className="status-dot"
                aria-hidden="true"
              />

              <div>
                <strong>{hero.ready}</strong>
                <span>{hero.contactUs}</span>
              </div>

              <i
                className="bi bi-arrow-up-right"
                aria-hidden="true"
              />
            </NavLink>
          </div>

          <div
            className="home-hero-visual-decoration"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero