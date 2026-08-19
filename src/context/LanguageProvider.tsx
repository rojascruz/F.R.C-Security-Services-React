import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { LanguageContext } from './LanguageContext'
import type { Language } from '../i18n/translations'

type LanguageProviderProps = {
  children: ReactNode
}

const STORAGE_KEY = 'frc-language'

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY)

    if (savedLanguage === 'es' || savedLanguage === 'en') {
      return savedLanguage
    }

    return 'es'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
