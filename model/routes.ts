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
    title: 'categories.title',
    to: '/categories',
    icon: 'mdi-format-list-bulleted-type',
  },
  months: {
    title: 'months.title',
    to: '/months',
    icon: 'mdi-calendar',
  },
  settings: {
    title: 'settings.title',
    to: '/settings',
    icon: 'mdi-cog',
  },
}
