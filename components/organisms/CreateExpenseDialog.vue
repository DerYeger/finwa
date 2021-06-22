<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600" @click:outside="$refs.form.resetForm()">
    <template #activator="{ on, attrs }">
      <v-btn dark fab small v-bind="attrs" color="red" :aria-label="$t('misc.new-expense')" :title="$t('misc.new-expense')" v-on="on">
        <v-icon v-text="'mdi-currency-usd'" />
      </v-btn>
    </template>
    <template #default="dialog">
      <expense-form
        ref="form"
        :initial-month-id="initialMonthId"
        :submit-label="$t('actions.create')"
        @submit="createNewExpense($event, dialog)"
      />
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { currentMonthId } from '~/model/month'
import { Expense, isOneTimeExpense, isRecurringExpense } from '~/model/expense'

export default defineComponent({
  props: {
    initialMonthId: {
      type: String,
      default: currentMonthId(),
    },
  },
  methods: {
    createNewExpense(expense: Omit<Expense, 'id'>, dialog: { value: boolean }) {
      dialog.value = false
      if (isRecurringExpense({ id: '', ...expense })) {
        this.$store.dispatch('recurringExpenses/create', expense)
      } else if (isOneTimeExpense(expense)) {
        this.$store.dispatch('months/createExpense', expense)
      }
    },
  },
})
</script>
