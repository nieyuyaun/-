<template>
    <div id="ryDetail">
        <el-card class="box-card el-col-24">
                <div class="detail">
                    <div class="header">
                        <div class="title">
                            <p class="titles">
                                人员详情
                            </p>
                            <ul>
                                <li>
                                    <div  @click="$store.state.Rshow=false"  class="li">
                                     <img src="../../assets/images/1.png" alt="">
                                            <br>
                                            <p type="text" >编辑</p>
                                    </div>
                                </li>
                                <li>
                                    <div type="text" @click="dialogFormVisible = true" class="li">
                                          <img src="../../assets/images/2.png" alt="">
                                          <p type="text" >重置密码</p>
                                    </div>
                                    <el-dialog title="重置密码" :visible.sync="dialogFormVisible"  width="20%">
                                      <el-form   class="demo-ruleForm">
                                                    
                                                    <el-form-item label="请输入新密码"  size="mini">
                                                      <el-input  v-model="newval"></el-input>
                                                    </el-form-item>
                                                    <el-form-item label="请再次输入新密码"  size="mini">
                                                      <el-input  v-model="newsval"></el-input>
                                                    </el-form-item>
                                        </el-form>
                                      <div slot="footer" class="dialog-footer">
                                        <el-button @click="quxiao();dialogFormVisible = false">取 消</el-button>
                                        <el-button type="primary" @click="rest();dialogFormVisible = false">确 定</el-button>
                                      </div>
                                    </el-dialog>
                                </li>
                                <li>
                                    <div @click="open3" class="li">

                                            <img src="../../assets/images/3.png" alt="">
                                            <br>
                                            <p type="text" >冻结账户</p>
                                    </div>
                                </li>
                              
                                <li>
                                    <div @click="open5"   class="li">

                                            <img src="../../assets/images/5.png" alt="">
                                            <br>
                                            <p type="text">删除</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="user">
                            <div class="type">
                                <img :src="detail.avatar" alt="">
                            </div>
                            <div class="name">
                                <div class="job">
                                    <p>{{detail.name}}</p>
                                    <p>总店</p>
                                </div>
                                <div class="details">
                                    <ul>
                                        <li>
                                            <p>{{detail.sex}}</p>
                                            <p>性别</p>
                                        </li>
                                        <li>
                                            <p>{{detail.mobile}}</p>
                                            <p>电话</p>
                                        </li>
                                        <li>
                                            <p>{{detail.sfzh}}</p>
                                            <p>身份证</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="jbxinxi">
                        <p class="titles">基本信息</p>
                        <ul>
                            <li>
                                <p>入职时间</p>
                                <p>{{detail.rztime}}</p>
                            </li>
                            <li>
                                <p>出生年月</p>
                                <p>{{detail.cstime}}</p>
                            </li>
                            <li>
                                <p>籍贯</p>
                                <p>{{detail.jiguan}}</p>
                            </li>
                            <li>
                                <p>民族</p>
                                <p>{{detail.minzu}}</p>
                            </li>
                            <li>
                                <p>政治面貌</p>
                                <p>{{detail.zhengzhi}}</p>
                            </li>
                            <li>
                                <p>婚姻情况</p>
                                <p>{{detail.hunyin}}</p>
                            </li>
                            <li>
                                <p>银行卡号</p>
                                <p>{{detail.binknum}}</p>
                            </li>
                            <li>
                                <p>开户银行</p>
                                <p>{{detail.bink}}</p>
                            </li>
                            <li>
                                <p>社保账户</p>
                                <p>{{detail.shebao}}</p>
                            </li>
                            <li>
                                <p>公积金号 </p>
                                <p>{{detail.gongjijin}}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="lianxi">
                        <p class="titles">基本信息</p>
                        <ul>
                            <li>
                                <p>QQ</p>
                                <p>{{detail.QQ}}</p>
                            </li>
                            <li>
                                <p>微信</p>
                                <p>{{detail.wechart}}</p>
                            </li>
                            <li>
                                <p>备用电话</p>
                                <p>{{detail.mobile}}</p>
                            </li>
                            <li>
                                <p>紧急联系人</p>
                                <p>{{detail.jinjilx}}</p>
                            </li>
                            <li>
                                <p>紧急联系人</p>
                                <p>{{detail.jinjitel}}</p>
                            </li>
                            
                        </ul>
                        <div>
                            <p>现居地址</p>
                            <p>{{detail.xaddr}}1</p>
                        </div>
                        <div>
                            <p>户口本地址</p>
                            <p>{{detail.haddr}}</p>
                        </div>
                    </div>
                </div>
        </el-card>
    </div>
</template>

