<template>
  <div :class="{dark: theme === 'dark'}">
    <p>Sorry, things are down at the moment.</p>
    <p>Check back next time!</p>
  </div>
</template>

<script>
export default {
    name: "Error",
    computed: {
      theme() {
        return this.$store.getters.getTheme;
      }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/base.scss";

p {
  font-family: $body-font-family;
  font-size: 1.5rem;
}

.dark {
  color: $dark-card-text;
}
</style>
