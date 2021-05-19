<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon>mdi-translate</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-btn-toggle dense mandatory rounded>
        <v-btn v-for="locale of locales" :key="locale.code" small depressed :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </v-btn>
      </v-btn-toggle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      locales: this.$i18n.availableLocales.map((locale) => ({
        code: locale,
        name: locale.toUpperCase(),
      })),
    }
  },
})
</script>
