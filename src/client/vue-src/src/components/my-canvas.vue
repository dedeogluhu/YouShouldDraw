<template>
  <canvas id="canvas" class="bg-light"></canvas>
</template>

<script>
export default {
  name: "myCanvas",
  props: {
    brushColor: String,
    brushSize: Number,
  },
  data() {
    return {
      isDrawing: false,
      context: {},
      canvas: {},
    };
  },
  methods: {
    startDrawing(e) {
      this.isDrawing = true;
      this.draw(e);
    },

    draw({ offsetX: x, offsetY: y }) {
      if (!this.isDrawing) return;

      this.context.lineWidth = this.brushSize; //brushSize.value;
      this.context.strokeStyle = this.brushColor; //colorPicker.value;
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
  },
  mounted() {
    this.canvas = document.querySelector("#canvas");
    this.context = this.canvas.getContext("2d");

    //const clearButton = document.querySelector("#clear-canvas");
    //const brushSize = document.querySelector("#brush-size");
    //const colorPicker = document.querySelector("#color-picker");

    this.canvas.addEventListener("mousedown", this.startDrawing);
    this.canvas.addEventListener("mousemove", this.draw);
    this.canvas.addEventListener("mouseup", this.stopDrawing);
    //this.canvas.addEventListener("contextmenu", this.disableRightClick);

    window.addEventListener("resize", this.resizeCanvas);
    //clearButton.addEventListener("click", this.clearCanvas);

    this.resizeCanvas();
  },
};
</script>

<style scoped>
#canvas {
  cursor: crosshair;
}
</style>