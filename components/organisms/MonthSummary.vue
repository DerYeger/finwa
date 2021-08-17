<template>
  <month-data
    v-slot="{ totalExpenseValue, totalIncomeValue, profit }"
    style="height: 100%"
    :month-id="monthId"
  >
    <v-card height="100%">
      <v-card-title>
        <month-name :month-id="monthId" />
        <profit-icon
          :profit="totalIncomeValue - totalExpenseValue"
          class="ml-2"
        />
      </v-card-title>
      <v-card-text>
        <p>
          <b>{{ totalExpenseValue }}</b> {{ $t('misc.spent') }}
        </p>
        <p>
          <b>{{ totalIncomeValue }}</b> {{ $t('misc.earned') }}
        </p>
        <p>
          <b>{{ Math.abs(profit) }}</b>
          {{ $t(profit >= 0 ? 'misc.gained' : 'misc.lost') }}
        </p>
      </v-card-text>
      <v-card-actions class="month-summary-card-actions">
        <v-spacer />
        <v-btn
          text
          color="primary"
          :to="localePath(`${monthsRoute.to}/${monthId}`)"
        >
          {{ $t('misc.details') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </month-data>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { routes } from '~/model/routes'

export default defineComponent({
  props: {
    monthId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      monthsRoute: routes.months,
    }
  },
})
</script>

<style>
.month-summary-card-actions {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
