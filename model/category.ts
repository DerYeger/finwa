import colors from 'vuetify/es5/util/colors'
import { Entity } from '~/model/entity'
import { uuid } from '~/utils'
import { EntityRecord } from '~/model/types'

export interface Category extends Entity {
  isBuiltin: boolean
  name: string
  color: string
}

export function createCategory(data: Omit<Category, 'id'>): Category {
  return {
    id: uuid(),
    ...data,
  }
}

export const builtinCategories: EntityRecord<Category> = {
  food: {
    id: 'food',
    isBuiltin: true,
    name: 'domain.category.food',
    color: colors.green.base,
  },
  livelihood: {
    id: 'livelihood',
    isBuiltin: true,
    name: 'domain.category.livelihood',
    color: colors.red.base,
  },
  leisure: {
    id: 'leisure',
    isBuiltin: true,
    name: 'domain.category.leisure',
    color: colors.blue.base,
  },
  uncategorized: {
    id: 'uncategorized',
    isBuiltin: true,
    name: 'domain.category.uncategorized',
    color: colors.grey.lighten1,
  },
}
