<template>
  <v-card flat>
    <v-card-title>
      {{ $tc('expense.title', 2) }}
      <v-spacer />
      <v-text-field v-model="search" append-icon="mdi-magnify" :label="$t('actions.search')" single-line hide-details class="mt-0 pt-0" />
    </v-card-title>
    <client-only>
      <v-data-table
        :headers="headers"
        :items="expenses"
        :items-per-page="15"
        :search="search"
        :footer-props="footerProps"
        :header-props="headerProps"
        :no-data-text="$t('misc.no-data')"
        :no-results-text="$t('misc.no-results')"
      >
        <template #item.categoryId="{ item }">
          <span class="d-inline-flex">
            <v-badge inline :color="byId(item.categoryId).color" class="mr-2" />
            {{ $t(byId(item.categoryId).name) }}
          </span>
        </template>
        <template #item.startingMonthId="{ item }">
          <span v-if="item.startingMonthId">{{ $d(new Date(item.startingMonthId), 'no-day') }}</span>
          <span v-else>{{ $d(new Date(item.monthId), 'no-day') }}</span>
        </template>
        <template #item.frequency="{ item }">
          <span v-if="item.frequency">{{ $tc('expense.frequency.hint', item.frequency) }}</span>
        </template>
        <template #item.actions="{ item }">
          <edit-expense-dialog :expense="item" />
          <v-btn small icon color="error" @click="deleteExpense(item)">
            <v-icon small v-text="'mdi-delete'" />
          </v-btn>
        </template>
        <template #footer.page-text="{ pageStart, pageStop, itemsLength }">
          {{ $t('misc.table.page-text', [pageStart, pageStop, itemsLength]) }}
        </template>
      </v-data-table>
    </client-only>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapGetters } from 'vuex'
import { Expense, isOneTimeExpense, isRecurringExpense, OneTimeExpense, RecurringExpense } from '~/model/expense'
import { translateAndCompare } from '~/utils'

export default defineComponent({
  props: {
    expenses: {
      type: Array as () => Expense[],
      required: true,
    },
  },
  data() {
    return {
      footerProps: {
        itemsPerPageAllText: this.$i18n.t('misc.table.all'),
        itemsPerPageText: this.$i18n.t('misc.table.items-per-page'),
      },
      headerProps: {
        sortByText: this.$i18n.t('misc.table.sort-by'),
      },
      headers: [
        { text: this.$i18n.t('misc.name'), value: 'name' },
        {
          text: this.$i18n.tc('category.title', 1),
          value: 'categoryId',
          sort: (a: string, b: string) => translateAndCompare(a, b, (it) => this.$i18n.t(it)),
        },
        { text: this.$i18n.t('misc.costs'), value: 'value' },
        {
          text: this.$i18n.tc('month.title', 1),
          value: 'startingMonthId',
          filterable: false,
        },
        { text: this.$i18n.t('expense.frequency.title'), value: 'frequency' },
        { text: this.$i18n.t('misc.actions'), value: 'actions', sortable: false, filterable: false },
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
