import { useEffect, useRef, useState } from 'react'

import { useLanguage } from '../../hooks/useLanguage'

import '../../styles/layout/language-switcher.css'

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  const [isOpen, setIsOpen] = useState(false)

  const switcherRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
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

  const selectLanguage = (
    selectedLanguage: 'es' | 'en',
  ) => {
    setLanguage(selectedLanguage)
    setIsOpen(false)
  }

  return (
    <div
      ref={switcherRef}
      className="language-switcher"
    >
      <button
        type="button"
        className={`language-trigger ${
          isOpen ? 'is-open' : ''
        }`}
        aria-label={t.language.label}
        aria-expanded={isOpen}
        onClick={() =>
          setIsOpen((current) => !current)
        }
      >
        <i
          className="bi bi-globe2"
          aria-hidden="true"
        />

        <strong>
          {language === 'es' ? 'ES' : 'EN'}
        </strong>

        <i
          className="bi bi-chevron-down language-chevron"
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="language-dropdown">
          <span className="language-dropdown-title">
            {t.language.label}
          </span>

          <button
            type="button"
            className={`language-option ${
              language === 'es' ? 'active' : ''
            }`}
            onClick={() =>
              selectLanguage('es')
            }
          >
            <span className="language-code">
              ES
            </span>

            <span className="language-option-copy">
              <strong>Español</strong>
              <small>Spanish</small>
            </span>

            {language === 'es' && (
              <i
                className="bi bi-check-lg"
                aria-hidden="true"
              />
            )}
          </button>

          <button
            type="button"
            className={`language-option ${
              language === 'en' ? 'active' : ''
            }`}
            onClick={() =>
              selectLanguage('en')
            }
          >
            <span className="language-code">
              EN
            </span>

            <span className="language-option-copy">
              <strong>English</strong>
              <small>English</small>
            </span>

            {language === 'en' && (
              <i
                className="bi bi-check-lg"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher