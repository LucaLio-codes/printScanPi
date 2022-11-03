<template>
  <v-expansion-panel @change="$emit('change')">
    <v-expansion-panel-header>
      {{ name }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-btn @click="$emit('print')"> Print </v-btn>
      <v-btn @click="$emit('delete')"> Delete </v-btn>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FileComponent.vue",
  props: {
    name: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    printable: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
