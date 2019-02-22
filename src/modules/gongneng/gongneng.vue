<template>
  <div id="gongneng" class="Home">
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
          <div class="main_top">
            <div @click="tab(item)" v-if="item.show" v-for="item in tabData" class="mtop_list" :class="{'mtop_cover': item.bool}">{{item.text}}</div>
          </div>
          <div v-if="tabData[0].bool" class="main_content">
            <Gsxx></Gsxx>
          </div>
          <div v-if="tabData[1].bool" class="main_content">
            <QuanXian></QuanXian>
          </div>
          <div v-if="tabData[2].bool" class="main_content">
            <Renyuan></Renyuan>
          </div>
          <div v-if="tabData[3].bool" class="main_content">
            <Mendian></Mendian>
          </div>
          <div v-if="tabData[4].bool" class="main_content">
            <Daqu></Daqu>
          </div>
          <div v-if="tabData[5].bool" class="main_content qudao">
            <div class="qudao_card">
              <div style="background-color: #4dbe2e" class="qudao_top">
                微信公众号
                <div class="qudao_status">
                  未绑定
                </div>
                <div class="qudao_status">
                  已绑定
                </div>
                <img class="qudao_img" src="@/assets/images/wx.png" alt=""/>
              </div>
              <div class="qudao_zhong">配置微信公众号渠道</div>
              <div style="background-color: #4dbe2e" class="qudao_ben">去绑定</div>
            </div>
            <div class="qudao_card">
              <div style="background-color: #1e9ff2" class="qudao_top">
                小程序
                <div class="qudao_status">
                  未绑定
                </div>
                <div class="qudao_status">
                  已绑定
                </div>
                <img class="qudao_img" src="@/assets/images/xcx.png" alt=""/>
              </div>
              <div class="qudao_zhong">授权微信小程序通道</div>
              <div @click="xcxBtn" style="background-color: #1e9ff2" class="qudao_ben">去授权</div>
            </div>
            <div class="qudao_card">
              <div style="background-color: #fb6b40" class="qudao_top">
                H5
                <div class="qudao_status">
                  未绑定
                </div>
                <div class="qudao_status">
                  已绑定
                </div>
                <img class="qudao_img" src="@/assets/images/h5.png" alt=""/>
              </div>
              <div class="qudao_zhong">配置H5通道</div>
              <div style="background-color: #fb6b40" class="qudao_ben">去开启</div>
            </div>
            <el-dialog
              title="内容"
              :visible.sync="content"
              width="80%"
              center>
              <iframe style="width:100%;height:600px" src="http://xghdvue.xiaoxiaodian.cc/configure/xcx/create" frameborder="0"></iframe>
            </el-dialog>
          </div>
          <div v-if="xcx" class="main_content">
            <div class="xcx_list">
              <div class="top_box">
                <img @click="zhuangtai" class="shuaxin" src="@/assets/images/shuaxin.jpg" alt=""/>
                <div class="left">
                  <div class="name">钱多多</div>
                  <img class="img" src="@/assets/images/test.jpg" alt=""/>
                </div>
                <div class="list_box appid">
                  <div class="title">
                    <span>*</span>
                    AppID（小程序）
                  </div>
                  <el-input
                    placeholder="请输入内容"
                    v-model="input10" class="inp"
                    clearable>
                  </el-input>
                </div>
                <div class="list_box AppSecret">
                  <div class="title">
                    <span>*</span>
                    AppSecret（小程序密钥）
                  </div>
                  <el-input
                    placeholder="请输入密钥"
                    v-model="input10" class="inp"
                    clearable>
                  </el-input>
                </div>
                <div class="list_box weihu">
                  <div class="title">
                    <span>*</span>
                    维护小程序
                  </div>
                  <div class="danxuan">
                    <el-radio v-model="radio" label="1">维护中</el-radio>
                    <el-radio v-model="radio" label="2">正常</el-radio>
                  </div>
                </div>
                <div class="list_box bangding">
                  <div class="title">
                    <span>*</span>
                    开启用户绑定
                  </div>
                  <div class="danxuan">
                    <el-radio v-model="radio" label="1">开启</el-radio>
                    <el-radio v-model="radio" label="2">关闭</el-radio>
                  </div>
                  <div class="dec">注意：如果小程序开启用户绑定或者WAP端开启都为开启用户绑定</div>
                </div>
                <div class="list_box biaoqian">
                  <div class="title">
                    <span>*</span>
                    标签
                  </div>
                  <el-input
                    placeholder="请输入标签"
                    v-model="keyword" class="inp"
                    clearable>
                  </el-input>
                  <div class="dec">注意：小程序的标签以‘ ’（空格）分隔，不能为空，1-20个字符（单个标签），总共不能超过十个</div>
                </div>
                <div class="list_box fenlei">
                  <div class="title">
                    <span>*</span>
                    分类
                  </div>
                  <div class="danxuan">
                    <el-radio v-for="(fl,index) in flData" :key="index" v-model="cat" :label="index">{{fl.first_class}}</el-radio>
                  </div>
                </div>
              </div>
              <div class="bottom_box">
                <div class="zhuangtai">
                  状态: {{zhuangt}}
                </div>
                <button @click="fabu" class="el-button el-button--primary">发布</button>
                <button @click="shenhe" class="el-button el-button--primary">审核</button>
              </div>
            </div>

          </div>
        </div>
        <!--底部-->
        <div class="content_footer"></div>
      </div>
    </div>


  </div>

