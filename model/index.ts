import { ChartData, ChartDataSets } from 'chart.js'
import VueI18n from 'vue-i18n'
import { Category } from '~/model/category'
import { sum, sumBy, toArray } from '~/utils/collections'
import { Month } from '~/model/month'
import { CategoryMapping, HasValue } from '~/model/types'
import { Expense, RecurringExpense } from '~/model/expense'
import { monthsBetween } from '~/utils'
import { RecurringTransaction } from '~/model/transaction'
import { Income, isOneTimeIncome, isRecurringIncome, OneTimeIncome, RecurringIncome } from '~/model/income'

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

export function generateExpenseChartData(expenses: Expense[], categories: Category[], i18n: VueI18n): ChartData {
  const categoryValues = sumExpenses(mapExpensesToCategories(expenses, categories))
  return {
    labels: categories.map((category) => i18n.t(category.name) as string),
    datasets: [
      {
        label: i18n.tc('category.title', categories.length) as string,
        backgroundColor: categories.map((category) => category.color),
        data: categoryValues.map((element) => element.value),
      },
    ],
  }
}

export function generateIncomeChartData(income: Income[], i18n: VueI18n): ChartData {
  const [oneTimeIncome, recurringIncome] = income.reduce(
    ([oneTimeIncome, recurringIncome], income) => {
      if (isOneTimeIncome(income)) {
        return [[...oneTimeIncome, income], recurringIncome]
      } else if (isRecurringIncome(income)) {
        return [oneTimeIncome, [...recurringIncome, income]]
      } else {
        return [oneTimeIncome, recurringIncome]
      }
    },
    [[] as OneTimeIncome[], [] as RecurringIncome[]]
  )
  return {
    labels: [i18n.tc('income.one-time', oneTimeIncome.length) as string, i18n.tc('income.recurring', recurringIncome.length) as string],
    datasets: [
      {
        label: i18n.tc('income.title', 2) as string,
        backgroundColor: ['#FF1B0A', '#2196f3'],
        data: [sumBy(oneTimeIncome, (income) => income.value), sumBy(recurringIncome, (income) => income.value)],
      },
    ],
  }
}

export function generateMonthChartData(
  months: Month[],
  categories: Category[],
  recurringExpenses: RecurringExpense[],
  i18n: VueI18n
): ChartData {
  const monthValues = months.map((month) =>
    sumExpenses(
      mapExpensesToCategories([...toArray(month.expenses), ...findRecurringTransactionsForMonth(month.id, recurringExpenses)], categories)
    )
  )
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
