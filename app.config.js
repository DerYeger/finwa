import colors from 'vuetify/es5/util/colors'

const primaryColor = colors.blue.base

export default {
  name: 'FinWa',
  host: 'https://finwa.yeger.eu',
  theme: {
    primary: primaryColor,
    light: {
      primary: primaryColor,
      secondary: colors.amber.darken4,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3,
      background: colors.shades.white,
    },
    dark: {
      primary: primaryColor,
      accent: colors.grey.darken3,
      secondary: colors.orange.lighten2,
      info: colors.teal.lighten3,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3,
      background: '#121212',
    },
  },
}
