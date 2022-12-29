<template>
  <v-row justify="center">
    <img
      v-if="docType == MyDocumentType.PNG"
      :src="`${baseUrl}/${index}`"
      alt=""
    />
    <iframe
      height="3508"
      width="2480"
      v-else
      :src="`${baseUrl}/${index}/${new Date().getMilliseconds()}`"
    />
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { getScannedItemByIndex } from "@/api/fs";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pdf from "pdfvuer";
enum MyDocumentType {
  NONE = "",
  PNG = "image/png",
  PDF = "application/pdf",
  TXT = "text/plain",
}
export default Vue.extend({
  name: "ScanPreviewComponent",
  data() {
    return {
      baseUrl: "http://raspberrypi:8000/fs/files",
      docType: MyDocumentType.NONE,
      MyDocumentType,
    };
  },
  components: {
    // pdf,
  },
  async created() {
    await this.fetchData();
  },
  watch: {
    async index() {
      await this.fetchData();
    },
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    headerFieldToDocumentType(field: string): MyDocumentType {
      const relevant = field.split(";", 1)[0];
      switch (relevant) {
        case MyDocumentType.PDF:
          return MyDocumentType.PDF;
        case MyDocumentType.PNG:
          return MyDocumentType.PNG;
        case MyDocumentType.TXT:
          return MyDocumentType.TXT;
      }
      return MyDocumentType.NONE;
    },
    async fetchData() {
      await getScannedItemByIndex(this.index).then((res) => {
        this.docType = this.headerFieldToDocumentType(
          res.headers["content-type"]
        );
        console.log(res.data);
      }, console.log);
    },
  },
});
</script>
