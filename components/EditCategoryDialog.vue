<template>
  <v-dialog transition="dialog-bottom-transition" max-width="332" @click:outside="$refs.form.resetForm()">
    <template #activator="{ on, attrs }">
      <v-btn color="primary" icon small v-bind="attrs" :aria-label="$t('actions.edit')" v-on="on">
        <v-icon small v-text="'mdi-pencil'" />
      </v-btn>
    </template>
    <template #default="dialog">
      <category-form
        ref="form"
        :initial-category-data="category"
        :submit-label="$t('actions.update')"
        @submit="updateCategory($event, dialog)"
      />
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Category } from '~/model/category'

export default defineComponent({
  props: {
    category: {
      type: Object as () => Category,
      required: true,
    },
  },
  methods: {
    updateCategory(category: Category, dialog: { value: boolean }) {
      dialog.value = false
      this.$store.commit('categories/add', category)
    },
  },
})
</script>
