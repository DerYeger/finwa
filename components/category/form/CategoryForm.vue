<template>
  <v-card>
    <v-card-title>{{ $tc('category.title', 1) }}</v-card-title>
    <v-card-text>
      <v-text-field v-model="name" type="text" :label="$t('misc.name')" class="name-input" />
      <v-color-picker v-model="color" dot-size="24" hide-inputs />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn text color="primary" :disabled="name.length < 4" @click="createNewCategory()">{{ $t('actions.create') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      name: '',
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    }
  },
  methods: {
    createNewCategory() {
      this.$store.dispatch('categories/create', { name: this.name, color: this.color })
      this.$emit('create')
    },
  },
})
</script>

<style scoped>
.name-input {
  max-width: 300px;
}
</style>
