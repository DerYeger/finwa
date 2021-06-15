import { Entity } from '~/model/entity'
import { Expense } from '~/model/expense'
import { Category } from '~/model/category'

export type CategoryMapping<T extends Expense> = { category: Category; expenses: T[] }

export type EntityRecord<T extends Entity> = Record<string, T>

export type HasExpenses<T extends Expense> = { expenses: T[] }

export type HasValue = { value: number }
