<template>
  <div>
    <nav :class="{dark: theme === 'dark'}">
      <SearchBar />
      <Tags />
      <SwitchTheme />
    </nav>
    <TagsMenu />
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import Tags from '../components/Tags/Tags.vue';
import SwitchTheme from '../components/SwitchTheme.vue';
import TagsMenu from '../components/Tags/TagsMenu.vue';

export default {
  name: 'Toolbar',
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
  },
  components: {
    SearchBar,
    Tags,
    SwitchTheme,
    TagsMenu
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
  justify-content: space-between;

  &.dark {
    background-color: $dark-card;
  }
}
</style>
