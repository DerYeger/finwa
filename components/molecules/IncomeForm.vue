<template>
  <v-form ref="form" v-model="valid">
    <v-card>
      <v-card-title>{{ $tc('income.title', 1) }}</v-card-title>
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
        <v-text-field v-model="value" :rules="valueRules" type="number" :label="$t('misc.value')" prepend-icon="mdi-cash" required />
        <month-selection v-model="monthId" />
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
        <v-btn text color="primary" :disabled="!valid" @click="emitIncome()">{{ submitLabel }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { currentMonthId } from '~/model/month'
import { frequencyRules, nameRules, valueRules } from '~/model/rules'
import { Income, isOneTimeIncome, isRecurringIncome } from '~/model/income'

export default defineComponent({
  props: {
    initialMonthId: {
      type: String,
      default: currentMonthId(),
    },
    initialIncomeData: {
      type: Object as PropType<Income | undefined>,
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
      endingMonthId: undefined as string | undefined,
      frequency: '1',
      incomeId: undefined as string | undefined,
      isRecurring: false,
      monthId: this.initialMonthId,
      name: '',
      value: '10',
      valid: false,
      ...rules,
    }
  },
  watch: {
    initialMonthId(val: string) {
      this.monthId = val
    },
    initialIncomeData: {
      immediate: true,
      handler() {
        this.loadInitialIncomeData()
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
    emitIncome() {
      let incomeData: Omit<Income, 'id'> | Income = {
        name: this.name,
        value: parseInt(this.value),
      }
      if (this.isRecurring) {
        incomeData = {
          ...incomeData,
          endingMonthId: this.endingMonthId,
          frequency: parseInt(this.frequency),
          startingMonthId: this.monthId,
        }
      } else {
        incomeData = {
          ...incomeData,
          monthId: this.monthId,
        }
      }
      if (this.incomeId !== undefined) {
        incomeData = {
          ...incomeData,
          id: this.incomeId,
        }
      }
      this.$emit('submit', incomeData)
      this.resetForm()
    },
    loadInitialIncomeData() {
      const income = this.initialIncomeData
      if (income === undefined) {
        return
      }
      this.incomeId = income.id
      this.name = income.name
      this.value = income.value.toString()
      if (isOneTimeIncome(income)) {
        this.isRecurring = false
        this.monthId = income.monthId
      } else if (isRecurringIncome(income)) {
        this.endingMonthId = income.endingMonthId
        this.frequency = income.frequency.toString()
        this.isRecurring = true
        this.monthId = income.startingMonthId
      }
    },
    resetForm() {
      this.incomeId = undefined
      this.endingMonthId = undefined
      this.frequency = '1'
      this.isRecurring = false
      this.monthId = this.initialMonthId
      this.name = ''
      this.value = '10'
      ;(this.$refs.form as any).resetValidation()
      this.loadInitialIncomeData()
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
