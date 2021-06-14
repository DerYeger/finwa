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

export function toRecord<T extends Record<string, any>, K extends keyof T>(array: T[], selector: K): Record<T[K], T> {
  return array.reduce((acc, item) => ({ ...acc, [item[selector]]: item }), {} as Record<T[K], T>)
}

export function toArray<T>(record: Record<any, T>): T[] {
  return Object.values(record)
}
