<template>
  <div id="menu">

    <div class="select">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu v-for="(menu,index) in menus" :key="index">
            <el-submenu index="1">
              <template slot="title">
                <i class="icon iconfont" :class="menu.icon"></i>
                <span v-if="leftWidth1">{{menu.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item style="padding-left: 80px" v-for="(item,index) in menu.clist" :key="index" index="1-1" @click="goUrl(item)" v-show="leftWidth1" class="erji">{{item.title}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  export default {
    data: function () {
      return {
        menus: ''
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.menuList()
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
      menuList: function () {
        var _this = this;
        axios.post('http://vue.zhamengyun.com/index/menu',{}).then(res=>{
          var data = res.data;
          if(data.code == 0){
            _this.$message.error(data.msg);
            window.location.href = './login.html'
          }else {
            _this.menus = data.data.menu;
          }
        })
        .catch(res => {
          console.log('您的网络开小差了！');
        });
      },
//      跳转
      goUrl: function (item) {
        window.location.href = '../'+ item.name +'.html';
      }
    },
    props:{
      leftWidth1: ''
    }
  }
</script>
<style lang="less" scoped>
  @color: #1E9FF2;
  .logo {
    display: flex;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
  img {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 16px;
  }
  .logo_text{
    margin-left: 14px;
    font-family: "Microsoft YaHei";
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    left: 50px;
  }
  .logo_btn {
    position: absolute;
    left: 170px;
  }
  }
  .select{
  span{
    margin-left: 20px;
  }
  .el-menu-item{
    padding-left: 40px;
  }
  }
</style>
