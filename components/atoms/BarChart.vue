<template>
  <bar-chart
    :chart-data="chartData"
    :options="options"
    :width="100"
    class="responsive-graph"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { ChartData, ChartOptions } from 'chart.js'
import { BarChart } from 'vue-chart-3'
import { chartColors } from '~/utils/charts'

export default defineComponent({
  components: { BarChart },
  props: {
    chartData: {
      type: Object as PropType<ChartData>,
      required: true,
    },
  },
  computed: {
    options(): ChartOptions<'bar'> {
      const { fontColor, gridColor } = chartColors(this.$vuetify)
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
              borderColor: 'rgb(0, 0, 0, 0)',
            },
            ticks: {
              color: fontColor,
            },
          },
          y: {
            grace: '10%',
            grid: {
              borderColor: gridColor,
              color: gridColor,
            },
            ticks: {
              color: fontColor,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            displayColors: false,
            enabled: true,
            mode: 'index',
            callbacks: {
              title(): string {
                return ''
              },
              label(): string {
                const data = this.dataPoints[0]
                return `${data.label}: ${data.formattedValue}`
              },
            },
          },
        },
      }
    },
  },
})
</script>
