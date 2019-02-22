<template>
    <div>
        <el-card class="el-col-24">
            <header>
                <p class="title">区域详情</p>
                <div   @click="$store.state.Rshow=false">
                    <img src="../../assets/images/1.png" alt=""> 
                    <p class="bj" >编辑</p>
                </div>
            </header>
            <div class="dq_name">
                {{list.name}}
            </div>
            <div class="gx_md">
                <p>管辖门店</p>
                <ul>
                    <li v-for="item in list.mendian">
                      {{item.name}}
                    </li>
                </ul>
            </div>
            <div class="list">
                <p class="lists">区域成员</p>
                <ul>
                    <li v-for="item in list.peo">
                        <el-card class="el-col-24">
                            <img :src="item.avatar" alt="">
                            <p class="p_one">{{item.name}}</p>
                            <p class="p_two">{{item.gangwei}}</p>
                        </el-card>
                    </li>
                </ul>
            </div>
        </el-card>
    </div>
</template>

<script>
import store from "@/store/store.js";
import Axios from "axios";
export default {
  data() {
    return {
      list:[]
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.dqDetail();
    });
  },
  methods: {
    dqDetail() {
      var that = this;
      Axios.post(window.http_urld + "ddetail", {
        id:that.$store.state.id
      }).then(res=>{
          that.list=res.data.data;
      }).catch(error=>{
          console.log("dqDetail获取不到")
      })
    }
  },
  computed: {
    listenId: function() {
      return this.$store.state.id;
    }
  },
  watch: {
    listenId: function(val, oldVal) {
      this.dqDetail();
    }
  }
};
</script>

<style lang="less" scoped>
.el-card {
  header {
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-size: 26px;
      font-weight: 1000;
      color: #000000;
    }
    div {
      width: 32px;
      text-align: center;

      .bj {
        font-size: 10px;
        color: #1e9ff2;
      }
      img {
        width: 32px;
        height: 32px;
        font-size: 10px;
      }
    }
  }
  .dq_name {
    font-size: 22px;
    font-weight: 1000;
    color: #000000;
    margin-bottom: 35px;
  }
  .gx_md {
    p {
      font-size: 20px;
      margin-bottom: 20px;
    }
    ul {
      display: flex;
      li {
        line-height: 26px;
        padding-left: 10px;
        padding-right: 10px;
        margin-right: 30px;
        background: #c6e7fc;
        color: #1e9ff2;
        border-radius: 4px;
      }
    }
  }
  .list {
    margin-top: 30px;
    .lists {
      font-size: 24px;
    }
    ul {
      display: flex;
      li {
        margin-top: 20px;
        width: 164px;
        margin-right: 22px;
        text-align: center;
        img {
          width: 96px;
          height: 96px;
        }
        .p_one {
          font-size: 16px;
          margin-top: 30px;
        }
        .p_two {
          margin-top: 10px;
          height: 25px;
          line-height: 25px;
          color: #1e9ff2;
          border-radius: 4px;
          border: 1px solid #1e9ff2;
          text-align: center;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