</template>

<script type="text/ecmascript-6">
import Mendian from "@/components/gongneng/mendian"
import Daqu from "@/components/gongneng/daqu"
import Renyuan from "@/components/gongneng/renyuan"
import Menu from "@/components/public/menu"
import Header from "@/components/public/header"
import Gsxx from "@/components/gongneng/gsxx"
import QuanXian from "@/components/gongneng/quanxian"
import axios from 'axios'

export default {
  name: 'gongneng',
  data: function() {
    return {
      leftBtn: true,    //按钮是否被点击
      leftWidth: true,  //按钮是否被点击了，因为点击了不能接着变
      leftWidth1: true, //判断是否变大
      leftWidth2: false,
      content: false,
      id: '',
      tabData: [
        {
          text: '公司信息',
          bool: true,
          show: true,
        },
        {
          text: '权限',
          bool: false,
          show: true,
        },
        {
          text: '人员管理',
          bool: false,
          show: true,
        },
        {
          text: '门店管理',
          bool: false,
          show: true,
        },
        {
          text: '大区管理',
          bool: false,
          show: true,
        },
        {
          text: '渠道',
          bool: false,
          show: true,
        },
      ],
      xcx: false,
      input10: 'xubbkr145185126',
      radio: '2',
      cat: 0,
      keyword: '房产',
      flData: [],
      zhuangt: '请刷新'
    }
  },
  mounted: function() {
    var that = this;
    axios.get("http://vue.zhamengyun.com/configure/xcx/shangchuan", {

    }).then(res => {
      var data = res.data;
      that.id = data.data[0].id;
      that.fenlei();
    }).catch(res => {
      console.log("您的网络开小差了！");
    })

  },
  methods:{
    zhuangtai: function (e) {
      var that = this;
      axios.post("http://vue.zhamengyun.com/configure/xcx/look", {
        id: that.id,
      }).then(res => {
        var data = res.data;
        that.zhuangt = data.msg
      }).catch(res => {
        console.log("您的网络开小差了！");
      })
    },
    shenhe: function (e) {
      var that = this;
      axios.post("http://vue.zhamengyun.com/configure/xcx/commit", {
        id: that.id,
        keyword: that.keyword,
        cat: that.cat
      }).then(res => {
        var data = res.data;
        this.$message.success(data.msg)
      }).catch(res => {
        console.log("您的网络开小差了！");
      })
    },
    fabu: function (e) {
      var that = this;
      axios.post("http://vue.zhamengyun.com/configure/xcx/fabu", {
        id: that.id
      }).then(res => {
        var data = res.data;

      }).catch(res => {
        console.log("您的网络开小差了！");
      })
    },
    xcxBtn: function (e) {
      this.tabData.forEach(function (n,i) {
        n.bool = false
      })
      this.xcx = true;
    },
    tab: function (item) {
      var that  = this;
      this.tabData.forEach(function (n,i) {
        n.bool = false
      })
      this.xcx = false;
      item.bool = true
    },
//    fabu: function () {
//      var that = this;
//      axios.post("http://xghdvue.xiaoxiaodian.cc/configure/xcx/shangchuan", {
//        id: that.id
//      }).then(res => {
//        var data = res.data;
//
//      }).catch(res => {
//        console.log("您的网络开小差了！");
//      })
//    },
    fenlei: function () {
      var that = this;
      axios.post("http://vue.zhamengyun.com/configure/xcx/getCategory", {
        id: that.id
      }).then(res => {
        var data = res.data;
        that.flData = data.data.category_list;
      }).catch(res => {
        console.log("您的网络开小差了！");
      })
    },
    sxlist: function () {
      this.$refs.list.shaixuan();
    },
    dellist: function () {
      this.$refs.list.showlist();
    },
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
    }
  },
  components: {
    Menu,Header,Gsxx,QuanXian,Mendian,Renyuan,Daqu
  }
}
</script>

