<template>
  <month-data
    v-slot="{
      expenses,
      oneTimeExpenses,
      recurringExpenses,
      incomes,
      oneTimeIncomes,
      recurringIncomes,
      profit,
    }"
    :month-id="monthId"
  >
    <v-row dense>
      <v-col cols="12" sm="5">
        <expense-summary
          :one-time-expenses="oneTimeExpenses"
          :recurring-expenses="recurringExpenses"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <income-summary
          :one-time-incomes="oneTimeIncomes"
          :recurring-incomes="recurringIncomes"
        />
      </v-col>
      <v-col cols="12" sm="3">
        <profit-summary :profit="profit" />
      </v-col>
      <v-col cols="12" sm="8">
        <v-card height="100%" style="display: flex; align-items: center">
          <v-card-text>
            <expense-pie-chart :expenses="expenses" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card height="100%" style="display: flex; align-items: center">
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
      <v-col cols="12" lg="6">
        <one-time-expense-table :one-time-expenses="oneTimeExpenses" />
      </v-col>
      <v-col cols="12" lg="6">
        <one-time-income-table :one-time-incomes="oneTimeIncomes" />
      </v-col>
    </v-row>
  </month-data>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    monthId: {
      type: String,
      required: true,
    },
  },
})
</script>
