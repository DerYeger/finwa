<template>
  <v-menu v-model="monthPickerOpen" :close-on-content-click="false" transition="scale-transition" min-width="auto">
    <template #activator="{ on, attrs }">
      <v-text-field
        :value="$d(new Date(value), 'no-day')"
        :label="$tc('month.title', 1)"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      />
    </template>
    <month-picker :value="value" @input="updateMonthId" />
  </v-menu>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      monthPickerOpen: false,
    }
  },
  methods: {
    updateMonthId(newMonthId: string) {
      this.$emit('input', newMonthId)
      this.monthPickerOpen = false
    },
  },
})
</script>
