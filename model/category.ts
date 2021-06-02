import colors from 'vuetify/es5/util/colors'
import { Entity } from '~/model/entity'
import { uuid } from '~/utils'

export interface Category extends Entity {
  isBuiltin: boolean
  name: string
  color: string
}

export function createCategory(isBuiltin: boolean, name: string, color: string): Category {
  return {
    id: uuid(),
    isBuiltin,
    name,
    color,
  }
}

export const uncategorized = {
  id: 'uncategorized',
  isBuiltin: true,
  name: 'domain.category.uncategorized',
  color: colors.grey.lighten1,
}

export const builtinCategories: Category[] = [
  {
    id: 'food',
    isBuiltin: true,
    name: 'domain.category.food',
    color: colors.green.base,
  },
  {
    id: 'livelihood',
    isBuiltin: true,
    name: 'domain.category.livelihood',
    color: colors.red.base,
  },
  {
    id: 'leisure',
    isBuiltin: true,
    name: 'domain.category.leisure',
    color: colors.blue.base,
  },
  uncategorized,
]
