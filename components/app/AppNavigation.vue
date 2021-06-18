<template>
  <v-list-item-group color="info">
    <v-subheader>{{ $t('misc.navigation') }}</v-subheader>
    <v-list-item v-for="(route, i) in routes" :key="i" :to="localePath(route.to)" exact>
      <v-list-item-icon>
        <v-icon v-text="route.icon" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="$tc(route.title, 2)" />
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'
import { toArray } from '~/utils/collections'

export default defineComponent({
  data() {
    return {
      routes: toArray(routes),
    }
  },
})
</script>
