<template>
  <v-card>
    <v-card-title :class="{ 'pb-0': $vuetify.breakpoint.xsOnly }">
      {{ title || $tc('expense.title', 2) }}
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
        <template #item.monthId="{ item }">
          <month-name v-if="item.monthId" :month-id="item.monthId" />
        </template>
        <template #item.startingMonthId="{ item }">
          <month-name v-if="item.startingMonthId" :month-id="item.startingMonthId" />
        </template>
        <template #item.frequency="{ item }">
          <span v-if="item.frequency">{{ $tc('expense.frequency.description', item.frequency) }}</span>
        </template>
        <template #item.actions="{ item }">
          <edit-expense-dialog :expense="item" />
          <v-btn small icon color="error" :aria-label="$t('actions.delete')" :title="$t('actions.delete')" @click="deleteExpense(item)">
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
import { DataTableHeader } from 'vuetify'
import { Expense, isOneTimeExpense, isRecurringExpense, OneTimeExpense, RecurringExpense } from '~/model/expense'
import { translateAndCompare } from '~/utils'

export default defineComponent({
  props: {
    expenses: {
      type: Array as () => Expense[],
      required: true,
    },
    title: {
      type: String as () => string | undefined,
      default: undefined,
    },
    includeOneTimeData: {
      type: Boolean,
      default: false,
    },
    includeRecurringData: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const headers: DataTableHeader[] = [
      { text: this.$t('misc.name') as string, value: 'name' },
      {
        text: this.$tc('category.title', 1) as string,
        value: 'categoryId',
        sort: (a: string, b: string) => translateAndCompare(a, b, (it) => this.$t(it)),
      },
      { text: this.$t('misc.value') as string, value: 'value' },
    ]
    if (this.includeOneTimeData) {
      headers.push({
        text: this.$tc('month.title', 1) as string,
        value: 'monthId',
      })
    }
    if (this.includeRecurringData) {
      headers.push(
        {
          text: this.$tc('misc.since', 1) as string,
          value: 'startingMonthId',
        },
        { text: this.$t('expense.frequency.title') as string, value: 'frequency' }
      )
    }
    headers.push({ text: this.$t('misc.actions') as string, value: 'actions', sortable: false, filterable: false })
    return {
      footerProps: {
        itemsPerPageAllText: this.$t('misc.table.all'),
        itemsPerPageText: this.$t('misc.table.items-per-page'),
      },
      headerProps: {
        sortByText: this.$t('misc.table.sort-by'),
      },
      headers,
      search: '',
    }
  },
  computed: mapGetters('categories', ['byId']),
  methods: {
    isRecurringExpense,
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
