<template>
  <v-dialog
    :value="value"
    transition="dialog-bottom-transition"
    max-width="332"
    @input="$emit('input', $event)"
    @click:outside="$refs.form.resetForm()"
  >
    <template #default="dialog">
      <category-form ref="form" :submit-label="$t('actions.create')" @submit="createNewCategory($event, dialog)" />
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Category } from '~/model/category'

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    createNewCategory(category: Omit<Category, 'id'>, dialog: { value: boolean }) {
      dialog.value = false
      this.$store.dispatch('categories/create', category)
    },
  },
})
</script>
