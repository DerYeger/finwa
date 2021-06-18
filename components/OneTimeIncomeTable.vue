<template>
  <income-table :incomes="incomes" :title="$tc('income.one-time', 2)" include-one-time-data />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { OneTimeIncome } from '~/model/income'

export default defineComponent({
  props: {
    incomes: {
      type: Array as () => OneTimeIncome[],
      required: true,
    },
  },
})
</script>
