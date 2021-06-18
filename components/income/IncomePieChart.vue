<template>
  <pie-chart :chart-data="incomeChartData" :styles="pieChartStyles" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { generateIncomeChartData } from '~/model'
import { Income } from '~/model/income'

export default defineComponent({
  props: {
    incomes: {
      type: Array as () => Income[],
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
