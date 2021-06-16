<template>
  <v-dialog transition="dialog-bottom-transition" max-width="332" @click:outside="$refs.form.resetForm()">
    <template #activator="{ on, attrs }">
      <v-btn color="primary" fab fixed bottom right v-bind="attrs" v-on="on">
        <v-icon v-text="'mdi-plus'" />
      </v-btn>
    </template>
    <template #default="dialog">
      <category-form ref="form" :submit-label="$t('actions.create')" @submit="createNewCategory($event, dialog)" />
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Category } from '~/model/category'

export default defineComponent({
  methods: {
    createNewCategory(category: Omit<Category, 'id'>, dialog: { value: boolean }) {
      dialog.value = false
      this.$store.dispatch('categories/create', category)
    },
  },
})
</script>
