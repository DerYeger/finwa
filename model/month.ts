import { Entity } from '~/model/entity'
import { OneTimeExpense } from '~/model/expense'
import { EntityRecord } from '~/model/types'
import { OneTimeIncome } from '~/model/income'

export interface Month extends Entity {
  expenses: EntityRecord<OneTimeExpense>
  incomes: EntityRecord<OneTimeIncome>
}

function monthIdFromDate(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const monthString = month < 10 ? `0${month}` : month.toString()
  return `${year}-${monthString}`
}

export function currentMonthId(): string {
  return monthIdFromDate(new Date())
}

export function lastTwelveMonths(): Month[] {
  const now = new Date()
  return [...Array(12).keys()].map((offset) => {
    const date = new Date()
    date.setMonth(now.getMonth() - offset)
    return { id: monthIdFromDate(date), expenses: {}, incomes: {} }
  })
}

export function isMonthId(id: string): boolean {
  const parts = id.split('-')
  if (parts.length !== 2) {
    return false
  }
  const [year, month] = parts
  return isYear(year) && isMonth(month)
}

function isYear(year: string): boolean {
  return year.length === 4 && !isNaN(+year) && +year >= 1900 && +year <= 9999
}

function isMonth(month: string): boolean {
  return month.length === 2 && !isNaN(+month) && +month >= 1 && +month <= 12
}
