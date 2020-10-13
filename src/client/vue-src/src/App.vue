<template>
  <div id="app">
    <navbar
      @clearButtonClicked="sendClearCanvas"
      @brushSizeChanged="sendBrushSize($event)"
      @brushColorChanged="sendBrushColor($event)"
    />
    <my-canvas ref="myCanvas" :brushSize="brushSize" :brushColor="brushColor" />
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
      brushSize: 3,
      brushColor: "#171717",
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
