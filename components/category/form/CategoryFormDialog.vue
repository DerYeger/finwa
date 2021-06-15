<template>
  <v-dialog transition="dialog-bottom-transition" max-width="332" @click:outside="$refs.form.resetForm()">
    <template #activator="{ on, attrs }">
      <v-btn color="primary" fab fixed bottom right v-bind="attrs" v-on="on"><v-icon v-text="'mdi-plus'" /></v-btn>
    </template>
    <template #default="dialog">
      <category-form ref="form" @create="dialog.value = false" />
    </template>
  </v-dialog>
</template>
