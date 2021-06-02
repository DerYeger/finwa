import { Entity } from '~/model/entity'
import { uuid } from '~/utils'

export interface Expense extends Entity {
  categoryId: string
  value: number
}

export function createExpense(categoryId: string, value: number): Expense {
  return {
    id: uuid(),
    categoryId,
    value,
  }
}
