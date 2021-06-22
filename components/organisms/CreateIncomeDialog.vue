<template>
  <v-dialog
    :value="value"
    transition="dialog-bottom-transition"
    max-width="600"
    @input="$emit('input', $event)"
    @click:outside="$refs.form.resetForm()"
  >
    <template #default="dialog">
      <income-form
        ref="form"
        :initial-month-id="initialMonthId"
        :submit-label="$t('actions.create')"
        @submit="createNewIncome($event, dialog)"
      />
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { currentMonthId } from '~/model/month'
import { Income, isOneTimeIncome, isRecurringIncome } from '~/model/income'

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
    createNewIncome(income: Omit<Income, 'id'>, dialog: { value: boolean }) {
      dialog.value = false
      if (isRecurringIncome({ id: '', ...income })) {
        this.$store.dispatch('recurringIncomes/create', income)
      } else if (isOneTimeIncome(income)) {
        this.$store.dispatch('months/createIncome', income)
      }
    },
  },
})
</script>
