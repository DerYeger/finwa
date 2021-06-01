<template>
  <v-row>
    <v-col sm="6" md="6" lg="4" align-self="center">
      <pie-chart :chart-data="expenseChartData" :styles="pieChartStyles" />
    </v-col>
    <v-col sm="6" md="6" lg="8" align-self="center">
      <bar-chart :chart-data="expenseChartData" :styles="barChartStyles" />
    </v-col>
  </v-row>
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
    barChartStyles(): any {
      return {
        margin: 'auto',
        position: 'relative',
        width: `min(99%, ${this.$store.state.categories.length * 12}rem)`,
        height: '24rem',
      }
    },
    pieChartStyles(): any {
      return {
        margin: 'auto',
        position: 'relative',
        width: 'min(99%, 24rem)',
      }
    },
  },
})
</script>
