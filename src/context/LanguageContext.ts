import { createContext } from 'react'
import type { Language } from '../i18n/translations'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

export const LanguageContext =
  createContext<LanguageContextValue | undefined>(undefined)
