<template>
    
    <div>
         <el-card class="box-card el-col-24">
                <div class="header">
                    <p>人员编辑</p>
                    <button @click="RyeditAdd()">保存</button>
                </div>
                <div class="information">
                    <div class="user_head">
                        <img :src="data.avatar" alt="">
                    </div>
                    <div class="user_content">
                            <div class="mt">
                                    <p class="red"><span>*</span>姓名</p>
                                    <el-input v-model="data.name" placeholder="请输入姓名" size="mini" validate-event></el-input>
                            </div>
                            <div class="mt left">
                                    <p class="red"><span>*</span>性别</p>
                                    <el-select v-model="data.sex" placeholder="请选择性别"  popper-class="sex" size="mini">
                                        <el-option
                                            v-for="item in xiala_data.sex"
                                            :key="item.value"
                                            :label="item.lable"
                                            :value="item.lable"
                                            size="mini"
                                            class="sex"
                                            >
                                        </el-option>
                                    </el-select>
                            </div>
                            <div class="mt">
                                    <p class="red"><span>*</span>电话 </p>
                                    <el-input v-model="data.mobile" placeholder="请输入内容" size="mini" maxlength="11" @mouseout="tel()"></el-input>
                            </div>
                            <div class="mt">
                                    <p class="red"><span>*</span>身份证</p>
                                    <el-input v-model="data.sfzh" placeholder="请输入内容" size="mini" class="idcard" maxlength="18"></el-input>
                            </div>
                            <div class="mt">
                                    <p class="red"><span>*</span>工号 </p>
                                    <el-input v-model="data.gonghao" placeholder="请输入内容" size="mini"></el-input>
                            </div>
                            <div class="mt">
                                    <p class="red"><span>*</span>岗位 </p>
                                    <el-select v-model="data.group_id" placeholder="请选择" size="mini">
                                        <el-option
                                            v-for="item in xiala_data.gangwei"
                                            :key="item.value"
                                            :label="item.lable"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                            </div>
                            <div class="mt md">
                                    <p class="red"><span>*</span>门店 </p>
                                    <el-select v-model="data.mendianid" placeholder="请选择" size="mini">
                                        <el-option
                                            v-for="item in xiala_data.mendian"
                                            :key="item.value"
                                            :label="item.lable"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                            </div>
                    </div>
                    <div class="jiben">
                        <p class="title">基本信息</p>
                        <div class="jiguan">
                            <div>
                                    <div class="block">
                                    <p class="demonstration">入职时间</p>
                                    <el-date-picker
                                      type="date"
                                      v-model="data.rztime"
                                      placeholder="选择日期"
                                      size="mini"
                                      class="date"
                                      >
                                    </el-date-picker>
                                  </div>
                            </div>
                            <div>
                                    <p class="red">出生日期</p>
                                    <div class="block" >
                                        <el-date-picker
                                        size="mini"
                                        v-model="data.cstime"
                                        type="date"
                                        placeholder="选择日期">
                                        </el-date-picker>
                                    </div>
                            </div>
                            <div>
                                    <p class="red">籍贯</p>
                                    <el-input v-model="data.jiguan" placeholder="请输入内容" size="mini"></el-input>
                            </div>
                            <div>
                                    <p class="red">民族</p>
                                    <el-input v-model="data.minzu" placeholder="请输入内容" size="mini"></el-input>
                            </div>
                        </div>
                        <div class="zhengzhi">
                            <div>
                                <p class="red">政治面貌</p>
                                <el-input v-model="data.zhengzhi" placeholder="请输入内容" size="mini"></el-input>
                            </div>
                            <div>
                                <p class="red">婚姻情况</p>
                                    <el-select v-model="data.hunyin" placeholder="请选择" size="mini">
                                        <el-option
                                            v-for="item in xiala_data.hunyin"
                                            :key="item.value"
                                            :label="item.lable"
                                            :value="item.lable">
                                        </el-option>
                                    </el-select>
                            </div>
                            <div class="bank">
                                <p class="red">银行卡号</p>
                                <el-input v-model="data.binknum" placeholder="请输入内容" size="mini" maxlength="19" ></el-input>
                            </div>
                        </div>
                        <div class="shebao">
                             <div class="yinhang">
                                <p class="red">开户银行</p>
                                <el-input v-model="data.bink" placeholder="请输入内容" size="mini"></el-input>
                            </div>
                             <div class="shebaoID">
                                <p class="red">社保账号</p>
                                <el-input v-model="data.shebao" placeholder="请输入内容" size="mini"></el-input>
                            </div>
                        </div>
                    </div>
                    <div class="jijin">
                                <p class="red">公积金号</p>
                                <el-input v-model="data.gongjijin" placeholder="请输入内容" size="mini"></el-input>
                    </div>
                </div>
                <div class="tell">
                    <div class="title">
                        <p>联系方式</p>
                    </div>
                    <div class="tencent">
                        <div>
                            <p class="red">QQ</p>
                            <el-input v-model="data.QQ" placeholder="请输入内容" size="mini" maxlength="11" type="number"></el-input>
                        </div>
                        <div>
                            <p class="red">微信</p>
                            <el-input v-model="data.wechart" placeholder="请输入内容" size="mini"></el-input>
                        </div>
                        <div>
                            <p class="red">备用电话</p>
                            <el-input v-model="data.tel" placeholder="请输入内容" size="mini" maxlength="11" type="number"></el-input>
                        </div>
                    </div>
                    <div class="now">
                        <p class="red">现居住地址</p>
                        <el-input v-model="data.xaddr" placeholder="请输入内容" size="mini"></el-input>
                    </div>
                    <div class="hukou">
                        <p class="red">户口地址</p>
                        <el-input v-model="data.haddr" placeholder="请输入内容" size="mini"></el-input>
                    </div>
                    <div class="urgents">
                        <div class="peo">
                            <p class="red">紧急联系人</p>
                            <el-input v-model="data.jinjilx" placeholder="请输入内容" size="mini"></el-input>
                        </div>
                        <div class="peo">
                            <p class="red">紧急联系人电话</p>
                            <el-input v-model="data.jinjitel" placeholder="请输入内容" size="mini"></el-input>
                        </div>
                    </div>
                    <div class="beizhu">
                        <p class="red">备注</p>
                        <el-input
                                type="textarea"
                                :rows="5"
                                placeholder="请输入内容"
                                v-model="data.beizhu">
                        </el-input>

                    </div>
                </div>

            </el-card> 
    </div>
