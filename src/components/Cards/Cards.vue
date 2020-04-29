<template>
  <transition
    enter-active-class="animated fadeInUp"
    mode="out-in"
  >
    <div v-if="$apollo.queries.quotes.loading">
      {{$apollo.queries.quotes.loadingKey}}
    </div>
    <div class="cards" v-else-if="showCards && !$apollo.queries.quotes.loading">
      <card v-for="(quote, index) in quotes" :key="index" :id="index" :quote="quote"/>
    </div>
  </transition>
</template>

<script>
import gql from 'graphql-tag';

import Card from './Card.vue';

const quotesQuery = gql(`{
  quotes {
    quote
    author {
      name
      description
    }
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
      loadingKey: 'Loading...'
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
