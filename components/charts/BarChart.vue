<script lang="ts">
import { Bar, mixins } from 'vue-chartjs'
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'

export default defineComponent({
  extends: Bar,
  mixins: [mixins.reactiveProp],
  mounted() {
    const chartRef = this as unknown as Bar
    chartRef.renderChart(this.chartData as ChartData, {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            distribution: 'linear',
            gridLines: {
              display: false,
            },
          },
        ],
      },
      legend: false,
      tooltips: {
        displayColors: false,
        enabled: true,
        mode: 'single',
        callbacks: {
          label: (tooltipItems) => tooltipItems.yLabel,
        },
      },
    })
  },
})
</script>
