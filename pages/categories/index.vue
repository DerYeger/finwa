<template>
  <v-row>
    <v-col>
      <category-form />
    </v-col>
    <v-col>
      <category-list />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'

export default defineComponent({
  head() {
    const title = this.$t(routes.categories.title) as string
    return {
      title,
    }
  },
})
</script>
