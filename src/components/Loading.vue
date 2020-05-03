<template>
  <div>
    <img
      v-if="theme === 'light'"
      src="../assets/svgs/double-quote-open-color-light.svg"
      class="quote-icon"
    />
    <img v-else src="../assets/svgs/double-quote-open-color-dark.svg" class="quote-icon" />
  </div>
</template>

<script>
export default {
    computed: {
        theme() {
            return this.$store.getters.getTheme;
        },
    }
}
</script>

<style lang="scss">
img.quote-icon {
  height: 5rem;
  width: 5rem;
  animation: 2s ease-in 1s infinite levitate;
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
