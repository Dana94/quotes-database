<template>
  <div class="tags">
    <img class="bracket-icon" src="../../assets/bracket-open.svg" />
    <img class="bracket-icon" src="../../assets/bracket-close.svg" />
  </div>
</template>

<script>
// import Tag from './Tag.vue';

export default {
  name: 'Tags',
  props: {
    msg: String
  },
  components: {
    // Tag
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tags {
  margin: 2rem 0;
}
.bracket-icon {
  width: 2rem;
  margin: 0 1rem; /* temp */
}
</style>
