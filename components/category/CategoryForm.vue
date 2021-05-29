<template>
  <div>
    <v-text-field v-model="name" type="text" :label="$t('misc.name')" class="name-input" />
    <v-color-picker v-model="color" dot-size="24" hide-inputs class="mb-4" elevation="4" />
    <v-btn color="primary" :disabled="name.length < 4" @click="addCategory(createCategory())">{{ $t('actions.create') }}</v-btn>
  </div>
</template>

<script lang="ts">
import { mapMutations, mapState } from 'vuex'
import { defineComponent } from '@nuxtjs/composition-api'
import { uuid } from '~/utils'
import { Category } from '~/model/category'

export default defineComponent({
  data() {
    return {
      name: '',
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    }
  },
  computed: {
    ...mapState(['categories']),
  },
  methods: {
    ...mapMutations(['addCategory']),
    createCategory(): Category {
      return {
        id: uuid(),
        isBuiltin: false,
        name: this.name,
        color: this.color,
      }
    },
  },
})
</script>

<style scoped>
.name-input {
  max-width: 300px;
}
</style>
