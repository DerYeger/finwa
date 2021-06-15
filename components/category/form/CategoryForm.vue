<template>
  <v-form ref="form" v-model="valid">
    <v-card>
      <v-card-title>{{ $tc('category.title', 1) }}</v-card-title>
      <v-card-text>
        <v-text-field v-model="name" type="text" :counter="20" :label="$t('misc.name')" :rules="nameRules" class="name-input" required />
        <v-color-picker v-model="color" dot-size="24" hide-inputs />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text color="primary" :disabled="!valid" @click="createNewCategory()">{{ $t('actions.create') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      name: '',
      nameRules: [
        (v: string) => v.length > 0 || this.$t('category.validation.name.required'),
        (v: string) => v.length <= 20 || this.$t('category.validation.name.too-long'),
      ],
      valid: false,
    }
  },
  methods: {
    createNewCategory() {
      this.$store.dispatch('categories/create', { name: this.name, color: this.color })
      this.$emit('create')
      this.resetForm()
    },
    resetForm() {
      this.name = ''
      this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
      ;(this.$refs.form as any).resetValidation()
    },
  },
})
</script>
