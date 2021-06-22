<template>
  <v-date-picker
    :value="value"
    type="month"
    :full-width="fullWidth"
    color="red"
    header-color="primary"
    elevation="2"
    min="1900-01"
    max="9999-12"
    @input="$emit('input', $event)"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
