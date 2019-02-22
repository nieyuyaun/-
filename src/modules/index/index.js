// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './index.vue'
import ElementUI from 'element-ui' //element-ui��ȫ�����
import Resourse from 'vue-resource'
import Cookies from 'js-cookies'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'//element-ui��css
import pub from '@/assets/js/public'
Vue.config.productionTip = false
Vue.use(ElementUI) //ʹ��elementUI
Vue.use(Resourse)
axios.defaults.withCredentials = true
window.http_url = pub.http_url+'ershou/'
/* eslint-disable no-new */
new Vue({
  el: '#index',
  components: { index },
  template: '<index/>'
})
