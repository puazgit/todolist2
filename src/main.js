import Vue from 'vue'
import App from './App.vue'

import VueTimeago from 'vue-timeago'
import VueRouter from 'vue-router'

import Todo from './components/SimpleTodo.vue'
import TodoCompleted from './components/TodoCompleted.vue'
import TodoImportant from './components/TodoImportant.vue'
import ContohVuex from './components/ContohVuex.vue'

import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(VueTimeago, {
  name: 'Timeago',
  locale: 'id',

  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    ja: require('date-fns/locale/ja')
  }
})
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  mode : 'history',
  routes : [
    {name : 'all', path : '/', component : Todo},
    {name : 'completed', path : '/completed', component : TodoCompleted},
    {name : 'important', path : '/important', component : TodoImportant},
    {name : 'contoh-vuex', path : '/contoh-vuex1', component : ContohVuex}
  ]
})

const store = new Vuex.Store({
  state : {
    counter : 0
  },
  mutations : {
    incrementCounter(state){
      state.counter = state.counter+1
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
