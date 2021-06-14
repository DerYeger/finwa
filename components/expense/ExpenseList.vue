<template>
  <client-only>
    <v-list>
      <v-list-item v-show="mappedExpenses.length === 0">
        <v-list-item-content>
          <v-list-item-title>{{ $t('misc.empty-list') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="element of mappedExpenses" :key="element.expense.id">
        <v-list-item-content>
          <v-list-item-title>{{ $t(element.category.name) }}, {{ element.expense.value }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn color="red" x-small fab depressed @click="$emit('delete-expense', element.expense)">
            <v-icon v-text="'mdi-delete'" />
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapCategoriesToExpenses } from '~/model'
import { Expense } from '~/model/expense'
import { ExpenseMapping } from '~/model/types'

export default defineComponent({
  props: {
    expenses: {
      type: Array as () => Expense[],
      required: true,
    },
  },
  computed: {
    mappedExpenses(): ExpenseMapping[] {
      const categories = this.$store.state.categories
      return mapCategoriesToExpenses(this.expenses, categories)
    },
  },
})
</script>
