<template>
  <div class="mb-5">
    <v-row class="ml-1"> <h1>SCAN</h1> </v-row>
    <v-row class="ml-1">
      <v-col>
        <v-text-field label="Filename" />
      </v-col>
      <v-col>
        <v-select style="width: 40%" label="Filetype" :items="items" />
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon color="primary" dark v-bind="attrs" v-on="on"> ? </v-icon>
          </template>
          <span>Name und Filetype optional</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="ml-1">
      <v-btn :loading="scanning" @click="scan"> Scan </v-btn>
      <v-btn :loading="scanning" @click="debug"> Debug </v-btn>
    </v-row>
  </div>
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
