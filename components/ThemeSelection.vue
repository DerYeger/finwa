<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-btn-toggle v-model="useDarkTheme" dense mandatory rounded>
        <v-btn small :aria-label="$t('actions.use-light-theme')" :value="false">
          <v-icon small v-text="'mdi-brightness-5'" />
        </v-btn>
        <v-btn small :aria-label="$t('actions.use-dark-theme')" :value="true">
          <v-icon small v-text="'mdi-brightness-2'" />
        </v-btn>
      </v-btn-toggle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  computed: {
    useDarkTheme: {
      get(): boolean {
        return this.$store.state.useDarkTheme
      },
      set(value: boolean) {
        this.$store.commit('setUseDarkTheme', value)
      },
    },
  },
  watch: {
    useDarkTheme(val) {
      this.$vuetify.theme.dark = val
    },
  },
})
</script>
