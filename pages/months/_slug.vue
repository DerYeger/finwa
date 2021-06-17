<template>
  <v-row no-gutters>
    <v-col>
      <month-details :month-id="monthId" />
    </v-col>
    <create-expense-dialog :initial-month-id="monthId" />
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  asyncData({ params }) {
    const slug = params.slug
    return { monthId: slug }
  },
  head() {
    const title = this.$d(new Date(this.monthId as string), 'no-day') as string
    return {
      title,
    }
  },
})
</script>
