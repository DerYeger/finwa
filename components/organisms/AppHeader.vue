<template>
  <v-app-bar :clipped-left="true" app color="primary" dark dense fixed>
    <v-app-bar-nav-icon
      v-show="$vuetify.breakpoint.mdAndDown"
      :aria-label="$t(value ? 'actions.close-menu' : 'actions.open-menu')"
      class="ml-n4"
      @click="$emit('input', !value)"
    />
    <logo class="ml-lg-n2" />
    <v-spacer />
    <theme-toggle />
    <language-menu />
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
})
</script>
