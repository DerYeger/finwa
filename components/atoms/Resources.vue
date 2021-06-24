<template>
  <v-list-item-group color="info">
    <v-subheader>{{ $t('misc.resources') }}</v-subheader>
    <v-list-item class="text--primary" rel="noopener" href="https://github.com/DerYeger/finwa" target="_blank" input-value="false">
      <v-list-item-icon>
        <v-icon class="text--primary" v-text="'mdi-github'" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          GitHub Repository
          <v-icon small class="text--secondary" v-text="'mdi-open-in-new'" />
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
</template>
