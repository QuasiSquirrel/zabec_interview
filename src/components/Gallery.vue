<template>
   <div :class="device + '-gallery'">
      <div id="arrow-left" v-show="device === 'desktop'" @click="previousImage"></div>
         <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init="onInit">
            <slideritem v-for="(item, index) in gallery" :key="index" :style="{ backgroundImage: 'url(/img/DellaSpina/' + item + ')'}">

            </slideritem>
         </slider>
      <div id="arrow-right" v-show="device === 'desktop'" @click="nextImage"></div>
   </div>
</template>

<script>
import {slider, slideritem } from 'vue-concise-slider'

export default {
   name: 'gallery',
   components: {
      slider,
      slideritem
   },
   props:{
      device: {
         type: String,
         require: true
      }
   },
   data(){
      return {
         gallery: [],
         active: 0,
         options: {
            loop: true
         }
      }
   },
   methods: {
      nextImage(){
         this.$refs.slider.$emit('slideNext')
      },
      previousImage(){
         this.$refs.slider.$emit('slidePre')
      }
   },
   mounted() {
      addEventListener('load', () => {
         if(this.device === 'tablet')
            this.gallery = ['SPRDdigital_DellaSpina_izbira-ocal_tablica_listing.png', 'SPRDdigital_DellaSpina_kako-deluje_tablica_listing.png', 'SPRDdigital_DellaSpina_kosarica_tablica_listing.png', 'SPRDdigital_DellaSpina_naslovna_tablica_listing.png'];
         else if(this.device === 'mobile')
            this.gallery = ['SPRDdigital_DellaSpina_izbira-ocal_telefon_listing.png', 'SPRDdigital_DellaSpina_kako-deluje_telefon_listing.png', 'SPRDdigital_DellaSpina_kosarica_telefon_listing.png', 'SPRDdigital_DellaSpina_naslovna_telefon_listing.png'];
         else
            this.gallery = ['SPRDdigital_DellaSpina_izbira-ocal_monitor_listing.png', 'SPRDdigital_DellaSpina_kako-deluje_monitor_listing.png', 'SPRDdigital_DellaSpina_kosarica_monitor_listing.png', 'SPRDdigital_DellaSpina_naslovna_monitor_listing.png'];
      })
   }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>