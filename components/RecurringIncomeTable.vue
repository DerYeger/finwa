<template>
  <income-table :incomes="recurringIncomes" :title="$tc('income.recurring', 2)" include-recurring-data />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapGetters } from 'vuex'

export default defineComponent({
  computed: mapGetters('recurringIncomes', ['recurringIncomes']),
})
</script>
