<template>
  <span>{{ $d(new Date(monthId), 'no-day') }}</span>
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
