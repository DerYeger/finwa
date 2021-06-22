<template>
  <v-speed-dial v-model="open" fixed bottom right>
    <template #activator>
      <v-btn v-model="open" color="blue darken-2" dark fab :aria-label="$t('misc.new-entity')" :title="$t('misc.new-entity')">
        <v-icon v-if="open" v-text="'mdi-close'" />
        <v-icon v-else v-text="'mdi-plus'" />
      </v-btn>
    </template>
    <create-category-dialog />
    <create-expense-dialog :initial-month-id="activeMonthId" />
    <create-income-dialog :initial-month-id="activeMonthId" />
  </v-speed-dial>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { currentMonthId } from '~/model/month'

export default defineComponent({
  props: {
    activeMonthId: {
      type: String,
      default: currentMonthId(),
    },
  },
  data() {
    return {
      open: false,
    }
  },
})
</script>
