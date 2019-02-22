<template>
  <div class="home_header">
    <div class="user_name">Hellow - <b>{{data.name}}</b></div>
    <img @click="set = !set" class="avatar_box" :src="data.avatar" alt=""/>
    <div class="set" :class="{'my_show':set,'my_hide':!set}" >
      <div class="my_head">
        <img src="../../assets/images/wechat.png" alt="">
        <div>
          <p>{{my.name}}</p>
          <p>{{my.mobile}}</p>
        </div>
      </div>
      <div class="my_card"  @click="sta()">
        <img src="../../assets/images/idcard.png" alt="">
        <p>我的个人资料</p>
      </div>
      <div class="logout">
          <button type="text" class="password" @click="" @click="dialogVisible = true">修改密码</button>
          <button class="out" @click="logout">退出</button>
      </div>
      <el-dialog
          title="修改密码"
          :visible.sync="dialogVisible"
          width="20%"
          :before-close="handleClose"
          :append-to-body="true">
          <div class="changPsword">
            <div>
              <p>手机号</p>
              <input type="text" class="mobile" v-model="mobile" readonly>
            </div>
            <div>
              <p>验证码</p>
              <input type="text" class="line">
              <button class="lines">获取短信验证码</button>
            </div>
            <div>
              <p>密码</p>
              <input type="text" class="psword" v-model="password">
            </div>
            <div>
              <p>确认密码</p>
              <input type="text" class="psword" v-model="passwords">
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="change(),dialogVisible = false">确 定</el-button>
          </span>
      </el-dialog>
    </div>
    <div class="tongzhi" @click="tzList = !tzList,logs()">
      <i class="icon iconfont icon-qunfengxiaoxitishilingdang"></i>
    </div>
    <div class="tongzhi_num" v-if="data.totle != 0" @click="tongzhi">{{data.totle}}</div>
    <div class="tzList" :class="{'tzList_show':tzList,'tzList_hide':!tzList}">
      <div class="tzList_head">
        <div class="tzList_bgm">
          <span>
            <p class="tzList_head_p1">1 5 个 </p>
            <p class="tzList_head_p2">用户通知 </p>
          </span>
        </div>
      </div>
      <div class="box">
        <div class="tab-hd">
            <a href="javascript:;" :class="{'now':index==1}" @click="index=1">活动</a>
            <a href="javascript:;" :class="{'now':index==2}" @click="index=2,two()">日志</a>
            <a href="javascript:;" :class="{'now':index==3}" @click="index=3,three()">提醒消息</a>
        </div>
        <div class="tab-bd">
                      <div class="tab-item" v-show="index==1">
                        <div class="tzLists" v-for="item in hd">
                          <p class="time">{{item.createtime}}</p>
                          <div class="box">
                            <p class="title">活动标题</p>
                            <p class="content">活动内容</p>
                          </div>
                        </div>
                      </div>
                      <div class="tab-item" v-show="index==2">
                        <div class="tzLists" v-for="item in lg">
                          <p class="time">{{item.createtime}}</p>
                          <div class="box">
                            <p class="content">{{item.content}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="tab-item" v-show="index==3">
                        <div class="tzLists" v-for="item in tx">
                          <p class="time">{{item.createtime}}</p>
                          <div class="box">
                            <p class="content">{{item.content}}</p>
                          </div>
                        </div>
                      </div>
        </div>
      </div>
    </div>
</div>

</template>
<script type="text/ecmascript-6">
import axios from "axios";
import store from "@/store/store.js";
import pub from "../../assets/js/public.js";
export default {
  data: function() {
    return {
      tzList: false,
      data: {},
      set: false,
      activeName: "first",
      tixing: "tixing",
      tx: [],
      huodong: "huodong",
      hd: [],
      log: "log",
      lg: [],
      index: 1,
      my: [],
      dialogVisible: false,
      mobile: "",
      password: "",
      passwords: ""
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.header();
      this.mys();
    });
  },
  store,
  methods: {
    logout: function() {
      axios
        .post("http://vue.zhamengyun.com/index/logout", {})
        .then(res => {
          var data = res.data;
          if (data.code == 1) {
            window.location.href = "../" + data.url + ".html";
          }
        })
        .catch(res => {
          that.$message.error("您的网络开小差了！");
        });
    },
    header: function() {
      var that = this;
      axios
        .post("http://vue.zhamengyun.com/index/top", {})
        .then(res => {
          var data = res.data;
          that.data = data.data;
        })
        .catch(res => {
          that.$message.error("您的网络开小差了！");
        });
    },
    clicktop: function(id) {
      var that = this;
      axios
        .post("http://vue.zhamengyun.com/index/cleartop", {
          id: id,
          id: that.$store.state.id
        })
        .then(res => {
          var data = res.data;
          if (data.code == 1) {
            that.$message.success(data.msg);
            var timer = setTimeout(function() {
              that.top();
            }, 200);
          }
        })
        .catch(res => {
          that.$message.error("您的网络开小差了！");
        });
    },
    setBool: function() {
      this.set = false;
    },
    //    通知动画
    tongzhi: function() {
      var _this = this;
      if (_this.tzList) {
        _this.tzList = false;
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    sta() {
      this.$store.state.Rshows = false;
    },
    logs() {
      var that = this;
      axios
        .post("http://vue.zhamengyun.com/xiaoxi/xiaoxi", {
          op: that.huodong
          // op_a:that.log,
          // op_s:that.tixing
        })
        .then(res => {
          that.hd = res.data.data;
          // that.lg=res.data.data
          // that.tx=res.data.data
        })
        .catch(error => {});
    },
    two() {
      var that = this;
      axios
        .post("http://vue.zhamengyun.com/xiaoxi/xiaoxi", {
          op: that.log
        })
        .then(res => {
          that.lg = res.data.data;
        })
        .catch(error => {});
    },
    three() {
      var that = this;
      axios
        .post("http://vue.zhamengyun.com/xiaoxi/xiaoxi", {
          op: that.tixing
        })
        .then(res => {
          that.tx = res.data.data;
        })
        .catch(error => {});
    },
    mys() {
      var that = this;
      axios
        .post("http://vue.zhamengyun.com/xiaoxi/index", {})
        .then(res => {
          that.my = res.data.data;
          that.mobile=res.data.data.mobile
        })
        .catch(error => {});
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    change() {
      var that = this;

      if (that.passwords != that.password||that.password==""||that.password=="") {
        that.dialogVisible = true;
        that.$message.warning("两次输入密码不相同");
        return;
      }
      axios
        .post("http://vue.zhamengyun.com/xiaoxi/change", {
          id: that.$store.state.id,
          mobile: that.mobile,
          password: that.password,
          passwords: that.passwords
        })
        .then(res => {
          var data = res.data;
          that.$message.success(data.msg);
          that.line = "";
          that.password = "";
          that.passwords = "";
        })
        .catch(error => {
          this.$message.error("您的网络开小差了");
        });
    }
  }
};
</script>
<style lang="less" type="text/less" scoped>
.changPsword {
  div {
    margin-top: 20px;
    p {
      margin-bottom: 10px;
    }
  }
  div:nth-child(1) {
    margin-top: -30px;
  }
  .mobile {
    width: 90%;
    height: 32px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    background: #f7f6f6;
    padding-left: 5%;
    padding-right: 5%;
  }
  .line {
    width: 45%;
    height: 32px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    padding-left: 5%;
    margin-right: 10%;
  }
  .lines {
    width: 35%;
    height: 32px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    text-align: center;
    background: white;
    cursor: pointer;
  }
  .psword {
    width: 90%;
    height: 34px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    padding-left: 5%;
    padding-right: 5%;
  }
}

.tab-hd {
  position: relative;
  height: 36px;
  margin: 15px 0;
  border-bottom: 1px solid #ddd;
}
.tab-hd a {
  float: left;
  padding: 8px 20px;
  margin-right: -1px;
  padding-bottom: 10px;
}
.tab-hd a:hover {
  background: #fff;
}
.tab-hd .now {
  padding: 8px 20px 9px;
  border-bottom: 2px solid #4998df;
  background: #fff;
  z-index: 2;
}
@color: #1e9ff2;
.home_header {
  height: 70px;
  width: 100%;
  position: relative;
  color: #ffffff;
  z-index: 3;
  box-shadow: 0 2px 2px 1px #dedede;
  background-color: @color;
  .tongzhi {
    position: absolute;
    right: 80px;
    padding: 0 10px;
    height: 70px;
    cursor: pointer;
    line-height: 70px;
    i {
      font-size: 26px;
    }
  }
  .tongzhi_num {
    position: absolute;
    right: 76px;
    top: 12px;
    width: 20px;
    height: 20px;
    background-color: red;
    color: #ffffff;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    box-shadow: 0 0 3px 2px red;
    font-weight: 600;
  }
  .avatar_box {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 160px;
    top: 10px;
    border: 1px solid #ccc;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    cursor: pointer;
  }
  .set {
    position: absolute;
    color: #000;
    position: absolute;
    height: 160;
    top: 75px;
    right: 20px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 5px 3px #dedede;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 2;
    width: 400px;
    .my_head {
      width: 90%;
      height: 94px;
      background: url("../../assets/images/5555.jpg");
      display: flex;
      background-size: 100% 200%;
      overflow: hidden;
      background-repeat: no-repeat;
      align-items: center;
      padding-left: 5%;
      overflow: hidden;
      padding-right: 5%;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
      div {
        margin-left: 20px;
        p {
          color: white;
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
    .my_card {
      width: 95%;
      padding-left: 5%;
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-top: 25px;
      img {
        width: 27px;
        height: 20px;
      }
      p {
        font-size: 14px;
        color: #000000;
        margin-left: 5px;
      }
    }
    .logout {
      text-align: center;
      margin-top: 130px;
      button {
        width: 254px;
        height: 38px;
        border-radius: 20px;
        text-align: center;
        line-height: 38px;
        font-size: 16px;
      }
      .password {
        color: #1e9ff2;
        border: 2px solid #1e9ff2;
        background: #ffffff;
      }
      .out {
        border: none;
        background: #d9d9d9;
        color: #6b6f82;
        margin-top: 20px;
      }
    }
  }
  .user_name {
    font-size: 18px;
    position: absolute;
    right: 220px;
    line-height: 70px;
  }
}
/*通知start*/
.tzList {
  color: #000;
  position: absolute;
  height: 0;
  top: 75px;
  right: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 5px 3px #dedede;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 2;
  width: 400px;
  .tzList_head {
    .tzList_bgm {
      width: 100%;
      height: 94px;
      background: url("../../assets/images/back.jpg");
      text-align: center;

      .tzList_head_p1 {
        font-size: 26px;
        font-weight: 800;
        line-height: 76px;
        color: white;
      }
      .tzList_head_p2 {
        font-size: 14px;
        color: white;
        line-height: 0px;
      }
    }
  }
  .el-tabs {
    width: 90%;
    padding-left: 5%;
  }
  .tzLists {
    margin-left: 5%;
    margin-right: 5%;
    .time {
      margin-bottom: 10px;
    }
    .box {
      width: 90%;
      background: #f5f5f5;
      border-radius: 4px;
      padding-left: 5%;
      padding-right: 5%;
      .title {
        line-height: 40px;
        font-size: 16px;
        color: #acaeb6;
      }
      .content {
        line-height: 30px;
        font-size: 12px;
        color: #acaeb6;
        margin-bottom: 10px;
      }
    }
  }
}
/*通知end*/
.tzList_show {
  animation: tzList_show 0.5s ease-out forwards;
}
.tzList_hide {
  animation: tzList_hide 0.5s ease-out forwards;
}
.my_show {
  animation: my_show 0.5s ease-out forwards;
}
.my_hide {
  animation: my_hide 0.5s ease-out forwards;
}
@keyframes tzList_show {
  0% {
    height: 0;
    box-shadow: 0 0 0 0 #dedede;
  }
  100% {
    height: 500px;
    box-shadow: 0 0 5px 3px #dedede;
  }
}
@keyframes tzList_hide {
  0% {
    height: 500px;
    box-shadow: 0 0 5px 3px #dedede;
  }
  100% {
    height: 0;
    box-shadow: 0 0 0 0 #dedede;
  }
}
@keyframes my_show {
  0% {
    height: 0;
    box-shadow: 0 0 0 0 #dedede;
  }
  100% {
    height: 400px;
    box-shadow: 0 0 5px 3px #dedede;
  }
}
@keyframes my_hide {
  0% {
    height: 400px;
    box-shadow: 0 0 5px 3px #dedede;
  }
  100% {
    height: 0;
    box-shadow: 0 0 0 0 #dedede;
  }
}
</style>
