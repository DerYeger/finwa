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
import { defineComponent } from '@nuxtjs/composition-api'
import { Month } from '~/model/month'
import { sumBy, toArray } from '~/utils/collections'
import { Expense, OneTimeExpense, RecurringExpense } from '~/model/expense'

export default defineComponent({
  props: {
    monthId: {
      type: String,
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
    oneTimeExpenses(): OneTimeExpense[] {
      return toArray(this.month?.expenses ?? {})
    },
    recurringExpenses(): RecurringExpense[] {
      if (this.month === undefined) {
        return []
      }
      return this.$store.getters['recurringExpenses/byMonthId'](this.month.id)
    },
    expenses(): Expense[] {
      return [...this.oneTimeExpenses, ...this.recurringExpenses]
    },
    totalExpenseValue(): number {
      return sumBy(this.expenses, (expense) => expense.value)
    },
  },
  watch: {
    monthId() {
      if (this.month === undefined) {
        this.$store.dispatch('months/create', { id: this.monthId })
      }
    },
  },
})
</script>
