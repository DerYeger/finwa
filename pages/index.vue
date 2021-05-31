<template>
  <v-row>
    <v-col>
      <month-overview :month-id="currentMonth" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'
import { currentMonth } from '~/utils'

export default defineComponent({
  data() {
    return {
      currentMonth: currentMonth(),
    }
  },
  head() {
    const title = (this.$t as Function)(routes.home.title)
    return {
      title,
    }
  },
})
</script>
