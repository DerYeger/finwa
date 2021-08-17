import { Layout } from '~/model/layout'
import { Committer } from '~/store/index'

export interface SettingsState {
  layout: Layout
}

const initialSettings: SettingsState = {
  layout: 'default',
}

export const state: () => SettingsState = () => initialSettings

export const actions = {
  reset({ commit }: Committer) {
    commit('setLayout', initialSettings.layout)
  },
}

export const mutations = {
  setLayout(state: SettingsState, layout: Layout) {
    state.layout = layout
  },
}
