<template>
  <v-list width="100%" elevation="6" subheader>
    <v-list-item-group>
      <v-subheader>{{ $t('settings.appearance') }}</v-subheader>
      <layout-selection />
      <language-selection />
      <theme-selection />
    </v-list-item-group>
    <v-list-item-group>
      <v-subheader>{{ $t('settings.advanced') }}</v-subheader>
      <v-list-item>
        <v-list-item-content>
          <v-btn color="red" @click="resetData()">{{ $t('actions.reset-data') }}</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapMutations } from 'vuex'
import { routes } from '~/model/routes'

export default defineComponent({
  head() {
    const title = this.$t(routes.settings.title) as string
    return {
      title,
    }
  },
  methods: {
    ...mapMutations(['resetData']),
  },
})
</script>
