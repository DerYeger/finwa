<template>
  <client-only>
    <line-chart
      :chart-data="monthlyIncomesChartData"
      :style="`height: ${height};`"
    />
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { generateMonthlyIncomesChartData } from '~/model/chart-data'

export default defineComponent({
  props: {
    height: {
      type: String,
      default: '20rem',
    },
  },
  computed: {
    monthlyIncomesChartData(): ChartData {
      const getters = this.$store.getters
      const months = getters['months/sorted'](12)
      const recurringIncomes = getters['recurringIncomes/recurringIncomes']
      return generateMonthlyIncomesChartData(
        months,
        recurringIncomes,
        this.$i18n
      )
    },
  },
})
</script>
