import Vue from 'vue'
import App from './App.vue'
import VueTimeago from 'vue-timeago'

Vue.config.productionTip = false

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'id', // Default locale

  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    ja: require('date-fns/locale/ja')
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
