<template>
  <div class="container">
    <v-btn @click="debug"> test </v-btn>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import scan from "@/api/print";
export default Vue.extend({
  name: "ScannerView",
  methods: {
    async debug() {
      await scan(undefined, undefined).then();
    },
  },
});
</script>
