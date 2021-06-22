<template>
  <v-row dense>
    <v-col cols="12">
      <v-card>
        <v-card-title>{{ $t('misc.history') }}</v-card-title>
        <v-card-text>
          <month-line-chart />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col :cols="$vuetify.breakpoint.smAndUp ? 'auto' : 12">
      <month-picker v-model="selectedMonthId" :full-width="$vuetify.breakpoint.xsOnly" />
    </v-col>
    <v-col>
      <month-summary :month-id="selectedMonthId" show-details-link />
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
