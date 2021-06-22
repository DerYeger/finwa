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
          :label="$t('misc.value')"
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
          :label="$t('frequency.title')"
          :hint="$tc('frequency.hint', isRecurring ? +frequency : 0)"
          :persistent-hint="true"
          prepend-icon="mdi-repeat"
        />
        <month-selection
          v-model="endingMonthId"
          :allow-no-selection="true"
          :disabled="!isRecurring"
          :min="monthId"
          :label="$t('misc.until')"
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
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { builtinCategories } from '~/model/category'
import { currentMonthId } from '~/model/month'
import { Expense, isOneTimeExpense, isRecurringExpense } from '~/model/expense'
import { frequencyRules, nameRules, valueRules } from '~/model/rules'

export default defineComponent({
  props: {
    initialMonthId: {
      type: String,
      default: currentMonthId(),
    },
    initialExpenseData: {
      type: Object as PropType<Expense | undefined>,
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
      endingMonthId: undefined as string | undefined,
      expenseId: undefined as string | undefined,
      frequency: '1',
      isRecurring: false,
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
    monthId() {
      this.normalizeEndingMonth()
    },
    endingMonthId() {
      this.normalizeEndingMonth()
    },
  },
  methods: {
    emitExpense() {
      let expenseData: Omit<Expense, 'id'> | Expense = {
        name: this.name,
        categoryId: this.categoryId,
        value: parseInt(this.value),
      }
      if (this.isRecurring) {
        expenseData = {
          ...expenseData,
          endingMonthId: this.endingMonthId,
          frequency: parseInt(this.frequency),
          startingMonthId: this.monthId,
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
      this.categoryId = expense.categoryId
      this.expenseId = expense.id
      this.name = expense.name
      this.value = expense.value.toString()
      if (isOneTimeExpense(expense)) {
        this.isRecurring = false
        this.monthId = expense.monthId
      } else if (isRecurringExpense(expense)) {
        this.endingMonthId = expense.endingMonthId
        this.frequency = expense.frequency.toString()
        this.isRecurring = true
        this.monthId = expense.startingMonthId
      }
    },
    resetForm() {
      this.categoryId = builtinCategories.food.id
      this.endingMonthId = undefined
      this.expenseId = undefined
      this.frequency = '1'
      this.isRecurring = false
      this.monthId = this.initialMonthId
      this.name = ''
      this.value = '10'
      ;(this.$refs.form as any).resetValidation()
      this.loadInitialExpenseData()
    },
    normalizeEndingMonth() {
      if (this.endingMonthId === undefined || this.monthId < this.endingMonthId) {
        return
      }
      this.endingMonthId = this.monthId
    },
  },
})
</script>
