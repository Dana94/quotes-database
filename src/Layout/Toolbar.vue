<template>
  <nav>
    <SwitchTheme />
  </nav>
</template>

<script>
import SwitchTheme from '../components/SwitchTheme.vue';

export default {
    components: {
        SwitchTheme
    }
}
</script>

<style lang="scss" scoped>
nav {
  background-color: #d6e7f3;
  box-shadow: 0px 3px 7px black;
  height: 3rem;
  position: sticky;
  top: 0;
  z-index: 200;
  display: flex;
  padding: 0 0.5rem;
  justify-content: flex-end;
}
</style>
