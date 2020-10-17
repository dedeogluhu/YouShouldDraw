<template>
  <b-modal id="feedback-modal" title="Give us feedback" ok-only hide-footer>
    Report any bugs or make suggestions by opening an issue on
    <a href="https://github.com/dedeogluhu/YouShouldDraw/issues">Github</a>
    <b-button class="mt-3" block @click="$bvModal.hide('feedback-modal')">
      Ok
    </b-button>
  </b-modal>
</template>

<script>
export default {
  name: "feedbackModal",
};
</script>

<style>
</style>