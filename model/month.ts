import { HasExpenses } from '~/model/index'
import { Entity } from '~/model/entity'
import { Expense } from '~/model/expense'

export interface Month extends Entity, HasExpenses {}

export function createMonth(id: string, expenses: Expense[] = []): Month {
  return {
    id,
    expenses,
  }
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
    return createMonth(monthIdFromDate(date))
  })
}
