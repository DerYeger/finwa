<template>
  <v-form ref="form" v-model="valid">
    <v-card>
      <v-card-title>{{ $tc('expense.title', 1) }}</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="name"
          type="text"
          :counter="20"
          :label="$t('misc.name')"
          :rules="nameRules"
          class="name-input"
          prepend-icon="mdi-pencil"
          required
        />
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
        <v-btn text color="primary" :disabled="!valid" @click="emitExpense()">{{ submitLabel }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { defineComponent } from '@nuxtjs/composition-api'
import { builtinCategories } from '~/model/category'
import { currentMonthId } from '~/model/month'
import { Expense, isOneTimeExpense, isRecurringExpense, OneTimeExpense, RecurringExpense } from '~/model/expense'
import { frequencyRules, nameRules, valueRules } from '~/model/rules'

export default defineComponent({
  props: {
    initialMonthId: {
      type: String,
      default: currentMonthId(),
    },
    initialExpenseData: {
      type: Object as () => OneTimeExpense | RecurringExpense | undefined,
      default: undefined,
    },
    submitLabel: {
      type: String,
      required: true,
    },
  },
  data() {
    const rules = {
      frequencyRules: frequencyRules(this.$i18n),
      nameRules: nameRules(this.$i18n),
      valueRules: valueRules(this.$i18n),
    }
    return {
      categoryId: builtinCategories.food.id,
      expenseId: undefined as string | undefined,
      frequency: '1',
      isRecurring: false,
      isEditing: false,
      monthId: this.initialMonthId,
      name: '',
      value: '10',
      valid: false,
      ...rules,
    }
  },
  computed: mapGetters('categories', ['categories']),
  watch: {
    initialMonthId(val: string) {
      this.monthId = val
    },
    initialExpenseData: {
      immediate: true,
      handler() {
        this.loadInitialExpenseData()
      },
    },
  },
  methods: {
    emitExpense() {
      let expenseData: Omit<Expense, 'id'> | OneTimeExpense | RecurringExpense = {
        name: this.name,
        categoryId: this.categoryId,
        value: parseInt(this.value),
      }
      if (this.isRecurring) {
        expenseData = {
          ...expenseData,
          startingMonthId: this.monthId,
          frequency: parseInt(this.frequency),
        }
      } else {
        expenseData = {
          ...expenseData,
          monthId: this.monthId,
        }
      }
      if (this.expenseId !== undefined) {
        expenseData = {
          ...expenseData,
          id: this.expenseId,
        }
      }
      this.$emit('submit', expenseData)
      this.resetForm()
    },
    loadInitialExpenseData() {
      const expense = this.initialExpenseData
      if (expense === undefined) {
        return
      }
      this.isEditing = true
      this.categoryId = expense.categoryId
      this.expenseId = expense.id
      this.name = expense.name
      this.value = expense.value.toString()
      if (isOneTimeExpense(expense)) {
        this.isRecurring = false
        this.monthId = expense.monthId
      } else if (isRecurringExpense(expense)) {
        this.frequency = expense.frequency.toString()
        this.isRecurring = true
        this.monthId = expense.startingMonthId
      }
    },
    mounted() {
      this.loadInitialExpenseData()
    },
    resetForm() {
      this.categoryId = builtinCategories.food.id
      this.expenseId = undefined
      this.frequency = '1'
      this.isEditing = false
      this.isRecurring = false
      this.monthId = this.initialMonthId
      this.name = ''
      this.value = '10'
      ;(this.$refs.form as any).resetValidation()
      this.loadInitialExpenseData()
    },
  },
})
</script>
