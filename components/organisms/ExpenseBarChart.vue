<template>
  <client-only>
    <bar-chart v-if="expenseChartData.labels.length > 0" :chart-data="expenseChartData" />
    <div v-else style="text-align: center">{{ $t('misc.no-data') }}</div>
  </client-only>
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
  },
  computed: {
    expenseChartData(): ChartData {
      return generateExpenseChartData(this.expenses, this.$store.getters['categories/categories'], this.$i18n)
    },
  },
})
</script>
