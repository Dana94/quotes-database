<template>
  <div>
    <img src="../assets/svgs/quote-open-color-light.svg" class="quote-icon"/>
    <img src="../assets/svgs/quote-open-color-light.svg" class="quote-icon" />
    {{message}}
    <!-- <img src="../../assets/svgs/quote-close-color-light.svg" />
    <img src="../../assets/svgs/quote-close-color-light.svg" />-->
  </div>
</template>

<script>
export default {
    props: {
        message: String
    },
    computed: {
        openQuoteSrc() {
            return ''
        },
        closeQuoteSrc() {
            return ''
        }
    }
}
</script>

<style lang="scss">
img.quote-icon {
    height: 3rem;
    width: 2rem;
}
</style>
