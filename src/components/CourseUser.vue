<template>
            <div class="">
                <h1 class="lg:m-6 m-3">{{index}}</h1>
            </div>
            <div class="">
                <h1 class="lg:m-6 m-3">{{data.name}}</h1>
            </div>
            <div class="">
                <h1 class="lg:m-6 m-3">{{data.email}}</h1>
            </div>
            <div class="px-32">
                <h1 class="lg:m-6 m-3">{{data.phoneNumber}}</h1>
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