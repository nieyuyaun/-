<template>
  <div id="screen">
    <div class="list">
      <div v-for="(item,key,index) in list" :key="index" class="screen_li">
        <div class="screen_title">{{item.name}}</div>
        <div class="screen_content">
          <el-checkbox v-for="(n,index) in item.list" :key="index" @change="screenChange(key,item.list,n)" :v-model="n.bool">{{n.lxming}}</el-checkbox>
        </div>
      </div>
      <div class="more" v-show="moreBtn" @click="more">
        查看更多选项
        <i class="icon iconfont icon-xiala2"></i>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  import store from '@/store/store.js'
  export default {
    data: function () {
      return {
        list: '',
        list_: '',
        data: {},
        moreBtn: true
      }
    },
    store,
    mounted: function () {
      this.$nextTick(function () {
        this.getScreenList();
      })
    },
    computed: {
      filterScreen: function () {
        this.$nextTick(function () {
          return ;
        })
      }
    },
    methods: {
      getScreenList: function () {
        var _this = this; 
        axios.post('http://vue.zhamengyun.com/keyuan/screen',{
        }).then(res=>{
          var data = res.data;
          console.log("获取到了screen")
          _this.list = data.data.list1;
          _this.list_ = data.data.list2;
        })
        .catch(res => {
          console.log('您的网络开小差了！');
        });
      },
      screenChange: function (key,list,n) {
        var _this = this;
        n.bool = !n.bool;
        this.data[key] = [];
        for (var item in list){
          if(list[item].bool == false){
            _this.data[key].push(list[item].lxming)
          }
        }
        this.$store.state.page = 1;
        this.$store.state.shaixuan =_this.data
        this.$emit('shaixuan')
      },
      more: function () {
        var _this = this;
        for(var key in _this.list_){
          _this.list[key] = _this.list_[key];
        }
        this.moreBtn = false;
      }
    }
  }
</script>
<style lang="less" scoped>
  @color: #1E9FF2;
  .screen {
    width: 100%;
  }
  .list {
    border-bottom: 1px solid #e3e3e3;
    .more {
      height: 58px;
      line-height: 58px;
      font-size: 18px;
      color: @color;
      cursor: pointer;
      text-align: center;
    }
    .screen_li {
      /*height: 58px;*/
      line-height: 58px;
      display: block;
      padding-left: 5%;
      position: relative;
      width: 95%;
      .screen_title {
        width: 60px;
        height: 100%;
        position: absolute;
        left: 10px;
        top: 0;
      }
      .screen_content{
        .el-checkbox{
          margin-left: 30px;
        }
      }
    }
  }
</style>
