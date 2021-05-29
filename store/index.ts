import { Layout } from '~/model/layout'
import { builtinCategories, Category, uncategorized } from '~/model/category'
import { Expense } from '~/model/expense'
import { mapExpensesToCategories } from '~/model'

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
  useDarkTheme: false,
})

export const mutations = {
  addCategory(state: State, category: Category) {
    state.categories.push(category)
  },
  addExpense(state: State, expense: Expense) {
    state.expenses.push(expense)
  },
  resetData(state: State) {
    state.categories = builtinCategories
    state.expenses = []
  },
  removeCategory(state: State, category: Category) {
    if (category.isBuiltin) {
      return
    }
    const index = state.categories.indexOf(category)
    state.categories.splice(index, 1)
    mapExpensesToCategories(state.expenses, [category])[0].expenses.forEach((expense) => {
      expense.categoryId = uncategorized.id
    })
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
