<template>
  <b-nav-item-dropdown text="Color Picker">
    <b-dropdown-form class="my-dropdown">
      <b-form-group @submit.stop.prevent>
        <b-input-group class="mt-3">
          <b-form-input
            id="dropdown-color-picker"
            size="sm"
            v-model="brushColor"
            @input="changeBrushColor"
            @keypress.enter.stop.prevent
            type="color"
          >
          </b-form-input>
          <b-form-input
            id="dropdown-color-picker"
            size="sm"
            v-model="brushColor"
            @input="changeBrushColor"
            @keypress.enter.stop.prevent
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>
    </b-dropdown-form>
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: "navbarColorPicker",
  data() {
    return {
      brushColor: "#171717",
    };
  },
  methods: {
    changeBrushColor() {
      this.$emit("brushColorChanged", this.brushColor);
    },
  },
  mounted() {
    this.changeBrushColor();
  },
};
</script>

<style>
</style>