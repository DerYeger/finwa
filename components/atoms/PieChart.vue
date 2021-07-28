<template>
  <doughnut-chart :chart-data="chartData" :options="options" :width="100" class="responsive-graph" />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { ChartData, ChartOptions } from 'chart.js'
import { DoughnutChart } from 'vue-chart-3'
import { chartColors } from '~/utils/charts'

export default defineComponent({
  components: { DoughnutChart },
  props: {
    chartData: {
      type: Object as PropType<ChartData>,
      required: true,
    },
    cutoutPercentage: {
      type: Number,
      default: 50,
    },
  },
  computed: {
    options(): ChartOptions<'doughnut'> {
      const { fontColor } = chartColors(this.$vuetify)
      return {
        responsive: true,
        maintainAspectRatio: false,
        cutout: `${this.cutoutPercentage}%`,
        plugins: {
          legend: {
            labels: {
              color: fontColor,
            },
          },
          tooltip: {
            displayColors: false,
            enabled: true,
          },
        },
      }
    },
  },
})
</script>
