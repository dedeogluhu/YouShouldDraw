<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" id="my-navbar">
      <myNavbarBrand @backgroundColorChanged="sendBackgroundColor($event)" />

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-b-toggle.sidebar variant="dark">
            <b-icon icon="gear"></b-icon>
            Side Panel
          </b-nav-item>

          <b-nav-item block variant="dark" @click="downloadImage('jpg')">
            <b-icon icon="download"></b-icon>
            Download
          </b-nav-item>

          <navbar-color-picker
            v-if="!active"
            @brushColorChanged="sendBrushColor($event)"
          />
          <b-nav-item-dropdown v-else text="Color Picker" disabled>
          </b-nav-item-dropdown>

          <navbar-brush-size @brushSizeChanged="sendBrushSize($event)" />

          <b-nav-item
            variant="dark"
            :class="active"
            @click="sendBrushColorEraser"
          >
            <b-icon icon="droplet" v-if="!active"></b-icon>
            <b-icon icon="droplet-fill" v-else></b-icon>

            Eraser
          </b-nav-item>

          <b-nav-item id="#clear-canvas" @click="clearCanvas">
            <b-icon icon="x-circle"></b-icon>
            Clear
          </b-nav-item>
          <!--b-button variant="dark">
            <b-icon icon="arrow-counterclockwise" class="text-light">
              Undo
            </b-icon>
          </b-button>
          <b-button variant="dark">
            <b-icon icon="arrow-clockwise" class="text-light"> Redo </b-icon>
          </b-button-->
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
import myNavbarBrand from "./navbar-brand";

export default {
  name: "myNavbar",
  data() {
    return {
      brushColor: "#171717",
      backgroundColor: "#f8f9fa",
      isEraser: false,
      active: "",
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
      this.brushColor = event;
      this.$emit("brushColorChanged", event);
    },
    sendBackgroundColor(event) {
      this.backgroundColor = event;
      this.$emit("backgroundColorChanged", event);
    },
    sendBrushColorEraser() {
      if (this.isEraser === false) {
        this.$emit("brushColorChanged", this.backgroundColor);
        this.isEraser = true;
        this.active = "active";
      } else {
        this.$emit("brushColorChanged", this.brushColor);
        this.isEraser = false;
        this.active = "";
      }
    },
    downloadImage() {
      this.$emit("onImageDownload");
    },
  },
};
</script>

<style>
.my-dropdown {
  width: 350px;
}
</style>
