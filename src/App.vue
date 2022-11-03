<template>
  <v-app>
    <v-app-bar app dark>
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
      <div class="button mx-5">
        <v-switch v-model="$vuetify.theme.dark" inset color="black"></v-switch>
      </div>
      <v-tabs fixed-tabs>
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
<style>
.no-wrap {
  white-space: nowrap;
  font-weight: 900;
  font-size: 24pt;
}
.v-toolbar__content {
  justify-content: space-between;
  align-items: center;
}
.button {
  align-self: center;
}
.button > .v-input > .v-input__control {
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
}

html {
  background: black;
}
</style>
