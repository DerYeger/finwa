import { Expense } from '~/model/expense'
import { Category } from '~/model/category'
import { findById, sum } from '~/utils/collections'

export type ExpenseMapping = { expense: Expense; category: Category | undefined }

export function mapCategoriesToExpenses(expenses: Expense[], categories: Category[]): ExpenseMapping[] {
  return expenses.map((expense) => ({
    expense,
    category: expense.categoryId !== undefined ? findById(categories, expense.categoryId) : undefined,
  }))
}

export type CategoryMapping = { category: Category; expenses: Expense[] }

export function mapExpensesToCategories(expenses: Expense[], categories: Category[]): CategoryMapping[] {
  return categories.map((category) => ({
    category,
    expenses: expenses.filter((expense) => expense.categoryId === category.id),
  }))
}

export type HasValue = { value: number }

export function sumExpenses(categoryMappings: CategoryMapping[]): (CategoryMapping & HasValue)[] {
  return categoryMappings.map((mapping) => ({
    ...mapping,
    value: sum(mapping.expenses.map((expense) => expense.value)),
  }))
}
