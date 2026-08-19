import { NavLink } from 'react-router-dom'

import storyImage from '../assets/images/about/FRC-Nosotros.png'
import teamImage from '../assets/images/about/FRC-Cob&Com.png'

import { siteConfig } from '../config/siteConfig'
import { useLanguage } from '../hooks/useLanguage'

import '../styles/pages/about.css'

function AboutPage() {
  const { t } = useLanguage()
  const page = t.aboutPage

  const values = [
    {
      key: 'commitment',
      icon: 'bi-shield-check',
      content: page.values.items.commitment,
    },
    {
      key: 'professionalism',
      icon: 'bi-person-badge',
      content: page.values.items.professionalism,
    },
    {
      key: 'trust',
      icon: 'bi-hand-thumbs-up',
      content: page.values.items.trust,
    },
    {
      key: 'experience',
      icon: 'bi-award',
      content: page.values.items.experience,
    },
  ]

  return (
    <main className="about-page">
      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="about-page-hero">
        <div className="about-page-hero-container">
          <div className="about-page-hero-copy">
            <span className="section-eyebrow light">
              {page.hero.eyebrow}
            </span>

            <h1>
              {page.hero.title}{' '}
              <span>{page.hero.titleHighlight}</span>
            </h1>

            <p>
              {page.hero.description}
            </p>

            <div className="about-page-hero-trust">
              <div>
                <i
                  className="bi bi-award"
                  aria-hidden="true"
                />

                <div>
                  <strong>
                    {siteConfig.experience.display}
                  </strong>

                  <span>
                    {page.hero.experienceLabel}
                  </span>
                </div>
              </div>

              <div>
                <i
                  className="bi bi-geo-alt"
                  aria-hidden="true"
                />

                <div>
                  <strong>
                    {siteConfig.location}
                  </strong>

                  <span>
                    {page.hero.locationLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-page-hero-visual">
            <img
              src={teamImage}
              alt="Operación de F.R.C Security Services INC."
            />

            <div
              className="about-page-hero-overlay"
              aria-hidden="true"
            />

            <div className="about-page-hero-badge">
              <i
                className="bi bi-shield-check"
                aria-hidden="true"
              />

              <span>
                {page.hero.badge}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HISTORIA
          ===================================================== */}
      <section className="about-story-section">
        <div className="section-container about-story-grid">
          <div className="about-story-image">
            <img
              src={storyImage}
              alt="Equipo de F.R.C Security Services INC."
              loading="lazy"
            />

            <div
              className="about-story-image-decoration"
              aria-hidden="true"
            />
          </div>

          <div className="about-story-copy">
            <span className="section-eyebrow">
              {page.story.eyebrow}
            </span>

            <h2>
              {page.story.title}{' '}
              <span>
                {page.story.titleHighlight}
              </span>
            </h2>

            <p>
              {page.story.description1}
            </p>

            <p>
              {page.story.description2}
            </p>

            <div className="about-story-highlight">
              <i
                className="bi bi-shield-check"
                aria-hidden="true"
              />

              <p>
                {page.story.highlight}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISIÓN Y VISIÓN
          ===================================================== */}
      <section className="about-purpose-section">
        <div className="section-container about-purpose-grid">
          <article className="about-purpose-card">
            <div
              className="about-purpose-icon"
              aria-hidden="true"
            >
              <i className="bi bi-bullseye" />
            </div>

            <span className="about-purpose-eyebrow">
              {page.purpose.mission.eyebrow}
            </span>

            <h2>
              {page.purpose.mission.title}
            </h2>

            <p>
              {page.purpose.mission.description}
            </p>
          </article>

          <article className="about-purpose-card">
            <div
              className="about-purpose-icon"
              aria-hidden="true"
            >
              <i className="bi bi-eye" />
            </div>

            <span className="about-purpose-eyebrow">
              {page.purpose.vision.eyebrow}
            </span>

            <h2>
              {page.purpose.vision.title}
            </h2>

            <p>
              {page.purpose.vision.description}
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          VALORES
          ===================================================== */}
      <section className="about-values-section">
        <div className="section-container">
          <header className="centered-section-header about-values-header">
            <span className="section-eyebrow">
              {page.values.eyebrow}
            </span>

            <h2>
              {page.values.title}{' '}
              <span>
                {page.values.titleHighlight}
              </span>
            </h2>

            <p>
              {page.values.description}
            </p>
          </header>

          <div className="about-values-grid">
            {values.map((value) => (
              <article
                key={value.key}
                className="about-value-card"
              >
                <div
                  className="about-value-icon"
                  aria-hidden="true"
                >
                  <i className={`bi ${value.icon}`} />
                </div>

                <h3>
                  {value.content.title}
                </h3>

                <p>
                  {value.content.description}
                </p>

                <div
                  className="about-value-accent"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
          ===================================================== */}
      <section className="about-cta-section">
        <div className="section-container about-cta-card">
          <div className="about-cta-icon">
            <i
              className="bi bi-shield-lock"
              aria-hidden="true"
            />
          </div>

          <div className="about-cta-copy">
            <span>
              {page.cta.eyebrow}
            </span>

            <h2>
              {page.cta.title}
            </h2>

            <p>
              {page.cta.description}
            </p>
          </div>

          <NavLink
            to={siteConfig.navigation.services}
            className="button button-primary about-cta-button"
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

export default AboutPage