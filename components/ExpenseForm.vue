<template>
  <v-row class="expense-form">
    <v-text-field v-model="value" type="number" :label="$t('misc.costs')" />
    <v-btn-toggle v-model="categoryIndex" borderless mandatory>
      <v-btn v-for="(category, index) of categories" :key="index">
        {{ $t(category.name) }}
      </v-btn>
    </v-btn-toggle>
    <v-btn :disabled="value < 1" @click="addExpense(createExpense())">{{ $t('actions.create-expense') }}</v-btn>
  </v-row>
</template>

<script lang="ts">
import { mapMutations, mapState } from 'vuex'
import { defineComponent } from '@nuxtjs/composition-api'
import { Expense } from '~/store'

export default defineComponent({
  data() {
    return {
      value: '0',
      categoryIndex: 0,
    }
  },
  computed: {
    ...mapState(['categories']),
    categoryName(): string {
      return this.$store.state.categories[this.categoryIndex].name
    },
  },
  methods: {
    ...mapMutations(['addExpense']),
    createExpense(): Expense {
      return {
        categoryName: this.categoryName,
        value: parseInt(this.value),
      }
    },
  },
})
</script>

<style scoped>
.expense-form {
  align-items: center;
  display: flex;
  flex-direction: row;
}

.expense-form > * + * {
  margin-left: 1rem;
}
</style>
