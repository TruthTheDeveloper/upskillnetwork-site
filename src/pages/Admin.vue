<template>
    <section class="bg px-2 md:px-12 lg:px-48">
        <h1 class="text-3xl text-center pt-8">Welcome to Admin Dashboard</h1>
        <section class="grid md:grid-cols-4 my-5 ">
            <div class="mx-5 sm:mx-32  my-2 md:m-2 text-white  rounded-md shadow-md" style="background:#0097F9">
                <h1 class=" p-4 "> Total No of users who registerd for a course</h1>
                <h5 class="m-4 font-semibold inline-block text-2xl mr-5">{{computeCourseData}}</h5>
                <i class="fas fa-users text-2xl "></i>
            </div>
            <div class="mx-5 sm:mx-32 my-2 md:m-2 rounded-md shadow-md" style="background:#B4E0E8">
                <h1 class=" p-4 "> Total No of users who registerd for an Event</h1>
                <p class="m-4 font-semibold text-2xl inline-block mr-5">{{computeEventData}}</p>
                <i class="fas fa-calendar-check text-2xl"></i>
            </div>
            <div class="mx-5 my-2 sm:mx-32  md:m-2 text-white  rounded-md shadow-md" style="background:#ED466F">
                <h1 class=" p-4 "> Total No of users who registerd for a newsletter</h1>
                <p class="m-4 font-semibold text-2xl inline-block mr-5">{{computeNewsLetterData}}</p>
                <i class="fas fa-envelope text-2xl"></i>
            </div>
            <div class="mx-5 my-2 sm:mx-32  md:m-2  text-white  rounded-md shadow-md" style="background:#AA98E9">
                <h1 class=" p-4 "> Total No of users who want to contact us</h1>
                <p class="m-4 font-semibold text-2xl inline-block mr-5">{{computeContactUsData}}</p>
                <i class="fas fa-address-book text-2xl"></i>
            </div>
            <div class="mx-5 sm:mx-32 my-2 md:m-2 rounded-md shadow-md" style="background:#09D4A0">
                <h1 class=" p-4 "> Total No of Sponsors</h1>
                <p class="m-4 font-semibold text-2xl inline-block mr-5">{{computeSponsorData}}</p>
                <i class="fas fa-money-bill text-2xl"></i>
            </div>
        </section>
        <div class=" my-24 h-96 overflow-auto">
            <p class="text-center py-5 font-semibold">Users who register for the course</p>
            <div class=" grid grid-cols-4 m-2  text-blue-500 font-semibold ">
            <div class="mx-10">
                        <h1 class=" m-3">No</h1>
                    </div>
                    <div class="">
                        <h1 class=" m-3">UserName</h1>
                    </div>
                    <div class="">
                        <h1 class=" m-3">Email</h1>
                    </div>
                    <div class="px-16 ">
                        <h1 class="m-3">phoneNumber</h1>
                    </div>
            </div>
            <section v-for="(data, index) in courseData"  class="grid grid-rows-1 bg-white lg:px-12 px-3 shadow-sm">
                <div class="bg-div grid grid-cols-4 m-2">
                <CourseUser :data='data' :index='index' :key='index'/>
                </div>
            </section>
        </div>
        <div class=" my-24 h-96 overflow-auto">
            <p class="text-center py-5 font-semibold">Users who register an Event</p>
            <!-- <div class=""><span>.No</span> <span>UserName</span> <span>Email</span> <span>Phone Number</span></div> -->
            <div class=" grid grid-cols-4 m-2  text-blue-500 font-semibold ">
                    <div class="mx-10">
                        <h1 class=" m-3">.No</h1>
                    </div>
                    <div class="">
                        <h1 class=" m-3">UserName</h1>
                    </div>
                    <div class="">
                        <h1 class=" m-3">Email</h1>
                    </div>
                    <div class="px-16 ">
                        <h1 class="m-3">phoneNumber</h1>
                    </div>
                </div>
            <section v-for="(data, index) in eventData" class="grid grid-rows-1 bg-white lg:px-12 px-3 shadow-sm">
                <div class="bg-div grid grid-cols-4 m-2">
                    <EventUser :data='data' :index='index' :key='index'/>
                </div>
            </section>
        </div>

        <div class=" my-24 h-96 overflow-auto">
            <p class="text-center py-5 font-semibold">Users who sponsor us</p>
            <div class=" grid grid-cols-4 m-2  text-blue-500 font-semibold ">
            <div class="mx-10">
                        <h1 class=" m-3">No</h1>
                    </div>
                    <div class="">
                        <h1 class=" m-3">UserName</h1>
                    </div>
                    <div class="">
                        <h1 class=" m-3">Email</h1>
                    </div>
                    <div class="px-16 ">
                        <h1 class="m-3">phoneNumber</h1>
                    </div>
            </div>
            <section v-for="(data, index) in sponsorData"  class="grid grid-rows-1 bg-white lg:px-12 px-3 shadow-sm">
                <div class="bg-div grid grid-cols-4 m-2">
                <Sponsors :data='data' :index='index' :key='index'/>
                </div>
            </section>
        </div>

        <div class=" my-24 h-96 overflow-auto">
            <p class="text-center py-5 font-semibold">Users who subscribe for a newsLetter</p>
            <div class=" grid grid-cols-2 m-2  text-blue-500 font-semibold ">
                <div class="mx-10">
                    <h1 class=" m-3">No</h1>
                </div>
                <div class="">
                    <h1 class=" m-3">Email Address</h1>
                </div>
            </div>
            <section v-for="(data, index) in newsLetterData" class="grid grid-rows-1 bg-white lg:px-12 px-3 shadow-sm">
                <div class="bg-div grid grid-cols-2 m-2">
                    <NewsletterUser :data='data' :index='index' :key='index'/>
                </div>
            </section>
        </div>

        <div class=" my-24 h-96 overflow-auto ">
            <p class="text-center py-5 font-semibold">Users who want to contact Us</p>
            <div class=" grid grid-cols-4 m-2  text-blue-500 font-semibold ">
                <div class="">
                    <h1 class=" m-3">.No</h1>
                </div>
                <div class="">
                    <h1 class=" m-3">UserName</h1>
                </div>
                <div class="">
                    <h1 class=" m-3">Email</h1>
                </div>
                <div class="px-16 ">
                    <h1 class="m-3">phoneNumber</h1>
                </div>
            </div>
            <section v-for="(data, index) in contactUs" class="grid grid-rows-1 bg-white lg:px-12 px-3 shadow-sm">
                <div class="bg-div  grid grid-rows-2 m-2">
                    <ContactUs :data='data' :index='index' :key='index'/>
                </div>
            </section>3
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import CourseUser from '../components/CourseUser.vue'
import EventUser from '../components/Eventuser.vue'
import NewsletterUser from '../components/NewsletterUser.vue'
import ContactUs from '../components/ContactUs.vue'
import Sponsors from '../components/Sponsors.vue'
export default {
  components: { CourseUser, EventUser, NewsletterUser, ContactUs, Sponsors },

    data(){
        return{
            courseData:[],
            eventData:[],
            newsLetterData:[],
            contactUs:[],
            sponsorData:[]
        }
    },

    computed:{
        computeCourseData(){
            return this.courseData.length
        },
        computeSponsorData(){
            return this.sponsorData.length
        },
        computeEventData(){
            return this.eventData.length
        },
        computeNewsLetterData(){
            return this.newsLetterData.length
        },
        computeContactUsData(){
            return this.contactUs.length
        }
    },

    methods:{
        getCourseRegister(){
            axios.get('https://upskill-network-6cf0c-default-rtdb.firebaseio.com/courseRegister.json')
            .then(
                response => {
                    // console.log(response.data)
                    for(const i in response.data){
                        console.log(response.data[i])
                        this.courseData.push(response.data[i])
                    }
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )
        },

        getSponsorData(){
            axios.get('https://upskill-network-6cf0c-default-rtdb.firebaseio.com/sponsorRegister.json')
            .then(
                response => {
                    // console.log(response.data)
                    for(const i in response.data){
                        console.log(response.data[i])
                        this.sponsorData.push(response.data[i])
                    }
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )
        },

        getEventRegister(){
            axios.get('https://upskill-network-6cf0c-default-rtdb.firebaseio.com/eventRegister.json')
            .then(
                response => {
                    console.log('event')
                    for(const i in response.data){
                        // console.log(response.data[i])
                        this.eventData.push(response.data[i])
                    }

                    console.log(this.eventData)
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )
        },
        getNewsLetter(){
            axios.get('https://upskill-network-6cf0c-default-rtdb.firebaseio.com/newsLetter.json')
            .then(
                response => {
                   for(const i in response.data){
                        console.log(response.data[i])
                        this.newsLetterData.push(response.data[i])
                    }
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )
        },

        getContactUs(){
            axios.get('https://upskill-network-6cf0c-default-rtdb.firebaseio.com/contactUs.json')
            .then(
                response => {
                    for(const i in response.data){
                        console.log(response.data[i])
                        this.contactUs.push(response.data[i])
                    }
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )
        }
    },
    mounted(){
        this.getCourseRegister()
        this.getNewsLetter()
        this.getEventRegister()
        this.getContactUs()
        this.getSponsorData()
    }
}
</script>

<style scoped>


.bg{
    background-color: #F8F8F8;
}

.bg-div{
    background-color: #dff4f8f3;
}

.mi{
    background: red;
}


</style>