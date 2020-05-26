<template>
  <div class="loading-message" :class="{dark: theme === 'dark'}">
    <img
      v-if="theme === 'light'"
      src="../assets/svgs/light/red/quotes-left-light-red.svg"
      class="quote-icon"
    />
    <img v-else src="../assets/svgs/dark/pink/quotes-left-dark-pink.svg" class="quote-icon" />
    {{message}}
    <img
      v-if="theme === 'light'"
      src="../assets/svgs/light/red/quotes-right-light-red.svg"
      class="quote-icon"
    />
    <img v-else src="../assets/svgs/dark/pink/quotes-right-dark-pink.svg" class="quote-icon" />
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    message: String
  },
  computed: {
      theme() {
          return this.$store.getters.getTheme;
      },
  }
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.loading-message {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: $body-font-family;
  font-size: 1.5rem;
  animation: 2s ease-in 1s infinite levitate;

  &.dark {
    color: $dark-card-text;
  }
}

img.quote-icon {
  height: 4rem;
  width: 4rem;
  margin: 0 1rem;
}

@keyframes levitate {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(30px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
