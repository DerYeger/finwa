export interface Route {
  title: string
  to: string
  icon?: string
}

export const routes: Record<string, Route> = {
  home: {
    title: 'home.title',
    to: '/',
    icon: 'mdi-home',
  },
  categories: {
    title: 'category.title',
    to: '/categories',
    icon: 'mdi-format-list-bulleted-type',
  },
  months: {
    title: 'month.title',
    to: '/months',
    icon: 'mdi-calendar',
  },
  settings: {
    title: 'settings.title',
    to: '/settings',
    icon: 'mdi-cog',
  },
}
