<template>
  <v-btn
    color="primary"
    :disabled="!$storageManager.isAvailable || $storageManager.isPersistent"
    @click="$storageManager.requestPersistentStorage()"
  >
    {{ $t($storageManager.isPersistent ? 'settings.persistence-granted' : 'settings.request-persistence') }}
  </v-btn>
</template>
