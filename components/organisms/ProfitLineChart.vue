<template>
  <line-chart :chart-data="profitChartData" :styles="lineChartStyles" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { generateProfitChartData } from '~/model/chart-data'

export default defineComponent({
  props: {
    height: {
      type: String,
      default: '20rem',
    },
  },
  computed: {
    profitChartData(): ChartData {
      const getters = this.$store.getters
      const months = getters['months/sorted'](100)
      const recurringExpenses = getters['recurringExpenses/recurringExpenses']
      const recurringIncomes = getters['recurringIncomes/recurringIncomes']
      return generateProfitChartData(months, recurringExpenses, recurringIncomes, this.$i18n)
    },
    lineChartStyles(): any {
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
