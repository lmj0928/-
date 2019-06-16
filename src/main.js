// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import {DatePicker,TimePicker} from 'element-ui'
import elui from '@/plugins/elui'
import './utils/flexible'
import './static/scss/common.scss'
import './static/font/iconfont.css'

// import List from './components/list.vue'
Vue.config.productionTip = false
Vue.use(elui)
Vue.use(DatePicker)
Vue.use(TimePicker)
// Vue.component('List',List)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
