<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="40"
        />
        <div class="no-wrap">Fuck Printers (:</div>
      </div>
      <v-spacer></v-spacer>
      <v-tabs right>
        <v-tab to="/">Scan/Print</v-tab>
        <v-tab to="/fs">File System</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({}),
  methods: {},
});
</script>
<style scoped>
.no-wrap {
  white-space: nowrap;
  font-weight: 900;
  font-size: 24pt;
}
</style>
