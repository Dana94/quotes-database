<template>
  <transition enter-active-class="animated fadeInUp" mode="out-in">
    <div class="cards" v-if="showCards">
      <card v-for="(quote, index) in quotes" :key="index" :id="index" :quote="quote" />
    </div>
  </transition>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Cards',
  props: {
    quotes: Array
  },
  data() {
    return {
      showCards: false
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
