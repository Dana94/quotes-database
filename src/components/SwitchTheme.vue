<template>
  <div class="theme-switch">
    <a href="#" @click.prevent="toggleTheme" role="button">
      <font-awesome-icon :icon="['fas', 'sun']" class="fa-lg sun" v-show="theme === 'dark'" />
      <font-awesome-icon :icon="['fas', 'moon']" class="fa-lg moon" v-show="theme === 'light'" />
    </a>
  </div>
</template>

<script>

export default {
  name: 'SwitchTheme',
  methods: {
    toggleTheme () {
      this.$store.dispatch('setTheme', this.theme === 'light' ? 'dark' : 'light');
    }
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    }
  }
}
</script>

<style lang="scss">
.theme-switch {
  margin-right: 1rem;
  display: flex;
  align-items: center;
}

.moon {
  color: #3f51b5;
}
.sun {
  color: orange;
}

@media (min-width: 768px) {
  .theme-switch {
    margin-right: 3rem;
  }
}
</style>
