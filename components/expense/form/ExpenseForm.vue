<template>
  <v-form ref="form" v-model="valid">
    <v-card>
      <v-card-title>{{ $tc('expense.title', 1) }}</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="value"
          :rules="valueRules"
          type="number"
          :label="$t('misc.costs')"
          prepend-icon="mdi-currency-usd"
          required
        />
        <month-selection v-model="monthId" />
        <category-selection v-model="categoryId" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text color="primary" :disabled="!valid" @click="createNewExpense()">{{ $t('actions.create') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { defineComponent } from '@nuxtjs/composition-api'
import { builtinCategories } from '~/model/category'
import { currentMonthId } from '~/model/month'

export default defineComponent({
  props: {
    initialMonthId: {
      type: String,
      default: currentMonthId(),
    },
  },
  data() {
    return {
      categoryId: builtinCategories.food.id,
      monthId: this.initialMonthId,
      valid: false,
      value: '10',
      valueRules: [
        (v: string) => parseFloat(v) === parseInt(v) || this.$t('expense.validation.cost.integer'),
        (v: string) => parseFloat(v) > 0 || this.$t('expense.validation.cost.positive'),
      ],
    }
  },
  computed: mapGetters('categories', ['categories']),
  watch: {
    initialMonthId(val: string) {
      this.monthId = val
    },
  },
  methods: {
    createNewExpense() {
      this.$store.dispatch('months/createExpense', {
        monthId: this.monthId,
        data: { categoryId: this.categoryId, value: parseInt(this.value) },
      })
      this.$emit('create')
      this.resetForm()
    },
    resetForm() {
      this.categoryId = builtinCategories.food.id
      this.monthId = this.initialMonthId
      this.value = '10'
      ;(this.$refs.form as any).resetValidation()
    },
  },
})
</script>
