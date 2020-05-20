<template>
  <div class="loading-message" :class="{dark: theme === 'dark'}">
    <img
      v-if="theme === 'light'"
      src="../assets/svgs/double-quote-open-color-light.svg"
      class="quote-icon"
    />
    <img v-else src="../assets/svgs/double-quote-open-color-dark.svg" class="quote-icon" />
    {{message}}
    <img
      v-if="theme === 'light'"
      src="../assets/svgs/double-quote-close-color-light.svg"
      class="quote-icon"
    />
    <img v-else src="../assets/svgs/double-quote-close-color-dark.svg" class="quote-icon" />
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
  height: 5rem;
  width: 5rem;
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
