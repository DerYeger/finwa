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
  months: {
    title: 'month.title',
    to: '/months',
    icon: 'mdi-calendar',
  },
  expenses: {
    title: 'expense.title',
    to: '/expenses',
    icon: 'mdi-currency-usd',
  },
  income: {
    title: 'income.title',
    to: '/incomes',
    icon: 'mdi-cash',
  },
  categories: {
    title: 'category.title',
    to: '/categories',
    icon: 'mdi-format-list-bulleted-type',
  },
  settings: {
    title: 'settings.title',
    to: '/settings',
    icon: 'mdi-cog',
  },
}
