<template>
  <v-row justify="center">
    <img
      v-if="docType == MyDocumentType.PNG"
      :src="`${baseUrl}/${index}`"
      alt=""
    />
    <pdf
      v-else-if="docType == MyDocumentType.PDF"
      :src="`${baseUrl}/${index}`"
    />
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import pdf from "vue-pdf";
import { getScannedItemByIndex } from "@/api/fs";
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
    pdf,
  },
  watch: {
    async index() {
      await getScannedItemByIndex(this.index).then(
        (res) =>
          (this.docType = this.headerFieldToDocumentType(
            res.headers["content-type"]
          )),
        console.log
      );
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
  },
});
</script>
