<template>
  <v-card>
    <v-card-title>
      {{ $tc('category.title', 2) }}
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        :label="$t('actions.search')"
        single-line
        hide-details
        class="mt-0 pt-0"
      />
    </v-card-title>
    <client-only>
      <v-data-table
        :headers="headers"
        :items="categories"
        :items-per-page="15"
        :search="search"
        :footer-props="footerProps"
        :header-props="headerProps"
        :no-data-text="$t('misc.no-data')"
        :no-results-text="$t('misc.no-results')"
      >
        <template #item.name="{ item }">
          {{ $t(item.name) }}
        </template>
        <template #item.color="{ item }">
          <v-badge inline :color="item.color" class="mr-2" />
        </template>
        <template #item.actions="{ item }">
          <edit-category-dialog :category="item" />
          <v-btn
            :disabled="item.isBuiltin"
            small
            icon
            color="error"
            :aria-label="$t('actions.delete')"
            :title="$t('actions.delete')"
            @click="removeCategory(item)"
          >
            <v-icon small v-text="'mdi-delete'" />
          </v-btn>
        </template>
        <template #footer.page-text="{ pageStart, pageStop, itemsLength }">
          {{ $t('misc.table.page-text', [pageStart, pageStop, itemsLength]) }}
        </template>
      </v-data-table>
    </client-only>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { mapActions, mapGetters } from 'vuex'
import { translateAndCompare } from '~/utils'

export default defineComponent({
  data() {
    return {
      footerProps: {
        itemsPerPageAllText: this.$t('misc.table.all'),
        itemsPerPageText: this.$t('misc.table.items-per-page'),
      },
      headerProps: {
        sortByText: this.$t('misc.table.sort-by'),
      },
      headers: [
        {
          text: this.$t('misc.color'),
          value: 'color',
          sortable: false,
          filterable: false,
        },
        {
          text: this.$t('misc.name'),
          value: 'name',
          sort: (a: string, b: string) =>
            translateAndCompare(a, b, (it) => this.$t(it)),
        },
        {
          text: this.$t('misc.actions'),
          value: 'actions',
          sortable: false,
          filterable: false,
        },
      ],
      search: '',
    }
  },
  computed: mapGetters('categories', ['categories']),
  methods: mapActions(['removeCategory']),
})
</script>
