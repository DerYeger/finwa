<template>
  <v-card>
    <v-card-title :class="{ 'pb-0': $vuetify.breakpoint.xsOnly }">
      {{ title || $tc('income.title', 2) }}
      <v-spacer />
      <v-text-field v-model="search" append-icon="mdi-magnify" :label="$t('actions.search')" single-line hide-details class="mt-0 pt-0" />
    </v-card-title>
    <client-only>
      <v-data-table
        :headers="headers"
        :items="incomes"
        :items-per-page="15"
        :search="search"
        :footer-props="footerProps"
        :header-props="headerProps"
        :no-data-text="$t('misc.no-data')"
        :no-results-text="$t('misc.no-results')"
      >
        <template #item.monthId="{ item }">
          <month-name v-if="item.monthId" :month-id="item.monthId" />
        </template>
        <template #item.startingMonthId="{ item }">
          <month-name v-if="item.startingMonthId" :month-id="item.startingMonthId" />
        </template>
        <template #item.frequency="{ item }">
          <span v-if="item.frequency">{{ $tc('frequency.description', item.frequency) }}</span>
        </template>
        <template #item.actions="{ item }">
          <edit-income-dialog :income="item" />
          <v-btn small icon color="error" :aria-label="$t('actions.delete')" :title="$t('actions.delete')" @click="deleteIncome(item)">
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
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { DataTableHeader } from 'vuetify'
import { Income, isOneTimeIncome, isRecurringIncome } from '~/model/income'

export default defineComponent({
  props: {
    incomes: {
      type: Array as PropType<Income[]>,
      required: true,
    },
    title: {
      type: String as PropType<string | undefined>,
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
        { text: this.$t('frequency.title') as string, value: 'frequency' }
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
  methods: {
    deleteIncome(income: Income) {
      if (isRecurringIncome(income)) {
        this.$store.commit('recurringIncomes/remove', income)
      } else if (isOneTimeIncome(income)) {
        this.$store.commit('months/removeIncome', income)
      }
    },
  },
})
</script>
