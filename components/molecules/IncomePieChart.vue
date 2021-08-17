<template>
  <client-only>
    <pie-chart
      v-if="incomeChartData.labels.length > 0"
      :chart-data="incomeChartData"
      :style="`height: ${height};`"
    />
    <div v-else style="text-align: center">{{ $t('misc.no-data') }}</div>
  </client-only>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { Income } from '~/model/income'
import { generateIncomeChartData } from '~/model/chart-data'

export default defineComponent({
  props: {
    incomes: {
      type: Array as PropType<Income[]>,
      required: true,
    },
    height: {
      type: String,
      default: '20rem',
    },
  },
  computed: {
    incomeChartData(): ChartData {
      return generateIncomeChartData(this.incomes, this.$i18n)
    },
  },
})
</script>
