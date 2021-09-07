<template>
   <div :class="device + '-main-body'">
      <div :class="device + '-flex-wrapper'">
         <p :class="['description', device + '-big']">150-200 Spletna optika, ki je v celoti integrirana v ERP Odoo preko katerega beleži vse dogodke na spletni platformi in omogoča povezovanje on-line/off-line.</p>
         
         <table :class="['description', device + '-info']">
            <thead>
               <tr>
                  <th></th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td class="info-short">N</td>
                  <td class="info-desc">Della Spina, <br> Slovenija, 2018</td>
               </tr>
               <tr>
                  <td class="info-short">S</td>
                  <td class="info-desc">
                     <ul>
                        <li>Web development</li>
                        <li>UX/UI</li>
                        <li>Integracija Odoo</li>
                     </ul>
                  </td>
               </tr>
               <tr>
                  <td class="info-short">U</td>
                  <td class="info-desc"><a href="#">www.dellaspina.si</a></td>
               </tr>
            </tbody>
         </table>
      </div>

      <Gallery :device="device" />

      <h3 :class="device + '-title'">ŽELJE IN IZZIVI</h3>
      <p :class="['description', device + '-middle']">
         350-450 Podjetje je vse do konca leta 2019 ponujalo v najem potniške kombije brez spletne podobe. Za njihovo digitalizacijo je bilo potrebno vzpostaviti celoten spletni sistem – od pregleda trga, načrtovanja, oblikovanja, postavitve spletne strani in oglaševanja. Podjetje je vse do konca leta 2019 ponujalo v najem potniške kombije brez spletne podobe. Za njihovo digitalizacijo je bilo potrebno vzpostaviti celoten spletni sistem – od pregleda trga, načrtovanja, oblikovanja, postavitve spletne strani in oglaševanja.
      </p>

      <h3 :class="device + '-title'">VPELJANE REŠITVE</h3>
      <p :class="['description', device + '-middle']">
         350-450 Podjetje je vse do konca leta 2019 ponujalo v najem potniške kombije brez spletne podobe. Za njihovo digitalizacijo je bilo potrebno vzpostaviti celoten spletni sistem – od pregleda trga, načrtovanja, oblikovanja, postavitve spletne strani in oglaševanja. Podjetje je vse do konca leta 2019 ponujalo v najem potniške kombije brez spletne podobe. Za njihovo digitalizacijo je bilo potrebno vzpostaviti celoten spletni sistem – od pregleda trga, načrtovanja, oblikovanja, postavitve spletne strani in oglaševanja.
      </p>

      <div :class="device + '-sample-image-2'"></div>

      <div :class="device + '-grid'">
         <div :class="['description', device + '-bottom', 'first']">
            <p class="bold">Fokus 40-60 Vestibulum ornare enim vel quam dictum, feugiat</p>
            <br>
            <p>160-250 Porttitor neque pharetra. Pellentesque mattis tristique ipsum eget viverra. Phasellus semper dapibus ipsum eget porta. Nunc vitae justo ac lacus finibus convallis.</p>
         </div>
         <div :class="[device + '-cutout', 'first']"></div>
         <div :class="['description', device + '-bottom', 'second']">
            <p class="bold">Fokus 40-60 Vestibulum ornare enim vel quam dictum, feugiat</p>
            <br>
            <p>160-250 Porttitor neque pharetra. Pellentesque mattis tristique ipsum eget viverra. Phasellus semper dapibus ipsum eget porta. Nunc vitae justo ac lacus finibus convallis.</p>
         </div>
         <div :class="[device + '-cutout', 'second', 'shadow']"></div>
      </div>
   </div>
</template>

<script>
import Gallery from './Gallery.vue'

export default {
   name: 'main-body',
   components: {
      Gallery
   },
   props: {
      device: {
         type: String,
         require: true
      }
   }
}
</script>

<style scoped lang='scss'>

</style>