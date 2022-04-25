<template>
    <section class="about grid grid-rows-4 lg:grid-cols-4 text-slate-200 px-5 lg:px-12 py-16">
        <div class="lg:justify-self-center">
            <h1 class="text-xl font-semibold  mt-8">About Corso</h1>
            <p class="mt-2 pr-5">We're passionate about teaching people how to do better Seo for their online presence</p>
        </div>
        <div class="lg:justify-self-center">
            <h1 class="mt-6 mb-2 text-lg font-semibold text-slate-200">Links</h1>
            <ul class="list ml-4">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Article Details</li>
            </ul>
            
        </div>
        <div class="lg:justify-self-center">
            <h1 class="mt-6 mb-2 text-lg font-semibold text-slate-200">Links</h1>
            <uL class="list ml-4">
                <li>Article Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </uL>
        </div>
        <div class="lg:justify-self-center">
            <h1 class="mt-6 text-lg font-semibold text-slate-200">Socal Media</h1>
            <p class="my-3">For news & updates follow us</p>
            <div class="flex">
                <span class="">
                    <i class="fab fa-facebook-f text-lg mr-2"></i>
                </span>
                <span class="">
                    <i class="fab fa-twitter text-lg mx-2"></i>
                </span>
                <span class="">
                    <i class="fab fa-pinterest-p text-lg mx-2"></i>
                </span>
                <span class="">
                    <i class="fab fa-instagram text-lg mx-2"></i>
                </span>
                <span class="">
                    <i class="fab fa-linkedin-in text-lg mx-2"></i>
                </span>
                <span>
                    <i class="fab fa-youtube text-lg mx-2"></i>
                </span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.list{
    list-style-type: square;
}

.about{
    background:linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('./../assets/images/header-background.jpg');
    height: 100vh;
}
</style>