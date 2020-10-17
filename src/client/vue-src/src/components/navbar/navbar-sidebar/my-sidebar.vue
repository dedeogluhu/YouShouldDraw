<template>
  <div>
    <b-sidebar id="sidebar" shadow bg-variant="dark" text-variant="light">
      <div class="px-3 py-2">
        <h3 class="text-light text-center">
          You Should Draw
          <b-icon icon="brush"></b-icon>
        </h3>
        <hr />
        <b-button block variant="dark" class="mt-3" v-b-modal.bg-modal>
          Background Color
        </b-button>

        <b-button
          block
          variant="dark"
          class="mt-3"
          @click="downloadImage('jpg')"
        >
          <b-icon icon="download"></b-icon>
          Download
        </b-button>

        <b-button block variant="dark" class="mt-3" v-b-modal.about-modal>
          About
        </b-button>

        <b-button block variant="dark" class="mt-3" v-b-modal.help-modal>
          Help
        </b-button>
        <b-button block variant="dark" class="mt-3" v-b-modal.feedback-modal>
          Give Us Feedback
        </b-button>
      </div>
    </b-sidebar>

    <mySidebarBgModal @backgroundColorChanged="sendBackgroundColor($event)" />
    <aboutModal />
    <helpModal />
    <feedbackModal />
  </div>
</template>

<script>
import mySidebarBgModal from "./sidebar-bg-modal";
import aboutModal from "./about-modal";
import helpModal from "./help-modal";
import feedbackModal from "./feedback-modal";

export default {
  name: "mySidebar",
  components: {
    mySidebarBgModal,
    aboutModal,
    helpModal,
    feedbackModal,
  },
  methods: {
    sendBackgroundColor(event) {
      this.$emit("backgroundColorChanged", event);
      this.$bvModal.hide("bg-modal");
    },
    downloadImage() {
      this.$emit("onImageDownload");
    },
  },
};
</script>

<style>
</style>