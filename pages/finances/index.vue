<template>
  <v-row dense>
    <v-col cols="12">
      <v-card>
        <v-card-title>{{ $t('misc.finances') }}</v-card-title>
        <v-card-text>
          <profit-line-chart />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>{{ $tc('expense.title', 2) }}</v-card-title>
        <v-card-text>
          <monthly-expenses-line-chart />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>{{ $tc('income.title', 2) }}</v-card-title>
        <v-card-text>
          <monthly-incomes-line-chart />
        </v-card-text>
      </v-card>
    </v-col>
    <create-entity-speed-dial />
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'

export default defineComponent({
  head() {
    const title = this.$t(routes.finances.title) as string
    return {
      title,
    }
  },
})
</script>
