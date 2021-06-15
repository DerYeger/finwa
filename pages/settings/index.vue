<template>
  <v-row dense>
    <v-col>
      <v-card>
        <v-card-title>Settings</v-card-title>
        <v-divider />
        <v-card-subtitle>
          {{ $t('settings.appearance') }}
        </v-card-subtitle>
        <v-card-actions>
          <v-list-item>
            <layout-selection />
          </v-list-item>
        </v-card-actions>
        <v-divider />
        <v-card-subtitle>{{ $t('settings.advanced') }}</v-card-subtitle>
        <v-card-actions>
          <v-list-item>
            <v-btn color="error" @click="reset()">{{ $t('actions.reset') }}</v-btn>
          </v-list-item>
        </v-card-actions>
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
