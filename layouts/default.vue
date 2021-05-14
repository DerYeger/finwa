<template>
  <v-app>
    <v-navigation-drawer v-model="drawerOpen" fixed app :expand-on-hover="$vuetify.breakpoint.lgAndUp">
      <app-navigation />
    </v-navigation-drawer>
    <app-header :drawer-open="drawerOpen" :on-nav-icon-clicked="toggleDrawer" />
    <v-main>
      <v-container class="page-container">
        <nuxt />
      </v-container>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      drawerOpen: false,
    }
  },
  head() {
    const path = this.$route.path
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      link: [
        {
          rel: 'canonical',
          href: `https://finwa.yeger.eu${path.length > 1 ? path : ''}/`.replace('//', '/'),
        },
      ],
    }
  },
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen
    },
  },
})
</script>
