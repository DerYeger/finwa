<template>
  <div>
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
                <v-spacer />
                <v-badge inline :color="item.color" />
              </v-row>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-select>
    <v-btn color="primary" :disabled="value < 1" @click="$emit('confirm', newExpense())">{{ $t('actions.create') }}</v-btn>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { defineComponent } from '@nuxtjs/composition-api'
import { createExpense, Expense } from '~/model/expense'
import { builtinCategories } from '~/model/category'

export default defineComponent({
  data() {
    return {
      value: '0',
      categoryId: builtinCategories.uncategorized.id,
    }
  },
  computed: mapGetters(['categories']),
  methods: {
    newExpense(): Expense {
      return createExpense({ categoryId: this.categoryId, value: parseInt(this.value) })
    },
  },
})
</script>
