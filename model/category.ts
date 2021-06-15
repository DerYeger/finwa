import colors from 'vuetify/es5/util/colors'
import { Entity } from '~/model/entity'
import { EntityRecord } from '~/model/types'

export interface Category extends Entity {
  isBuiltin: boolean
  name: string
  color: string
}

export const builtinCategories: EntityRecord<Category> = {
  food: {
    id: 'food',
    isBuiltin: true,
    name: 'category.food',
    color: colors.green.base,
  },
  livelihood: {
    id: 'livelihood',
    isBuiltin: true,
    name: 'category.livelihood',
    color: colors.red.base,
  },
  leisure: {
    id: 'leisure',
    isBuiltin: true,
    name: 'category.leisure',
    color: colors.blue.base,
  },
  uncategorized: {
    id: 'uncategorized',
    isBuiltin: true,
    name: 'category.uncategorized',
    color: colors.grey.lighten1,
  },
}
