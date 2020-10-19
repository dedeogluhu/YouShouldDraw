<template>
  <b-nav-item-dropdown text="Color Picker">
    <b-dropdown-form class="my-dropdown">
      <b-form-group
        label="Color Picker"
        label-for="dropdown-color-picker"
        @submit.stop.prevent
      >
        <b-input-group class="mt-3">
          <b-form-input
            id="dropdown-color-picker"
            size="sm"
            placeholder="Type a hex code or a rgba value..."
            v-model="brushColor"
            @input="changeBrushColor"
            @keypres.enter.stop.prevent
            type="color"
          >
          </b-form-input>
          <b-form-input
            id="dropdown-color-picker"
            size="sm"
            v-model="brushColor"
            @input="changeBrushColor"
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