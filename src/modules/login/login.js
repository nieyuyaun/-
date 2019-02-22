// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import Login from './login.vue'
import ElementUI from 'element-ui' //element-ui��ȫ�����
import JsCookies from 'js-cookies'
import pub from '@/assets/js/public'

import 'element-ui/lib/theme-chalk/index.css'//element-ui��css
Vue.config.productionTip = false
Vue.use(ElementUI) //ʹ��elementUI
//axios.defaults.baseURL = HOST
//axios.defaults.timeout = 1000 * 15
//axios.defaults.headers.token = Lockr.get('token')
//axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true
window.http_url = pub.http_url

/* eslint-disable no-new */
new Vue({
  el: '#login',
  components: { Login },
  template: '<Login/>'
})
