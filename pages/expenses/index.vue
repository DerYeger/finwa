<template>
  <v-row dense>
    <v-col cols="12">
      <recurring-expense-table :recurring-expenses="recurringExpenses" />
    </v-col>
    <v-col cols="12">
      <one-time-expense-table :one-time-expenses="oneTimeExpenses" />
    </v-col>
    <speed-dial />
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapGetters } from 'vuex'
import { routes } from '~/model/routes'

export default defineComponent({
  head() {
    const title = this.$tc(routes.expenses.title, 2) as string
    return {
      title,
    }
  },
  computed: {
    ...mapGetters('months', ['oneTimeExpenses']),
    ...mapGetters('recurringExpenses', ['recurringExpenses']),
  },
})
</script>
