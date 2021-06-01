<script lang="ts">
import { Pie, mixins } from 'vue-chartjs'
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'

const { reactiveProp } = mixins

export default defineComponent({
  extends: Pie,
  mixins: [reactiveProp],
  mounted() {
    const chartRef = this as unknown as Pie
    chartRef.renderChart(this.chartData as ChartData, { responsive: true })
  },
})
</script>

<style scoped>
div {
  width: min(99%, 24rem); /* Fixes charts not being responsive */
}
</style>
