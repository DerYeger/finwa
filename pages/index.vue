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
import { currentMonthId } from '~/model/month'

export default defineComponent({
  data() {
    return {
      currentMonth: currentMonthId(),
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
