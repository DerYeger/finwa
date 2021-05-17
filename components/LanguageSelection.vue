<template>
  <div style="width: max-content">
    <v-btn-toggle mandatory>
      <v-btn v-for="locale of locales" :key="locale.code" plain x-small :to="switchLocalePath(locale.code)">
        {{ locale.name }}
      </v-btn>
    </v-btn-toggle>
  </div>
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
