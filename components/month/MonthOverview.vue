<template>
  <v-card>
    <v-card-title>{{ $d(new Date(month.id), 'no-day') }}</v-card-title>
    <v-divider class="my-4" />
    <expense-chart :expenses="expenses" />
    <v-divider class="my-4" />
    <expense-list :expenses="expenses" @delete-expense="removeExpense($event)" />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Month } from '~/model/month'
import { toArray } from '~/utils/collections'
import { findRecurringExpensesForMonth } from '~/model'
import { Expense, isRecurringExpense } from '~/model/expense'

export default defineComponent({
  props: {
    monthId: {
      type: String,
      required: true,
    },
  },
  computed: {
    month(): Month | undefined {
      return this.$store.getters['months/byId'](this.monthId)
    },
    expenses(): Expense[] {
      if (this.month === undefined) {
        return []
      }
      const oneTimeExpenses = toArray(this.month.expenses)
      const recurringExpenses = findRecurringExpensesForMonth(this.month, this.$store.getters['recurringExpenses/recurringExpenses'])
      return [...oneTimeExpenses, ...recurringExpenses]
    },
  },
  watch: {
    monthId() {
      if (this.month === undefined) {
        this.$store.dispatch('months/create', { id: this.monthId })
      }
    },
  },
  methods: {
    removeExpense(expense: Expense) {
      if (isRecurringExpense(expense)) {
        this.$store.commit('recurringExpenses/remove', expense)
      } else {
        this.$store.commit('months/removeExpense', { month: this.month, expense })
      }
    },
  },
})
</script>
