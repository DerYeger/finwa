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
    <expense-form-dialog :initial-month-id="selectedMonth" />
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
import { routes } from '~/model/routes'
import { generateMonthChartData } from '~/model'
import { currentMonthId } from '~/model/month'

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
    monthChartData(): ChartData {
      const getters = this.$store.getters
      const months = getters['months/sorted'](12)
      const categories = getters['categories/categories']
      return generateMonthChartData(months, categories, this.$i18n)
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
})
</script>
