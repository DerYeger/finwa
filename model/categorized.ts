export interface Categorized {
  categoryId: string
}

export function isCategorized(object: any | undefined): object is Categorized {
  return object !== undefined && (object as any).categoryId !== undefined
}