<style lang="less" scoped>
  /*渠道样式*/
  .xcx_list {
    width: 90%;
    background-color: #fff;
    box-shadow: 0 0 3px 3px #eee;
    margin-bottom: 30px;
    padding: 20px 5%;
    .top_box {
      min-height: 160px;
      position: relative;
      width: 100%;
      .shuaxin {
        position: absolute;
        width: 60px;
        height: 28px;
        top: 12px;
        left: 100px;
        cursor: pointer;
      }
      .list_box {
        padding-top: 50px;
        margin-right: 30px;
        display: inline-block;
        vertical-align: top;
        .title {
          line-height: 30px;
          span{
            color: red;
          }
        }
        .dec {
          line-height: 30px;
          color: red;
          font-size: 12px;
        }
      }
      .inp {
        width: 340px;
      }
      .left {
        margin-right: 30px;
        display: inline-block;
        vertical-align: top;
        .name {
          height: 50px;
          line-height: 50px;
          font-weight: 600;
          font-size: 16px;
        }
        .img {
          height: 65px;
          width: 65px;
          border-radius: 50%;
        }
      }
    }
    .bottom_box {
      margin-top: 20px;
      .zhuangtai {
        padding: 4px 10px;
        border-radius: 5px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 30px;
        background-color: rgba(133, 216, 228, 0.81);
      }
    }
  }
  .qudao_card {
    width: 310px;
    height: 225px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 3px 3px #dedede;
    margin: 40px 60px;
    color: #ffffff;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    .qudao_top {
      height: 85px;
      width: 90%;
      line-height: 85px;
      padding: 0 5%;
      position: relative;
      /*background-color: #4dbe2e;*/
      font-size: 20px;
      .qudao_status {
        height: 16px;
        line-height: 16px;
        padding: 4px;
        border-radius: 10px;
        background-color: rgba(0,0,0,0.4);
        font-size: 14px;
        margin-left: 10px;
        display: inline-block;
        vertical-align: middle;
      }
      .qudao_img {
        position: absolute;
        width: 70px;
        height: 60px;
        right: 0;
        bottom: 0;
      }
    }
    .qudao_zhong {
      height: 80px;
      line-height: 80px;
      width: 100%;
      text-align: center;
      color: #000;
    }
    .qudao_ben {
      font-size: 18px;
      width: 160px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin: 0 auto;
      cursor: pointer;
      border-radius: 5px;
    }
  }
  /*tab样式*/
  .main_top {
    width: 96%;
    margin: 0 auto;
    height: 64px;
    line-height: 64px;
    background-color: #ffffff;
    border-bottom: 1px solid #dedede;
  }
  .mtop_list {
    display: inline-block;
    height: 64px;
    cursor: pointer;
    margin: 0 30px;
    font-size: 18px;
    text-align: center;
    /*border-bottom: 3px solid #dedede;*/
  }
  .mtop_cover {
    color: #1e9ff2;
    border-bottom: 3px solid #1e9ff2;
  }
  .main_content {
    background-color: #ffffff;
    min-height: 600px;
    width: 96%;
    margin: 0 auto;
  }
  .content-body_bottom {
    display: block;
    position: relative;
    margin-top: 30px;
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

  .Home {
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
    margin-top: 50px;
    min-height: 850px;
    /*background-color: #ffffff;*/
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
