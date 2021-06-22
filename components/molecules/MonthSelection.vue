<template>
  <v-menu v-model="monthPickerOpen" :close-on-content-click="false" transition="scale-transition" min-width="auto">
    <template #activator="{ on, attrs }">
      <v-text-field
        :value="value !== undefined ? $d(new Date(value), 'no-day') : undefined"
        :label="label !== undefined ? label : $tc('month.title', 1)"
        :disabled="disabled"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        :clearable="allowNoSelection"
        @click:clear="$emit('input', undefined)"
        v-on="on"
      />
    </template>
    <month-picker :value="value" :min="min" :max="max" @input="updateMonthId" />
  </v-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
    allowNoSelection: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    min: {
      type: String,
      default: '1900-01',
    },
    max: {
      type: String,
      default: '9999-12',
    },
    label: {
      type: String as PropType<string | undefined>,
      default: undefined,
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
