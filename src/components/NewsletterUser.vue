<template>
    <div class="">
        <h1 class="lg:m-6 m-3">{{index}}</h1>
    </div>
    <div class="">
        <h1 class="lg:m-6 m-3">{{data.email}}</h1>
    </div>
</template>

<script>
export default {
    props:{
        data:{
            type:Boolean,
            required:true
        },
        index:{}
    },
}
</script>

<style>

</style>