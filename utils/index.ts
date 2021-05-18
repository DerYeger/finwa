import { v4 } from 'uuid/'
import colors from 'vuetify/es5/util/colors'

export function uuid(): string {
  return v4()
}

export type ColorName = keyof typeof colors

export function isColorName(value: string): value is ColorName {
  return value in colors
}

export function maybeGetVuetifyColor(color: string): string {
  if (!isColorName(color)) {
    return color
  }
  return (colors[color] as any).base
}
