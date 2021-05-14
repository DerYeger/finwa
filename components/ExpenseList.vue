<template>
  <client-only>
    <ul v-if="expenses.length > 0">
      <li v-for="(expense, index) of expenses" :key="index" class="my-4">
        {{ $t(expense.categoryName) }}, {{ expense.value }}
        <v-btn small @click="removeExpense(expense)">Delete</v-btn>
      </li>
    </ul>
    <span v-else>{{ $t('misc.empty-list') }}</span>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapMutations, mapState } from 'vuex'

export default defineComponent({
  computed: {
    ...mapState(['expenses']),
  },
  methods: {
    ...mapMutations(['removeExpense']),
  },
})
</script>
