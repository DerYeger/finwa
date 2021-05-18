import { Entity } from '~/model/entity'

export interface Expense extends Entity {
  categoryId?: string
  value: number
}
