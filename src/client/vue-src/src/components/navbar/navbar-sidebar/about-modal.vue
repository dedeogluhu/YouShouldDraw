<template>
  <b-modal id="about-modal" title="About" ok-only hide-footer>
    <p class="my-4">
      Hi, I am a web developer who always tries to make and contribute to open
      source projects. When i learned about the canvas api, i tried to make a
      project. So I started to research more about it. And the project looked
      nice so wanted to make it public.
    </p>
    You can find the source here :
    <a href="https://github.com/dedeogluhu/YouShouldDraw">Github</a>
    <b-button class="mt-3" block @click="$bvModal.hide('about-modal')">
      Ok
    </b-button>
  </b-modal>
</template>

<script>
export default {};
</script>

<style>
</style>