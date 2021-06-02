<template>
  <div>
    <v-text-field v-model="name" type="text" :label="$t('misc.name')" class="name-input" />
    <v-color-picker v-model="color" dot-size="24" hide-inputs class="mb-4" elevation="4" />
    <v-btn color="primary" :disabled="name.length < 4" @click="addCategory(newCategory())">{{ $t('actions.create') }}</v-btn>
  </div>
</template>

<script lang="ts">
import { mapMutations, mapState } from 'vuex'
import { defineComponent } from '@nuxtjs/composition-api'
import { Category, createCategory } from '~/model/category'

export default defineComponent({
  data() {
    return {
      name: '',
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    }
  },
  computed: mapState(['categories']),
  methods: {
    ...mapMutations(['addCategory']),
    newCategory(): Category {
      return createCategory(false, this.name, this.color)
    },
  },
})
</script>

<style scoped>
.name-input {
  max-width: 300px;
}
</style>
