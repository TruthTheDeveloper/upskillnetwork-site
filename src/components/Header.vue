<template>
    <header style="backgound-image: url('./../assets/images/header-background.jpg')" class="text-white grid  w-full" >
        <div class=" justify-self-center grid grid-cols-1 grid-rows-1 h-j self-center md:self-start mt-16  lg:my-16 ">
                <Modal :registerModal="registerModal" @closeRegisterModal="closeRegisterModal"/>
                <SylabusModal :sylabusModal="sylabusModal" @closeSylabusModal="closeSylabusModal"/>
                <div class="col-start-1 col-end-2 row-start-1 row-end-2 z-0 "> 
                    <h1 class="text-5xl md:text-6xl lg:text-7xl  font-semibold text-neutral-200 text-center mb-8 mt-7  tracking-in-expand">Upskill Network</h1>
                    <div class="">
                        <p class="text-center text-xl w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12  text-md header__p  mx-auto">Become a certified digital marketer in 4 weeks and earn as much as N300,000/month, working remotely</p>
                    </div>
                    <div class="justify-self-center my-10 flex justify-center ">
                        <button v-show='!changeFirstButton' class="bg-amber-300 h-12 mx-2 w-40 rounded-3xl text-sm font-bold   " @mouseover="switchFirstButton" @click="openRegisterModal" style="background:#0096FE">REGISTER</button>
                        <button v-show='changeFirstButton' class=" h-12 mx-2 w-40 rounded-3xl text-amber-30 font-bold text-sm border-amber-300 border-2 text-amber-300 my-" @mouseleave="switchFirstButton" @click="openRegisterModal"  style="border: 1px solid #0096FE; color:#0096FE">REGISTER</button>
                        <button v-show='!changeSecondButton' class=" text-white mx-2 w-40 h-12 rounded-3xl text-sm border-white font-bold border-2 my-" @click="closeSylabusModal" @mouseover="switchSecondButton">EXPLORE</button>
                        <button v-show='changeSecondButton' class=" text-black mx-2 w-40 h-12 bg-white rounded-3xl text-sm font-bold border-white border-4 my-" @mouseleave="switchSecondButton" @click="closeSylabusModal" >EXPLORE</button>
                    </div>
                </div>
        </div>
        
        
    </header>
</template>

<script>
import Modal from '../components/Modal.vue'
import SylabusModal from '../components/SylabusModal.vue'

export default {
  components: { Modal, SylabusModal },
    data(){
        return{
            //Button State
            changeFirstButton:false,
            changeSecondButton:false,

            //Modal State
            registerModal:false,
            sylabusModal:false,
        }
    },
    methods:{
        //Button methods
        switchFirstButton(){
            return this.changeFirstButton = !this.changeFirstButton
        },
        switchSecondButton(){
            return this.changeSecondButton = !this.changeSecondButton
        },

        //Modal methods
        openRegisterModal(){
            console.log('this sop')
            this.registerModal = true
        },
        closeRegisterModal(modalState){
            this.registerModal = modalState
        },
        openSylabusModal(){
          this.sylabusModal = true
        },
        closeSylabusModal(modalState){
          this.sylabusModal = modalState
        },
  }
}

</script>

<style lang="less">

@mobile-lg: ~"only screen and (min-width:480px)";
@mobile-sm: ~"only screen and (min-width:320px)";
/* ipads,Tablets viewport */
@tablet-lg: ~"only screen and (min-width:768px)";
@tablet-sm: ~"only screen and (min-width:481px)";
/* small screen and laptops viewport */
@laptops-lg: ~"only screen and (min-width:1024px)";
@laptop-sm: ~"only screen and (min-width:769px)";
/* Desktop and large screen viewport */
@desktop-lg: ~"only screen and (min-width:1200px)";
@desktop-sm:~"only screen and (min-width:1025px)";
/* Extra large screens, Tv viewport */
@screens: ~"only screen and (min-width:1201px)";



header{
    background:linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('./../assets/images/header-background.jpg');
    height: 70vh;

    @media @mobile-lg{
        height: 80vh;
    }

    // @media @tablet-sm{
    //     height:85vh;
    // }

    @media @tablet-lg{
        height:90vh;
    }

    @media @laptop-sm{
        height: 100vh;
    }


}

.h-j{
    height: 65vh;

    @media @mobile-lg{
        height: 70vh;
    }
}




</style>