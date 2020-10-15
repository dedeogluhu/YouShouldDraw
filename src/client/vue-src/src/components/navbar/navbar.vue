<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <navbarBrand />

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <navbar-color-picker @brushColorChanged="sendBrushColor($event)" />
          <navbar-brush-size @brushSizeChanged="sendBrushSize($event)" />
          <b-nav-item id="#clear-canvas" @click="clearCanvas">Clear</b-nav-item>
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
import navbarBrand from "./navbar-brand";

export default {
  name: "navbar",
  components: {
    navbarRightAligned,
    navbarColorPicker,
    navbarBrushSize,
    navbarBrand,
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
  },
};
</script>

<style >
.my-dropdown {
  width: 350px;
}
</style>
