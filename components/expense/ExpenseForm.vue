<template>
  <form>
    <v-text-field v-model="value" type="number" :label="$t('misc.costs')" class="expense-value-input" />
    <v-menu v-model="monthPickerOpen" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
      <template #activator="{ on, attrs }">
        <v-text-field :value="$d(new Date(monthId), 'no-day')" :label="$t('misc.month')" readonly v-bind="attrs" v-on="on" />
      </template>
      <v-date-picker v-model="monthId" type="month" @input="monthPickerOpen = false" />
    </v-menu>
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
    <v-btn color="primary" :disabled="value < 1" @click="createNewExpense()">{{ $t('actions.create') }}</v-btn>
  </form>
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
    },
  },
})
</script>

<style>
.expense-value-input .v-text-field__details {
  display: none;
}
</style>
