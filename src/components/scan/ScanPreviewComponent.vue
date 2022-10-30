<template>
  <img :src="`${baseUrl}/${index}`" alt="" />
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
