<template>
  <div>
    <v-expansion-panels v-if="!loading">
      <file-component
        v-for="(item, index) in items"
        v-bind:key="index"
        :printable="printables.has(item)"
        :name="item"
        :index="index"
        @print="$emit('print', index)"
        @change="$emit('change', index)"
      />
    </v-expansion-panels>
    <v-progress-linear v-else indeterminate />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { getAllScannedItems, getPrintables } from "@/api/fs";
import FileComponent from "./FileComponent.vue";
export default Vue.extend({
  name: "ListFilesystemComponent",
  components: {
    FileComponent,
  },
  data() {
    return {
      items: [] as string[],
      printables: new Set<string>(),
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    let promisses = [];
    promisses.push(
      getAllScannedItems().then((item) => (this.items = item.data))
    );
    promisses.push(
      getPrintables().then((item) =>
        item.data.forEach((element: string) => {
          this.printables.add(element);
        })
      )
    );
    await Promise.all(promisses).then((_) => (this.loading = false));
  },
});
</script>
