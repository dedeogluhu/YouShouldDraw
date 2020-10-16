<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <myNavbarBrand @backgroundColorChanged="sendBackgroundColor($event)" />

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-b-toggle.sidebar variant="dark">
            Side Panel
          </b-nav-item>
          <navbar-color-picker @brushColorChanged="sendBrushColor($event)" />
          <navbar-brush-size @brushSizeChanged="sendBrushSize($event)" />
          <b-nav-item variant="dark" @click="sendBrushColor(backgroundColor)">
            Eraser
          </b-nav-item>
          <b-nav-item id="#clear-canvas" @click="clearCanvas">
            Clear
          </b-nav-item>
        </b-navbar-nav>
        <navbarRightAligned />
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import navbarRightAligned from "./navbar-right-aligned";
import navbarColorPicker from "./navbar-color-picker";
import navbarBrushSize from "./navbar-brush-size";
import myNavbarBrand from "./my-navbar-brand";

export default {
  name: "myNavbar",
  data() {
    return {
      backgroundColor: "#f8f9fa",
    };
  },
  components: {
    navbarRightAligned,
    navbarColorPicker,
    navbarBrushSize,
    myNavbarBrand,
  },
  methods: {
    clearCanvas() {
      this.$emit("clearButtonClicked");
    },
    sendBrushSize(event) {
      this.$emit("brushSizeChanged", event);
    },
    sendBrushColor(event) {
      this.$emit("brushColorChanged", event);
    },
    sendBackgroundColor(event) {
      this.backgroundColor = event;
      this.$emit("backgroundColorChanged", event);
    },
  },
};
</script>

<style>
.my-dropdown {
  width: 350px;
}
</style>
