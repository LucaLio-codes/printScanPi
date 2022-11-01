<template>
  <v-row justify="center">
    <img :src="`${baseUrl}/${index}`" alt="" />
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ScanPreviewComponent",
  data() {
    return {
      baseUrl: "http://raspberrypi:8000/fs/scans",
    };
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
});
</script>
