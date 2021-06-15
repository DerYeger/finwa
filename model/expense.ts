import { Entity } from '~/model/entity'

export interface Expense extends Entity {
  categoryId: string
  value: number
}

export interface OneTimeExpense extends Expense {}

export interface RecurringExpense extends Expense {
  startingMonthId: string
  frequency: number
}

export function isRecurringExpense(expense: Expense): expense is RecurringExpense {
  return (expense as any).startingMonthId !== undefined && (expense as any).frequency !== undefined
}
