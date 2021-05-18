<template>
  <div class="expense-chart">
    <pie-chart :chart-data="expenseChartData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { mapExpensesToCategories, sumExpenses } from '~/model'
import { Expense } from '~/model/expense'
import { Category } from '~/model/category'

export default defineComponent({
  computed: {
    expenseChartData(): ChartData {
      const categories: Category[] = this.$store.state.categories
      const expenses: Expense[] = this.$store.state.expenses
      const categoryValues = sumExpenses(mapExpensesToCategories(expenses, categories))
      return {
        labels: categories.map((category) => this.$t(category.name) as string),
        datasets: [
          {
            label: this.$t('domain.category.title') as string,
            backgroundColor: categories.map((category) => category.color),
            data: categoryValues.map((element) => element.value),
          },
        ],
      }
    },
  },
})
</script>

<style scoped>
.expense-chart {
  max-width: 24rem;
}
</style>
