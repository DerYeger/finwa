import colors from 'vuetify/es5/util/colors'
import VueI18n from 'vue-i18n'
import { ChartData, ChartDataset } from 'chart.js'
import { Expense, RecurringExpense } from '~/model/expense'
import { Category } from '~/model/category'
import { Income, isOneTimeIncome, isRecurringIncome, OneTimeIncome, RecurringIncome } from '~/model/income'
import { sumBy, toArray } from '~/utils/collections'
import { Month } from '~/model/month'
import { findRecurringTransactionsForMonth, mapExpensesToCategories, sumExpenses } from '~/model/index'

const fill = 'origin'
const maxBarThickness = 150
const tension = 0

function withTransparency(color: string): string {
  return `${color}10`
}

export function generateExpenseChartData(
  expenses: Expense[],
  categories: Category[],
  i18n: VueI18n
): ChartData<'doughnut'> & ChartData<'bar'> {
  const data = sumExpenses(mapExpensesToCategories(expenses, categories)).filter((mapping) => mapping.value > 0)
  return {
    labels: data.map((mapping) => i18n.t(mapping.category.name) as string),
    datasets: [
      {
        label: i18n.tc('category.title', categories.length) as string,
        backgroundColor: data.map((element) => element.category.color),
        borderColor: colors.shades.transparent,
        data: data.map((element) => element.value),
        maxBarThickness,
      },
    ],
  }
}

export function generateIncomeChartData(income: Income[], i18n: VueI18n): ChartData<'doughnut'> {
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
      backGroundColor: colors.green.base,
      borderColor: colors.shades.transparent,
      value: sumBy(oneTimeIncome, (income) => income.value),
    },
    {
      label: i18n.tc('income.recurring', recurringIncome.length) as string,
      backGroundColor: colors.blue.base,
      borderColor: colors.shades.transparent,
      value: sumBy(recurringIncome, (income) => income.value),
    },
  ].filter((income) => income.value > 0)
  return {
    labels: data.map((element) => element.label),
    datasets: [
      {
        label: i18n.tc('income.title', 2) as string,
        backgroundColor: data.map((element) => element.backGroundColor),
        borderColor: data.map((element) => element.borderColor),
        data: data.map((element) => element.value),
      },
    ],
  }
}

export function generateMonthlyExpensesChartData(
  months: Month[],
  categories: Category[],
  recurringExpenses: RecurringExpense[],
  i18n: VueI18n
): ChartData<'line'> {
  const monthValues = months.map((month) =>
    sumExpenses(
      mapExpensesToCategories([...toArray(month.expenses), ...findRecurringTransactionsForMonth(month.id, recurringExpenses)], categories)
    )
  )
  const datasets: ChartDataset<'line'>[] = categories
    .map((category) => ({
      label: i18n.t(category.name) as string,
      borderColor: category.color,
      backgroundColor: withTransparency(category.color),
      data: monthValues
        .flatMap((mappings) => mappings.filter((mapping) => mapping.category.id === category.id))
        ?.map((value) => value.value),
      fill,
      tension,
    }))
    .filter((dataset) => dataset.data.some((value) => value > 0))
  return {
    labels: months.map((month) => i18n.d(new Date(month.id), 'month')),
    datasets,
  }
}

export function generateMonthlyIncomesChartData(months: Month[], recurringIncomes: RecurringIncome[], i18n: VueI18n): ChartData<'line'> {
  const monthlyOneTimeIncomes = months.map((month) => sumBy(toArray(month.incomes), (income) => income.value))
  const monthlyRecurringIncomes = months.map((month) =>
    sumBy(findRecurringTransactionsForMonth(month.id, recurringIncomes), (income) => income.value)
  )
  const oneTimeIncomesDataset: ChartDataset<'line'> = {
    label: i18n.tc('income.one-time', 2),
    backgroundColor: withTransparency(colors.green.base),
    borderColor: colors.green.base,
    data: monthlyOneTimeIncomes,
    fill,
    tension,
  }
  const recurringIncomesDataset: ChartDataset<'line'> = {
    label: i18n.tc('income.recurring', 2),
    backgroundColor: withTransparency(colors.blue.base),
    borderColor: colors.blue.base,
    data: monthlyRecurringIncomes,
    fill,
    tension,
  }
  return {
    labels: months.map((month) => i18n.d(new Date(month.id), 'month')),
    datasets: [oneTimeIncomesDataset, recurringIncomesDataset],
  }
}

export function generateProfitChartData(
  months: Month[],
  recurringExpenses: RecurringExpense[],
  recurringIncomes: RecurringIncome[],
  i18n: VueI18n
): ChartData<'line'> {
  const monthlyExpenses = months.map((month) =>
    sumBy([...toArray(month.expenses), ...findRecurringTransactionsForMonth(month.id, recurringExpenses)], (expense) => expense.value)
  )
  const monthlyIncomes = months.map((month) =>
    sumBy([...toArray(month.incomes), ...findRecurringTransactionsForMonth(month.id, recurringIncomes)], (income) => income.value)
  )
  const monthlyProfits = monthlyExpenses.map((monthlyExpense, index) => monthlyIncomes[index] - monthlyExpense)
  const expensesDataset: ChartDataset<'line'> = {
    label: i18n.tc('expense.title', 2),
    backgroundColor: withTransparency(colors.red.base),
    borderColor: colors.red.base,
    data: monthlyExpenses,
    fill,
    tension,
  }
  const incomesDataset: ChartDataset<'line'> = {
    label: i18n.tc('income.title', 1),
    backgroundColor: withTransparency(colors.blue.base),
    borderColor: colors.blue.base,
    data: monthlyIncomes,
    fill,
    tension,
  }
  const profitsDataset: ChartDataset<'line'> = {
    label: i18n.tc('misc.profit', 1),
    backgroundColor: withTransparency(colors.green.base),
    borderColor: colors.green.base,
    data: monthlyProfits,
    fill,
    tension,
  }
  return {
    labels: months.map((month) => i18n.d(new Date(month.id), 'month')),
    datasets: [expensesDataset, incomesDataset, profitsDataset],
  }
}
