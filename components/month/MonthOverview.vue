<template>
  <v-card>
    <v-card-title>{{ $d(new Date(month.id), 'no-day') }}</v-card-title>
    <v-divider class="my-4" />
    <expense-chart :expenses="expenses" />
    <v-divider class="my-4" />
    <expense-list :expenses="expenses" @delete-expense="removeExpense({ month, expense: $event })" />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapMutations } from 'vuex'
import { Month } from '~/model/month'
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
    month(): Month | undefined {
      return this.$store.getters['months/byId'](this.monthId)
    },
    expenses(): Expense[] {
      return this.month === undefined ? [] : toArray(this.month.expenses)
    },
  },
  watch: {
    monthId() {
      if (this.month === undefined) {
        this.$store.dispatch('months/create', { id: this.monthId })
      }
    },
  },
  methods: mapMutations('months', ['removeExpense']),
})
</script>
