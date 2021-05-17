<template>
  <v-btn-toggle :value="layout" borderless dense mandatory>
    <v-btn v-for="layout of layoutOptions" :key="layout" @click="setLayout(layout)">{{ $t(`layout.${layout}`) }}</v-btn>
  </v-btn-toggle>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapMutations, mapState } from 'vuex'
import { layouts } from '~/model/layout'

export default defineComponent({
  data() {
    return {
      layoutOptions: layouts,
    }
  },
  computed: {
    ...mapState(['layout']),
  },
  methods: {
    ...mapMutations(['setLayout']),
  },
})
</script>
