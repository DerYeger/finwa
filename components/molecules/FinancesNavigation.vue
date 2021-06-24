<template>
  <v-list-item-group color="info">
    <v-subheader>{{ $t('misc.finances') }}</v-subheader>
    <route-list-item v-for="(route, i) in routes" :key="i" :route="route" />
  </v-list-item-group>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'
import { recentMonths } from '~/model/month'

export default defineComponent({
  data() {
    return {
      routes: [routes.finances, routes.expenses, routes.incomes],
      lastSixMonths: recentMonths(6),
    }
  },
})
</script>
