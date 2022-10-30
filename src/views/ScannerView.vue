<template>
  <v-container class="container">
    <v-col>
      <SubmitScanComponent @index="handleIndex" />
    </v-col>
    <v-col>
      <ScanPreviewComponent v-if="index" :index="index" />
    </v-col>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import SubmitScanComponent from "@/components/scan/SubmitScanComponent.vue";
import ScanPreviewComponent from "@/components/scan/ScanPreviewComponent.vue";
export default Vue.extend({
  name: "ScannerView",
  components: {
    SubmitScanComponent,
    ScanPreviewComponent,
  },
  data() {
    return {
      index: NaN,
    };
  },
  methods: {
    handleIndex(event: any) {
      this.index = event;
    },
  },
});
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
}
</style>
