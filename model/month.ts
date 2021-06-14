import { Entity } from '~/model/entity'
import { Expense } from '~/model/expense'
import { EntityRecord } from '~/model/types'

export interface Month extends Entity {
  expenses: EntityRecord<Expense>
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
    return { id: monthIdFromDate(date), expenses: {} }
  })
}
