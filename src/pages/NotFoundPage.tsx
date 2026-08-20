import { NavLink } from 'react-router-dom'

import { siteConfig } from '../config/siteConfig'
import { useLanguage } from '../hooks/useLanguage'

import '../styles/pages/not-found.css'

function NotFoundPage() {
  const { t } = useLanguage()

  const page = t.notFoundPage

  return (
    <main className="not-found-page">

      <div
        className="not-found-background"
        aria-hidden="true"
      />

      <section className="not-found-container">

        <div className="not-found-content">

          <span className="not-found-eyebrow">
            <i
              className="bi bi-shield-exclamation"
              aria-hidden="true"
            />

            {page.eyebrow}
          </span>

          <div
            className="not-found-code"
            aria-hidden="true"
          >
            404
          </div>

          <h1>
            {page.title}
          </h1>

          <p>
            {page.description}
          </p>

          <div className="not-found-actions">

            <NavLink
              to={siteConfig.navigation.home}
              className="button button-primary"
            >
              <i
                className="bi bi-house-door"
                aria-hidden="true"
              />

              {page.primaryButton}
            </NavLink>

            <NavLink
              to={siteConfig.navigation.services}
              className="button button-secondary"
            >
              {page.secondaryButton}

              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              />
            </NavLink>

          </div>

          <div className="not-found-security">

            <i
              className="bi bi-shield-check"
              aria-hidden="true"
            />

            <span>
              {siteConfig.businessName}
            </span>

          </div>

        </div>

      </section>

    </main>
  )
}

export default NotFoundPage