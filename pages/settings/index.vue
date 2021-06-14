<template>
  <v-row>
    <v-col>
      <v-list width="100%" elevation="6" subheader>
        <v-list-item-group>
          <v-subheader>{{ $t('settings.appearance') }}</v-subheader>
          <layout-selection />
        </v-list-item-group>
        <v-list-item-group>
          <v-subheader>{{ $t('settings.advanced') }}</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-btn color="red" @click="reset()">{{ $t('actions.reset') }}</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
