import { Layout } from '~/model/layout'
import { Committer } from '~/store/index'

export interface SettingsState {
  layout: Layout
  useDarkTheme: boolean
}

const initialSettings: SettingsState = {
  layout: 'default',
  useDarkTheme: false,
}

export const state: () => SettingsState = () => initialSettings

export const actions = {
  reset({ commit }: Committer) {
    commit('setLayout', initialSettings.layout)
    commit('setTheme', initialSettings.useDarkTheme)
  },
}

export const mutations = {
  setLayout(state: SettingsState, layout: Layout) {
    state.layout = layout
  },
  setTheme(state: SettingsState, useDarkTheme: boolean) {
    state.useDarkTheme = useDarkTheme
  },
  toggleTheme(state: SettingsState) {
    state.useDarkTheme = !state.useDarkTheme
  },
}
