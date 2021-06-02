<template>
  <v-card>
    <v-card-title>{{ $d(new Date(month.id), 'no-day') }}</v-card-title>
    <v-card-text>
      <expense-form @confirm="addExpenseToMonth({ month, expense: $event })" />
    </v-card-text>
    <v-divider class="my-4" />
    <expense-chart :expenses="month.expenses" />
    <v-divider class="my-4" />
    <expense-list :expenses="month.expenses" @delete-expense="removeExpenseFromMonth({ month, expense: $event })" />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapMutations } from 'vuex'
import { createMonth, Month } from '~/model/month'

export default defineComponent({
  props: {
    monthId: {
      type: String,
      required: true,
    },
  },
  computed: {
    month(): Month {
      const month = this.$store.getters.monthById(this.monthId)
      if (month !== undefined) {
        return month
      }
      const newMonth: Month = createMonth(this.monthId)
      this.$store.commit('addMonth', newMonth)
      return newMonth
    },
  },
  methods: mapMutations(['addExpenseToMonth', 'removeExpenseFromMonth']),
})
</script>
