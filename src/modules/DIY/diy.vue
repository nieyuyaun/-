<template>
  <div class="diyy">
    <!--左侧-->
    <div :class="{'el-col-3':leftWidth,'maxbody1':leftWidth1,'minbody1':leftWidth2,'xiala':leftWidth2}" class="home_left" @mouseenter="maxbody">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="">
        <div v-if="leftWidth1" class="logo_text">炫果互动</div>
        <div v-if="leftWidth1" class="logo_btn">
          <el-switch
            v-model="leftBtn"
            active-color="#13ce66"
            inactive-color="#ccc">
          </el-switch>
        </div>
      </div>
      <Menu :leftWidth1="leftWidth1"></Menu>
    </div>
    <!--右侧-->
    <div :class="{'el-col-21':leftWidth,'minbody2':leftWidth1,'maxbody2':leftWidth2}" class="home_right" @click="minbody">
      <!--顶部-->
      <Header ref="set"></Header>
      <!--内容-->
      <div class="home_content" @click="setBool">
        <div class="content_body">
          <diyy></diyy>
        </div>
        <!--底部-->
        <div class="content_footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import diyy from '@/components/DIY/diy.vue'
  import Menu from "@/components/public/menu"
  import Header from "@/components/public/header"
  import Cookies from "js-cookies"
  import store from "@/store/store"
export default {
  name: 'diy',
  data: function () {
    return{
      leftBtn: true,    //按钮是否被点击
      leftWidth: true,  //按钮是否被点击了，因为点击了不能接着变
      leftWidth1: true, //判断是否变大
      leftWidth2: false,
    }
  },
  store,
  methods: {
    setBool: function () {
      this.$refs.set.setBool();
    },
//    左边变大
    maxbody: function () {
      var _this = this;
      if(!this.leftBtn){
        _this.leftWidth1 = true;
        _this.leftWidth2 = false;
      }
    },
//    左边变小
    minbody: function () {
      var _this = this;
      if(!this.leftBtn){
        _this.leftWidth1 = false;
        _this.leftWidth2 = true;
        _this.leftWidth = false;
      }else {
        _this.leftWidth = true;
      }
    },
  },
  components: {
    diyy,Menu,Header
  }
}
</script>

<style lang="less" scoped>
  .content-body_bottom {
    display: block;
    position: relative;
  }
  .content_list {
    margin-right: 3%;
    width: 50%;
    position: relative;
    min-height: 2800px;
  }
  .content_edit {
    width: 48%;
    position: absolute;
    right: 0;
    top: 0;
  }
  .content_detail {
    width: 48%;
    position: absolute;
    right: 0;
    top: 0;
  }
  .minbody1{
    float: left;
    animation: minbody1 0.5s ease-out forwards;
  }
  .maxbody1{
    float: left;
    animation: maxbody1 0.5s ease-out forwards;
  }
  .minbody2{
    float: right;
    animation: minbody2 0.5s ease-out forwards;
  }
  .maxbody2{
    float: right;
    animation: maxbody2 0.5s ease-out forwards;
  }
  @keyframes minbody1 {
    0% {
      width: 12.5%;
    }
    100% {
      width: 4%;
    }
  }
  @keyframes maxbody1 {
    0% {
      width: 4%;
    }
    100% {
      width: 12.5%;
    }
  }
  @keyframes minbody2 {
    0% {
      width: 96%;
    }
    100% {
      width: 87.5%;
    }
  }
  @keyframes maxbody2 {
    0% {
      width: 87.5%;
    }
    100% {
      width: 96%;
    }
  }
  .el-col {
    height: 100%;
  }

  .diyy {
    width: 100%;
    height: 100%;
    display: block;
  .home_left {
    height: 100%;
    display: block;
    background-color: white;
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
  }
  .home_right {
    height: 100%;
    display: block;

  .home_content {
    background-color: #F4F5FA;
    height: 100%;
    overflow-y: scroll;
  .content_body {
    margin-bottom: 60px;
  .content-body_bottom{
    width: 96%;
    margin: 0 auto;
    position: relative;
  }
  }
  .content_footer {
    height: 60px;
    background-color: #000000;
    position: relative;
    top: -50px;
  }
  }
  }
  }
  .el-submenu .el-menu-item{
    min-width: 0;
  }
  .erji {
    margin-left: 30px;
  }
</style>
