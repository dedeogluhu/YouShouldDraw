<template>
  <b-navbar-nav class="ml-auto">
    <b-nav-form>
      <b-nav-text v-if="suggestion" class="mr-3 text-light">
        You Should Draw {{ suggestion }}
      </b-nav-text>
      <b-button
        class="btn btn-outline-success my-2 my-sm-0 btn-dark"
        size="md"
        @click="getIdeas"
      >
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
      suggestion: "",
    };
  },
  methods: {
    getIdeas() {
      fetch("api/ideas")
        .then((response) => response.json())
        .then((response) => this.getRandomSuggestion(response.ideas))
        .catch((error) =>
          console.log("We couldn't reach to our server...", error)
        );
    },
    getRandomSuggestion(array) {
      let idea = array[Math.floor(Math.random() * array.length)];
      this.suggestion = idea;
    },
  },
};
</script>

<style>
</style>