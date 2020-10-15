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
        <b-button block variant="dark" v-b-modal.about-modal> About </b-button>
        <br />
        <b-button block variant="dark"> Help </b-button>
      </div>
    </b-sidebar>

    <mySidebarBgModal @backgroundColorChanged="sendBackgroundColor($event)" />
    <aboutModal />
  </div>
</template>

<script>
import mySidebarBgModal from "./my-sidebar-bg-modal";
import aboutModal from "./about-modal";

export default {
  name: "mySidebar",
  components: {
    mySidebarBgModal,
    aboutModal,
  },
  methods: {
    sendBackgroundColor(event) {
      this.$emit("backgroundColorChanged", event);
      this.$bvModal.hide("bg-modal");
    },
  },
};
</script>

<style>
</style>