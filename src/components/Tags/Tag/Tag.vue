<template>
  <button v-if="tag === 'clear'" class="clear-tags" @click="clearTags">
    <slot />
  </button>
  <button v-else class="tag" :class="{selected: selected && isSelected}" @click="toggle">
    <slot />
  </button>
</template>

<script>
export default {
    props: {
      tag: String
    },
    data() {
      return {
        selected: false,
        clear: false
      }
    },
    computed: {
      tags() {
        return this.$store.getters.getTags;
      },
      // make sure the correct color shows if the tags were all cleared at once
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
            } else{
              this.removeTag();
            }
        },
        addTag() {
          this.$store.dispatch('addTag', this.tag);
        },
        removeTag() {
          // tag is selected to be removed
          if(!this.clear) {
            console.log(this.tag, 'in removeTag')
            this.$store.dispatch('removeTag', this.tag);
          }
        },
        clearTags() {
          this.clear = true;
          // ??
          setTimeout(() => {
            this.clear = false;
          }, 1000);
        }
    },
    watch: {
      clear() {
        // all tags need to remove themselves
        if(this.clear) {
          this.$store.dispatch('removeTag', this.tag);
        }
      }
    }
}
</script>

<style lang="scss">
.tag,
.clear-tags {
  background-color: white;
  color: black;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0.5rem 1rem;
  border: none;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
  }
}

.tag.selected {
  background-color: black;
  color: white;
}
</style>
