<template>
  <v-app-bar fixed app dense>
    <v-app-bar-nav-icon
      v-show="$vuetify.breakpoint.mdAndDown"
      :aria-label="$t(drawerOpen ? 'actions.close-menu' : 'actions.open-menu')"
      style="margin-left: -16px"
      @click.stop="onNavIconClicked()"
    />
    <v-spacer />
    <logo />
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    drawerOpen: {
      type: Boolean,
      required: true,
    },
    onNavIconClicked: {
      type: Function,
      required: true,
    },
  },
})
</script>
