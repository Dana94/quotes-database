<template>
  <div class="search">
      <input placeholder='Search (Press "/" to focus)' v-model="search" @keydown.enter="storeSearch"/>
      <font-awesome-icon :icon="['fas', 'search']" class="fa-lg search-icon"  />
  </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            search: ''
        }
    },
    methods: {
        storeSearch() {
            this.$store.dispatch('setSearch', this.search);
        }
    },
    created() {
        // listener for "/" key
    }
}
</script>

<style lang="scss">
.search {
    display: flex;
    margin-left: 1rem;
}
input {
    display: flex;
    margin: .5rem;
    align-self: stretch;
    border: none;
    border-radius: 10px;
    padding: .5rem;
    justify-content: center;
}
.search-icon {
    align-self: center;
}
</style>
