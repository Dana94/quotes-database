<template>
  <nav :class="{dark: theme === 'dark'}">
    <SwitchTheme />
  </nav>
</template>

<script>
import SwitchTheme from '../components/SwitchTheme.vue';

export default {
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
  },
  components: {
      SwitchTheme
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

nav {
  background-color: #d6e7f3;
  box-shadow: 0px 3px 7px #0000004f;
  height: 3rem;
  position: sticky;
  top: 0;
  z-index: 200;
  display: flex;
  padding: 0 0.5rem;
  justify-content: flex-end;

  &.dark {
    background-color: $dark-card;
  }
}
</style>
