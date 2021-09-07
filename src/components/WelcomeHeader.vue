<template>
   <div :class="device + '-header-wrapper'">
      <div :class="device + '-logo'"></div>
      <div :class="device + '-menu'"></div>
      <div :class="device + '-header'">
         <div :class="device + '-dashed-line'"></div>
         <div :class="device + '-header-description'">
            <p>Študija Primera</p>
            <p class="bold">Spletna Optika Della Spina</p>
         </div>
         <div :class="[device + '-header-content', bold]" v-if="device === 'desktop'">
            <div :class="[device + '-header-text', 'bold']"><div class="helper"></div>Inovativno do</div>
            <br>
            <div :class="[device + '-header-text', 'bold']"><div class="helper-two"></div>spletne prodaje očal</div>
         </div>
         <div :class="[device + '-header-content', bold]" v-if="device === 'mobile' || device === 'tablet'">
            <div :class="[device + '-header-text', 'bold']"><div class="helper"></div>Smo</div>
            <br>
            <div :class="[device + '-header-text', 'bold']"><div class="helper"></div>najkulejša</div>
            <br>
            <div :class="[device + '-header-text', 'bold']"><div class="helper"></div>digitalna</div>
            <br>
            <div :class="[device + '-header-text', 'bold']"><div class="helper"></div>agencija.</div>
         </div>
      </div>
      <div :class="device + '-sample-image'"></div>
   </div>
</template>

<script>
export default {
   name: 'welcome-header',
   props: {
      device: {
         type: String,
         require: true
      }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
