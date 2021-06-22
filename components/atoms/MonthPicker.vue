<template>
  <v-date-picker
    :value="value"
    type="month"
    :full-width="fullWidth"
    color="red"
    header-color="primary"
    elevation="2"
    :min="min"
    :max="max"
    @input="$emit('input', $event)"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    min: {
      type: String,
      default: '1900-01',
    },
    max: {
      type: String,
      default: '9999-12',
    },
  },
})
</script>
