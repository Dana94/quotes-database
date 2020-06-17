<template>
  <div :class="{dark: theme === 'dark'}">
    <font-awesome-icon :icon="['fas', 'search']" class="fa-4x search" />
    <p>No quotes found with those tags.</p>
  </div>
</template>

<script>
export default {
    name: "NoResults",
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
