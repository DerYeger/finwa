<template>
  <expense-table :expenses="recurringExpenses" :title="$tc('expense.recurring', 2)" include-recurring-data />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapGetters } from 'vuex'

export default defineComponent({
  computed: mapGetters('recurringExpenses', ['recurringExpenses']),
})
</script>
