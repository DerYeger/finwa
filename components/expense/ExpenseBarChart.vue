<template>
  <bar-chart :chart-data="expenseChartData" :styles="barChartStyles" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { Expense } from '~/model/expense'
import { generateExpenseChartData } from '~/model/chart-data'

export default defineComponent({
  props: {
    expenses: {
      type: Array as () => Expense[],
      required: true,
    },
  },
  computed: {
    expenseChartData(): ChartData {
      return generateExpenseChartData(this.expenses, this.$store.getters['categories/categories'], this.$i18n)
    },
    barChartStyles(): any {
      return {
        margin: 'auto',
        position: 'relative',
        width: '99%',
      }
    },
  },
})
</script>
