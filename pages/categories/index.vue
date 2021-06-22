<template>
  <v-row dense>
    <v-col>
      <category-table />
    </v-col>
    <create-entity-speed-dial />
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'

export default defineComponent({
  head() {
    const title = this.$tc(routes.categories.title, 2) as string
    return {
      title,
    }
  },
})
</script>
