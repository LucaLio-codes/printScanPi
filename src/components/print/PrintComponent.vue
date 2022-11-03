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
        chips
        truncate-length="16"
      ></v-file-input>
    </v-row>
    <v-row class="ml-1">
      <v-btn :loading="loading" @click="handleClick"> Print </v-btn>
    </v-row>
    <v-row>
      <v-progress-linear
        v-if="loading"
        :value="(currentPrint * 100) / fileCount"
      />
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
      currentPrint: 0,
    };
  },
  computed: {
    fileCount() {
      return this.$data.files.length;
    },
  },
  methods: {
    async handleClick() {
      this.loading = true;
      this.currentPrint = 0;
      let prommisses: any[] = [];
      this.files.forEach((file) => {
        const job = printFiles(file).then((res) => {
          this.currentPrint++;
          console.log(res);
        });
        prommisses.push(job);
      });
      await Promise.all(prommisses).finally(() => (this.loading = false));
    },
  },
});
</script>
