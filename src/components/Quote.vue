<template>
    <div>
        Quote {{$route.params.id}}
    </div>
</template>

<script>
export default {
    props: ['id'],
    created() {
        console.log(this.id)
    }
}
</script>

<style>

</style>
