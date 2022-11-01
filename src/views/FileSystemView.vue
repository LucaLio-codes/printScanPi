<template>
  <v-container class="container">
    <v-col>
      <ListFilesystemComponent @print="handlePrint" @change="index = $event" />
    </v-col>
    <v-col>
      <PreviewComponent v-if="index" :index="index" />
    </v-col>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import ListFilesystemComponent from "@/components/fs/ListFilesystemComponent.vue";
import PreviewComponent from "@/components/fs/PreviewComponent.vue";
import { print } from "@/api/print";
export default Vue.extend({
  name: "FileSystemView",
  data() {
    return {
      index: NaN,
    };
  },
  components: {
    ListFilesystemComponent,
    PreviewComponent,
  },
  methods: {
    async handlePrint(event: number) {
      await print(event);
    },
  },
});
</script>
<style scoped>
.container {
  display: flex;
  justify-items: space-between;
}
</style>
