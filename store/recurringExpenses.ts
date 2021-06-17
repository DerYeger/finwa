import Vue from 'vue'
import { EntityRecord } from '~/model/types'
import { toArray } from '~/utils/collections'
import { Committer } from '~/store/index'
import { uuid } from '~/utils'
import { RecurringExpense } from '~/model/expense'
import { findRecurringExpensesForMonth } from '~/model'

export type RecurringExpensesState = EntityRecord<RecurringExpense>

export const state: () => RecurringExpensesState = () => Object.create(null)

export const actions = {
  create({ commit }: Committer, expenseData: Omit<RecurringExpense, 'id'>) {
    const expense: RecurringExpense = {
      id: uuid(),
      ...expenseData,
    }
    commit('add', expense)
  },
  reset({ commit }: Committer) {
    commit('removeAll')
  },
}

export const getters = {
  byId:
    (state: RecurringExpensesState) =>
    (id: string): RecurringExpense | undefined =>
      state[id],
  byMonthId:
    (state: RecurringExpensesState) =>
    (monthId: string): RecurringExpense[] =>
      findRecurringExpensesForMonth(monthId, toArray(state)),
  recurringExpenses: (state: RecurringExpensesState): RecurringExpense[] => toArray(state),
}

export const mutations = {
  add(state: RecurringExpensesState, expense: RecurringExpense) {
    Vue.set(state, expense.id, expense)
  },
  remove(state: RecurringExpensesState, expense: RecurringExpense) {
    Vue.delete(state, expense.id)
  },
  removeAll(state: RecurringExpensesState) {
    toArray(state).forEach((category) => Vue.delete(state, category.id))
  },
}
