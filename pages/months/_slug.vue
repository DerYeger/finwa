<template>
  <v-row no-gutters>
    <v-col>
      <month-details :month-id="monthId" />
    </v-col>
    <create-entity-speed-dial :active-month-id="monthId" />
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { currentMonthId, isMonthId } from '~/model/month'
import { routes } from '~/model/routes'

export default defineComponent({
  asyncData({ params }) {
    return {
      slug: params.slug,
      monthId: isMonthId(params.slug) ? params.slug : currentMonthId(),
    }
  },
  head() {
    const title = this.$d(new Date(this.monthId as string), 'no-day') as string
    return {
      title,
    }
  },
  mounted() {
    if (this.slug !== this.monthId) {
      this.$router.push(this.localePath(routes.months.to))
    }
  },
})
</script>
