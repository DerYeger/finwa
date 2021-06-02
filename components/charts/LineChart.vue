<script lang="ts">
import { Line, mixins } from 'vue-chartjs'
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData, ChartOptions } from 'chart.js'
import { chartColors, lineChartTooltipLabel, lineChartTooltipTitle } from '~/utils/charts'

export default defineComponent({
  extends: Line,
  mixins: [mixins.reactiveProp],
  computed: {
    chartOptions(): ChartOptions {
      const { fontColor, gridColor } = chartColors(this.$vuetify)
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: gridColor,
                zeroLineColor: gridColor,
              },
              ticks: {
                beginAtZero: true,
                fontColor,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          displayColors: false,
          enabled: true,
          mode: 'single',
          callbacks: {
            title: lineChartTooltipTitle,
            label: lineChartTooltipLabel,
          },
        },
      }
    },
  },
  watch: {
    chartOptions(chartOptions: ChartOptions) {
      this.render(chartOptions)
    },
  },
  mounted() {
    this.render(this.chartOptions)
  },
  methods: {
    render(chartOptions: ChartOptions) {
      const chartRef = this as unknown as Line
      chartRef.renderChart(this.chartData as ChartData, chartOptions)
    },
  },
})
</script>
