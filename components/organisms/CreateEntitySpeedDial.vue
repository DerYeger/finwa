<template>
  <div>
    <speed-dial v-model="open" fixed bottom right>
      <template #activator>
        <v-btn
          v-model="open"
          color="blue darken-2"
          dark
          fab
          :aria-label="$t('misc.new-entity')"
          :title="$t('misc.new-entity')"
        >
          <v-icon v-if="open" v-text="'mdi-close'" />
          <v-icon v-else v-text="'mdi-plus'" />
        </v-btn>
      </template>
      <v-btn
        dark
        fab
        small
        color="green"
        :aria-label="$t('misc.new-income')"
        :title="$t('misc.new-income')"
        @click="incomeDialogOpen = true"
      >
        <v-icon v-text="'mdi-cash'" />
      </v-btn>
      <v-btn
        dark
        fab
        small
        color="red"
        :aria-label="$t('misc.new-expense')"
        :title="$t('misc.new-expense')"
        @click="expenseDialogOpen = true"
      >
        <v-icon v-text="'mdi-currency-usd'" />
      </v-btn>
      <v-btn
        fab
        small
        color="primary"
        :aria-label="$t('misc.new-category')"
        :title="$t('misc.new-category')"
        @click="categoryDialogOpen = true"
      >
        <v-icon v-text="'mdi-format-list-bulleted-type'" />
      </v-btn>
    </speed-dial>
    <create-income-dialog
      v-model="incomeDialogOpen"
      :initial-month-id="activeMonthId"
    />
    <create-expense-dialog
      v-model="expenseDialogOpen"
      :initial-month-id="activeMonthId"
    />
    <create-category-dialog v-model="categoryDialogOpen" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { currentMonthId } from '~/model/month'

export default defineComponent({
  props: {
    activeMonthId: {
      type: String,
      default: currentMonthId(),
    },
  },
  data() {
    return {
      categoryDialogOpen: false,
      expenseDialogOpen: false,
      incomeDialogOpen: false,
      open: false,
    }
  },
})
</script>
