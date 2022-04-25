<template>
    <section class="bg-red-500 pb-14">
        <div class="flex  w-full bg-white fixed z-40 mb-28" >
            <span class="ml-5 mt-1 "><img class="w-28 py-1" src="./../assets/images/Upskill-logo.png"></span>
            <span class="ml-auto mr-5 py-2 lg:hidden">
                <img v-if="navDropDown" class="w-6 py-1 cursor-pointer" src="./../assets/images/close.png" @click="switchNavDropDown">
                <img v-else class="w-8 py-1 cursor-pointer" src="./../assets/images/menu.png" @click="switchNavDropDown">
            </span>

        
            <ul class="ml-auto py-4 mr-12 font-semibold hidden lg:flex z-30  " style="color:#0096FE">
                <router-link to="/">
                    <li class="mx-2 cursor-pointer">HOME</li>
                </router-link>
                <router-link to="/contactus">
                   <li class="mx-2"> CONTACT US </li>
                </router-link>
                <router-link to="/aboutUs">
                    <li class="mx-2">ABOUT US</li>
                </router-link>
            </ul>
        </div>
        <div v-show="navDropDown"  class='pl-10 mt-14 w-full  py-5  font-semibold z-30   bg-white fixed' style="color:#0096FE"> 
            <ul class="my-2 animate__fadeIn">
                <router-link to="/">
                    <li class="my-2 cursor-pointer">HOME</li>
                </router-link>
                <router-link to="/contactus">
                   <li class="my-2"> CONTACT US </li>
                </router-link>
                <router-link to="/aboutUs">
                    <li class="my-2">ABOUT US</li>
                </router-link>
                <span>UpSkill </span>
                <span>Network</span>
            </ul> 
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            navDropDown:false
        }
    },
    methods:{
        switchNavDropDown(){
            return this.navDropDown = !this.navDropDown
        }
    }
}

</script>