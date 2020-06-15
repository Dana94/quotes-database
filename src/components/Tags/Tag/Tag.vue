<template>
  <button
    v-if="tag === 'clear'"
    class="clear-tags"
    @click="clearTags"
    :tabindex="focusable ? 0 : -1"
  >
    <slot />
  </button>
  <button
    v-else
    class="tag"
    :class="{selected: isSelected}"
    @click="isSelected ? removeTag() : addTag()"
    :tabindex="focusable ? 0 : -1"
  >
    <slot />
  </button>
</template>

<script>
export default {
    props: {
      tag: String,
      focusable: Boolean
    },
    computed: {
      tags() {
        return this.$store.getters.getTags;
      },
      // make sure the correct color shows if the tag is in the store
      isSelected() {
        return this.tags.includes(this.tag);
      }
    },
    methods: {
        addTag() {
          this.$store.dispatch('addTag', this.tag);
        },
        removeTag() {
          this.$store.dispatch('removeTag', this.tag);
        },
        clearTags() {
          this.$store.dispatch('clearTags');
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
