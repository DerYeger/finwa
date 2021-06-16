import VueI18n from 'vue-i18n'

export type Rule = (v: string) => boolean | VueI18n.TranslateResult

export function nameRules(i18n: VueI18n): Rule[] {
  return [
    (v: string) => v.length > 0 || i18n.t('validations.required'),
    (v: string) => v.length <= 20 || i18n.t('validations.too-long', [20]),
  ]
}

export function valueRules(i18n: VueI18n): Rule[] {
  return [
    (v: string) => v.length > 0 || i18n.t('validations.required'),
    (v: string) => parseFloat(v) === parseInt(v) || i18n.t('validations.integer'),
    (v: string) => parseInt(v) > 0 || i18n.t('validations.positive'),
  ]
}

export function frequencyRules(i18n: VueI18n): Rule[] {
  return [
    (v: string) => v.length > 0 || i18n.t('validations.required'),
    (v: string) => parseFloat(v) === parseInt(v) || i18n.t('validations.integer'),
    (v: string) => parseInt(v) > 0 || i18n.t('validations.positive'),
  ]
}
