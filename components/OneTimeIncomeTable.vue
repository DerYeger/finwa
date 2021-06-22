<template>
  <income-table :incomes="oneTimeIncomes" :title="$tc('income.one-time', 2)" include-one-time-data />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { OneTimeIncome } from '~/model/income'

export default defineComponent({
  props: {
    oneTimeIncomes: {
      type: Array as () => OneTimeIncome[],
      required: true,
    },
  },
})
</script>
