<template>
  <v-btn icon :aria-label="$t(useDarkTheme ? 'actions.use-light-theme' : 'actions.use-dark-theme')" @click="toggleTheme()">
    <v-icon v-text="useDarkTheme ? 'mdi-brightness-5' : 'mdi-brightness-2'" />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapMutations, mapState } from 'vuex'

export default defineComponent({
  computed: mapState('settings', ['useDarkTheme']),
  watch: {
    useDarkTheme(val) {
      this.$vuetify.theme.dark = val
    },
  },
  mounted() {
    const currentTheme = this.$vuetify.theme.dark
    const newTheme = this.$store.state.settings.useDarkTheme
    if (currentTheme !== newTheme) {
      this.$vuetify.theme.dark = newTheme
    }
  },
  methods: mapMutations('settings', ['toggleTheme']),
})
</script>
