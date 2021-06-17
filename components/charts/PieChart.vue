<script lang="ts">
import { Pie, mixins } from 'vue-chartjs'
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData, ChartOptions } from 'chart.js'
import { chartColors, pieChartTooltipLabel, pieChartTooltipTitle } from '~/utils/charts'

export default defineComponent({
  extends: Pie,
  mixins: [mixins.reactiveProp],
  props: {
    cutoutPercentage: {
      type: Number,
      default: 50,
    },
  },
  computed: {
    chartOptions(): ChartOptions {
      const { fontColor } = chartColors(this.$vuetify)
      return {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: this.cutoutPercentage,
        legend: {
          labels: {
            fontColor,
          },
        },
        tooltips: {
          displayColors: false,
          enabled: true,
          mode: 'single',
          callbacks: {
            title: pieChartTooltipTitle,
            label: pieChartTooltipLabel,
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
      const chartRef = this as unknown as Pie
      chartRef.renderChart(this.chartData as ChartData, chartOptions)
    },
  },
})
</script>
