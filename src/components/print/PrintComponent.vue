<template>
  <div class="mt-8">
    <v-row class="ml-1">
      <h1>PRINT</h1>
    </v-row>
    <v-row class="ml-1">
      <v-file-input
        v-model="files"
        counter
        multiple
        show-size
        truncate-length="16"
      ></v-file-input>
    </v-row>
    <v-row class="ml-1">
      <v-btn :loading="loading" @click="handleClick"> Print </v-btn>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { printFiles } from "@/api/print";
export default Vue.extend({
  name: "PrintComponent",
  data() {
    return {
      files: [] as File[],
      loading: false,
    };
  },
  methods: {
    async handleClick() {
      this.loading = true;
      console.log(this.files);
      await printFiles(this.files).then((_) => (this.loading = false));
    },
  },
});
</script>
