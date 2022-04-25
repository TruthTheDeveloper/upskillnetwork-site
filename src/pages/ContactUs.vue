<template>
    <section class="bg-amber-300 py-10 grid px-5 md:px-24 lg:grid-cols-2 text-white contact " style="background:#1f212d">
        <div class="lg:self-center lg:mb-36 ">
            <h1 class="text-4xl mt-20 mb-5 text-slate-8 font-semibold">Contact Details</h1>
            <p class="mb-10">For registration questions please get in touch using the contact details below. For any questions use the form.</p>
            <h1 class="text-3xl mb-3 text-slate-8 font-semibold">Main Office Location</h1>
            <div class="my-2">
                <span class=""><i class="fas fa-map-marker-alt text-xl mx-1"></i>No 15 Ajoku Street behind UBA Bank Wetheral Road Owerri Imo state</span>
            </div>
            <div class="my-2">
                <span class="mr-3"><i class="fas fa-mobile-alt text-xl mx-1"></i> (+234) 813674493144</span>
                <!-- <span><i class="fas fa-mobile-alt text-xl mx-1"></i>+44 31 276 112</span> -->
            </div>
            <div class="my-2">
                <span class="mr-3"><i class="fas fa-envelope text-xl mx-1"></i>upskillowerri@gmail.com </span>
                <span><i class="fas fa-globe text-xl mx-1"></i>www.upskillnetwork.org</span>
            </div>
        </div>
        <div class="my-5 lg:mt-16 lg:self-center ">
            <div class="my-3">
                <input v-model="contactDetail.name" class="p-3 w-full text-black  rounded-sm outline-none"  placeholder="Complete name"/><br/>
                <label class=" text-sm">Please fill out this form</label>
            </div>
            <div class="my-3">
                <input v-model="contactDetail.email" class="p-3 w-full text-black  rounded- outline-none"  placeholder="Email Address"/><br/>
                <label class="  text-sm">Please fill out this form</label>
            </div>
            <div class="my-3">
                <input v-model="contactDetail.phoneNumber" class="p-3 w-full text-black  rounded- outline-none"  placeholder="Phone Number"/><br/>
                <label class="  text-sm">Please fill out this form</label>
            </div>
            <div class="my-3">
                <textarea v-model="contactDetail.message" class="p-3 w-full text-black rounded-sm h-40 outline-none"  placeholder="Your message"/>
                <label class="text-sm">Please fill out this form</label>
            </div>
            <div class="my-3"  >
                <input type="checkbox" class="mr-2 outline-hidden" v-model="contactChecked"/>
                <span> I've read and agree to Upskill network written Privacy Policy and Terms & Conditions</span>
            </div>
            <p v-if="contactError" class="text-red-600 font-semibold text-center ">Failed please try again.....</p>
            <p v-if="contactCheckedError" class="text-red-600 font-semibold text-center ">please check the checkbox</p>
            <div class=""  >
                <button v-if="contactLoader" class=" ml-4 my-4 rounded-full  p-3 w-11/12 text-slate-8 font-bold" style="background:#3965f0"><div class="lds-ring p-0"><div></div><div></div><div></div><div></div></div></button>
                <button v-else @click="submitContactForm"  class=" ml-4 my-4 rounded-full  p-3 w-11/12 text-slate-8 font-bold" style="background:#3965f0">REGISTER</button> 
            </div>
        </div>
    </section>
</template>

<script>
import Input from '../components/form/Input.vue'
import axios from 'axios'
export default {
    data(){
        return{
            contactChecked:false,
            contactCheckedError:false,

            contactLoader: false,
            contactError: false,
            contactDetail:{
                name:'',
                email:'',
                phoneNumber:'',
                message:''
            },
        }
    },
   methods:{
        submitContactForm(){
            console.log(this.contactLoader)
            this.contactError = false
            if(this.contactChecked === false){
                this.contactCheckedError = true
            }else{
                this.contactLoader = true
                axios.post('https://upskill-network-6cf0c-default-rtdb.firebaseio.com/contactUs.json', this.contactDetail)
                .then(response => {
                    console.log(response)
                    this.contactLoader = false
                    this.$router.push('/registered')
                })
                .catch(error => {
                    console.log(error)
                    this.contactLoader = false
                    this.contactError = true
                })
            }
        }
    },
  components: { Input },
    
}
</script>

<style lang="less">
.contact{
    min-height: 100vh;
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