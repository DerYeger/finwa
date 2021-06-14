import Vue from 'vue'
import { EntityRecord } from '~/model/types'
import { toArray, toEntityRecord } from '~/utils/collections'
import { currentMonthId, lastTwelveMonths, Month } from '~/model/month'
import { builtinCategories, Category } from '~/model/category'
import { Expense } from '~/model/expense'
import { Committer } from '~/store/index'
import { uuid } from '~/utils'

export type MonthsState = EntityRecord<Month>

export const state: () => MonthsState = () => toEntityRecord(lastTwelveMonths())

export const actions = {
  create({ commit }: Committer, data: Pick<Month, 'id'>) {
    const month: Month = {
      expenses: {},
      ...data,
    }
    commit('add', month)
  },
  createExpense({ commit }: Committer, { monthId, data }: { monthId: string; data: Omit<Expense, 'id'> }) {
    const expense: Expense = {
      id: uuid(),
      ...data,
    }
    commit('addExpense', { monthId, expense })
  },
  reset({ commit }: Committer) {
    commit('deleteAll')
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
  addExpense(state: MonthsState, { monthId, expense }: { monthId: string; expense: Expense }) {
    Vue.set(state[monthId].expenses, expense.id, expense)
  },
  delete(state: MonthsState, month: Month) {
    Vue.delete(state, month.id)
  },
  deleteAll(state: MonthsState) {
    toArray(state).forEach((month) => Vue.delete(state, month.id))
  },
  removeCategory(state: MonthsState, category: Category) {
    toArray(state).forEach((month) => {
      toArray(month.expenses)
        .filter((expenses) => expenses.categoryId === category.id)
        .forEach((expense) => (expense.categoryId = builtinCategories.uncategorized.id))
    })
  },
  removeExpense(state: MonthsState, { month, expense }: { month: Month; expense: Expense }) {
    Vue.delete(state[month.id].expenses, expense.id)
  },
  set(state: MonthsState, months: EntityRecord<Month>) {
    Object.assign(state, months)
  },
}
