// export enum Layout {
//   'compact',
//   'default',
//   'fill',
// }

export const layouts = ['compact', 'default', 'fill'] as const

export type Layout = typeof layouts[number]
