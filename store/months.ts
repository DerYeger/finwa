import Vue from 'vue'
import { EntityRecord } from '~/model/types'
import { toArray, toEntityRecord } from '~/utils/collections'
import { currentMonthId, lastTwelveMonths, Month } from '~/model/month'
import { builtinCategories, Category } from '~/model/category'
import { Committer } from '~/store/index'
import { uuid } from '~/utils'
import { OneTimeExpense } from '~/model/expense'

export type MonthsState = EntityRecord<Month>

export const state: () => MonthsState = () => toEntityRecord(lastTwelveMonths())

export const actions = {
  create({ commit }: Committer, monthData: Pick<Month, 'id'>) {
    const month: Month = {
      expenses: {},
      ...monthData,
    }
    commit('add', month)
  },
  createExpense({ commit }: Committer, { monthId, expenseData }: { monthId: string; expenseData: Omit<OneTimeExpense, 'id'> }) {
    const expense: OneTimeExpense = {
      id: uuid(),
      ...expenseData,
    }
    commit('addExpense', { monthId, expense })
  },
  reset({ commit }: Committer) {
    commit('removeAll')
    commit('set', toEntityRecord(lastTwelveMonths()))
  },
}

export const getters = {
  months: (state: MonthsState): Month[] => toArray(state),
  byId:
    (state: MonthsState) =>
    (id: string): Month | undefined =>
      state[id],
  sorted:
    (state: MonthsState) =>
    (limit: number, until: Date = new Date(currentMonthId())): Month[] => {
      if (limit === 0) {
        return []
      }
      return Object.keys(state)
        .filter((monthId) => new Date(monthId) <= until)
        .sort()
        .slice(-limit)
        .map((monthId) => state[monthId])
    },
}

export const mutations = {
  add(state: MonthsState, month: Month) {
    Vue.set(state, month.id, month)
  },
  addExpense(state: MonthsState, { monthId, expense }: { monthId: string; expense: OneTimeExpense }) {
    Vue.set(state[monthId].expenses, expense.id, expense)
  },
  remove(state: MonthsState, month: Month) {
    Vue.delete(state, month.id)
  },
  removeAll(state: MonthsState) {
    toArray(state).forEach((month) => Vue.delete(state, month.id))
  },
  removeCategory(state: MonthsState, category: Category) {
    toArray(state).forEach((month) => {
      toArray(month.expenses)
        .filter((expenses) => expenses.categoryId === category.id)
        .forEach((expense) => (expense.categoryId = builtinCategories.uncategorized.id))
    })
  },
  removeExpense(state: MonthsState, { month, expense }: { month: Month; expense: OneTimeExpense }) {
    Vue.delete(state[month.id].expenses, expense.id)
  },
  set(state: MonthsState, months: EntityRecord<Month>) {
    Object.assign(state, months)
  },
}
