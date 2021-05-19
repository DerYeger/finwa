<template>
  <v-list dense nav subheader>
    <app-navigation />
    <resources />
    <quick-access />
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'

export default defineComponent({
  data() {
    return {
      routes: Object.values(routes),
    }
  },
})
</script>
