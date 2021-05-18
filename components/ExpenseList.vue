<template>
  <client-only>
    <ul v-if="mappedExpenses.length > 0">
      <li v-for="element of mappedExpenses" :key="element.expense.id" class="my-4">
        {{ $t(element.category.name) }}, {{ element.expense.value }}
        <v-btn small @click="removeExpense(element.expense)">Delete</v-btn>
      </li>
    </ul>
    <span v-else>{{ $t('misc.empty-list') }}</span>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapMutations } from 'vuex'
import { mapCategoriesToExpenses, ExpenseMapping } from '~/model'

export default defineComponent({
  computed: {
    mappedExpenses(): ExpenseMapping[] {
      const expenses = this.$store.state.expenses
      const categories = this.$store.state.categories
      return mapCategoriesToExpenses(expenses, categories)
    },
  },
  methods: {
    ...mapMutations(['removeExpense']),
  },
})
</script>
