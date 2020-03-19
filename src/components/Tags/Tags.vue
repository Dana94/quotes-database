<template>
  <div class="tags">
    <img class="bracket-icon" src="../../assets/bracket-open.svg" />
    <div class="tags-container">
      <tag v-for="i in 4" :key="i.id" />
    </div>
    <img class="bracket-icon" src="../../assets/bracket-close.svg" />
  </div>
</template>

<script>
import Tag from './Tag.vue';

export default {
  name: 'Tags',
  props: {
    msg: String
  },
  components: {
    Tag
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tags {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}
.tags-container {
  display: flex;
}
.bracket-icon {
  width: 2rem;
  margin: 0 1rem; /* temp */
}
</style>
