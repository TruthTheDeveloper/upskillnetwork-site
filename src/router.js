import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './pages/LandingPage.vue'
import AboutUs from './pages/AboutUs.vue'
import ContactUs from './pages/ContactUs.vue'
import Registered from './pages/Registered.vue'
import Admin from './pages/Admin.vue'
import PrivacyPolicy from './pages/PrivacyPolicy.vue'


export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'LandingPage',
            path:'/',
            component:LandingPage
        },
        {
            name:'AboutUs',
            path:'/aboutus',
            component:AboutUs
        },
        {
            name:'ContactUs',
            path:'/contactus',
            component:ContactUs
        },
        {
            name:'Registered',
            path:'/registered',
            component:Registered
        },
        {
            name:'Admin',
            path:'/admin',
            component:Admin
        },
        {
            name:'PrivacyPolicy',
            path:'/privacy',
            component:PrivacyPolicy
        },
    ]
})