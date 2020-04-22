<template>
  <transition
    enter-active-class="animated fadeInUp"
    mode="out-in"
  >
    <div v-if="$apollo.queries.quotes.loading">
      {{$apollo.queries.quotes.loadingKey}}
    </div>
    <div class="cards" v-else-if="showCards && !$apollo.queries.quotes.loading">
      <card v-for="(quote, index) in quotes" :key="index" :id="index" :quote="quote.quote"/>
    </div>
  </transition>
</template>

<script>
import gql from 'graphql-tag';

import Card from './Card.vue';

const quotesQuery = gql(`{
  quotes {
    quote
  }
}`);

export default {
  name: 'Cards',
  data() {
    return {
      showCards: false,
      quotes: []
    }
  },
  apollo: {
    quotes: {
      query: quotesQuery,
      loadingKey: 'Stuff is happening...'
    },
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

  font-family: 'Baloo Thambi 2', cursive;
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
