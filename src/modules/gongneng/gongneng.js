// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import gongneng from './gongneng.vue'
import ElementUI from 'element-ui' //element-ui��ȫ�����
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'//element-ui��css
import pub from '@/assets/js/public'
Vue.config.productionTip = false
Vue.use(ElementUI) //ʹ��elementUI
axios.defaults.withCredentials = true
window.http_url = pub.http_url+'gongneng/'
window.http_urlm = pub.http_url+'mendian/'
window.http_urlr = pub.http_url+'renyuan/'
window.http_urld = pub.http_url+'daqu/'

new Vue({
  el: '#gongneng',
  components: { gongneng },
  template: '<gongneng/>'
})
