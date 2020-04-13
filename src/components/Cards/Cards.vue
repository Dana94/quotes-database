<template>
  <transition
    enter-active-class="animated fadeInUp"
    mode="out-in"
  >
    <div class="cards" v-if="showCards">
      <card v-for="quote in quotes" :key="quote.id" :id="quote.id" :quote="quote.quote"/>
    </div>
  </transition>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Cards',
  data() {
    return {
      showCards: false,
      // testing
      quotes: [
        {
          quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se',
          id: 1
        },
        {
          quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se',
          id: 2
        },
        {
          quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, se',
          id: 3
        }
      ]
    }
  },
  mounted() {
    setTimeout(()=>{
      this.showCards = true
    },1000)
  },
  components: {
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.cards {
  // display: grid;
  // grid-template-columns: repeat(1, 1fr);
  // grid-template-rows: 1fr;
  // column-gap: 2rem;
  // row-gap: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5rem;
    row-gap: 5rem;
  }
}

@media (min-width: 925px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5rem;
    row-gap: 5rem;
  }
}
</style>
