<template>
  <b-modal id="help-modal" title="Help" ok-only hide-footer>
    <p>
      I think the app is easy to use but wanted to add this section in case I
      add things difficult to understand
    </p>
    <b-button class="mt-3" block @click="$bvModal.hide('help-modal')">
      Ok
    </b-button>
  </b-modal>
</template>

<script>
export default {
  name: "helpModal",
};
</script>

<style>
</style>