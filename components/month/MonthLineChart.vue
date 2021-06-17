<template>
  <line-chart :chart-data="monthChartData" :styles="lineChartStyles" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { generateMonthChartData } from '~/model'

export default defineComponent({
  computed: {
    monthChartData(): ChartData {
      const getters = this.$store.getters
      const months = getters['months/sorted'](12)
      const recurringExpenses = getters['recurringExpenses/recurringExpenses']
      const categories = getters['categories/categories']
      return generateMonthChartData(months, categories, recurringExpenses, this.$i18n)
    },
    lineChartStyles(): any {
      return {
        margin: 'auto',
        position: 'relative',
        width: `99%`,
      }
    },
  },
})
</script>
