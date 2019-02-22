<template>
    <div>
        <div class="reserch">
            <div>
              <div class="sel">搜索</div>
            </div>
            <div class="inp">
                <input type="text" placeholder="请输入小区\标题\" v-model="search" @change="searchInp">
            </div>
             <i class="el-icon-search"></i>
        </div>
       <div id="wrap">

</div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import store from '@/store/store.js'
export default {
  data:function() {
    return {
      search: ''
    };
  },
  store,
  methods:{
    searchInp: function () {
      this.$store.state.search = this.search
    }
  }
};
</script>

<style lang="less" scoped>
.ul1 {
  position: absolute;
  margin-top: 1px;
  li {
    width: 580px;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e3e3e3;
    border-radius: 2px;
    background: #ffffff;
  }
}
.reserch {
  width: 712px;
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
  /*padding-left: 25px;*/
}
option {
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari 和 Chrome */
  appearance: none;
  margin-top: 20px;
}
.inp {
  input {
    width: 500px;
    height: 46px;
    border-radius: 100px;
    border: none;
    text-decoration: none;
    font-size: 18px;
    user-select: none;
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
  width: 100px;
  height: 30px;
}
sel select {
  width: 120px;
}
</style>
