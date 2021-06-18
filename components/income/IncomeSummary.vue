<template>
  <v-card>
    <v-card-title>
      {{ $tc('income.title', 2) }}
    </v-card-title>
    <v-card-text>
      <p>
        <b>{{ totalIncomeValue }}</b> {{ $t('misc.earned') }}
      </p>
      <p>
        <b>{{ oneTimeIncomes.length }}</b> {{ $tc('income.one-time', oneTimeIncomes.length) }}
      </p>
      <p>
        <b>{{ recurringIncomes.length }}</b> {{ $tc('income.recurring', recurringIncomes.length) }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Income, OneTimeIncome, RecurringIncome } from '~/model/income'
import { Month } from '~/model/month'
import { sumBy, toArray } from '~/utils/collections'

export default defineComponent({
  props: {
    monthId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editDialogOpen: false,
    }
  },
  computed: {
    month(): Month | undefined {
      return this.$store.getters['months/byId'](this.monthId)
    },
    oneTimeIncomes(): OneTimeIncome[] {
      return toArray(this.month?.incomes ?? {})
    },
    recurringIncomes(): RecurringIncome[] {
      if (this.month === undefined) {
        return []
      }
      return this.$store.getters['recurringIncomes/byMonthId'](this.month.id)
    },
    incomes(): Income[] {
      return [...this.oneTimeIncomes, ...this.recurringIncomes]
    },
    totalIncomeValue(): number {
      return sumBy(this.incomes, (income) => income.value)
    },
  },
  watch: {
    monthId() {
      if (this.month === undefined) {
        this.$store.dispatch('months/create', { id: this.monthId })
      }
    },
  },
})
</script>
