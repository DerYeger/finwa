import de from './de'
import en from './en'

const dateTimeFormats = {
  en: {
    'no-day': {
      month: 'long',
      year: 'numeric',
    },
    month: {
      month: 'long',
    },
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  },
  de: {
    'no-day': {
      month: 'long',
      year: 'numeric',
    },
    month: {
      month: 'long',
    },
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  },
}

export default {
  locale: 'en',
  fallbackLocale: 'en',
  messages: { de, en },
  dateTimeFormats,
}
