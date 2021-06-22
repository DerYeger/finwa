<template>
  <v-dialog
    :value="value"
    transition="dialog-bottom-transition"
    max-width="600"
    @input="$emit('input', $event)"
    @click:outside="$refs.form.resetForm()"
  >
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
    value: {
      type: Boolean,
      required: true,
    },
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
