<template>
  <v-col>
    <expense-form />
    <expense-chart class="expense-chart" />
    <expense-list />
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'

export default defineComponent({
  head() {
    const title = (this.$t as Function)(routes.home.title)
    return {
      title,
    }
  },
})
</script>

<style>
.expense-chart {
  max-width: 30rem;
}
</style>
