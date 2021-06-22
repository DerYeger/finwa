<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600" @click:outside="$refs.form.resetForm()">
    <template #activator="{ on, attrs }">
      <v-btn dark fab small v-bind="attrs" color="green" :aria-label="$t('misc.new-income')" :title="$t('misc.new-income')" v-on="on">
        <v-icon v-text="'mdi-cash'" />
      </v-btn>
    </template>
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
