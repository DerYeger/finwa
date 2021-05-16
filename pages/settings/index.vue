<template>
  <div>
    <v-btn @click="setLayout('compact')">Compact</v-btn>
    <v-btn @click="setLayout('default')">Default</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapMutations, mapState } from 'vuex'

export default defineComponent({
  computed: {
    ...mapState(['layout']),
  },
  methods: {
    ...mapMutations(['setLayout']),
  },
})
</script>
