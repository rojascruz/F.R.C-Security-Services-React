import { NavLink } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import { useLanguage } from '../hooks/useLanguage'
import '../styles/pages/not-found.css'

function NotFoundPage() {
    const { language } = useLanguage()

    const content =
        language === 'es'
            ? {
                  code: '404',
                  eyebrow: 'Página no encontrada',
                  title: 'La página que buscas no está disponible.',
                  description:
                      'Es posible que el enlace haya cambiado, la página haya sido movida o la dirección ingresada no sea correcta.',
                  primaryButton: 'Volver al inicio',
                  secondaryButton: 'Ver servicios',
              }
            : {
                  code: '404',
                  eyebrow: 'Page not found',
                  title: 'The page you are looking for is not available.',
                  description:
                      'The link may have changed, the page may have been moved, or the address entered may not be correct.',
                  primaryButton: 'Back to Home',
                  secondaryButton: 'View Services',
              }

    return (
        <main className="not-found-page">
            <div className="not-found-background" />

            <section className="not-found-container">
                <div className="not-found-content">
                    <span className="not-found-eyebrow">
                        <i
                            className="bi bi-shield-exclamation"
                            aria-hidden="true"
                        />

                        {content.eyebrow}
                    </span>

                    <div
                        className="not-found-code"
                        aria-hidden="true"
                    >
                        {content.code}
                    </div>

                    <h1>{content.title}</h1>

                    <p>
                        {content.description}
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

                            {content.primaryButton}
                        </NavLink>

                        <NavLink
                            to={siteConfig.navigation.services}
                            className="button button-secondary"
                        >
                            {content.secondaryButton}

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
                            F.R.C Security Services INC.
                        </span>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default NotFoundPage