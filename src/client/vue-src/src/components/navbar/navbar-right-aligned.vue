<template>
  <b-navbar-nav class="ml-auto">
    <b-nav-form>
      <b-nav-text class="mr-3 text-light"
        >You Should Draw {{ suggestion }}
      </b-nav-text>
      <b-button class="btn btn-outline-success my-2 my-sm-0 btn-dark" size="md">
        What Should I Draw?
      </b-button>
    </b-nav-form>
  </b-navbar-nav>
</template>

<script>
export default {
  name: "navbarRightAligned",
  data() {
    return {
      suggestion: "This",
    };
  },
};
</script>

<style>
</style>