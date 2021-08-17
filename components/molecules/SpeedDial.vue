<template>
  <v-speed-dial v-model="model" v-bind="$attrs">
    <slot />
    <template v-if="$slots.activator" #activator>
      <slot name="activator" />
    </template>
  </v-speed-dial>
</template>

<script>
// VSpeedDial wrapper to stop clicks from closing the dial
//
// https://github.com/vuetifyjs/vuetify/issues/10672
// https://github.com/vuetifyjs/vuetify/issues/11096
export default {
  name: 'SpeedDial',
  props: {
    value: Boolean,
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('change', value)
        this.$emit('input', value)
      },
    },
  },
  mounted() {
    // Apply a @click.stop to the .v-speed-dial__list that wraps the default slot
    this.$el
      .querySelector('.v-speed-dial__list')
      .addEventListener('click', (e) => {
        e.stopPropagation()
      })
  },
}
</script>
