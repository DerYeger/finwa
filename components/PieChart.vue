<script lang="ts">
import { Pie, mixins } from 'vue-chartjs'
import { defineComponent } from '@nuxtjs/composition-api'
import { ChartData } from 'chart.js'
const { reactiveProp } = mixins

export default defineComponent({
  extends: Pie,
  mixins: [reactiveProp],
  mounted() {
    const charRef = this as unknown as Pie
    charRef.renderChart(this.chartData as ChartData, { responsive: true })
  },
})
</script>
