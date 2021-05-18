import { Layout } from '~/model/layout'
import { builtinCategories, Category } from '~/model/category'
import { Expense } from '~/model/expense'

export interface State {
  categories: Category[]
  expenses: Expense[]
  layout: Layout
  useDarkTheme: boolean
}

export const state: () => State = () => ({
  categories: builtinCategories,
  expenses: [] as Expense[],
  layout: 'default',
  useDarkTheme: true,
})

export const mutations = {
  addExpense(state: State, expense: Expense) {
    state.expenses.push(expense)
  },
  resetData(state: State) {
    state.categories = builtinCategories
    state.expenses = []
  },
  removeExpense(state: State, expense: Expense) {
    const index = state.expenses.indexOf(expense)
    state.expenses.splice(index, 1)
  },
  setLayout(state: State, layout: Layout) {
    state.layout = layout
  },
  toggleTheme(state: State) {
    state.useDarkTheme = !state.useDarkTheme
  },
}
