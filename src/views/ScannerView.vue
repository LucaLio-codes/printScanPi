<template>
  <v-container class="container">
    <v-row>
      <v-col>
        <SubmitScanComponent @index="handleIndex" />
        <PrintComponent v-if="false" />
      </v-col>
      <v-col>
        <PreviewComponent v-if="index" :index="index" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import SubmitScanComponent from "@/components/scan/SubmitScanComponent.vue";
import PreviewComponent from "@/components/fs/PreviewComponent.vue";
import PrintComponent from "@/components/print/PrintComponent.vue";

export default Vue.extend({
  name: "ScannerView",
  components: {
    SubmitScanComponent,
    PreviewComponent,
    PrintComponent,
  },
  data() {
    return {
      index: NaN,
    };
  },
  methods: {
    handleIndex(event: number) {
      this.index = event;
    },
  },
});
</script>
<style scoped>
.container {
  display: flex;
}
</style>
