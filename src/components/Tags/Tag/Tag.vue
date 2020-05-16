<template>
  <button class="tag" :class="{selected: selected}" @click="toggle">{{tag}}</button>
</template>

<script>
export default {
    props: {
        tag: String
    },
    data() {
        return {
            selected: false
        }
    },
    methods: {
        toggle() {
            this.selected = !this.selected;
            if (this.selected) {
                this.$store.dispatch('addTag', this.tag);
            } else{
                this.$store.dispatch('removeTag', this.tag);
            }
        }
    }
}
</script>

<style lang="scss">
.tag {
  background-color: white;
  color: black;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 1rem;
  border: none;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
  }

  &.selected {
    background-color: black;
    color: white;
  }
}
</style>
