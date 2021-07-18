import Vue from 'vue'
import { PluginOptions, VuePersistentStorageManager } from 'vue-persistent-storage-manager'

Vue.use<PluginOptions>(VuePersistentStorageManager, { watchStorage: true })
