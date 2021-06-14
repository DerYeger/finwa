import { Entity } from '~/model/entity'
import { uuid } from '~/utils'

export interface Expense extends Entity {
  categoryId: string
  value: number
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
