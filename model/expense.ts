import { Entity } from '~/model/entity'

export interface Expense extends Entity {
  name: string
  categoryId: string
  value: number
}

export interface OneTimeExpense extends Expense {
  monthId: string
}

export interface RecurringExpense extends Expense {
  startingMonthId: string
  frequency: number
}

export function isOneTimeExpense(expense: Expense | undefined): expense is OneTimeExpense {
  return expense !== undefined && (expense as any).monthId !== undefined
}

export function isRecurringExpense(expense: Expense | undefined): expense is RecurringExpense {
  return expense !== undefined && (expense as any).startingMonthId !== undefined && (expense as any).frequency !== undefined
}
