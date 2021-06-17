import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import { Context } from '@nuxt/types'

const ls = new SecureLS()

export default (context: Context) => {
  createPersistedState({
    key: 'finwa',
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  })(context.store)
}
