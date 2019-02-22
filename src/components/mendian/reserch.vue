<template>
  <div>
    <div class="reserch">
      <div class="inp">
        <input type="text" placeholder="请输入姓名/门店/区域" v-model="search" @change="searchInp">
      </div>
      <i class="el-icon-search"></i>
    </div>
   
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import store from "@/store/store.js";
export default {
  data: function() {
    return {
      search: "",
    };
  },
  store,
  methods: {
    searchInp: function() {
      this.$store.state.search = this.search;
    },
  }
};
</script>

<style lang="less">
.reserch {
  width: 314px;
  height: 46px;
  background: #ffffff;
  border-radius: 100px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin-left: 35px;
  margin-top: 31px;
  box-shadow: 2px 2px 2px gray;
}
.sel {
  width: 95px;
  height: 46px;
  border-radius: 100px;
  background: #409eff;
  line-height: 46px;
  text-align: center;
  color: #ffffff;
  overflow: hidden;
  font-size: 18px;
  text-decoration: none;
  border: none;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
option {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari 和 Chrome */
  appearance: none;
  margin-top: 20px;
}
.inp {
  input {
    width: 265;
    height: 44px;
    border-radius: 100px;
    border: none;
    text-decoration: none;
    font-size: 18px;
    user-select: none;
    padding-left: 20px;
  }
}
.el-icon-search {
  font-size: 25px;
  margin-right: 25px;
}

* {
  margin: 0;
  padding: 0;
}
#wrap {
  position: relative;
  left: 350px;
  top: -35px;
}
.el-select {
  width: 130px;
  margin-left: 20px;
}
</style>
