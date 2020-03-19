<template>
  <div class="cards">
    <card v-for="i in 8" :key="i.id" />
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Cards',
  components: {
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cards {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  column-gap: 2rem;
  row-gap: 3rem;
}

@media (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5rem;
    row-gap: 5rem;
  }
}
</style>
