<template>
  <v-row>
    <v-row>
      <v-col>
        <v-text-field label="Filename" />
      </v-col>
      <v-col>
        <v-select label="Filetype" :items="items" />
      </v-col>
    </v-row>
    <v-row>
      <v-btn :loading="scanning" @click="scan"> Scan </v-btn>
      <v-btn :loading="scanning" @click="debug"> Debug </v-btn>
    </v-row>
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { scan } from "@/api/print";
import { FileType } from "@/types/api";
export default Vue.extend({
  name: "SubmitScanComponent",
  data() {
    return {
      scanning: false,
    };
  },
  computed: {
    items() {
      return Object.keys(FileType);
    },
  },
  methods: {
    async scan() {
      this.scanning = true;
      await scan("", "").then(
        (res) => {
          this.scanning = false;
          this.$emit("index", res.data.scanIndex);
        },
        (err) => console.error(err)
      );
    },
    debug() {
      this.$emit("index", 5);
    },
  },
});
</script>
