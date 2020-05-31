<template>
  <div>
    <nav :class="{dark: theme === 'dark'}">
      <!-- <SearchBar /> -->
      <Dropdown />
      <font-awesome-icon
        tabindex="0"
        icon="tags"
        class="fa-lg tags-icon"
        @click="showTagsMenu = !showTagsMenu"
        @keydown.enter="showTagsMenu = !showTagsMenu"
      />
      <SwitchTheme />
    </nav>
    <TagsMenu :open="showTagsMenu" />
  </div>
</template>

<script>
// import SearchBar from '../components/SearchBar.vue';
import Dropdown from '../components/Dropdown.vue';
import SwitchTheme from '../components/SwitchTheme.vue';
import TagsMenu from '../components/Tags/TagsMenu.vue';

export default {
  name: 'Toolbar',
  data() {
    return {
      showTagsMenu: null
    }
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
  },
  components: {
    // SearchBar,
    Dropdown,
    SwitchTheme,
    TagsMenu
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

nav {
  background-color: $light-menu;
  box-shadow: $nav-box-shadow;
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

  .tags-icon {
    margin: auto;
    margin-right: 2rem;
  }
}
</style>
