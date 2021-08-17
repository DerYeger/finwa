<template>
  <v-row dense>
    <v-col>
      <v-card>
        <v-card-title>Settings</v-card-title>
        <v-card-subtitle>
          {{ $t('settings.appearance') }}
        </v-card-subtitle>
        <v-card-text>
          <v-list-item>
            <layout-selection />
          </v-list-item>
        </v-card-text>
        <v-card-subtitle>{{ $t('settings.storage') }}</v-card-subtitle>
        <v-card-text>
          <v-list-item>
            <persistent-storage-button />
          </v-list-item>
          <v-list-item>
            {{ ($storageEstimate.usage / 1000000).toFixed(2) }}MB /
            {{ ($storageEstimate.quota / 1000000).toFixed(0) }}MB
          </v-list-item>
          <v-list-item>
            <v-btn color="error" @click="reset()">{{
              $t('actions.reset')
            }}</v-btn>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapActions } from 'vuex'
import { routes } from '~/model/routes'

export default defineComponent({
  head() {
    const title = this.$t(routes.settings.title) as string
    return {
      title,
    }
  },
  methods: mapActions(['reset']),
})
</script>
