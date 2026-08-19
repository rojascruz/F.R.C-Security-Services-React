import { useContext } from 'react'

import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider',
    )
  }

  return {
    ...context,
    t: translations[context.language],
  }
}
