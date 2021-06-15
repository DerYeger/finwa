import { Commit, Dispatch } from 'vuex'
import { Category } from '~/model/category'

export type Committer = { commit: Commit }

export type Dispatcher = { dispatch: Dispatch }

export const actions = {
  removeCategory({ commit }: Committer, category: Category) {
    if (category.isBuiltin) {
      return
    }
    commit('categories/remove', category)
    commit('months/removeCategory', category)
  },
  reset({ dispatch }: Dispatcher) {
    dispatch('categories/reset')
    dispatch('months/reset')
    dispatch('recurringExpenses/reset')
    dispatch('settings/reset')
  },
}
