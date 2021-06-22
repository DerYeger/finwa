<template>
  <v-app-bar app dark dense fixed color="primary" :clipped-left="true">
    <v-app-bar-nav-icon
      v-show="$vuetify.breakpoint.mdAndDown"
      :aria-label="$t(value ? 'actions.close-menu' : 'actions.open-menu')"
      class="ml-n4"
      @click="$emit('input', !value)"
    />
    <logo :class="{ 'ml-n2': $vuetify.breakpoint.lgAndUp }" />
    <v-spacer />
    <v-divider vertical />
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
