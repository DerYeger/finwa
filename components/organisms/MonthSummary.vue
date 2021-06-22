<template>
  <month-data v-slot="{ totalExpenseValue, totalIncomeValue }" :month-id="monthId">
    <v-card>
      <v-card-title>
        <month-name :month-id="monthId" />
      </v-card-title>
      <v-card-text>
        <p>
          <b>{{ totalExpenseValue }}</b> {{ $t('misc.spent') }}
        </p>
        <p>
          <b>{{ totalIncomeValue }}</b> {{ $t('misc.earned') }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text color="primary" :to="localePath(`/months/${monthId}`)">
          {{ $t('misc.details') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </month-data>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    monthId: {
      type: String,
      required: true,
    },
  },
})
</script>
