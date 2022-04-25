<template>
    <div v-if="registerModal" class="bg-white grid lg:mt-3 text-white w-11/12 sm:w-10/12 md:w-9/12 justify-self-center z-10  col-start-1 col-end-2 row-start-1 row-end-2 mx-5 h-j  rounded-md shadow-md animate__bounceIn z-30" style="background:#1f212d">
    <i class="fas fa-times text-white text-xl ml-3 mt-3 cursor-pointer" @click="closeRegisterModal"></i>
        <h1 class="justify-self-center text-lg font-bold my-5">Register as a Member</h1>
         <div class="lg:mx-28">
            <input v-model="courseRegister.name" class="ml-4 m-2  p-3 text-black w-11/12 rounded-sm outline-none"  placeholder="Complete name"/><br/>
            <label class="ml-4 m-2 text-sm">Please fill out this form</label>
        </div>
         <div class="lg:mx-28">
            <input v-model="courseRegister.phoneNumber" class="ml-4 m-2  p-3 text-black w-11/12 rounded-sm outline-none"  placeholder="phone"/><br/>
            <label class="ml-4 m-2 text-sm">Please fill out this form</label>
        </div>
        <div class="lg:mx-28">
            <input v-model="courseRegister.email" class="ml-4 m-2  p-3 text-black w-11/12 rounded-sm outline-none"  placeholder="Email"/><br/>
            <label class="ml-4 m-2 text-sm">Please fill out this form</label>
        </div>
        <p v-if="registerError" class="text-red-600 font-semibold text-center ">Failed please try again.....</p>
        <p v-if="modalCheckedError" class="text-red-600 font-semibold text-center ">please check the checkbox</p>
        <div class="ml-8 m-2  p-2 justify-self-center "  >
            <input type="checkbox" v-model="modalChecked" />
            <span class=""> I've read and agree to Upskill network written
                    <router-link to="/privacy">
                    <a class="text-blue-600">Privacy Policy</a>
                    </router-link>
                     
                and <router-link to="/privacy">
                     <a class="text-blue-600">Terms Conditions</a>
                    </router-link></span>
            <button v-if="courseLoader"  class=" ml-7 my-4 rounded-full  p-3 w-10/12  font-bold " style="background:#0096FE"><div class="lds-ring p-0"><div></div><div></div><div></div><div></div></div></button>
            <button v-else @click="submitCourseForm" class=" ml-7 my-4 rounded-full  p-3 w-10/12  font-bold " style="background:#0096FE">Register</button>
        </div>
    </div>
</template>

<script>
import Input from './form/Input.vue'
import 'animate.css';
import axios from 'axios'
export default {
    props:{
        registerModal:{
            type:Boolean,
            required:true
        }
    },
    data(){
        return{
            modalChecked:false,
            modalCheckedError:false,

            courseLoader:false,
            registerError:false,
            courseRegister:{
                name:'',
                phoneNumber:'',
                email:''
            }
        }
    },
    methods:{
        closeRegisterModal(){
            this.$emit('closeRegisterModal', false)
        },
        submitCourseForm(){
            this.registerError = false
            this.modalCheckedError = false
            if(this.modalChecked === false){
              this.modalCheckedError = true
            }else{
              this.courseLoader = true
              axios.post('https://upskill-network-6cf0c-default-rtdb.firebaseio.com/courseRegister.json', this.courseRegister)
            .then(response => {
                console.log(response)
                this.courseLoader = false
                 this.$router.push('/registered')
            })
            .catch(error => {
                console.log(error)
                this.registerError = true
                this.courseLoader = false
            })
            }
        }
    },
  components: { Input },
  
    
}
</script>

<style scoped>

.h-j{
    height:  80vh;

    @media @mobile-lg{
        height: 70vh;
    }
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 24px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 40px;
  height: 40px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>