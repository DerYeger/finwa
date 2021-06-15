<template>
  <v-select :value="value" :items="categories" item-value="id" :label="$tc('category.title', 1)" @input="$emit('input', $event)">
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
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  computed: mapGetters('categories', ['categories']),
})
</script>
