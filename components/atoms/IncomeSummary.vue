<template>
  <v-card>
    <v-card-title>
      {{ $tc('income.title', 2) }}
    </v-card-title>
    <v-card-text>
      <p>
        <b>{{ totalIncomeValue }}</b> {{ $t('misc.earned') }}
      </p>
      <p>
        <b>{{ oneTimeIncomes.length }}</b>
        {{ $tc('income.one-time', oneTimeIncomes.length) }}
      </p>
      <p>
        <b>{{ recurringIncomes.length }}</b>
        {{ $tc('income.recurring', recurringIncomes.length) }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Income, OneTimeIncome, RecurringIncome } from '~/model/income'
import { sumBy } from '~/utils/collections'

export default defineComponent({
  props: {
    oneTimeIncomes: {
      type: Array as PropType<OneTimeIncome[]>,
      required: true,
    },
    recurringIncomes: {
      type: Array as PropType<RecurringIncome[]>,
      required: true,
    },
  },
  computed: {
    incomes(): Income[] {
      return [...this.oneTimeIncomes, ...this.recurringIncomes]
    },
    totalIncomeValue(): number {
      return sumBy(this.incomes, (income) => income.value)
    },
  },
})
</script>
