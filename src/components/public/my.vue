<template>
    <div>
      <div class="mys">
        <p class="title">个人中心</p>
        <el-card class="el-col-6 left" :body-style="{ padding: '0px' }">
            <div class="user_name">
                <img src="../../assets/images/wechat.png" alt="">
                <p>{{detail.name}}</p>
                <p>{{detail.mobile}}</p>
            </div>
            <div class="num">
                <div class="daikan">
                    <div>
                        <p>带看次数</p>
                        <p>每周总带看次数</p>
                    </div>
                    <p class="number">
                        {{detail.daikan1}}
                    </p>
                </div>
                <div class="daikan">
                    <div> 
                        <p>分享次数</p>
                        <p>每周总分享次数</p>
                    </div>
                    <p class="number">
                      {{detail.daikan1}}
                    </p>
                </div>
            </div>
        </el-card>
        <el-card class="el-col-17 right">
                  <div class="box">
                    <div class="tab-hd">
                      <a href="javascript:;" :class="{'now':index==1}" @click="index=1">个人资料</a>
                    </div>
                    <div class="tab-bd">
                      <div class="tab-item" v-show="index==1">
                        <p>个人资料</p>
                        <div>
                          <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名 :</span>
                          <input type="text" v-model="detail.name" readonly="value">
                        </div>
                        <div>
                          <span>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话 :</span>
                          <input type="text" v-model="detail.mobile" readonly="value">
                        </div>
                        <div>
                          <span>所属门店 :</span>
                          <input type="text" v-model="detail.mendian" readonly="value">
                        </div>
                        <div>
                          <span>现居地址 :</span>
                          <input type="text" v-model="detail.addr" readonly="value">
                        </div>
                      </div>
                    </div>
                  </div>
        </el-card>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import store from "@/store/store.js";
export default {
  data() {
    return {
      activeName: "first",
      detail: [],
      index: 1
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.my();
    })
  },
  store,
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    my() {
      var that = this;
      axios
        .post("http://vue.zhamengyun.com/xiaoxi/index", {})
        .then(res => {
          console.log(res);
          that.detail = res.data.data;
        })
        .catch(error => {});
    },
  
  }
};
</script>

<style lang="less" scoped> 

.tab-hd {
  position: relative;
  width: 100%;
  height: 36px;
  margin: 15px 0;
  border-bottom: 1px solid #ddd;
}
.tab-hd a {
  float: left;
  padding: 8px 20px;
  margin-right: -1px;
  padding-bottom: 10px;
  text-decoration: none;
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
.title {
  font-size: 18px;
  margin-top: 50px;
  margin-bottom: 30px;
  margin-left: 5%;
}
.left {
  .user_name {
    text-align: center;
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 20px;
    img {
      width: 80px;
      height: 80px;
      margin-top: 60px;
      margin-bottom: 20px;
      border: 5px solid ababab;
      border-radius: 50%;
    }
    p:nth-child(1) {
      line-height: 35px;
      font-size: 18px;
      color: #000000;
    }
    p:nth-child(2) {
      line-height: 25px;
      font-size: 16px;
    }
  }
  .list {
    padding-bottom: 25px;
    border-bottom: 1px solid #ababab;
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
        margin-left: 10px;
      }
    }
  }
  .num {
    padding-bottom: 100px;
    .daikan {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      margin-left: 5%;
      margin-right: 5%;
      border-bottom: 1px dashed #eeeeee;
      div {
        p:nth-child(1) {
          color: #000000;
          font-size: 16px;
          margin-top: 20px;
        }
        p:nth-child(2) {
          color: #ababab;
          font-size: 12px;
          margin-top: 10px;
          margin-bottom: 20px;
        }
      }
      .number {
        font-size: 16px;
        color: orange;
        font-weight: 600;
      }
    }
  }
}
.right {
  margin-left: 2%;
  .tab-item:nth-child(1){
    margin-left: 80px;
    p{
      margin-left: 90px;
      color:#7b7e8a;
      font-size: 24px;
      line-height: 100px;
      margin-top: 10px;
    }
    div{
      margin-bottom: 50px;
      span{
        width: 60px;
        font-size: 14px;
      }
      input{
        width: 623px;
        height: 38px;
        line-height: 38px;
        border-radius:4px;
        border:1px solid rgb(247, 247, 247);
        padding-left:17px;
        color:#6b6f82;
        background:#e8e8e8;
      }
    }
  }
}
</style>
