import { Category } from '~/model/category'
import { sum } from '~/utils/collections'
import { CategoryMapping, HasValue } from '~/model/types'
import { Expense } from '~/model/expense'
import { monthsBetween } from '~/utils'
import { RecurringTransaction } from '~/model/transaction'

export function isApplicable(monthId: string, transaction: RecurringTransaction): boolean {
  const monthDate = new Date(monthId)
  const startingDate = new Date(transaction.startingMonthId)
  return startingDate <= monthDate && monthsBetween(monthDate, startingDate) % transaction.frequency === 0
}

export function findRecurringTransactionsForMonth<T extends RecurringTransaction>(monthId: string, transaction: T[]): T[] {
  return transaction.filter((transaction) => isApplicable(monthId, transaction))
}

export function mapExpensesToCategories<T extends Expense>(expenses: T[], categories: Category[]): CategoryMapping<T>[] {
  return categories.map((category) => ({
    category,
    expenses: expenses.filter((expense) => expense.categoryId === category.id),
  }))
}

export function sumExpenses<T extends Expense>(categoryMappings: CategoryMapping<T>[]): (CategoryMapping<T> & HasValue)[] {
  return categoryMappings.map((mapping) => ({
    ...mapping,
    value: sum(mapping.expenses.map((expense) => expense.value)),
  }))
}
