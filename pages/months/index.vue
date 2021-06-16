<template>
  <v-row dense>
    <v-col cols="12">
      <v-card>
        <v-row>
          <v-col>
            <line-chart :chart-data="monthChartData" :styles="lineChartStyles" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col>
      <month-picker v-model="selectedMonth" full-width />
    </v-col>
    <v-col sm="12" md="9">
      <month-overview :month-id="selectedMonth" />
    </v-col>
    <v-col cols="12">
      <expense-list :expenses="recurringExpenses" @delete-expense="remove($event)" />
    </v-col>
    <create-expense-dialog :initial-month-id="selectedMonth" />
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { mapMutations } from 'vuex'
import { routes } from '~/model/routes'
import { generateMonthChartData } from '~/model'
import { currentMonthId } from '~/model/month'
import { RecurringExpense } from '~/model/expense'
import { toArray } from '~/utils/collections'

export default defineComponent({
  data() {
    return {
      selectedMonth: currentMonthId(),
    }
  },
  head() {
    const title = (this.$t as Function)(routes.months.title)
    return {
      title,
    }
  },
  computed: {
    recurringExpenses(): RecurringExpense[] {
      return toArray(this.$store.getters['recurringExpenses/recurringExpenses'])
    },
    monthChartData(): ChartData {
      const getters = this.$store.getters
      const months = getters['months/sorted'](12)
      const recurringExpenses = getters['recurringExpenses/recurringExpenses']
      const categories = getters['categories/categories']
      return generateMonthChartData(months, categories, recurringExpenses, this.$i18n)
    },
    lineChartStyles(): any {
      return {
        margin: 'auto',
        position: 'relative',
        width: `99%`,
        height: '24rem',
      }
    },
  },
  methods: mapMutations('recurringExpenses', ['remove']),
})
</script>
