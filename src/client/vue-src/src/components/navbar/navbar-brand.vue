<template>
  <b-navbar-brand
    href="#"
    v-b-toggle.sidebar-1
    v-b-tooltip.hover
    title="Click me to open the sidebar"
  >
    You Should Draw
    <b-icon icon="brush"></b-icon>

    <b-sidebar
      id="sidebar-1"
      shadow
      bg-variant="dark"
      text-variant="light"
      no-header
    >
      <div class="px-3 py-2">
        <h3 class="text-light text-center mt-3">
          You Should Draw <b-icon icon="brush"></b-icon>
        </h3>
        <hr />
        <b-button block variant="dark"> Background </b-button>
        <br />
        <b-button block variant="dark"> About </b-button>
        <br />
        <b-button block variant="dark"> Help </b-button>
      </div>
    </b-sidebar>
  </b-navbar-brand>
</template>

<script>
export default {};
</script>

<style>
</style>