<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600">
    <template #activator="{ on, attrs }">
      <v-btn color="primary" fab fixed bottom right v-bind="attrs" v-on="on"><v-icon v-text="'mdi-plus'" /></v-btn>
    </template>
    <template #default="dialog">
      <expense-form :initial-month-id="initialMonthId" @create="dialog.value = false" />
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { currentMonthId } from '~/model/month'

export default defineComponent({
  props: {
    initialMonthId: {
      type: String,
      default: currentMonthId(),
    },
  },
})
</script>
