<template>
  <div id="app">
    <h1>{{ message }} </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ExtendedVue } from 'vue/types/vue'

const App: ExtendedVue<Vue, {
    message: string;
}, unknown, unknown, Record<never, unknown>> = Vue.extend({
  data: () => ({
    message: 'Hello, World!'
  })
})
export default App
</script>

<style>
</style>
