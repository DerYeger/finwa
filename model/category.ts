import { Entity } from '~/model/entity'

export interface Category extends Entity {
  isBuiltin: boolean
  name: string
  color: string
}

export const uncategorized = {
  id: 'uncategorized',
  isBuiltin: true,
  name: 'domain.category.uncategorized',
  color: 'gray',
}

export const builtinCategories: Category[] = [
  {
    id: 'food',
    isBuiltin: true,
    name: 'domain.category.food',
    color: 'green',
  },
  {
    id: 'livelihood',
    isBuiltin: true,
    name: 'domain.category.livelihood',
    color: 'red',
  },
  {
    id: 'leisure',
    isBuiltin: true,
    name: 'domain.category.leisure',
    color: 'blue',
  },
  uncategorized,
]