<script>
import axios from "axios";
import store from "@/store/store.js";
export default {
  data() {
    return {
      newval:"",
      newsval:"",
      detail: [],
      dialogFormVisible: false,
      
    };
  },
  store,
  mounted() {
    this.$nextTick(function() {
      this.RyDetail();
    });
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {
          this.$message({
            type: "info",
            message: "已取消重置"
          });
        });
    },
    rest() {
      
      if(this.newval!=this.newsval){
        this.$message.error('两次密码输入不符');
        return
      }
        else{
        var that=this;
        axios.post(window.http_urlr + "chongzhi", {
          newpwd:this.newval,
        })
        .then(res => {
          var data=res.data
          that.newpwd=data.newpwd;
        })
        .catch(error => {
          console.log("获取不到密码数据");
        });
        
      }
      this.$message({
        message: "重置成功",
        type: "success"
      });
     
      
    },
    quxiao() {
      this.$message({
        showClose: true,
        message: "取消重置"
      });
    },
    open3() {
      this.$confirm("确定要冻结账号吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          var that = this;
          axios
            .post(window.http_urlr + "lock", {})
            .then(res => {
              that.detail = res.data.data;
            })
            .catch(error => {
              console.log("冻结接口出小差了");
            });
          this.$message({
            type: "success"
          });
          message: "冻结账户成功!";
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消冻结"
          });
        });
    },
    open4() {
      this.$confirm("离职前请将资源转移给其他人员", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "离职成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消离职"
          });
        });
    },
    open5() {
      this.$confirm(
        "人员删除后将无法恢复，删除前请将资源转移给其他人",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          var that = this;
          axios
            .post(window.http_urlr + "del", {
              id: that.$store.state.id
            })
            .then(res => {
              var data = res.data;
              that.$message.success(data.msg);
              if (data.code == 1) {
                that.$emit("dellist");
              }
            })
            .catch(error => {
              console.log("sb");
            });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    RyDetail() {
      var that = this;
      var id = this.$store.state.id;
      if (id == 0) {
        return;
      }
      axios
        .post(window.http_urlr + "edit", {
          id: id
        })
        .then(res => {
          var data = res.data;
          that.detail = data.data;
        })
        .catch(error => {
          console.log("未获取到111");
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
      this.RyDetail();
    }
  }
};
</script>

<style lang="less" scoped>
.demo-ruleForm {
  margin-top: -10px;
}
.box-card{
  margin-top: 50px;
}
.el-message-box__message {
  .inp1 {
    width: 150px;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    border: 1px solid #e3e3e3;
  }
}

.el-dialog {
  padding: 0;
  margin: 0;
}
.el-dialog__body {
  text-align: center;
}
.el-dialog__footer {
  display: flex;
  padding: 0;
}
.detail {
  .header {
    .title {
      height: 100px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      .titles {
        font-size: 24px;
        font-weight: 1000;
      }
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          margin-right: 10px;
          cursor: pointer;
          .li {
            width: 50px;
            height: 50px;
            text-align: center;
            color: #1e9ff2;
            text-align: center;
            font-size: 10px;
          }
        }
      }
    }
  }
  .user {
    display: flex;
    align-items: center;
    .type {
      width: 174px;
      height: 174px;
      border-radius: 100px;
      overflow: hidden;
      position: relative;
      img {
        width: 170px;
        height: 170px;
        border-radius: 100px;
        position: absolute;
        z-index: 3;
      }
    }
    .name {
      margin-left: 20px;
      .job {
        p:nth-child(1) {
          font-size: 18px;
          font-weight: 800;
        }
        p:nth-child(2) {
          width: 48px;
          height: 24px;
          background: #ececec;
          border-radius: 4px;
          color: #000000;
          text-align: center;
          line-height: 24px;
          margin-top: 10px;
        }
      }
      .details {
        ul {
          display: flex;
          margin-top: 30px;
          li {
            margin-right: 40px;
            p:nth-child(1) {
              font-size: 16px;
              font-weight: 200;
            }
            p:nth-child(2) {
              font-size: 12px;
              color: #9a9a9a;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
.jbxinxi {
  .titles {
    font-size: 24px;
    font-weight: 1000;
    margin-top: 30px;
    margin-bottom: 16px;
  }
  ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 20px;
    li {
      width: 33%;
      margin-top: 20px;
      p:nth-child(1) {
        font-size: 18px;
        color: #6b6f82;
      }
      p:nth-child(2) {
        font-size: 16px;
        color: #d7d7d7;
        margin-top: 10px;
      }
    }
  }
}
.lianxi {
  .titles {
    font-size: 24px;
    font-weight: 1000;
    margin-top: 30px;
    margin-bottom: 16px;
  }
  ul {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    padding-bottom: 20px;
    li {
      width: 33%;
      margin-top: 20px;
      p:nth-child(1) {
        font-size: 18px;
        color: #6b6f82;
      }
      p:nth-child(2) {
        font-size: 16px;
        color: #d7d7d7;
        margin-top: 10px;
      }
    }
  }
  div {
    margin-bottom: 20px;
    p:nth-child(1) {
      font-size: 18px;
      color: #6b6f82;
    }
    p:nth-child(2) {
      font-size: 16px;
      color: #d7d7d7;
      margin-top: 10px;
    }
  }
}
</style>
