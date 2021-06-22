import { mount, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'
import LanguageToggle from '~/components/organisms/LanguageMenu.vue'

describe('LanguageMenu', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('is a Vue instance', () => {
    const wrapper = mount(LanguageToggle, {
      vuetify,
      mocks: {
        switchLocalePath: (i) => i,
        $i18n: {
          availableLocales: [],
        },
        $t: (string) => string,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
