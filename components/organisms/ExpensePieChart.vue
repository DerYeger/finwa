<template>
  <client-only>
    <pie-chart
      v-if="expenseChartData.labels.length > 0"
      :chart-data="expenseChartData"
      :style="`height: ${height};`"
    />
    <div v-else style="text-align: center">{{ $t('misc.no-data') }}</div>
  </client-only>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { generateExpenseChartData } from '~/model/chart-data'
import { Expense } from '~/model/expense'

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
      return generateExpenseChartData(
        this.expenses,
        this.$store.getters['categories/categories'],
        this.$i18n
      )
    },
  },
})
</script>
