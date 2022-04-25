<template>
    <div v-if="sylabusModal" class="bg-white grid lg:grid-cols-2  lg:mt-3 text-white w-11/12 sm:w-10/12 md:w-9/12 justify-self-center z-2  col-start-1 col-end-2 row-start-1 row-end-2 mx-5  rounded-md shadow-md overflow-auto z-30 animate__animated animate__bounce"  style="background:#1f212d">
    <i class="fas fa-times text-white text-xl ml-3 mt-3 cursor-pointer" @click="closeSylabusModal"></i>
    <h1 class="justify-self-center  text-lg font-bold my-5 lg:col-span-2">View Our Curriculum</h1>
        <section>
        <div class="my-5 ml-5">
            <h2 class="mx-auto my-3"><span class="font-bold mr-2" style="color:#0096FE">Module 1</span> introduction to Digital Marketing</h2>
            <p>Key Learning Outcomes</p>
            <ul>
                <li>History of Marketing</li>
                <li>Traditional Marketing</li>
                <li>Digital Marketing vs Traditional Marketing</li>
                <li>Channels & Platforms in Digital marketting</li>
            </ul>
        </div>
        <div class="my-5 ml-5">
            <h2 class="mx-auto my-3"><span class="font-bold mr-2" style="color:#0096FE">Module 2</span>Digital Marketing strategy</h2>
            <p>Key Learning Outcomes</p>
            <ul>
                <li>Creative Strategy</li>
                <li>Digital Marketing Strategy</li>
                <li>Understanding your Product/Brand</li>
                <li>Understanding your Consumer</li>
                <li>Map out USP's and Objectives</li>
                <li>Understanding your ConsumerSTDC(See, Think,Do,Care)Framework & MIcro Moments</li>
                <li>Digital Marketing Media Mix - Paid,Earned & Owned Media</li>
                <li>Setting Objectives & KPi's</li>
            </ul>
        </div>
        <div class="my-5 ml-5">
            <h2 class="mx-auto my-3"><span class="font-bold mr-2" style="color:#0096FE">Module 3</span>Content Marketing</h2>
            <p>Key Learning Outcomes</p>
            <ul>
                <li>Storytelling & Copywritting</li>
                <li>Content Plan Development</li>
                <li>Social Media Management</li>
                <li>Influencer marketting</li>
                <li>Transporting Viral Marketing & Empowermnet Marketing</li>
            </ul>
        </div>
        <div class="my-5 ml-5">
            <h2 class="mx-auto my-3"><span class="font-bold mr-2" style="color:#0096FE">Module 4</span>Social Media Management</h2>
            <p>Key Learning Outcomes</p>
            <ul>
                <li>Storytelling & Copywritting</li>
                <li>Content Plan Development</li>
                <li>Social Media Management</li>
                <li>Influencer marketting</li>
                <li>Transporting Viral Marketing & Empowermnet Marketing</li>
            </ul>
        </div>
        </section>
        <section>
            <div class="my-5 ml-5">
            <h2 class="mx-auto my-3"><span class="font-bold mr-2" style="color:#0096FE">Module 5</span>Web UX for Marketing Acquisition & Conversion</h2>
            <p>Key Learning Outcomes</p>
            <ul>
                <li>Review best practices of digital marketing UX</li>
                <li>Explore how on site marketing works and the ways to optimize those efforts</li>
                <li>Evaluate the design, functionality and effectiveness of landing pages</li>
                <li>Develop landing pages and forms for your buisness</li>
            </ul>
        </div>
        <div class="my-5 ml-5">
            <h2 class="mx-auto my-3"><span class="font-bold mr-2" style="color:#0096FE">Module 6</span>Search Engine Optimization(SEO)</h2>
            <p>Key Learning Outcomes</p>
            <ul>
                <li>On-page and oFF page SEO</li>
                <li>Link Building</li>
                <li>Keyword Research</li>
                <li>Inbound Marketting</li>
            </ul>
        </div>
        <div class="my-5 ml-5">
            <h2 class="mx-auto my-3"><span class="font-bold mr-2" style="color:#0096FE">Module 7</span>Media Buying</h2>
            <p>
                An integral part of the Digital Media mix is Paid Media, it helps give you target audience and amplify the reach of your Marketing to understand how to run a media buying campaign so as to make effective use of your Marketing Budget, We will focus on how to leverage the right media channels and platforms and develop content that conerts on these plaforms
            </p>
        </div>
        <div class="my-5 ml-5">
            <h2 class="mx-auto my-3"><span class="font-bold mr-2" style="color:#0096FE">Module 8</span>Email Marketing</h2>
            <p>
                Email is effective marketing channel, especially at the conversion and relention stage of the customer journey, in this course, you learn how to create and execute email campagn and measure the results
            </p>
        </div>
        <div class="my-5 ml-5">
            <h2 class="mx-auto my-3"><span class="font-bold mr-2" style="color:#0096FE">Module 9</span>Data Analytic & Reporting</h2>
            <p>
                The beauty of Digital Marketing is all(almost) Marketing effort can be tracked down to the last Naira! We will be showing you here how to track actions that happen online and how to impacts your buisness, in this module, you will learn how to use Google Analytic to evaluate your audience and engaement efforts evaluate your users conversion to your goals and use those insights to plan and optimize your marketing budgets
            </p>
        </div>
        <div class="my-5 ml-5">
            <h2 class="mx-auto my-3"><span class="font-bold mr-2" style="color:#0096FE">Module 10</span>Roll Out and Take to Market Strategy</h2>
            <p>
                Strategy is useless without execution, A digital Marketing Strategy is incomplete without an execution plan, Here, tou will learn how to set realistic goals, budget and timeliness for campaign sucess
            </p>
        </div>
        <div class="my-5 ml-5">
            <h2 class="mx-auto my-3"><span class="font-bold mr-2" style="color:#0096FE">Module 11</span>Pitch Day and Graduation & Certification</h2>
            <p>
                Strategy is useless without execution, A digital Marketing Strategy is incomplete without an execution plan, Here, tou will learn how to set realistic goals, budget and timeliness for campaign success
            </p>
        </div>
        </section>
        
    </div>
</template>

<script>
import 'animate.css';
export default {
    props:{
        sylabusModal:{
            type:Boolean,
            required:true
        }
    },

    methods:{
        closeSylabusModal(){
            this.$emit('closeSylabusModal', false)
        }
    }
    
}
</script>

<style>

</style>