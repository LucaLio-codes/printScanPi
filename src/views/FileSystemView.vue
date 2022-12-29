<template>
  <v-container class="container">
    <v-col>
      <ListFilesystemComponent
        :reload="reload"
        @print="handlePrint"
        @delete="handleDelete"
        @change="handleChange"
      />
    </v-col>
    <v-col>
      <PreviewComponent v-if="index > -1" :index="index" />
    </v-col>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import ListFilesystemComponent from "@/components/fs/ListFilesystemComponent.vue";
import PreviewComponent from "@/components/fs/PreviewComponent.vue";
import { print } from "@/api/print";
import { deleteScannedItemByIndex } from "@/api/fs";
export default Vue.extend({
  name: "FileSystemView",
  data() {
    return {
      index: -1,
      reload: false,
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
    async handleDelete(event: number) {
      await deleteScannedItemByIndex(event).then(
        () => (this.reload = !this.reload)
      );
    },
    handleChange(event: number) {
      this.index = event;
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
