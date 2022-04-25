<template>
    <div class="grid grid-cols-4">
        <div class="">
            <h1 class="lg:m-6 m-3">{{index}}</h1>
        </div>
        <div class="">
            <h1 class="lg:m-6 m-3">{{data.name}}</h1>
        </div>
        <div class="">
            <h1 class="lg:m-6 m-3">{{data.email}}</h1>
        </div>
        <div class="px-16 lg:px-0">
            <h1 class="lg:m-6 m-3">{{data.phoneNumber}}</h1>
        </div>
    </div>
    <div class=" font-semibold overflow-auto">
        <div class="">
            <h1 class="ml-3 md:ml-4 md:ml-6 lg:ml-6 text-blue-500">message</h1>
        </div>
        <h1 class="lg:m-6 m-3">{{data.message}}</h1>
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