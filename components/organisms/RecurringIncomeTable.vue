<template>
  <income-table :incomes="recurringIncomes" :title="$tc('income.recurring', 2)" include-recurring-data />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { RecurringIncome } from '~/model/income'

export default defineComponent({
  props: {
    recurringIncomes: {
      type: Array as PropType<RecurringIncome[]>,
      default: undefined,
    },
  },
})
</script>
