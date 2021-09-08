<template>
  <div id="app" :class="device">
    <WelcomeHeader :device="device"/>
    <MainBody :device="device" />
  </div>
</template>

<script>
import WelcomeHeader from './components/WelcomeHeader.vue'
import MainBody from './components/MainBody.vue'
import { device } from './main'

export default {
   name: 'App',
   components: {
      WelcomeHeader,
      MainBody
   },
   data() {
      return {
         device: null
      }
   },
   created(){
      this.device = device['form_factor'].toLowerCase();
      if(this.device === 'smartphone' || this.device === 'feature phone' || this.device === 'other mobile')
         this.device = 'mobile'
      else if(this.device === 'smart-tv' || this.device === 'other non-mobile')
         this.device = 'desktop'

      console.log(this.device)
   }
}
</script>

<style lang="scss">
@import './scss/desktop';
@import './scss/mobile';
@import './scss/tablet';

*{
   box-sizing: border-box;
   margin: 0;
   scrollbar-width: thin;

}
</style>