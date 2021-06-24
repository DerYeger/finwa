<template>
  <v-list-item :to="localePath(route.to)" exact>
    <v-list-item-icon>
      <v-icon v-text="route.icon" />
    </v-list-item-icon>
    <v-list-item-title>{{ $tc(route.navTitle || route.title, 2) }}</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Route } from '~/model/routes'

export default defineComponent({
  props: {
    route: {
      type: Object as PropType<Route>,
      required: true,
    },
  },
})
</script>
