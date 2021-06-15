import { v4 } from 'uuid/'

export function uuid(): string {
  return v4()
}

export function monthsBetween(first: Date, second: Date): number {
  const [dateTo, dateFrom] = first > second ? [first, second] : [second, first]
  return dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear())
}
