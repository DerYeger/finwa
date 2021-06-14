<template>
  <v-card>
    <v-card-title>{{ $d(new Date(month.id), 'no-day') }}</v-card-title>
    <v-card-text>
      <expense-form @confirm="addExpense({ month, expense: $event })" />
    </v-card-text>
    <v-divider class="my-4" />
    <expense-chart :expenses="expenses" />
    <v-divider class="my-4" />
    <expense-list :expenses="expenses" @delete-expense="removeExpense({ month, expense: $event })" />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapMutations } from 'vuex'
import { createMonth, Month } from '~/model/month'
import { toArray } from '~/utils/collections'
import { Expense } from '~/model/expense'

export default defineComponent({
  props: {
    monthId: {
      type: String,
      required: true,
    },
  },
  computed: {
    month(): Month {
      const month = this.$store.getters['months/byId'](this.monthId)
      if (month !== undefined) {
        return month
      }
      const newMonth: Month = createMonth({ id: this.monthId })
      this.$store.commit('months/add', newMonth)
      return newMonth
    },
    expenses(): Expense[] {
      return toArray(this.month.expenses)
    },
  },
  methods: mapMutations('months', ['addExpense', 'removeExpense']),
})
</script>
