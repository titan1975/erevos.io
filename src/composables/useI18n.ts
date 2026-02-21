import { ref } from 'vue'
import en from '../i18n/en'
import el from '../i18n/el'

export type Locale = 'en' | 'el'

const messages: Record<Locale, Record<string, string>> = { en, el }

// Global reactive locale — shared across all components
const locale = ref<Locale>((localStorage.getItem('locale') as Locale) || 'en')

export function useI18n() {
  /**
   * Translate a key.
   * Because `locale` is a Vue ref, any template expression calling `t()`
   * will re‑render automatically when the locale changes.
   */
  const t = (key: string): string => {
    return messages[locale.value]?.[key] ?? messages['en']?.[key] ?? key
  }

  const setLocale = (l: Locale): void => {
    locale.value = l
    localStorage.setItem('locale', l)
    document.documentElement.lang = l === 'el' ? 'el' : 'en'
  }

  const toggleLocale = (): void => {
    setLocale(locale.value === 'en' ? 'el' : 'en')
  }

  return { locale, t, setLocale, toggleLocale }
}
