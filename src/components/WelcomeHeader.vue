<template>
   <div class="header-wrapper">
      <div class="logo"></div>
      <div class="menu"></div>
      <div class="header">
         <div class="dashed-line"></div>
         <div class="header-description">
            <p>Študija Primera</p>
            <p class="bold">Spletna Optika Della Spina</p>
         </div>
         <div class="header-content bold">
            <div class="header-text bold"><div class="helper"></div>Inovativno do</div>
            <br>
            <div class="header-text bold"><div class="helper-two"></div>spletne prodaje očal</div>
         </div>
         <div class="header-content-alt bold">
            <div class="header-text bold"><div class="helper"></div>Smo</div>
            <br>
            <div class="header-text bold"><div class="helper"></div>najkulejša</div>
            <br>
            <div class="header-text bold"><div class="helper"></div>digitalna</div>
            <br>
            <div class="header-text bold"><div class="helper"></div>agencija.</div>
         </div>
      </div>
      <div class="sample-image"></div>
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
