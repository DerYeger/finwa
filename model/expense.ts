import { Entity } from '~/model/entity'
import { uuid } from '~/utils'

export interface Expense extends Entity {
  categoryId: string
  value: number
}

export function createExpense(data: Omit<Expense, 'id'>): Expense {
  return {
    id: uuid(),
    ...data,
  }
}

export interface RecurringExpense extends Expense {
  startingMonthId: string
  frequency: number
}

export function createRecurringExpense(data: Omit<RecurringExpense, 'id'>): RecurringExpense {
  return {
    id: uuid(),
    ...data,
  }
}
