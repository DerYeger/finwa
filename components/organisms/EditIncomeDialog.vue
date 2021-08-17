<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
    @click:outside="$refs.form.resetForm()"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        icon
        small
        v-bind="attrs"
        :aria-label="$t('actions.edit')"
        :title="$t('actions.edit')"
        v-on="on"
      >
        <v-icon small v-text="'mdi-pencil'" />
      </v-btn>
    </template>
    <template #default="dialog">
      <income-form
        ref="form"
        :initial-income-data="income"
        :submit-label="$t('actions.update')"
        @submit="updateIncome($event, dialog)"
      />
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Income, isOneTimeIncome, isRecurringIncome } from '~/model/income'

export default defineComponent({
  props: {
    income: {
      type: Object as PropType<Income>,
      required: true,
    },
  },
  methods: {
    updateIncome(income: Income, dialog: { value: boolean }) {
      dialog.value = false
      const oldIncome = this.income
      if (isRecurringIncome(income)) {
        if (isOneTimeIncome(oldIncome)) {
          this.$store.commit('months/removeIncome', oldIncome)
        }
        this.$store.commit('recurringIncomes/add', income)
      } else if (isOneTimeIncome(income)) {
        if (isRecurringIncome(oldIncome)) {
          this.$store.commit('recurringIncomes/remove', oldIncome)
        } else if (
          isOneTimeIncome(oldIncome) &&
          oldIncome.monthId !== income.monthId
        ) {
          this.$store.commit('months/removeIncome', oldIncome)
        }
        this.$store.commit('months/addIncome', income)
      }
    },
  },
})
</script>
