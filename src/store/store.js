/**
 * Created by clown on 2018/11/9.
 */
//引入我们的vue和vuex。
import Vue from 'vue'
import Vuex from 'vuex'
//使用我们vuex，引入之后用Vue.use进行引用
Vue.use(Vuex);


const state = {
  page: 1,
  limit: 10,
  total: 0,
  shaixuan: {},
  search: '',
  id: 0,
  kid:0,
  area: [],
  Rshow: true,
  Rshows:true,
  lng: 118.05,
  lat: 36.8,
  };

const mutations={
  add(state){
    state.count+=1;
  },
  setId(state,id){
    state.id = id;
  },
  setKid(state,kid){
    state.kid = kid;
  }

}

const getters={

}

const actions={

}


export default new Vuex.Store({
  state,mutations,getters,actions
});
