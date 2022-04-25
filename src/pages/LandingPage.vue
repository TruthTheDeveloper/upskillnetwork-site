<template>
    <div class='grid overscroll' >
        <Header/>
        <!-- <Modal/> -->
        <div class=" pt-5 " style="background:#1f212d">
            <span class=" flex grid image pt-5 grid-rows-1 grid-cols-1 ">
                <!-- <i class="fas fa-chevron-left text-white z-10 ml-5 lg:ml-12  my-auto  justify-self-start  lg:text-4xl md:text-3xl sm:text-2xl cursor-pointer row-start-1 row-end-2 col-start-1 col-end-2" @click="activateleftSlide"></i> -->
                    <img src="./../assets/images/img-1.jpg" class="rounded-md mx-auto h-3/4 w-9/12 sm:w-10/12 xl:w-9/12 row-start-1 row-end-2 col-start-1 col-end-2" style=" " :class="{'left-slide':leftSlide && targetSlide === 3, 'right-slide':rightSlide && targetSlide === 3, 'z-10':targetSlide === 3}"/>
                    <img   src="./../assets/images/img-2.jpg" class="rounded-md mx-auto  h-3/4 sm:w-10/12 xl:w-9/12 row-start-1 row-end-2 col-start-1 col-end-2 " style=" " :class="{'left-slide':leftSlide && targetSlide === 2, 'right-slide':rightSlide && targetSlide === 2, 'z-10':targetSlide === 2}"/>
                    <img  src="./../assets/images/img-3.jpg" class="rounded-md mx-auto h-3/4 sm:w-10/12 xl:w-9/12 row-start-1 row-end-2 col-start-1 col-end-2 "  style=" " :class="{'left-slide':leftSlide && targetSlide === 1, 'right-slide':rightSlide && targetSlide === 1, 'z-10':targetSlide === 1}"/>
                <!-- <i class="fas fa-chevron-right text-white my-auto z-10 mr-5 lg:mr-12 justify-self-end  lg:text-4xl md:text-3xl sm:text-2xl cursor-pointer row-start-1 row-end-2 col-start-1 col-end-2 " @click="activateRightSlide"></i> -->
            </span>
        </div>
        <section class="overlay-pic grid text-white  bg-amber-300 lg:grid-cols-2 md:px-14 lg:px-20 xl:px-44  px-5"  style="background:#1f212d">
            <div class=" justify-self-center  ">
                <h1 class="text-4xl mt-10 font-bold text-slate-90 font-bold w-10/12 m-5 text-white  text-xl">Tech Thursday</h1>
                <p class="m-5">Tech Thursday is one of our CSR projects.
                    The platform provides opportunities for tech enthusiasts and entrepreneurs to learn new trends in tech and also explore how to leverage on tech to grow their businesses and brands.
                    4pm — 6pm every Thursday.
                    To participate: Join the community it's 100% free!
                    Register Here
                    </p>
                <div class="ml-5 my-3">
                    To attend physically, call: Ebuka — 0903 175 5669
                    Or come to 15 Ajoku Street Behind UBA Wetheral Road Owerri.
                    Physical slots available to 10persons only.
                </div>
            </div>

            <div class="  lg:mt-14  ">
                <div class="">
                    <input v-model="eventRegister.name" class="ml-4 m-2  p-3 text-black w-11/12 rounded-sm outline-none"  placeholder="Complete name"/><br/>
                    <label class="ml-4 m-2 text-sm">Please fill out this form</label>
                </div>
                <div class="">
                    <input v-model="eventRegister.email" class="ml-4 m-2  p-2 w-11/12 text-black rounded-sm outline-none"  placeholder="Email Address"/><br/>
                    <label class="ml-4 m-2 text-sm">Please fill out this form</label>
                </div>
                <div class="">
                    <input v-model="eventRegister.password" class="ml-4 m-2  p-2 w-11/12 text-black rounded-sm outline-none"  placeholder="Phone number"/><br/>
                    <label class="ml-4 m-2 text-sm">Please fill out this form</label>
                </div>
                <div class="ml-1 m-2  p-2 w-11/12"  >
                    <input type="checkbox" v-model="eventChecked"/>
                    <span>I've read and agree to Upskill network written
                    <router-link to="/privacy">
                    <a class="text-blue-600">Privacy Policy</a>
                    </router-link>
                     
                and <router-link to="/privacy">
                     <a class="text-blue-600">Terms Conditions</a>
                    </router-link></span>
                </div>
                <p v-if="eventCheckedError" class="text-red-600 font-semibold text-center ">please check the checkbox</p>
                <p v-if="eventError" class="text-red-600 font-semibold text-center ">Failed please try again.....</p>
                <div class=""  >
                    <button v-if="eventLoader" class=" ml-4 my-4 rounded-full  p-3 w-11/12  font-bold" style="background:#0096FE"><div class="lds-ring p-0"><div></div><div></div><div></div><div></div></div></button>
                    <button v-else @click="submitCourseForm" class=" ml-4 my-4 rounded-full  p-3 w-11/12  font-bold" style="background:#0096FE">REGISTER</button>
                </div>
            </div>
        </section>
        <section class="grid md:px-14 lg:px-20 xl:px-44" style="background:#1f212d">
            <div class="justify-self-center h-46">
                <h1 class="mt-5 ml-3 text-white">FEATURED IN</h1>
                <img src="./../assets/images/customer-logo-6.png" class="mt-6" />
            </div>
            
        </section>
        <section class="grid lg:grid-cols-2 text-white md:px-28 lg:px-20 xl:px-44 px-8 lg:gap-10" style="background:#1f212d">
            <div class="justify-self-center  text-3xl ">
                    <img src="./../assets/images/team.jpg" class="  mx-auto" />
            </div>
            
            <div class="justify-self-center ">
                <h3 class="font-bold text-4xl text-slate-80 text-white my-5">About Us</h3>
                <p class="text-lg">Upskill Network was born to build a legacy of digital talents and human capital development in Africa. We partner with stakeholders at different levels to promote grassroot economic development through inclusive digital skills/vocational technology training programs.
                As the world recovers from the global pandemic (covid19 virus) and people gradually return to work, Businesses continue to explore innovative ways to automate their processes, focusing on productivity and decongesting their physical offices by adopting remote working and online collaboration using digital tools. This new reality has created massive job opportunities for youths with digital skills in the business space</p>
                <!-- <p class="mt-5">Teaching students all about the beste SEO techniques is something I love to do as a full-time job</p> -->
            </div>
        </section>
        <section class="grid md:px-10 xl:px-44 px-5 text-white" style="background:#1f212d">
            <div class="ml-3  mt-32 mb-8 text-4xl font-bold">
                <h1 class="text-center text-slate-8">Our Outfits</h1>
            </div>
            <div class="grid lg:grid-cols-2">
                <section>
                    <div class="my-6 text-lg ">
                        <div class="flex m-2">
                            <span class="bg-amber-300 pt-2 px-4 h-10 rounded-full text-lg" style="background:#0096FE">1</span>
                            <h1 class="ml-1 text-xl font-bold p-2 ">Training</h1>
                        </div>
                        <ul class="mt-2 ml-16 list-disc">
                            <li class="my-5">Professional Digital Skills Certified Programs in digital marketing, programming, graphics design, user interface design (UI), user experience design (UX), video editing, Office adminstration. Social media marketing, Google SEO, WordPress Web Design.</li>
                            <li class="my-5">Community Impact Digital Skills Training for youths in rural and suburban settlements:
                                We partner with stakeholders at different levels to promote grassroot economic development through inclusive digital skills/vocational technology training programs.
                            </li>
                            <li class="my-5">Smart Kids Program:
                                This outfit is created to introduce children to technology and help them explore digital literacy at an early stage.
                            </li>
                        </ul>
                        <!-- <p class="mt-2 ml-16">
                        </p> -->
                    </div>
                    <div class="mt-6 text-lg">
                        <div class="flex m-2">
                            <span class="bg-amber-300 p-2 px-4 h-10  m-2 rounded-full text-lg " style="background:#0096FE">3</span>
                            <h1 class="text-xl ml-1 font-bold mt-4">Media</h1>
                        </div>
                        <p class="mt-2 ml-16">Upskill TV
                            Upskill TV is a media outfit created by Upskill Network to provide a platform that promotes the African dream and shares our unique stories with the rest of the world</p>
                    </div>
                </section>
                <section>
                    <div class="my-6 text-lg">
                        <div class="flex m-2">
                            <span class="bg-amber-300 p-2 px-4 m-2 h-10 rounded-full text-lg" style="background:#0096FE">2</span>
                            <h1 class="ml-1 text-xl font-bold mt-4"> Community Impact Programs</h1>
                        </div>
                        <ul class="mt-2 ml-16 list-disc">
                            <li class="my-5">Tech Thursday (Thursdays 4pm - 6pm) An evening fellowship where entrepreneurs and techies come together to explore new trends, and opportunities in tech.</li>
                            <li class="my-5">Pink Project (August/September) A 2weeks digital skills training bootcamp strictly for young women between the ages of 17 to 35years.
                            Upskill Job Hunt (May)
                            It's the biggest job matching outfit in Africa. The hunt provides an opportunity for employers to discover and hire digital talents. It also helps early career starters to learn in-demand digital skills and showcase their digital talents.</li>
                            <li class="my-5">Startup Hack (November)
                            Startup Hack is an annual digital workshop that takes entrepreneurs through the fundamental steps and processes of building right. It covers intensive masterclasses on entrepreneurship, startup development, and product marketing; it uncovers important principles of developing market worthy products. It also allows entrepreneurs the opportunity to work with a new team and build something new from scratch.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
        <section class=" grid lg:grid-cols-2 md:px-10 xl:px-44 text-white" style="background:#1f212d">
            <div class=" justify-self-center w-10/12 my-10">
                <h1 class="text-4xl my-5 font-bold text-slate-8">
                     Our Vision And Mission
                </h1>
                <p class="text-lg">The future is now. Africa's youth are the new generation of digital talents. We are here to make sure they have the skills to empower and uplift their communities.Our vision To influence 70% of youth employment in the continent through human capital development and grassroot economic development.Our MissionTo develop home based digital talents in Africa, and attract enough jobs to retain them Join this movement. </p>
            </div>
            <div class="justify-self-center w-11/12 lg:my-16">
                <img src="./../assets/images/img-4.jpg" class=" w-11/12 mx-auto" />
            </div>
        </section>
        <section class="xl:px-44 text-white" style="background:#1f212d">
            <h1 class="text-center  text-4xl my-20 font-bold text-slate-8">Course Video  Presentation</h1>
            <div class="justify-self-center">
                <img src="./../assets/images/presentation.jpg" class=" w-10/12 lg:w-9/12 xl:w-8/12 mx-auto" />
            </div>
        </section>
        <section class="text-center  py-10" style="background:#1f212d">
            <div class="bg-white">
                <h1 class="text-2xl py-5 text-center font-bold text-slate-8 text-black">Meet our sponsors and partner</h1>
                <section class="md:flex">
                    <div class="w-24 mx-auto">
                        <img src="./../assets/images/logo-1.png"/>
                    </div>
                    <div class="w-24 mx-auto">
                        <img src="./../assets/images/logo-2.png"/>
                    </div>
                    <div class="w-24 mx-auto">
                        <img src="./../assets/images/logo-3.jpg"/>
                    </div>
                    <div class="w-24 my-auto mx-auto">
                        <img src="./../assets/images/logo-4.png"/>
                    </div>
                    <div class="mx-auto w-24">
                        <img src="./../assets/images/logo-5.png"/>
                    </div>
                    <div class="mx-auto w-24">
                        <img src="./../assets/images/logo-6.jpg"/>
                    </div>
                    <div class="mx-auto w-24 ">
                        <img src="./../assets/images/logo-7.png"/>
                    </div>
                    <div class="mx-auto w-32">
                        <img src="./../assets/images/logo-8.png"/>
                    </div>
                </section>
                    
            </div>
        </section>
        <section class="lg:px-44 px-5 text-white" style="background:#1f212d" >
            <h1 class="text-center text-slate-8 text-3xl my-14 font-bold text-white">Check out our attendees testimonials from previous editions of the SEO Training</h1>
            <div class="m-5 grid grid-rows-1 grid-cols-1">
                <!-- <i class="fas fa-chevron-left  text-white my-auto mr-10 lg:text-4xl md:text-3xl sm:text-2xl cursor-pointer"></i> -->
                 <!-- <div class=" row-start-1 row-end-2 col-start-1 col-end-2 " :class="{'test-left-slide':testLeftSlide && testTargetSlide === 3, 'test-right-slide':testRightSlide && testTargetSlide === 3, 'z-10':testTargetSlide === 3}">
                     <div class="flex">
                         <section class=" ">
                            <img src="./../assets/images/ikeagwu.jpg" class=" w-full md:w-24 mx-auto my-0 lg:my-5 lg:w-36 " />
                        </section>
                        <section class="  self-center lg:ml-5 col-start-1 col-end-2 ">
                            <p class="mx-auto text-center lg:text-left text-lg" >I took the SEO course about a year ago and i am very happy it taught me all the basis of search engine optimization and some trick</p>
                            <h1 class="text-center lg:text-left my-5 font-semibold text-slate-8">Jude thorn - Online Marketer</h1>
                        </section>
                     </div>
                 </div> -->
                 <!-- <div class=" row-start-1 row-end-2 col-start-1 col-end-2 " :class="{'test-left-slide':testLeftSlide && testTargetSlide === 3, 'test-right-slide':testRightSlide && testTargetSlide === 3, 'z-10':testTargetSlide === 3}">
                     <div class="flex">
                         <section class=" ">
                            <img src="./../assets/images/Edjar.jpg" class="w-full md:w-24 mx-auto my-0 lg:my-5 lg:w-36" />
                        </section>
                        <section class="  self-center lg:ml-5">
                            <p class="mx-auto text-center lg:text-left text-lg  ">I took the SEO course about a year ago and i am very happy it taught me all the basis of search engine optimization and some trick</p>
                            <h1 class="text-center lg:text-left my-5 font-semibold text-slate-8">Jude thorn - Online Marketer</h1>
                        </section>
                     </div>
                 </div> -->
                 <div class="row-start-1 row-end-2 col-start-1 col-end-2 ">
                     <div class="flex">
                         <section class=" ">
                            <img src="./../assets/images/vitalis.jpg" class=" w-full md:w-24 mx-auto my-0 lg:my-5 lg:w-36" />
                        </section>
                        <section class="  self-center lg:ml-5">
                            <p class="mx-auto text-center lg:text-left text-lg ">I took the SEO course about a year ago and i am very happy it taught me all the basis of search engine optimization and some trick</p>
                            <h1 class="text-center lg:text-left my-5 font-semibold text-slate-8">Jude thorn - Online Marketer</h1>
                        </section>
                     </div>
                 </div>
                 <!-- <i class="fas fa-chevron-right  text-white my-auto ml-10 lg:text-4xl md:text-3xl sm:text-2xl cursor-pointer"></i> -->
            </div>
        </section>
        <section class="grid text-white  lg:px-44 px-5" style="background:#1f212d">
            <div class="grid hub-space rounded-md grid-cols-4 grid-rows-1">
                <div class="col-start-1 col-end-6 row-start-1 row-end-6">
                    <!-- <h1 class="text-center text-4xl mt-20 mx-10  font-bold">December 22nd 2020 at Innovation Hub Space</h1> -->
                    <p class="text-center mx-5 mt-10 text-lg">UPSKILL NETWORK is driven by partnership and promoting positive change.
                        We collaborate with a broad spectrum of organisations and stakeholders in Nigeria, leveraging our global networks, expertise and trust to help them achieve their goals. When it comes to our business partners, we fully understand their corporate social responsibility and marketing strategies.
                        Partnering with us can mean anything from simple event sponsorship to long-term collaboration. You  are guaranteed:
                        To gain access to our network of expertise
                        Achieve your Corporate Social Responsibility (CSR) aims
                        Enhance your brand</p>
                    <button @click="openSponsorModal"  class=" text-blac font-semibold my-8 mb-24 px-10 rounded-full py-3 mx-auto flex"  style="backgroundColor:#0096FE">SPONSOR</button>
                </div>
                <div v-show="sponsorModal" class="col-start-1 col-end-6  md:col-start-2 md:col-end-4 row-start-1 row-end-6 animate__bounceIn text-black bg-white rounded-md shadow-2xl">                    
                    <i class="fas fa-times text-black text-xl ml-3 mt-3 cursor-pointer" @click="closeSponsorModal"></i>
                    <h1 class="text-center text-lg font-bold my-10">Register as a sponsor</h1>
                    <div class="mx-2 lg:mx-10">
                        <input v-model="sponsorRegister.name" class="p-3 text-black w-full  rounded-sm outline-none border-2 border-slate-400"  placeholder="Complete name"/><br/>
                        <label class="ml-4 m-2 text-sm">Please fill out this form</label>
                    </div>
                    <div class="mx-2 lg:mx-10">
                        <input v-model="sponsorRegister.phoneNumber"  class="p-3 text-black w-full rounded-sm outline-none border-2 border-slate-400"  placeholder="phone"/><br/>
                        <label class="ml-2 m-2 text-sm">Please fill out this form</label>
                    </div>
                    <div class="mx-2 lg:mx-10">
                        <input v-model="sponsorRegister.email"   class="p-3 text-black w-full rounded-sm outline-none border-2 border-slate-400"  placeholder="Email"/><br/>
                        <label class="ml-2 m-2 text-sm">Please fill out this form</label>
                    </div>
                    <p v-if="sponsorError" class="text-red-600 font-semibold text-center ">Failed please try again.....</p>
                    <p v-if="sponsorCheckedError" class="text-red-600 font-semibold text-center ">please check the checkbox</p>
                    <div class="ml-2 lg:mx-10">
                        <input type="checkbox" class="" v-model="sponsorChecked"/>
                        <span class="text-xs text-center ">I've read and agree to Upskill network written
                    <router-link to="/privacy">
                    <a class="text-blue-600">Privacy Policy</a>
                    </router-link>
                     
                and <router-link to="/privacy">
                     <a class="text-blue-600">Terms Conditions</a>
                    </router-link></span>
                    </div>
                    <button v-if="sponsorLoader" class="text-blac font-semibold my-4  px-10 rounded-full py-3 mx-auto text-white flex" style="backgroundColor:#0096FE"><div class="ld-ring p-0"><div></div><div></div><div></div><div></div></div></button>
                    <button v-else @click="submitSponsorForm" class="text-blac font-semibold my-4  px-10 rounded-full py-3 mx-auto text-white flex"  style="backgroundColor:#0096FE">Register</button>
                </div>
            </div>
        </section>
        <section class="grid lg:px-44 py-10 text-white" style="background:#1f212d">
            <div class="grid w-10/12 lg:w-8/12 xl:w-6/12 justify-self-center ">
                <h1 class="text-3xl text-center my-14 font-semibold text-slate-80">Stay updated with news by subscribing to our newsletter and our social channels</h1>
            <div><input v-model="newsletterEmail.email" class="ml-4 m-2 border-blue-200 border-2 outline-none p-2 w-11/12 rounded-sm text-black" placeholder="Email" /><br/>
            <div class="ml-1 m-2  p-2 w-11/12 text-sm">
                <input type="checkbox" class="mr-2 outline-hidden" v-model="newsletterEmailChecked"/><span>I've read and agree to Upskill network written
                    <router-link to="/privacy">
                    <a class="text-blue-600">Privacy Policy</a>
                    </router-link>
                     
                and <router-link to="/privacy">
                     <a class="text-blue-600">Terms Conditions</a>
                    </router-link></span>
            </div>
            </div>
            <p v-if="newsletterError" class="text-red-600 font-semibold text-center ">Failed please try again.....</p>
            <p v-if="newsletterEmailCheckedError" class="text-red-600 font-semibold text-center ">please check the checkbox</p>
            <!-- {{newsletterError}} -->
            <button v-if="newsletterLoader"   class=" ml-4 my-4 rounded-full bg-amber-300  p-3 w-11/12 font-semibold text-sm " style="background:#0096FE"><div class="lds-ring p-0 "><div></div><div></div><div></div><div></div></div></button>
            <button v-else @click="submitNewsletterForm" class=" ml-4 my-4 rounded-full bg-amber-300  p-3 w-11/12 font-semibold text-sm " style="background:#0096FE">SIGN UP</button>
            <div class="flex  justify-self-center">
            <span class="bg-amber-300 self-center px-2 py-2 m-2 rounded-full" style="background:#0096FE">
                <a href="https://www.facebook.com/upskillnetwork" target="_blank"><i class="fab fa-facebook-f text-lg mx-2"></i></a>
            </span>
            <span class="bg-amber-300 rounded-full px-2 py-2 m-2" style="background:#0096FE">
                <a href=""><i class="fab fa-twitter text-lg mx-2"></i></a>
            </span>
            <span class="bg-amber-300 rounded-full px-2 py-2 m-2" style="background:#0096FE">
                <a href="https://www.instagram.com/upskill_network/" target="_blank"><i class="fab fa-instagram text-lg mx-2"></i></a>
            </span>
            <span class="bg-amber-300 rounded-full px-2 py-2 m-2"  style="background:#0096FE">
                <a href=""><i class="fab fa-linkedin-in text-lg mx-2"></i></a>
            </span>
            <span class="bg-amber-300 rounded-full px-2 py-2 m-2"  style="background:#0096FE">
                <a href=""><i class="fa fa-whatsapp text-lg mx-2"></i></a>
            </span>
            <span class="bg-amber-300 rounded-full px-2 py-2 m-2"  style="background:#0096FE">
                <a href="https://www.youtube.com/channel/UCxjXidHLoOYbsm5IwHj1fuA" target="_blank"><i class="fa fa-youtube text-lg mx-2"></i></a>
            </span>
            </div>
            </div>
        </section>
    </div>    
