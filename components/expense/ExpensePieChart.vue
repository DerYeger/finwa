<template>
  <pie-chart :chart-data="expenseChartData" :styles="pieChartStyles" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { generateExpenseChartData } from '~/model'
import { Expense } from '~/model/expense'

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
    pieChartStyles(): any {
      return {
        margin: 'auto',
        position: 'relative',
        width: '99%',
      }
    },
  },
})
</script>
