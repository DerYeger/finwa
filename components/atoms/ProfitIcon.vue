<template>
  <v-icon v-if="profit < 0" color="red" v-text="'mdi-trending-down'" />
  <v-icon v-else-if="profit === 0" color="primary" v-text="'mdi-trending-neutral'" />
  <v-icon v-else-if="profit > 0" color="green" v-text="'mdi-trending-up'" />
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
