<template>
  <v-card>
    <v-card-title>
      <month-name :month-id="monthId" />
    </v-card-title>
    <v-card-text>
      <p>
        <b>{{ totalExpenseValue }}</b> {{ $t('misc.spent') }}
      </p>
      <p>
        <b>{{ totalIncomeValue }}</b> {{ $t('misc.earned') }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn text color="primary" :to="localePath(`/months/${month.id}`)"> Details </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Month } from '~/model/month'
import { sumBy, toArray } from '~/utils/collections'
import { Expense, OneTimeExpense, RecurringExpense } from '~/model/expense'
import { Income, OneTimeIncome, RecurringIncome } from '~/model/income'

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
    oneTimeIncomes(): OneTimeIncome[] {
      return toArray(this.month?.incomes ?? {})
    },
    recurringIncomes(): RecurringIncome[] {
      if (this.month === undefined) {
        return []
      }
      return this.$store.getters['recurringIncomes/byMonthId'](this.month.id)
    },
    incomes(): Income[] {
      return [...this.oneTimeIncomes, ...this.recurringIncomes]
    },
    totalIncomeValue(): number {
      return sumBy(this.incomes, (income) => income.value)
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
