<template>
  <v-row dense>
    <v-col cols="12">
      <month-summary :month-id="monthId" />
    </v-col>
    <v-col :cols="$vuetify.breakpoint.smAndUp ? 4 : 12" style="height: 100%">
      <v-card>
        <v-card-text>
          <expense-pie-chart :expenses="expenses" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col :cols="$vuetify.breakpoint.smAndUp ? 8 : 12">
      <v-card>
        <v-card-text>
          <expense-bar-chart :expenses="expenses" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <one-time-expense-table :expenses="oneTimeExpenses" />
    </v-col>
    <v-col cols="12">
      <recurring-expense-table />
    </v-col>
  </v-row>
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
