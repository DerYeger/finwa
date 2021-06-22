<template>
  <expense-table :expenses="recurringExpenses" :title="$tc('expense.recurring', 2)" include-recurring-data />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { RecurringExpense } from '~/model/expense'

export default defineComponent({
  props: {
    recurringExpenses: {
      type: Array as PropType<RecurringExpense[]>,
      default: undefined,
    },
  },
})
</script>
