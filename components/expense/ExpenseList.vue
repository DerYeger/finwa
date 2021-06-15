<template>
  <client-only>
    <v-list>
      <v-list-item v-show="expenses.length === 0">
        <v-list-item-content>
          <v-list-item-title>{{ $t('misc.empty-list') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="expense of expenses" :key="expense.id">
        <v-list-item-content>
          <v-list-item-title>
            {{ $t(byId(expense.categoryId).name) }},
            {{ expense.value }}
          </v-list-item-title>
          <span v-if="isRecurringExpense(expense)">{{ frequencyDescription(expense) }}</span>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn color="error" x-small fab depressed @click="$emit('delete-expense', expense)">
            <v-icon v-text="'mdi-delete'" />
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapGetters } from 'vuex'
import { Expense, isRecurringExpense, RecurringExpense } from '~/model/expense'

export default defineComponent({
  props: {
    expenses: {
      type: Array as () => Expense[],
      required: true,
    },
  },
  computed: mapGetters('categories', ['byId']),
  methods: {
    isRecurringExpense,
    frequencyDescription(expense: RecurringExpense): string {
      return `${this.$tc('expense.frequency.hint', expense.frequency)} ${this.$t('misc.since')} ${this.$d(
        new Date(expense.startingMonthId),
        'no-day'
      )}`
    },
  },
})
</script>
