<template>
    <span class=" flex grid image pt-5 grid-rows-1 grid-cols-1 carousel" @keydown="checkSlide($event)" tabindex="0">
        <!-- <i class="fas fa-chevron-left text-white z-10 ml-5 lg:ml-12  my-auto  justify-self-start  lg:text-4xl md:text-3xl sm:text-2xl cursor-pointer row-start-1 row-end-2 col-start-1 col-end-2" @click="next"></i> -->
            <slot></slot>
        <!-- <i class="fas fa-chevron-right text-white my-auto z-10 mr-5 lg:mr-12 justify-self-end  lg:text-4xl md:text-3xl sm:text-2xl cursor-pointer row-start-1 row-end-2 col-start-1 col-end-2 " @click="prev"></i> -->
    </span>
</template>

<script>
export default {
    data(){
        return{
            index:0,
            slides:[],
            slideDirection:'',
        }
    },
    computed:{
        slidesLength(){
            return this.slides.length;
        }
    },
    mounted(){
        this.slides = this.$children;
        this.slides.map((slide, index) => {
            slide.index = index;
        })
    },
    method:{
        next(){
            this.index++;
            if(this.index >= this.slidesLength){
                this.index = 0
            }

            this.slideDirection = 'slide-right'
        },
        prev(){
            this.index--;
            if(this.index < 0){
                this.index = this.slidesLength - 1
            }
            this.slideDirection = 'slide-left'
        },
        checkSlide(event){
            if(event.keyCode === 39){
                this.next();
            }else if (event.keyCode === 37){
                this.prev();
            }else {
                return;
            }
        },
    }
}
</script>

<style>

</style>