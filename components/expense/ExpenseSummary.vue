<template>
  <v-card>
    <v-card-title>
      {{ $tc('expense.title', 2) }}
    </v-card-title>
    <v-card-text>
      <p>
        <b>{{ totalExpenseValue }}</b> {{ $t('misc.spent') }}
      </p>
      <p>
        <b>{{ oneTimeExpenses.length }}</b> {{ $tc('expense.one-time', oneTimeExpenses.length) }}
      </p>
      <p>
        <b>{{ recurringExpenses.length }}</b> {{ $tc('expense.recurring', recurringExpenses.length) }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Month } from '~/model/month'
import { sumBy } from '~/utils/collections'
import { Expense, OneTimeExpense, RecurringExpense } from '~/model/expense'

export default defineComponent({
  props: {
    oneTimeExpenses: {
      type: Array as PropType<OneTimeExpense[]>,
      required: true,
    },
    recurringExpenses: {
      type: Array as PropType<RecurringExpense[]>,
      required: true,
    },
  },
  data() {
    return {
      editDialogOpen: false,
    }
  },
  computed: {
    month(): Month | undefined {
      return this.$store.getters['months/byId'](this.monthId)
    },
    expenses(): Expense[] {
      return [...this.oneTimeExpenses, ...this.recurringExpenses]
    },
    totalExpenseValue(): number {
      return sumBy(this.expenses, (expense) => expense.value)
    },
  },
})
</script>
