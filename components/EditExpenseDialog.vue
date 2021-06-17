<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600" @click:outside="$refs.form.resetForm()">
    <template #activator="{ on, attrs }">
      <v-btn color="primary" icon small v-bind="attrs" :aria-label="$t('actions.edit')" :title="$t('actions.edit')" v-on="on">
        <v-icon small v-text="'mdi-pencil'" />
      </v-btn>
    </template>
    <template #default="dialog">
      <expense-form
        ref="form"
        :initial-expense-data="expense"
        :submit-label="$t('actions.update')"
        @submit="updateExpense($event, dialog)"
      />
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { isOneTimeExpense, isRecurringExpense, OneTimeExpense, RecurringExpense } from '~/model/expense'

export default defineComponent({
  props: {
    expense: {
      type: Object as () => OneTimeExpense | RecurringExpense,
      required: true,
    },
  },
  methods: {
    updateExpense(expense: OneTimeExpense | RecurringExpense, dialog: { value: boolean }) {
      dialog.value = false
      const oldExpense = this.expense
      if (isRecurringExpense(expense)) {
        if (isOneTimeExpense(oldExpense)) {
          this.$store.commit('months/removeExpense', oldExpense)
        }
        this.$store.commit('recurringExpenses/add', expense)
      } else if (isOneTimeExpense(expense)) {
        if (isRecurringExpense(oldExpense)) {
          this.$store.commit('recurringExpenses/remove', oldExpense)
        } else if (isOneTimeExpense(oldExpense) && oldExpense.monthId !== expense.monthId) {
          this.$store.commit('months/removeExpense', oldExpense)
        }
        this.$store.commit('months/addExpense', expense)
      }
    },
  },
})
</script>
