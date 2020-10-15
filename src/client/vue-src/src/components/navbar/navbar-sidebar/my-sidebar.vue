<template>
  <div>
    <b-sidebar
      id="sidebar"
      shadow
      bg-variant="dark"
      text-variant="light"
      no-header
    >
      <div class="px-3 py-2">
        <h3 class="text-light text-center mt-3">
          You Should Draw
          <b-icon icon="brush"></b-icon>
        </h3>
        <hr />
        <b-button block variant="dark" v-b-modal.bg-modal>
          Background Color
        </b-button>
        <br />
        <b-button block variant="dark"> About </b-button>
        <br />
        <b-button block variant="dark"> Help </b-button>
      </div>
    </b-sidebar>

    <b-modal id="bg-modal" title="Background Color" hide-footer>
      <h6 class="text-danger">
        <b-icon
          icon="exclamation-circle-fill"
          animation="throb"
          variant="danger"
          scale="1.5"
        ></b-icon>
        &nbsp; It won't be applied when you download the drawing!
      </h6>
      <b-form-input
        type="color"
        v-model="myBackgroundColor"
        class="mt-3"
      ></b-form-input>
      <p>
        <b-icon
          icon="exclamation-circle-fill"
          animation="throb"
          variant="warning"
          scale="1.5"
          class="mt-3"
        ></b-icon>
        &nbsp; If you wan't it to be applied when you download you can always
        paint the canvas with the brush
      </p>

      <b-button class="mt-3" block @click="changeBackgroundColor">
        Ok
      </b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "mySidebar",
  data() {
    return {
      myBackgroundColor: "#f8f9fa",
    };
  },
  methods: {
    changeBackgroundColor() {
      this.$emit("backgroundColorChanged", this.myBackgroundColor);
      this.$bvModal.hide("bg-modal");
    },
  },
};
</script>

<style>
</style>