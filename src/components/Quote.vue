<template>
  <div>
    <card :id="getId" :quote="quote" :singleQuote="true"/>
  </div>
</template>

<script>
import Card from '../components/Cards/Card';

export default {
    props: ['id'],
    computed: {
        getId() {
            return Number.parseInt(this.id);
        },
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
