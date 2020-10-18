<template>
  <b-navbar-brand href="#">
    You Should Draw
    <b-icon icon="brush"></b-icon>

    <my-sidebar
      @backgroundColorChanged="sendBackgroundColor($event)"
      @onImageDownload="sendImageDownload"
    />
  </b-navbar-brand>
</template>

<script>
import mySidebar from "./navbar-sidebar/my-sidebar";

export default {
  name: "myNavbarBrand",
  components: {
    mySidebar,
  },
  methods: {
    sendBackgroundColor(event) {
      this.$emit("backgroundColorChanged", event);
    },
    sendImageDownload() {
      this.$emit("onImageDownload");
    },
  },
};
</script>

<style>
</style>