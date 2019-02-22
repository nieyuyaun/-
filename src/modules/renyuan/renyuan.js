// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import Renyuan from './renyuan.vue'
import pub from "@/assets/js/public"
import ElementUI from 'element-ui' //element-ui��ȫ�����
import Resourse from 'vue-resource'
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css'//element-ui��css
Vue.use(ElementUI) //ʹ��elementUI
Vue.use(Resourse)

axios.defaults.withCredentials = true
window.http_url = pub.http_url+"renyuan/"

/* eslint-disable no-new */
new Vue({
  el: '#renyuan',
  components: { Renyuan },
  template: '<Renyuan/>'
})
