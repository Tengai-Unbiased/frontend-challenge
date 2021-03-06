import Vue, { CreateElement, VNode } from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: (h:CreateElement):VNode => h(App)
}).$mount('#app')
