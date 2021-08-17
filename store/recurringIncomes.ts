import Vue from 'vue'
import { EntityRecord } from '~/model/types'
import { toArray } from '~/utils/collections'
import { Committer } from '~/store/index'
import { uuid } from '~/utils'
import { findRecurringTransactionsForMonth } from '~/model'
import { RecurringIncome } from '~/model/income'

export type RecurringIncomesState = EntityRecord<RecurringIncome>

export const state: () => RecurringIncomesState = () => Object.create(null)

export const actions = {
  create({ commit }: Committer, incomeData: Omit<RecurringIncome, 'id'>) {
    const income: RecurringIncome = {
      id: uuid(),
      ...incomeData,
    }
    commit('add', income)
  },
  reset({ commit }: Committer) {
    commit('removeAll')
  },
}

export const getters = {
  byId:
    (state: RecurringIncomesState) =>
    (id: string): RecurringIncome | undefined =>
      state[id],
  byMonthId:
    (state: RecurringIncomesState) =>
    (monthId: string): RecurringIncome[] =>
      findRecurringTransactionsForMonth(monthId, toArray(state)),
  recurringIncomes: (state: RecurringIncomesState): RecurringIncome[] =>
    toArray(state),
}

export const mutations = {
  add(state: RecurringIncomesState, income: RecurringIncome) {
    Vue.set(state, income.id, income)
  },
  remove(state: RecurringIncomesState, income: RecurringIncome) {
    Vue.delete(state, income.id)
  },
  removeAll(state: RecurringIncomesState) {
    toArray(state).forEach((income) => Vue.delete(state, income.id))
  },
}
