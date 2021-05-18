<template>
  <v-row class="responsive-list expense-form">
    <v-text-field v-model="value" type="number" :label="$t('misc.costs')" />
    <v-select v-model="categoryId" :items="categories" item-value="id" :label="$tc('domain.category.title', 1)" dense>
      <template #selection="{ item }">
        {{ $t(item.name) }}
      </template>
      <template #item="{ item, attrs, on }">
        <v-list-item v-bind="attrs" v-on="on">
          <v-list-item-content>
            <v-list-item-title>
              <v-row no-gutters align="center">
                <span>{{ $t(item.name) }}</span>
                <v-spacer></v-spacer>
                <v-chip :color="item.color" small />
              </v-row>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-select>
    <v-btn color="primary" :disabled="value < 1" @click="addExpense(createExpense())">{{ $t('actions.create-expense') }}</v-btn>
  </v-row>
</template>

<script lang="ts">
import { mapMutations, mapState } from 'vuex'
import { defineComponent } from '@nuxtjs/composition-api'
import { Expense } from '~/model/expense'
import { uuid } from '~/utils'
import { uncategorized } from '~/model/category'

export default defineComponent({
  data() {
    return {
      value: '0',
      categoryId: uncategorized.id,
    }
  },
  computed: {
    ...mapState(['categories']),
  },
  methods: {
    ...mapMutations(['addExpense']),
    createExpense(): Expense {
      return {
        id: uuid(),
        categoryId: this.categoryId,
        value: parseInt(this.value),
      }
    },
  },
})
</script>

<style scoped>
.expense-form {
  align-items: center;
}
</style>
