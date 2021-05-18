<template>
  <v-col>
    <v-card>
      <v-card-title>{{ $t('layout.title') }}</v-card-title>
      <v-card-actions>
        <layout-selection />
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title>{{ $t('settings.advanced') }}</v-card-title>
      <v-card-actions>
        <v-btn @click="resetData()">{{ $t('actions.reset-data') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapMutations } from 'vuex'

export default defineComponent({
  methods: {
    ...mapMutations(['resetData']),
  },
})
</script>
