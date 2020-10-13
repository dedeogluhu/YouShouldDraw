<template>
  <b-nav-item-dropdown text="Brush Size">
    <b-dropdown-form href="#" class="my-dropdown">
      <b-form-group
        label="Brush Size"
        label-for="dropdown-brush-size"
        @submit.stop.prevent
      >
        <b-input-group class="mt-3">
          <b-form-input
            id="dropdown-brush-size"
            size="sm"
            placeholder="Type the size..."
            v-model="brushSize"
            type="number"
            @input="changeBrushSize"
            @keypres.enter.stop.prevent
          >
          </b-form-input>
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
      brushSize: 3,
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