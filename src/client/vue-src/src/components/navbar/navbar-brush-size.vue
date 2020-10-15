<template>
  <b-nav-item-dropdown text="Brush Size">
    <b-dropdown-form class="my-dropdown">
      <b-form-group
        label="Brush Size"
        label-for="dropdown-brush-size"
        @submit.stop.prevent
      >
        <b-input-group class="mt-3">
          <div class="container">
            <b-form-input
              type="range"
              size="md"
              v-model="brushSize"
              @input="changeBrushSize"
              class="mb-3"
              min="1"
              max="200"
              variant=""
            >
            </b-form-input>
            <b-form-spinbutton
              id="dropdown-brush-size"
              size="sm"
              placeholder="Type the size..."
              v-model="brushSize"
              @input="changeBrushSize"
              min="1"
              max="500"
            >
            </b-form-spinbutton>
          </div>
        </b-input-group>
      </b-form-group>
    </b-dropdown-form>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: "navbarBrushSize",
  data() {
    return {
      brushSize: "3",
    };
  },
  methods: {
    changeBrushSize() {
      this.$emit("brushSizeChanged", this.brushSize);
    },
  },
};
</script>

<style>
</style>