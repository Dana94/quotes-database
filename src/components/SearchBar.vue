<template>
  <div class="search">
      <input />
      <font-awesome-icon :icon="['fas', 'search']" class="fa-lg search-icon" />
  </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            search: ''
        }
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
}
.search-icon {
    align-self: center;
}
</style>
