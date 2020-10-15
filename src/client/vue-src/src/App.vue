<template>
  <div id="app">
    <navbar
      @clearButtonClicked="sendClearCanvas"
      @brushSizeChanged="sendBrushSize($event)"
      @brushColorChanged="sendBrushColor($event)"
      @backgroundColorChanged="sendBackgroundColor($event)"
    />
    <my-canvas
      ref="myCanvas"
      :brushSize="brushSize"
      :brushColor="brushColor"
      :backgroundColor="backgroundColor"
    />
  </div>
</template>

<script>
import navbar from "./components/navbar/navbar";
import myCanvas from "./components/my-canvas";

export default {
  name: "App",
  components: {
    navbar,
    myCanvas,
  },
  data() {
    return {
      brushSize: "3",
      brushColor: "#171717",
      backgroundColor: "#f8f9fa",
    };
  },
  methods: {
    sendClearCanvas() {
      this.$refs.myCanvas.clearCanvas();
    },
    sendBrushColor(event) {
      this.brushColor = event;
    },
    sendBrushSize(event) {
      this.brushSize = event;
    },
    sendBackgroundColor(event) {
      this.$refs.myCanvas.changeBackgroundColor(event);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  overflow: hidden;
}
</style>
