<template>
  <div class="container">
    <v-btn @click="debug"> test </v-btn>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ScannerView",
  methods: {
    debug() {
      console.log("debug");
    },
  },
});
</script>
