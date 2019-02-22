<template>
  <div>
    <el-card class="el-class-24">
      <header>
        <p>大区编辑</p>
        <button @click="addEdit()">保存</button>
      </header>
      <div class="dq_name">
        <span class="red">*</span>
        <span class="name">大区名称</span>
        <el-input v-model="data.name" placeholder="请输入内容" size="mini"></el-input>
      </div>
      <div class="ses">
        <p>管辖门店</p>
        <el-select
          v-model="value10"
          multiple
          filterable
          allow-create
          default-first-option
          size="mini"
          placeholder="请选择门店"
        >
          <el-option
            v-for="item in xiala.mendian"
            :key="item.value"
            :label="item.lable"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="ses">
        <p>区域成员</p>
        <el-select
          v-model="value11"
          multiple
          filterable
          allow-create
          default-first-option
          size="mini"
          placeholder="请选择区域成员"
        >
          <el-option
            v-for="item in xiala.peo"
            :key="item.value"
            :label="item.lable"
            :value="item.value"
          ></el-option>
        </el-select>
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
      data: [],
      xiala: [],
      value10: [],
      value11: []
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.DqEdit();
      this.DqEdit_xiala();
    });
  },
  store,
  computed: {
    listenId: function() {
      return this.$store.state.id;
    }
  },
  methods: {
    DqEdit() {
      var that = this;
      Axios.post(window.http_urld + "edit", {
        id: that.$store.state.id
      })
        .then(res => {
          that.data = res.data.data;
        })
        .catch(error => {
          console.log("大区编辑获取不到");
        });
    },
    DqEdit_xiala() {
      var that = this;
      Axios.post(window.http_urld + "xiala", {
        id: that.$store.state.id
      })
        .then(res => {
          that.xiala = res.data.data;
        })
        .catch(error => {
          console.log("大区编辑获取不到");
        });
    },
    addEdit() {
      var that = this;
      Axios.post(window.http_urld + "editdata", {
        id: that.$store.state.id,
        row: that.data,
        col: that.xiala
      })
        .then(res => {
          var data = res.data;
          that.$message.success(data.msg);
          var timer = setTimeout(function() {
            that.$emit("dqlist");
            clearTimeout(timer);
          }, 50);
        })
        .catch(erro => {
          console.log("您的网络开小差了!1");
        });
    }
  }
};
</script>

<style lang="less" scoped>
.el-card {
  header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ececec;
    p {
      font-weight: 1000;
      font-size: 24px;
    }
    button {
      width: 86px;
      height: 40px;
      background: #1e9ff2;
      border-radius: 4px;
      border: none;
      font-size: 16px;
      color: #fff;
    }
  }
  .dq_name {
    margin-top: 40px;
    .red {
      color: red;
    }
    .name {
      font-size: 16px;
    }
    .el-input {
      margin-top: 10px;
    }
  }
  .el-select {
    width: 610px;
  }
  .ses {
    margin-top: 38px;
    p {
      margin-bottom: 10px;
    }
  }
}
</style>
