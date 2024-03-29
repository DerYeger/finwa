import Vue from 'vue'
import { EntityRecord } from '~/model/types'
import { toArray, toEntityRecord } from '~/utils/collections'
import { currentMonthId, lastTwelveMonths, Month } from '~/model/month'
import { builtinCategories, Category } from '~/model/category'
import { Committer } from '~/store/index'
import { uuid } from '~/utils'
import { OneTimeExpense } from '~/model/expense'
import { OneTimeIncome } from '~/model/income'

export type MonthsState = EntityRecord<Month>

export const state: () => MonthsState = () => toEntityRecord(lastTwelveMonths())

export const actions = {
  create({ commit }: Committer, monthData: Pick<Month, 'id'>) {
    const month: Month = {
      expenses: {},
      incomes: {},
      ...monthData,
    }
    commit('add', month)
  },
  createExpense(
    { commit }: Committer,
    expenseData: Omit<OneTimeExpense, 'id'>
  ) {
    const expense: OneTimeExpense = {
      id: uuid(),
      ...expenseData,
    }
    commit('addExpense', expense)
  },
  createIncome({ commit }: Committer, incomeData: Omit<OneTimeIncome, 'id'>) {
    const income: OneTimeIncome = {
      id: uuid(),
      ...incomeData,
    }
    commit('addIncome', income)
  },
  reset({ commit }: Committer) {
    commit('removeAll')
    commit('set', toEntityRecord(lastTwelveMonths()))
  },
}

export const getters = {
  byId:
    (state: MonthsState) =>
    (id: string): Month | undefined =>
      state[id],
  months: (state: MonthsState): Month[] => toArray(state),
  oneTimeExpenses: (state: MonthsState): OneTimeExpense[] =>
    toArray(state).flatMap((month: Month) => toArray(month.expenses)),
  oneTimeIncomes: (state: MonthsState): OneTimeIncome[] =>
    toArray(state).flatMap((month: Month) => toArray(month.incomes)),
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
  addExpense(state: MonthsState, expense: OneTimeExpense) {
    if (state[expense.monthId] === undefined) {
      state[expense.monthId] = {
        id: expense.monthId,
        expenses: {
          [expense.id]: expense,
        },
        incomes: {},
      }
    } else {
      Vue.set(state[expense.monthId].expenses, expense.id, expense)
    }
  },
  addIncome(state: MonthsState, income: OneTimeExpense) {
    if (state[income.monthId] === undefined) {
      state[income.monthId] = {
        id: income.monthId,
        expenses: {},
        incomes: {
          [income.id]: income,
        },
      }
    } else {
      Vue.set(state[income.monthId].incomes, income.id, income)
    }
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
        .forEach(
          (expense) => (expense.categoryId = builtinCategories.uncategorized.id)
        )
    })
  },
  removeExpense(state: MonthsState, expense: OneTimeExpense) {
    Vue.delete(state[expense.monthId].expenses, expense.id)
  },
  removeIncome(state: MonthsState, income: OneTimeIncome) {
    Vue.delete(state[income.monthId].incomes, income.id)
  },
  set(state: MonthsState, months: EntityRecord<Month>) {
    Object.assign(state, months)
  },
}