</template>

<script>
import Button from '../components/Button.vue';
import Input from '../components/form/Input.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Modal from '../components/Modal.vue'
import axios from 'axios'

export default {
    components:{
        Header,
        Button,
        Input,
        Footer,
        Modal
  },

    data(){
        return{
            sponsorModal:false,
            sponsorLoader:false,

            eventChecked:false,
            eventCheckedError:false,

            newsletterEmailChecked:false,
            newsletterEmailCheckedError:false,

            sponsorChecked:false,
            sponsorCheckedError:false,
            sponsorError:false,

            testRightSlide:false,
            testLeftSlide:false,

            rightSlide:false,
            leftSlide:false,

            targetSlide:1,
            testTargetSlide:1,

            eventLoader:false,
            newsletterLoader:false,
            eventError:false,
            newsletterError:false,
            eventRegister:{
                name:'',
                phoneNumber:'',
                email:''
            },
            newsletterEmail:{
                email:''
            },
            sponsorRegister:{
                name:'',
                phoneNumber:'',
                email:'',
            }
        }
    },

    methods:{
        closeSponsorModal(){
            return this.sponsorModal = false
        },
        openSponsorModal(){
            return this.sponsorModal = true
        },
        activateRightSlide(){
            if(this.targetSlide > 3){
                this.targetSlide = 1
            }
            setTimeout(() => {
            if(this.rightSlide === true){
                this.rightSlide = false
                
            }else if(this.rightSlide === false){
                this.targetSlide += 1
                this.rightSlide = true
                
            }
            }, 1000);
            
        },

        activateleftSlide(){
            if(this.targetSlide > 3){
                this.targetSlide = 1
            }
            setTimeout(() => {
            if(this.leftSlide === true){
                this.leftSlide = false
                
            }else if(this.leftSlide === false){
                this.targetSlide += 1
                this.leftSlide = true
                
            }
            }, 1000);

        },

        submitCourseForm(){
            this.eventError = false
            if(this.eventChecked === false){
                this.eventCheckedError = true
            }else{
                this.eventLoader = true
                axios.post('https://upskill-network-6cf0c-default-rtdb.firebaseio.com/eventRegister.json', this.eventRegister)
                .then(response => {
                    console.log(response)
                    this.eventLoader = false
                    this.$router.push('/registered')
                })
                .catch(error => {
                    console.log(error)
                    this.eventLoader = false
                    this.eventError = true
                })
            }
        },

        submitSponsorForm(){
            this.sponsorError = false
            if(this.sponsorChecked === false){
                this.sponsorCheckedError = true
            }else{
                this.sponsorLoader = true
                axios.post('https://upskill-network-6cf0c-default-rtdb.firebaseio.com/sponsorRegister.json', this.sponsorRegister)
                .then(response => {
                    console.log(response)
                    this.sponsorLoader = false
                    this.$router.push('/registered')
                })
                .catch(error => {
                    console.log(error)
                    this.sponsorLoader = false
                    this.sponsorError = true
                })
            }
        },

        submitNewsletterForm(){
            this.newsletterError = false
            
            if(this.newsletterEmailChecked === false){
                this.newsletterEmailCheckedError = true
            }else{
                this.newsletterLoader = true
                axios.post('https://upskill-network-6cf0c-default-rtdb.firebaseio.com/newsLetter.json', this.newsletterEmail)
                .then(response => {
                    console.log(response)
                    this.newsletterLoader = false
                    this.$router.push('/registered')
                })
                .catch(error => {
                    console.log(error)
                    this.newsletterLoader = false
                    this.newsletterError = true
                })
            }
        },

        
    },



    watch:{
        rightSlide(val){
            // console.log(this.targetSlide)
            if(this.targetSlide > 3){
                this.targetSlide = 1
            }
            setTimeout(() => {
            if(val){
                this.rightSlide = false
                
            }else if(val === false){
                this.targetSlide += 1
                this.rightSlide = true
                
            }
            }, 3000);
        },


        testRightSlide(val){
            // console.log(this.targetSlide)
            if(this.testTargetSlide > 3){
                this.testTargetSlide = 1
            }
            setTimeout(() => {
            if(val){
                this.testRightSlide = false
                
            }else if(val === false){
                this.testTargetSlide += 1
                this.testRightSlide = true
                
            }
            }, 1000);
        },
    },

    mounted(){
        this.rightSlide = true
        this.testRightSlide = true

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
.hub-space{
    background:linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('./../assets/images/date-background.jpg');
    background-size: cover;

}

.overscroll{
    overflow-x: hidden;
}

.image{
    margin-top:-4rem;

   

    @media @tablet-lg{
        margin-top:-11rem;
    }

     @media @laptop-sm{
        margin-top:-16rem;
    }

    @media @screens{
        margin-top: -20rem;
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



.ld-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 24px;
  bottom: 10px;
  left:15px;
}
.ld-ring div {
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
.ld-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.ld-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.ld-ring div:nth-child(3) {
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


.right-slide{
    
    animation: slideR 0.4s linear;
}
.left-slide{
    animation: slideL 0.4s linear;
}

@keyframes slideR{
    from{transform:translateX(0%)}
    to{transform:translateX(100%)}
}

@keyframes slideL{
    from{transform:translateX(0%)}
    to{transform:translateX(-100%)}
}


.test-right-slide{
    
    animation: slideR 0.4s linear;
}
.test-left-slide{
    animation: slideL 0.4s linear;
}

@keyframes slideR{
    from{transform:translateX(0%)}
    to{transform:translateX(100%)}
}

@keyframes slideL{
    from{transform:translateX(0%)}
    to{transform:translateX(-100%)}
}
</style>