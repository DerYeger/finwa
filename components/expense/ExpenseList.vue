<template>
  <v-card flat>
    <v-card-title>
      {{ $tc('expense.title', 2) }}
      <v-spacer />
      <v-text-field v-model="search" append-icon="mdi-magnify" :label="$t('actions.search')" single-line hide-details class="mt-0 pt-0" />
    </v-card-title>
    <client-only>
      <v-data-table :headers="headers" :items="expenses" :items-per-page="5" :search="search">
        <template #item.categoryId="{ item }">
          <span class="d-inline-flex">
            <v-badge inline :color="byId(item.categoryId).color" class="mr-2" />
            {{ $t(byId(item.categoryId).name) }}
          </span>
        </template>
        <template #item.startingMonthId="{ item }">
          <span v-if="item.startingMonthId">{{ $d(new Date(item.startingMonthId), 'no-day') }}</span>
        </template>
        <template #item.frequency="{ item }">
          <span v-if="item.frequency">{{ $tc('expense.frequency.hint', item.frequency) }}</span>
        </template>
        <template #item.actions="{ item }">
          <edit-expense-dialog :expense="item" />
          <v-icon small color="error" @click="deleteExpense(item)" v-text="'mdi-delete'" />
        </template>
      </v-data-table>
    </client-only>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapGetters } from 'vuex'
import { Expense, isOneTimeExpense, isRecurringExpense, OneTimeExpense, RecurringExpense } from '~/model/expense'

export default defineComponent({
  props: {
    expenses: {
      type: Array as () => Expense[],
      required: true,
    },
  },
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Category', value: 'categoryId' },
        { text: 'Value', value: 'value' },
        { text: 'Starting Month', value: 'startingMonthId' },
        { text: 'Frequency', value: 'frequency' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      search: '',
    }
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
    deleteExpense(expense: OneTimeExpense | RecurringExpense) {
      if (isRecurringExpense(expense)) {
        this.$store.commit('recurringExpenses/remove', expense)
      } else if (isOneTimeExpense(expense)) {
        this.$store.commit('months/removeExpense', expense)
      }
    },
  },
})
</script>
