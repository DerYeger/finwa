import Vue from 'vue'
import { builtinCategories, Category } from '~/model/category'
import { EntityRecord } from '~/model/types'
import { toArray } from '~/utils/collections'
import { Committer } from '~/store/index'
import { uuid } from '~/utils'

export type CategoriesState = EntityRecord<Category>

export const state: () => CategoriesState = () => builtinCategories

export const actions = {
  create({ commit }: Committer, data: Omit<Category, 'id' | 'isBuiltin'>) {
    const category: Category = {
      id: uuid(),
      isBuiltin: false,
      ...data,
    }
    commit('add', category)
  },
  reset({ commit }: Committer) {
    commit('deleteAll')
    commit('set', builtinCategories)
  },
}

export const getters = {
  byId:
    (state: CategoriesState) =>
    (id: string): Category | undefined =>
      state[id],
  categories: (state: CategoriesState): Category[] => toArray(state),
}

export const mutations = {
  add(state: CategoriesState, category: Category) {
    Vue.set(state, category.id, category)
  },
  delete(state: CategoriesState, category: Category) {
    Vue.delete(state, category.id)
  },
  deleteAll(state: CategoriesState) {
    toArray(state).forEach((category) => Vue.delete(state, category.id))
  },
  set(state: CategoriesState, categories: CategoriesState) {
    Object.assign(state, categories)
  },
}
