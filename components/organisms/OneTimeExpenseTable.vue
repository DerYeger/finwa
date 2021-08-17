<template>
  <expense-table
    :expenses="oneTimeExpenses"
    :title="$tc('expense.one-time', 2)"
    include-one-time-data
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { OneTimeExpense } from '~/model/expense'

export default defineComponent({
  props: {
    oneTimeExpenses: {
      type: Array as PropType<OneTimeExpense[]>,
      required: true,
    },
  },
})
</script>
