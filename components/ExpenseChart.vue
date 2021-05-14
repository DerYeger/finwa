<template>
  <pie-chart :chart-data="expenseChartData" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { Category, Expense } from '~/store'
import { sum } from '~/utils/collections'

export default defineComponent({
  computed: {
    expenseChartData(): ChartData {
      const categories: Category[] = this.$store.state.categories
      const expenses: Expense[] = this.$store.state.expenses
      const expensesByCategory = categories.map((category) =>
        sum(expenses.filter((expense) => expense.categoryName === category.name).map((expense) => expense.value))
      )
      return {
        labels: categories.map((category: Category) => this.$t(category.name) as string),
        datasets: [
          {
            label: 'Categories',
            backgroundColor: categories.map((category: Category) => category.color),
            data: expensesByCategory,
          },
        ],
      }
    },
  },
})
</script>
