import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/images/branding/FRC-Logo.png'
import { siteConfig } from '../../config/siteConfig'
import { useLanguage } from '../../hooks/useLanguage'

import LanguageSwitcher from './LanguageSwitcher'

import '../../styles/layout/header.css'

function Header() {
  const { t } = useLanguage()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const headerRef = useRef<HTMLElement>(null)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick,
      )
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="site-header"
    >
      <div className="header-container">
        {/* Marca */}
        <NavLink
          to={siteConfig.navigation.home}
          className="brand-link"
          aria-label={t.accessibility.goHome}
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="F.R.C Security Services INC."
            className="brand-logo"
          />

          <div className="brand-copy">
            <strong>F.R.C Security</strong>
            <span>Services INC.</span>
          </div>
        </NavLink>

        {/* Navegación desktop */}
        <nav
          className={`main-navigation ${
            isMenuOpen ? 'is-open' : ''
          }`}
          aria-label={t.accessibility.mainNavigation}
        >
          <NavLink
            to={siteConfig.navigation.home}
            onClick={closeMenu}
          >
            {t.navigation.home}
          </NavLink>

          <NavLink
            to={siteConfig.navigation.about}
            onClick={closeMenu}
          >
            {t.navigation.about}
          </NavLink>

          <NavLink
            to={siteConfig.navigation.services}
            onClick={closeMenu}
          >
            {t.navigation.services}
          </NavLink>

          <NavLink
            to={siteConfig.navigation.contact}
            onClick={closeMenu}
          >
            {t.navigation.contact}
          </NavLink>
        </nav>

        {/* Acciones */}
        <div className="header-actions">
          <LanguageSwitcher />

          <NavLink
            to={siteConfig.navigation.contact}
            className="header-cta"
            onClick={closeMenu}
          >
            {t.navigation.requestService}

            <i
              className="bi bi-arrow-right"
              aria-hidden="true"
            />
          </NavLink>

          <button
            type="button"
            className={`mobile-menu-button ${
              isMenuOpen ? 'is-open' : ''
            }`}
            aria-label={
              isMenuOpen
                ? t.accessibility.closeMenu
                : t.accessibility.openMenu
            }
            aria-expanded={isMenuOpen}
            onClick={() =>
              setIsMenuOpen((current) => !current)
            }
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header