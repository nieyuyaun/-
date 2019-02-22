<template>
    <div>
        <el-card class="el-col-24">
            <header>
                <p class="title">门店详情</p>
                <div @click="$store.state.Rshow=false">
                    <img src="../../assets/images/1.png" alt=""> 
                    <p class="bj">编辑</p>
                </div>
            </header>
            <div class="dq_name">
                {{list.name}}
            </div>
            <div class="gx_md">
                <span>所属大区：</span><span>
                    {{list.daquid}}
                    </span>
                
            </div>
            <div class="list">
                <p class="lists">门店成员</p>
                <ul>
                    <li v-for="(item,index) in list.people" :key="index">
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
      list: [],
      people:[]
    };
  },
  store,
  mounted: function() {
    this.$nextTick(function() {
      this.detail();
    });
  },
  methods: {
    detail() {

      var that = this;
      var id = that.$store.state.id;
      if (id == 0) {
        return;
      }

      Axios.post(window.http_urlm + "mdetail", {
        id: id
      })
        .then(res => {
          var data = res.data;
          that.list = data.data;
          // that.people=data.data.people;

        })
        .catch(error => {
          console.log("111");
        });
    }
  },
  computed: {
    listenId: function() {
      return this.$store.state.id;
    }
  },
  watch: {
    listenId: function(val, oldVal) {
      this.detail();
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
      cursor: pointer;

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
    span {
      font-size: 20px;
      margin-bottom: 20px;
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
          border-radius:100px;

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
