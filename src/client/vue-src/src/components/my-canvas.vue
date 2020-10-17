<template>
  <canvas
    id="canvas"
    :style="{ backgroundColor: backgroundColor }"
    @mousedown="startDrawing"
    @mousemove="draw"
    @mouseup="stopDrawing"
  >
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
    startDrawing(e) {
      this.isDrawing = true;
      this.draw(e);
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
      this.canvas.height = window.innerHeight;
    },

    clearCanvas() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    disableRightClick(e) {
      e.preventDefault();
      e.stopPropagation();
    },

    changeBackgroundColor(e) {
      this.backgroundColor = e;
    },
  },
  mounted() {
    this.canvas = document.querySelector("#canvas");
    this.context = this.canvas.getContext("2d");
    this.resizeCanvas();
    //this.canvas.addEventListener("contextmenu", this.disableRightClick);
    //window.addEventListener("resize", this.resizeCanvas);
  },
};
</script>

<style scoped>
#canvas {
  cursor: crosshair;
}
</style>