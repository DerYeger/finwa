<template>
  <v-row dense>
    <v-col :cols="isMobile ? 12 : 6">
      <expense-summary :one-time-expenses="oneTimeExpenses" :recurring-expenses="recurringExpenses" />
    </v-col>
    <v-col :cols="isMobile ? 12 : 6">
      <income-summary :one-time-incomes="oneTimeIncomes" :recurring-incomes="recurringIncomes" />
    </v-col>
    <v-col :cols="isMobile ? 12 : 8">
      <v-card>
        <v-card-text>
          <expense-pie-chart :expenses="expenses" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col :cols="isMobile ? 12 : 4">
      <v-card>
        <v-card-text>
          <income-pie-chart :incomes="incomes" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-text>
          <expense-bar-chart :expenses="expenses" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <one-time-expense-table :one-time-expenses="oneTimeExpenses" />
    </v-col>
    <v-col cols="12">
      <recurring-expense-table :recurring-expenses="recurringExpenses" />
    </v-col>
    <v-col cols="12">
      <one-time-income-table :one-time-incomes="oneTimeIncomes" />
    </v-col>
    <v-col cols="12">
      <recurring-income-table :recurring-incomes="recurringIncomes" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Month } from '~/model/month'
import { toArray } from '~/utils/collections'
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
    isMobile(): boolean {
      return this.$vuetify.breakpoint.xsOnly
    },
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
