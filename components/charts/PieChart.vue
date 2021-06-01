<script lang="ts">
import { Pie, mixins } from 'vue-chartjs'
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'

export default defineComponent({
  extends: Pie,
  mixins: [mixins.reactiveProp],
  mounted() {
    const chartRef = this as unknown as Pie
    chartRef.renderChart(this.chartData as ChartData, { responsive: true })
  },
})
</script>
