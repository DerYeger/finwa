<template>
  <v-row no-gutters>
    <v-col>
      <month-details :month-id="currentMonth" />
    </v-col>
    <speed-dial />
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'
import { currentMonthId } from '~/model/month'

export default defineComponent({
  data() {
    return {
      currentMonth: currentMonthId(),
    }
  },
  head() {
    const title = this.$t(routes.home.title) as string
    return {
      title,
    }
  },
})
</script>
