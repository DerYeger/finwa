<template>
  <div>
    <slot
      :month="month"
      :expenses="expenses"
      :one-time-expenses="oneTimeExpenses"
      :recurring-expenses="recurringExpenses"
      :total-expense-value="totalExpenseValue"
      :incomes="incomes"
      :one-time-incomes="oneTimeIncomes"
      :recurring-incomes="recurringIncomes"
      :total-income-value="totalIncomeValue"
    />
  </div>
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
    monthId: {
      immediate: true,
      handler() {
        if (this.month === undefined) {
          this.$store.dispatch('months/create', { id: this.monthId })
        }
      },
    },
  },
})
</script>
