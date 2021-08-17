<template>
  <v-list-item-group color="info">
    <v-subheader>{{ $tc('month.title', 2) }}</v-subheader>
    <route-list-item :route="monthsRoute" />
    <v-list-group color="info">
      <template #activator>
        <v-list-item-icon>
          <v-icon v-text="'mdi-history'" />
        </v-list-item-icon>
        <v-list-item-title>{{ $t('misc.recent') }}</v-list-item-title>
      </template>
      <route-list-item
        v-for="(route, i) of recentMonthRoutes"
        :key="i"
        :route="route"
      />
    </v-list-group>
    <v-list-group color="info">
      <template #activator>
        <v-list-item-icon>
          <v-icon v-text="'mdi-update'" />
        </v-list-item-icon>
        <v-list-item-title>{{ $t('misc.upcoming') }}</v-list-item-title>
      </template>
      <route-list-item
        v-for="(route, i) of upcomingMonthRoutes"
        :key="i"
        :route="route"
      />
    </v-list-group>
  </v-list-item-group>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Route, routes } from '~/model/routes'
import { Month, recentMonths, upcomingMonths } from '~/model/month'

export default defineComponent({
  data() {
    return {
      monthsRoute: routes.months,
    }
  },
  computed: {
    recentMonthRoutes(): Route[] {
      return this.monthsToRoutes(recentMonths(3, -1)).reverse()
    },
    upcomingMonthRoutes(): Route[] {
      return this.monthsToRoutes(upcomingMonths(3, 1))
    },
  },
  methods: {
    monthsToRoutes(months: Month[]): Route[] {
      return months.map((month) => ({
        title: this.$d(new Date(month.id), 'no-day'),
        to: `${routes.months.to}/${month.id}`,
        icon: '',
      }))
    },
  },
})
</script>
