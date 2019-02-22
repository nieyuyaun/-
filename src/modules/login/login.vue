<template>
    <div id="login">
        <div class="bgm el-col-24">
            <div class="box">
                <div class="left">
                    <img src="../../assets/images/left.png" alt="">
                </div>
                <div class="right">
                    <div class="logo">
                        <img src="../../assets/images/logo.png" alt="">
                        <p>Modern</p>
                    </div>
                    <div class="tabs">
                        <el-tabs v-model="activeName" stretch="stretch">
                            <el-tab-pane label="账户密码登陆" name="first">
                                <div class="inp">
                                    <i class="icon iconfont icon-ren"></i>
                                    <input type="text" placeholder="用户名/手机号" v-model="mobile" >
                                </div>
                                <div class="inp">
                                    <i class="icon iconfont icon-suo"></i>
                                    <input type="password" placeholder="密码" v-model="password">
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="手机验证码登陆" name="second">
                                <div class="inps">
                                    <i class="icon iconfont icon-ren"></i>
                                    <input type="text" placeholder="请输入手机号" maxlength="11">
                                    <div class="num" @click="Coude()">
                                        <p>获取验证码 </p>
                                    </div>
                                </div>
                                <div class="inps">
                                    <i class="icon iconfont icon-suo"></i>
                                    <input type="text" placeholder="验证码" maxlength="6">
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                    <div class="password">
                        <el-checkbox v-model="checked">记住密码</el-checkbox>
                        <a href="https://dwz.cn/wFMQsqCm">忘记密码</a>
                    </div>
                    <div class="btn">
                        <el-button type="primary" @click="login()">登陆</el-button>
                    </div>
                    <div class="dlType">
                        <div>
                            <img src="../../assets/images/wechat.png">
                            <p>微信登陆</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
import Axios from "axios";
import Cookies from 'js-cookies'
export default {
  name: "login",
  data() {
    return {
      activeName: "first",
      checked: true,
      stretch: true,
      password: "",
      mobile: ''
    };
  },
  mounted() {
    this.getCookies();
    console.log(window.http_url);
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.login()
      }
    })
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    login() {
      var that=this;

      var api = "index/login";
      if(that.zz_mobile(this.mobile) == null){
        this.$message.error("请填写正确的用户名")
        return;
      }
      if(this.password==""){
        this.$message.error("请输入密码")
        return;
      }
//      var md5 = crypto.createHash("md5")
//      md5.update(this.password)//this.pw2这是你要加密的密码
//      this.password = md5.digest('hex')//this.pw这就是你加密完的密码，这个往后台传就行了
      Axios.post(window.http_url+''+ api,{
        password:that.password,
        mobile:that.mobile
      })
        .then(res => {
           var data = res.data;
          if(data.code==1){       //判断是否登录成功
            that.$message.success(data.msg);    //弹框返回的msg
            Cookies.setItem('pw', true, { expires: 1 })  //用来判断是否登录了存一下token
            if(that.checked){   //如果记住密码 添加cookie
              Cookies.setItem('mobile', that.mobile, { expires: 30 })
              Cookies.setItem('password', that.password, { expires: 30 })
            }else {   //如果不记住密码 清空cookie
              Cookies.setItem('mobile', '')
              Cookies.setItem('password', '')
            }
            window.location.href='./index.html'
          }else{
            that.$message.error(data.msg)
          }
        })
        .catch(error => {
          console.log('您的网络开小差了！');
        });
    },
    getCookies: function () {   //获取cookie存的用户名密码
      this.mobile = Cookies.getItem('mobile')
      this.password = Cookies.getItem('password')
    },
    zz_mobile(number) {
      return number.match(
        /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
      );
    }
  }
};
</script>

<style lang="less">
body {
  background: url("../../assets/images/back.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.box {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1120px;
  height: 594px;
  background: #ffffff;
  display: flex;
  border-radius: 6px;
  .left {
    width: 642px;
    height: 594px;
    img {
      width: 642px;
      height: 594px;
    }
  }
  .right {
    width: 478px;
    height: 594px;
    .logo {
      height: 90px;
      display: flex;
      align-items: flex-end;
      margin-bottom: 20px;
      justify-content: center;
      p {
        font-size: 20px;
        font-weight: 1000;
        margin-left: 10px;
        margin-bottom: 7px;
      }
    }
    .tabs {
      margin-left: 54px;
      .inp:nth-child(1) {
        margin-top: 20px;
      }
      .inps:nth-child(1) {
        margin-top: 20px;
      }

      .inp,
      .inps {
        margin-top: 30px;
        position: relative;
        input {
          width: 319px;
          height: 56px;
          line-height: 56px;
          border-radius: 6px;
          padding-left: 45px;
          margin-top: 0px;
          font-family: Arial, Helvetica, sans-serif;
          color: #6b6f82;
          border: none;
          font-size: 16px;
          border: 1px solid #e1e1e1;
        }
        i {
          font-size: 16px;
          position: absolute;
          margin-top: 18px;
          margin-left: 15px;
        }
        .num {
          position: absolute;
          top: 15px;
          right: 10px;
          width: 82px;
          height: 26px;
          line-height: 26px;
          background: #ececec;
          text-align: center;
          cursor: pointer;
        }
      }
    }
    .el-tabs {
      width: 366px;
    }
    .password {
      margin-left: 54px;
      height: 60px;
      padding-bottom: 20px;
      align-items: flex-end;
      width: 368px;
      display: flex;
      justify-content: space-between;
    }
    .btn {
      margin-left: 54px;
      width: 368px;
      .el-button {
        width: 100%;
        border-radius: 6px;
        height: 44px;
      }
    }
    .dlType {
      display: flex;
      height: 126px;
      margin-left: 54px;
      margin-right: 54px;
      width: 368px;
      height: 126px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      div {
        display: flex;
        align-items: center;
        margin-top: 18px;
        img {
          width: 40px;
          height: 40px;
        }
        p {
          margin-left: 10px;
          font-size: 14px;
        }
      }
    }
  }
}
#tab-first,
#tab-second {
  font-size: 18px;
}
</style>
