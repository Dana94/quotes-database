<template>
  <button class="tag" :class="{selected: selected && isSelected}" @click="toggle">{{tag}}</button>
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
    computed: {
      tags() {
        return this.$store.getters.getTags;
      },
      isSelected() {
        if(this.tags.includes(this.tag)) {
          return true;
        }else {
          this.toggle();
        }
        return false;
      }
    },
    methods: {
        toggle() {
            this.selected = !this.selected;
            if (this.selected) {
              this.addTag();
              // removes it twice to chec if it should show as selected or not once its cleared - FIX
            } else{
              this.removeTag();
            }
        },
        addTag() {
          this.$store.dispatch('addTag', this.tag);
        },
        removeTag() {
          this.$store.dispatch('removeTag', this.tag);
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
