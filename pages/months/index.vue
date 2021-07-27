<template>
  <v-row dense>
    <v-col>
      <month-summary :month-id="selectedMonthId" show-details-link />
    </v-col>
    <v-col cols="12" sm="auto">
      <month-picker v-model="selectedMonthId" :full-width="$vuetify.breakpoint.xsOnly" />
    </v-col>
    <create-entity-speed-dial :active-month-id="selectedMonthId" />
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'
import { currentMonthId } from '~/model/month'

export default defineComponent({
  data() {
    return {
      selectedMonthId: currentMonthId(),
    }
  },
  head() {
    const title = this.$tc(routes.months.title, 2) as string
    return {
      title,
    }
  },
})
</script>
