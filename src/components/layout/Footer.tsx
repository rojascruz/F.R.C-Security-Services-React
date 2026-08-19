import { NavLink } from 'react-router-dom'

import logo from '../../assets/images/branding/FRC-Logo.png'
import { siteConfig } from '../../config/siteConfig'
import { useLanguage } from '../../hooks/useLanguage'

import '../../styles/layout/footer.css'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Empresa */}
        <div className="footer-brand">
          <NavLink
            to={siteConfig.navigation.home}
            className="footer-brand-link"
          >
            <img
              src={logo}
              alt="F.R.C Security Services INC."
              className="footer-logo"
            />

            <div>
              <strong>F.R.C Security</strong>
              <span>Services INC.</span>
            </div>
          </NavLink>

          <p>
            {t.footer.description}
          </p>
        </div>

        {/* Navegación */}
        <div className="footer-column">
          <h2>
            {t.footer.quickLinks}
          </h2>

          <NavLink to={siteConfig.navigation.home}>
            {t.navigation.home}
          </NavLink>

          <NavLink to={siteConfig.navigation.about}>
            {t.navigation.about}
          </NavLink>

          <NavLink to={siteConfig.navigation.services}>
            {t.navigation.services}
          </NavLink>

          <NavLink to={siteConfig.navigation.contact}>
            {t.navigation.contact}
          </NavLink>
        </div>

        {/* Servicios */}
        <div className="footer-column">
          <h2>
            {t.footer.services}
          </h2>

          <NavLink to={siteConfig.navigation.services}>
            {t.footer.serviceItems.commercial}
          </NavLink>

          <NavLink to={siteConfig.navigation.services}>
            {t.footer.serviceItems.residential}
          </NavLink>

          <NavLink to={siteConfig.navigation.services}>
            {t.footer.serviceItems.events}
          </NavLink>

          <NavLink to={siteConfig.navigation.services}>
            {t.footer.serviceItems.armed}
          </NavLink>

          <NavLink to={siteConfig.navigation.services}>
            {t.footer.serviceItems.access}
          </NavLink>
        </div>

        {/* Contacto */}
        <div className="footer-column footer-contact">
          <h2>
            {t.footer.contact}
          </h2>

          <a href={`tel:${siteConfig.phone.href}`}>
            <i
              className="bi bi-telephone"
              aria-hidden="true"
            />

            <span>
              {siteConfig.phone.display}
            </span>
          </a>

          <a href={`mailto:${siteConfig.email}`}>
            <i
              className="bi bi-envelope"
              aria-hidden="true"
            />

            <span>
              {siteConfig.email}
            </span>
          </a>

          <div className="footer-contact-item">
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

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()}{' '}
          {siteConfig.businessName}
        </span>

        <span>
          {t.footer.rights}
        </span>
      </div>
    </footer>
  )
}

export default Footer