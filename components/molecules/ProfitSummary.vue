<template>
  <v-card height="100%">
    <v-card-title>
      {{ $tc('misc.profit', 1) }}
      <profit-icon :profit="profit" class="ml-2" />
    </v-card-title>
    <v-card-text>
      <p>
        <b>{{ Math.abs(profit) }}</b> {{ $t(profit >= 0 ? 'misc.gained' : 'misc.lost') }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    profit: {
      type: Number,
      required: true,
    },
  },
})
</script>
