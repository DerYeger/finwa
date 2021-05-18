import { Entity } from '~/model/entity'

export function sum(array: number[]): number {
  return array.reduce((prev, current) => prev + current, 0)
}

export function sumBy<T>(array: T[], transform: (element: T) => number): number {
  return array.reduce((prev, current) => prev + transform(current), 0)
}

export function findById<T extends Entity>(array: T[], id: string): T | undefined {
  return array.find((entity: Entity) => entity.id === id)
}
