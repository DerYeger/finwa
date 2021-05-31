<template>
  <v-row>
    <v-col :md="3">
      <v-date-picker v-model="selectedMonth" type="month" full-width color="red" header-color="primary" elevation="2" />
    </v-col>
    <v-col>
      <month-overview :month-id="selectedMonth" />
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
      selectedMonth: currentMonth(),
    }
  },
  head() {
    const title = (this.$t as Function)(routes.months.title)
    return {
      title,
    }
  },
  mounted() {
    this.selectedMonth = currentMonth()
  },
})
</script>
