import i18nConfiguration from './locales/i18n'
import app from './app.config'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} · FinWa` : 'FinWa'
    },
    title: undefined,
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/persistedState.client.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    'nuxt-i18n',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: app.name,
      short_name: app.name,
      theme_color: app.theme.primary,
    },
    meta: {
      ogHost: app.host,
      twitterCard: 'summary_large_image',
      twitterCreator: '@DerYeger',
    },
    icon: {},
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true,
      },
      dark: true,
      themes: {
        dark: app.theme.dark,
        light: app.theme.light,
      },
    },
  },

  loading: {
    color: app.theme.primary,
  },

  i18n: {
    defaultLocale: 'en',
    noPrefixDefaultLocale: false,
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'de',
        name: 'Deutsch',
      },
    ],
    vueI18n: i18nConfiguration,
  },

  sitemap: {
    gzip: true,
    hostname: app.host,
    i18n: true,
    trailingSlash: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
