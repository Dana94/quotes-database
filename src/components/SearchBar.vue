<template>
  <div class="search">
    <input placeholder='Search (Press "/" to focus)' v-model="search" @keydown.enter="storeSearch" ref="search" />
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
    },
    methods: {
        storeSearch() {
            this.$store.dispatch('setSearch', this.search);
        }
    },
    mounted() {
        document.addEventListener('keyup', event => {
            if (event.key === '/') {
                this.$refs.search.focus();
            }
        })
    }
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.search {
  display: flex;
  margin-left: 1rem;
}
input {
  display: flex;
  margin: 0.5rem;
  align-self: stretch;
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
  justify-content: center;
  font-family: $body-font-family;
}
.search-icon {
  align-self: center;
}
</style>
