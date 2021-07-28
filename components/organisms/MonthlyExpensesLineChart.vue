<template>
  <client-only>
    <line-chart :chart-data="monthlyExpensesChartData" :style="`height: ${height};`" />
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { generateMonthlyExpensesChartData } from '~/model/chart-data'

export default defineComponent({
  props: {
    height: {
      type: String,
      default: '20rem',
    },
  },
  computed: {
    monthlyExpensesChartData(): ChartData {
      const getters = this.$store.getters
      const months = getters['months/sorted'](12)
      const recurringExpenses = getters['recurringExpenses/recurringExpenses']
      const categories = getters['categories/categories']
      return generateMonthlyExpensesChartData(months, categories, recurringExpenses, this.$i18n)
    },
  },
})
</script>