</template>

<script>
import Axios from "axios";
import store from "@/store/store.js";
export default {
  data() {
    return {
      data: [],
      xiala_data: [],
    };
  },
  store,
  mounted() {
    this.$nextTick(function() {
      this.editlist();
      this.selectList();
        this.id = this.$store.state.id;
    });
  },
  methods: {
    editlist() {
      var that = this;
      Axios.post(window.http_urlr + "edit", {
        id:that.$store.state.id
      })
        .then(res => {
          var data = res.data;
          that.data = data.data;
        })
        .catch(error => {
          console.log("未获取到");
        });
    },
    selectList() {
      var that = this;
      Axios.post(window.http_urlr + "xiala", {
        id:that.$store.state.id
      })
        .then(rese => {
          var data = rese.data;
          that.xiala_data = data.data;
        })
        .catch(errors => {
          console.log("真的获取不到呢");
        });
    },
    RyeditAdd() {
      var that = this;
      Axios.post(window.http_urlr + "editdata", {
        id:that.$store.state.id,
        row: that.data
      })
        .then(res => {
          var data = res.data;
          that.$message.success(data.msg);
          var timer = setTimeout(function () {
            that.$emit('rylist')
            clearTimeout(timer)
          },50)
        })
        .catch(erro => {
          console.log("您的网络开小差了!1");
        });
    }
  },
  watch: {}
};
</script>
<style lang="less" scoped>
.date {
  margin-top: 8px;
}
.md{
  margin-left: 20px;
}
.box-card {
  width: 100%;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 1000px;
  padding: 0 !important;
  margin-top: 28px;
  .red {
    margin-bottom: 8px;
    span {
      color: red;
    }
    p {
      font-size: 16px;
    }
  }
  .mt {
    margin-top: 30px;
  }
  .left {
    margin-right: 20px;
    width: 150px;
  }
  .title {
    margin-top: 36px;
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 1000;
  }
  .header {
    height: 90px;
    widows: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 20px;
    p {
      font-size: 20px;
      font-weight: 1000;
    }
    button {
      width: 86px;
      height: 40px;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      color: #ffffff;
      background: #1e9ff2;
      cursor: pointer;
    }
  }
  .information {
    width: 100%;
    .user_head {
      width: 84px;
      height: 84px;
      overflow: hidden;
      border-radius: 50px;
      margin-top: 34px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .user_content {
      display: flex;
      flex-wrap: wrap;
      .el-input {
        width: 120px;
        margin-right: 20px;
      }
      .idcard {
        width: 188px;
      }
      .el-input--suffix {
        width: 120px;
        margin-right: 20px;
      }
    }
    .jiben {
      .jiguan {
        display: flex;
        .el-input {
          width: 140px;
          margin-right: 20px;
        }
      }
    }
    .zhengzhi {
      display: flex;
      margin-top: 36px;
      .el-input {
        width: 150px;
        margin-right: 20px;
      }
      .bank {
        .el-input {
          width: 236px;
          margin-left: 20px;
        }
      }
    }
    .shebao {
      display: flex;
      margin-top: 34px;
      .yinhang {
        margin-right: 40px;
        .el-input {
          width: 210px;
        }
      }
      .shebaoID {
        .el-input {
          width: 244px;
        }
      }
    }
    .jijin {
      margin-top: 30px;
      .el-input {
        width: 246px;
      }
    }
  }
  .tell {
    .tencent {
      display: flex;
      div {
        margin-right: 20px;
      }
      .el-input {
        width: 150px;
      }
      div:nth-child(3) {
        .el-input {
          width: 196px;
        }
      }
    }
    .now {
      margin-top: 30px;
    }
    .hukou {
      margin-top: 30px;
    }
    .urgents {
      display: flex;

      .peo {
        margin-top: 30px;
        margin-right: 20px;
        .el-input {
          width: 151px;
        }
      }
    }
    .beizhu {
      margin-top: 30px;
    }
  }
}
</style>
