<template>
  <form>
    <v-text-field v-model="name" type="text" :label="$t('misc.name')" class="name-input" />
    <v-color-picker v-model="color" dot-size="24" hide-inputs class="mb-4" elevation="4" />
    <v-btn color="primary" :disabled="name.length < 4" @click="create({ name, color })">{{ $t('actions.create') }}</v-btn>
  </form>
</template>

<script lang="ts">
import { mapActions } from 'vuex'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      name: '',
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    }
  },
  methods: mapActions('categories', ['create']),
})
</script>

<style scoped>
.name-input {
  max-width: 300px;
}
</style>
