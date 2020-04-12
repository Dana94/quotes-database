<template>
  <div>
    <card :id="id" :quote="quote"/>
  </div>
</template>

<script>
import Card from '../components/Cards/Card';

export default {
    props: ['id'],
    computed: {
        quote() {
            return this.$store.getters.getQuote;
        },
        theme() {
            return this.$store.getters.getTheme;
        },
        cardIndex() {
            return this.$store.getters.getCardIndex;
        },
    },
    components: {
        Card
    }
}
</script>

<style>
</style>
