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
        <v-checkbox v-model="isRecurring" :label="$t('misc.recurring')" hide-details />
        <v-text-field
          v-model="frequency"
          :rules="frequencyRules"
          :disabled="!isRecurring"
          type="number"
          :label="$t('expense.frequency.title')"
          :hint="$tc('expense.frequency.hint', +frequency)"
          prepend-icon="mdi-repeat"
        />
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
import { Expense, RecurringExpense } from '~/model/expense'

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
      frequency: '1',
      frequencyRules: [
        (v: string) => v.length > 0 || this.$t('validations.required'),
        (v: string) => parseFloat(v) === parseInt(v) || this.$t('validations.integer'),
        (v: string) => parseInt(v) > 0 || this.$t('validations.positive'),
      ],
      isRecurring: false,
      monthId: this.initialMonthId,
      valid: false,
      value: '10',
      valueRules: [
        (v: string) => v.length > 0 || this.$t('validations.required'),
        (v: string) => parseFloat(v) === parseInt(v) || this.$t('validations.integer'),
        (v: string) => parseInt(v) > 0 || this.$t('validations.positive'),
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
      const expenseData: Omit<Expense, 'id'> = { categoryId: this.categoryId, value: parseInt(this.value) }
      if (this.isRecurring) {
        this.createNewRecurringExpense(expenseData)
      } else {
        this.createNewOneTimeExpense(this.monthId, expenseData)
      }
      this.$emit('create')
      this.resetForm()
    },
    createNewOneTimeExpense(monthId: string, expenseData: Omit<Expense, 'id'>) {
      this.$store.dispatch('months/createExpense', {
        monthId,
        expenseData,
      })
    },
    createNewRecurringExpense(expenseData: Omit<Expense, 'id'>) {
      const recurringExpenseData: Omit<RecurringExpense, 'id'> = {
        ...expenseData,
        startingMonthId: this.monthId,
        frequency: parseInt(this.frequency),
      }
      this.$store.dispatch('recurringExpenses/create', recurringExpenseData)
    },
    resetForm() {
      this.categoryId = builtinCategories.food.id
      this.frequency = '1'
      this.isRecurring = false
      this.monthId = this.initialMonthId
      this.value = '10'
      ;(this.$refs.form as any).resetValidation()
    },
  },
})
</script>
