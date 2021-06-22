import VueI18n from 'vue-i18n'
import { ChartData, ChartDataSets } from 'chart.js'
import { Expense, RecurringExpense } from '~/model/expense'
import { Category } from '~/model/category'
import { Income, isOneTimeIncome, isRecurringIncome, OneTimeIncome, RecurringIncome } from '~/model/income'
import { sumBy, toArray } from '~/utils/collections'
import { Month } from '~/model/month'
import { findRecurringTransactionsForMonth, mapExpensesToCategories, sumExpenses } from '~/model/index'

export function generateExpenseChartData(expenses: Expense[], categories: Category[], i18n: VueI18n): ChartData {
  const data = sumExpenses(mapExpensesToCategories(expenses, categories)).filter((mapping) => mapping.value > 0)
  return {
    labels: data.map((mapping) => i18n.t(mapping.category.name) as string),
    datasets: [
      {
        label: i18n.tc('category.title', categories.length) as string,
        backgroundColor: data.map((element) => element.category.color),
        data: data.map((element) => element.value),
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
  const data = [
    {
      label: i18n.tc('income.one-time', oneTimeIncome.length) as string,
      backGroundColor: '#2EB232',
      value: sumBy(oneTimeIncome, (income) => income.value),
    },
    {
      label: i18n.tc('income.recurring', recurringIncome.length) as string,
      backGroundColor: '#2196f3',
      value: sumBy(recurringIncome, (income) => income.value),
    },
  ].filter((income) => income.value > 0)
  return {
    labels: data.map((element) => element.label),
    datasets: [
      {
        label: i18n.tc('income.title', 2) as string,
        backgroundColor: data.map((element) => element.backGroundColor),
        data: data.map((element) => element.value),
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
