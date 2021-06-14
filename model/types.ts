import { Entity } from '~/model/entity'
import { Expense } from '~/model/expense'
import { Category } from '~/model/category'

export type CategoryMapping = { category: Category; expenses: Expense[] }

export type EntityRecord<T extends Entity> = Record<string, T>

export type ExpenseMapping = { expense: Expense; category: Category }

export type HasExpenses = { expenses: Expense[] }

export type HasValue = { value: number }
