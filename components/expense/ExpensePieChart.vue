<template>
  <pie-chart :chart-data="expenseChartData" :styles="pieChartStyles" />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { Expense } from '~/model/expense'
import { generateExpenseChartData } from '~/model/chart-data'

export default defineComponent({
  props: {
    expenses: {
      type: Array as PropType<Expense[]>,
      required: true,
    },
    height: {
      type: String,
      default: '20rem',
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
        height: this.height,
      }
    },
  },
})
</script>
