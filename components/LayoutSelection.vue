<template>
  <v-list-item>
    <v-list-item-content>
      <v-select v-model="layout" :items="layoutOptions" :label="$t('layout.title')" dense>
        <template #selection="{ item }">
          {{ $t(`layout.${item}`) }}
        </template>
        <template #item="{ item, attrs, on }">
          <v-list-item v-bind="attrs" v-on="on">
            <v-list-item-content>
              <v-list-item-title>
                {{ $t(`layout.${item}`) }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-select>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Layout, layouts } from '~/model/layout'

export default defineComponent({
  data() {
    return {
      layoutOptions: layouts,
    }
  },
  computed: {
    layout: {
      get(): Layout {
        return this.$store.state.settings.layout
      },
      set(value: string) {
        this.$store.commit('settings/setLayout', value)
      },
    },
  },
})
</script>
