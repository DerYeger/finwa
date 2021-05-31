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
  props: {
    expenses: {
      type: Array as () => Expense[],
      required: true,
    },
  },
  computed: {
    expenseChartData(): ChartData {
      const categories: Category[] = this.$store.state.categories
      const expenses: Expense[] = this.expenses
      const categoryValues = sumExpenses(mapExpensesToCategories(expenses, categories))
      return {
        labels: categories.map((category) => this.$t(category.name) as string),
        datasets: [
          {
            label: this.$tc('domain.category.title', categories.length) as string,
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
.expense-chart > div {
  margin: auto;
}
</style>
