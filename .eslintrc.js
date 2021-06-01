module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/base',
    'plugin:vuetify/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {},
}
