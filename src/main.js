import Vue from 'vue'
import App from './App.vue'
export var device = WURFL;



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
