<template>
  <v-card>
    <v-card-title>{{ $tc('expense.title', 1) }}</v-card-title>
    <v-card-text>
      <v-text-field v-model="value" type="number" :label="$t('misc.costs')" />
      <month-selection v-model="monthId" />
      <category-selection v-model="categoryId" />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn text color="primary" :disabled="value < 1" @click="createNewExpense()">{{ $t('actions.create') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { defineComponent } from '@nuxtjs/composition-api'
import { builtinCategories } from '~/model/category'
import { currentMonthId } from '~/model/month'

export default defineComponent({
  props: {
    initialMonthId: {
      type: String,
      default: currentMonthId(),
    },
  },
  data() {
    return {
      categoryId: builtinCategories.uncategorized.id,
      monthPickerOpen: false,
      monthId: this.initialMonthId,
      value: '0',
    }
  },
  computed: mapGetters('categories', ['categories']),
  watch: {
    initialMonthId(val: string) {
      this.monthId = val
    },
  },
  methods: {
    createNewExpense() {
      this.$store.dispatch('months/createExpense', {
        monthId: this.monthId,
        data: { categoryId: this.categoryId, value: parseInt(this.value) },
      })
      this.$emit('create')
    },
  },
})
</script>
