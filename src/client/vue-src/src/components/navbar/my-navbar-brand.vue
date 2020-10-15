<template>
  <b-navbar-brand href="#">
    You Should Draw
    <b-icon icon="brush"></b-icon>

    <my-sidebar @backgroundColorChanged="sendBackgroundColor($event)" />
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
  },
};
</script>

<style>
</style>