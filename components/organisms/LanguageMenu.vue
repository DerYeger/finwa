<template>
  <v-menu>
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        :aria-label="$t('actions.change-language')"
        v-on="on"
      >
        <v-icon v-text="'mdi-translate'" />
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="locale in locales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      locales: this.$i18n.availableLocales.map((locale) => ({
        code: locale,
        name: this.$t(`locales.${locale}`),
      })),
    }
  },
})
</script>
