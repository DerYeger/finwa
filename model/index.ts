import { ChartData, ChartDataSets } from 'chart.js'
// eslint-disable-next-line import/named
import { NuxtI18nInstance } from 'nuxt-i18n'
import { Expense } from '~/model/expense'
import { builtinCategories, Category } from '~/model/category'
import { sum, toArray } from '~/utils/collections'
import { Month } from '~/model/month'

export type ExpenseMapping = { expense: Expense; category: Category }

export function mapCategoriesToExpenses(expenses: Expense[], categories: Record<string, Category>): ExpenseMapping[] {
  return expenses.map((expense) => ({
    expense,
    category: categories[expense.categoryId] ?? builtinCategories.uncategorized,
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

export type HasExpenses = { expenses: Expense[] }

export function generateMonthChartData(months: Month[], categories: Category[], i18n: NuxtI18nInstance): ChartData {
  const monthValues = months.map((month) => sumExpenses(mapExpensesToCategories(toArray(month.expenses), categories)))
  const datasets: ChartDataSets[] = categories.map((category) => ({
    label: i18n.t(category.name) as string,
    borderColor: category.color,
    backgroundColor: `${category.color}10`,
    data: monthValues.flatMap((mappings) => mappings.filter((mapping) => mapping.category.id === category.id))?.map((value) => value.value),
  }))
  return {
    labels: months.map((month) => i18n.d(new Date(month.id), 'month')),
    datasets,
  }
}
