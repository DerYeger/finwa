<template>
  <v-btn
    :aria-label="
      $t(useDarkTheme ? 'actions.use-light-theme' : 'actions.use-dark-theme')
    "
    icon
    @click="toggleTheme()"
  >
    <v-icon v-text="useDarkTheme ? 'mdi-brightness-5' : 'mdi-brightness-2'" />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  computed: {
    useDarkTheme(): boolean {
      return this.$colorMode.value === 'dark' || this.$colorMode.unknown
    },
  },
  watch: {
    useDarkTheme: {
      handler(value: boolean) {
        this.$vuetify.theme.dark = value
      },
      immediate: true,
    },
  },
  methods: {
    toggleTheme() {
      this.$colorMode.preference = this.useDarkTheme ? 'light' : 'dark'
    },
  },
})
</script>
