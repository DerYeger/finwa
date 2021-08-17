import { Framework } from 'vuetify'

export function chartColors(vuetify: Framework): {
  fontColor: string
  gridColor: string
} {
  return vuetify.theme.dark
    ? {
        fontColor: 'rgba(255, 255, 255, 0.8)',
        gridColor: 'rgba(255, 255, 255, 0.2)',
      }
    : { fontColor: 'rgba(0, 0, 0, 0.8)', gridColor: 'rgba(0, 0, 0, 0.2)' }
}
