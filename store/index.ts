import Vue from 'vue'
import { Layout } from '~/model/layout'
import { builtinCategories, Category } from '~/model/category'
import { Expense } from '~/model/expense'
import { currentMonthId, lastTwelveMonths, Month } from '~/model/month'
import { toArray, toRecord } from '~/utils/collections'

export interface State {
  categories: Record<string, Category>
  months: Record<string, Month>
  layout: Layout
  useDarkTheme: boolean
}

const initialState: State = {
  categories: builtinCategories,
  months: toRecord(lastTwelveMonths(), 'id'),
  layout: 'default',
  useDarkTheme: false,
}

export const state: () => State = () => initialState

export const getters = {
  monthById:
    (state: State) =>
    (id: string): Month | undefined => {
      return state.months[id]
    },
  months:
    (state: State) =>
    (limit: number = 0, until: Date = new Date(currentMonthId())): Month[] => {
      if (limit === 0) {
        return []
      }
      const months = toArray(state.months)
        .filter((month: Month) => new Date(month.id) <= until)
        .sort((a: Month, b: Month) => new Date(a.id).getTime() - new Date(b.id).getTime())
      return months.splice(-limit)
    },
  categories: (state: State): Category[] => {
    return toArray(state.categories)
  },
}

export const mutations = {
  addCategory(state: State, category: Category) {
    Vue.set(state.categories, category.id, category)
  },
  addExpenseToMonth(state: State, { month, expense }: { month: Month; expense: Expense }) {
    Vue.set(state.months[month.id].expenses, expense.id, expense)
  },
  addMonth(state: State, month: Month) {
    Vue.set(state.months, month.id, month)
  },
  resetData(state: State) {
    state.categories = builtinCategories
    state.months = toRecord(lastTwelveMonths(), 'id')
  },
  removeCategory(state: State, category: Category) {
    if (category.isBuiltin) {
      return
    }
    Vue.delete(state.categories, category.id)
    toArray(state.months).forEach((month) => {
      toArray(month.expenses)
        .filter((expenses) => expenses.categoryId === category.id)
        .forEach((expense) => (expense.categoryId = builtinCategories.uncategorized.id))
    })
  },
  removeExpenseFromMonth(state: State, { month, expense }: { month: Month; expense: Expense }) {
    Vue.delete(state.months[month.id].expenses, expense.id)
  },
  setLayout(state: State, layout: Layout) {
    state.layout = layout
  },
  toggleTheme(state: State) {
    state.useDarkTheme = !state.useDarkTheme
  },
}
