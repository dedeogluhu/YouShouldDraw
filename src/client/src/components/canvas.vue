<template>
  <canvas
    id="canvas"
    :style="{ backgroundColor: backgroundColor }"
    @mousedown="startDrawing"
    @mousemove="draw"
    @mouseup="stopDrawing"
  >
    Your browser doesn't support the canvas element. You may want to upgrade to
    a new browser.
  </canvas>
</template>

<script>
export default {
  name: "myCanvas",
  props: {
    brushColor: String,
    brushSize: String,
  },
  data() {
    return {
      isDrawing: false,
      context: {},
      canvas: {},
      backgroundColor: "#f8f9fa",
    };
  },
  methods: {
    startDrawing(event) {
      this.isDrawing = true;
      this.draw(event);
    },

    draw({ offsetX: x, offsetY: y }) {
      if (!this.isDrawing) return;

      this.context.lineWidth = this.brushSize;
      this.context.strokeStyle = this.brushColor;
      this.context.lineCap = "round";

      this.context.lineTo(x, y);
      this.context.stroke();
      this.context.beginPath();
      this.context.moveTo(x, y);
    },

    stopDrawing() {
      this.isDrawing = false;
      this.context.beginPath();
    },

    resizeCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight - 56;
    },

    clearCanvas() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    disableRightClick(event) {
      event.preventDefault();
      event.stopPropagation();
    },

    changeBackgroundColor(event) {
      this.backgroundColor = event;
    },

    downloadImage() {
      let link = document.createElement("a");
      link.download = "drawing.png";
      link.href = this.canvas.toDataURL("image/png", 1.0);
      link.click();
      link.remove();
    },
  },
  mounted() {
    this.canvas = document.querySelector("#canvas");
    this.context = this.canvas.getContext("2d");
    this.resizeCanvas();
    window.addEventListener("contextmenu", this.disableRightClick);
    //window.addEventListener("resize", this.resizeCanvas);
  },
};
</script>

<style scoped>
#canvas {
  cursor: crosshair;
}
</style>