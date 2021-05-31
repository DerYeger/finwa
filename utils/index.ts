import { v4 } from 'uuid/'

export function uuid(): string {
  return v4()
}

export function currentMonth(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const monthString = month < 10 ? `0${month}` : month.toString()
  return `${year}-${monthString}`
}
