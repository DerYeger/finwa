import { v4 } from 'uuid/'
import VueI18n from 'vue-i18n'

export function uuid(): string {
  return v4()
}

export function monthsBetween(first: Date, second: Date): number {
  const [dateTo, dateFrom] = first > second ? [first, second] : [second, first]
  return dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear())
}

export function translateAndCompare(first: string, second: string, transform: (val: string) => VueI18n.TranslateResult): number {
  return (transform(first) as string).localeCompare(transform(second) as string)
}
