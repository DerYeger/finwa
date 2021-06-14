<template>
  <client-only>
    <v-list>
      <v-list-item v-show="categories.length === 0">
        <v-list-item-content>
          <v-list-item-title>{{ $t('misc.empty-list') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="category of categories" :key="category.id">
        <v-list-item-icon>
          <v-badge inline :color="category.color" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ $t(category.name) }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="!category.isBuiltin">
          <v-btn color="red" x-small fab depressed @click="removeCategory(category)">
            <v-icon v-text="'mdi-delete'" />
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
  computed: mapGetters(['categories']),
  methods: mapMutations(['removeCategory']),
})
</script>
