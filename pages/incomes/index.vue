<template>
  <v-row dense>
    <v-col cols="12">
      <recurring-income-table :recurring-incomes="recurringIncomes" />
    </v-col>
    <v-col cols="12">
      <one-time-income-table :one-time-incomes="oneTimeIncomes" />
    </v-col>
    <create-entity-speed-dial />
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapGetters } from 'vuex'
import { routes } from '~/model/routes'

export default defineComponent({
  head() {
    const title = this.$tc(routes.income.title, 2) as string
    return {
      title,
    }
  },
  computed: {
    ...mapGetters('months', ['oneTimeIncomes']),
    ...mapGetters('recurringIncomes', ['recurringIncomes']),
  },
})
</script>
