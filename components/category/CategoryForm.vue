<template>
  <v-form ref="form" v-model="valid">
    <v-card>
      <v-card-title>{{ $tc('category.title', 1) }}</v-card-title>
      <v-card-text>
        <v-text-field v-model="name" type="text" :counter="20" :label="$t('misc.name')" :rules="nameRules" class="name-input" required />
        <v-color-picker v-model="color" dot-size="24" hide-inputs elevation="2" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text color="primary" :disabled="!valid" @click="emitCategory()">{{ submitLabel }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { Category } from '~/model/category'
import { nameRules } from '~/model/rules'

export default defineComponent({
  props: {
    initialCategoryData: {
      type: Object as () => Category | undefined,
      default: undefined,
    },
    submitLabel: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      categoryId: undefined as string | undefined,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      isBuiltin: false,
      name: '',
      nameRules: nameRules(this.$i18n),
      valid: false,
    }
  },
  watch: {
    initialCategoryData: {
      immediate: true,
      handler() {
        this.loadInitialCategoryData()
      },
    },
  },
  methods: {
    emitCategory() {
      let categoryData: Omit<Category, 'id'> | Category = { name: this.name, isBuiltin: this.isBuiltin, color: this.color }
      if (this.categoryId !== undefined) {
        categoryData = {
          ...categoryData,
          id: this.categoryId,
        }
      }
      this.$emit('submit', categoryData)
      this.resetForm()
    },
    loadInitialCategoryData() {
      const category = this.initialCategoryData
      if (category === undefined) {
        return
      }
      this.categoryId = category.id
      this.color = category.color
      this.isBuiltin = category.isBuiltin
      this.name = this.$i18n.t(category.name)
    },
    resetForm() {
      this.categoryId = undefined
      this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
      this.isBuiltin = false
      this.name = ''
      ;(this.$refs.form as any).resetValidation()
      this.loadInitialCategoryData()
    },
  },
})
</script>
