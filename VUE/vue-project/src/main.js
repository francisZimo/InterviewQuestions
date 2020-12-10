import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuex from 'vuex'



Vue.use(vuex)


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
