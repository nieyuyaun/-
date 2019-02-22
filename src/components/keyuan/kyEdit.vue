<template>
    <div>
        <el-card class="el-col-24">
            <header>
                <p class="title">客源编辑</p>
                <button @click="KyAdd()">保存</button>
            </header>
            <div class="xinxi">
                <div class="xx">
                    <p>客源信息</p>
                </div>
                <div class="kehu">
                    <div class="name">
                        <p class="fonts">
                            <span class="red">*</span><span class="font">客户姓名</span>
                        </p>
                        <el-input v-model="edit.name" size="mini"></el-input>
                    </div>
                    <div class="tel">
                        <p  class="fonts">
                            <span class="red">*</span><span class="font">联系电话</span>
                        </p>
                        <el-input v-model="edit.tel" size="mini"></el-input>
                    </div>
                    <div class="tels">
                        <span></span><span></span>
                        <el-input v-model="edit.btel" placeholder="添加客户备用电话" size="mini"></el-input>
                    </div>                 
                </div>
                <div class="leixing">
                    <div class="lx">
                        <p class="fonts">
                            <span class="red">*</span><span class="font">客源类型</span>

                        </p>
                        <el-select v-model="edit.fwleixing" placeholder="请选择" size="mini">
                                <el-option
                                v-for="item in xiala.fwleixing"
                                :key="item.value"
                                :label="item.lable"
                                :value="item.value">
                                </el-option>
                        </el-select>
                    </div>
                    <div class="dj">
                        <p class="fonts">
                            <span class="red">*</span><span class="font" >客源等级</span>
                        </p>
                        <el-select v-model="edit.kydengji" placeholder="请选择客源等级"  size="mini">
                                <el-option
                                v-for="item in xiala.kydengji"
                                :key="item.value"
                                :label="item.lable"
                                :value="item.value">
                                </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="beizhu">
                    <p class="fonts font">备注</p>
                    <el-input
                        type="textarea"
                        :rows="5"
                        placeholder="请输入内容"
                        v-model="edit.beizhu">
                    </el-input>
                </div>
                <div class="xx">
                    <p>需求意向</p>
                </div>
                <div class="address">
                    <div class="quyu">
                        <p class="fonts">
                            <span class="red">*</span><span class="font">所在地区</span>
                        </p>
                        <el-select v-model="edit.did" placeholder="区域"  size="mini">
                            <el-option
                                v-for="item in quyu"
                                :key="item.value"
                                :label="item.lable"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="sq">
                        <el-input v-model="edit.tel" size="mini"></el-input>
                    </div>
                    <div class="xq">
                        <p class="fonts">
                            <span class="red">*</span><span class="font">商圈</span>
                        </p>
                         <el-input v-model="edit.bussiness" size="mini"></el-input>

                    </div>
                </div>
                <div class="fangxing">
                    <p class="fonts">
                        <span class="red">*</span><span class="font">房型</span>
                    </p>
                    <div class="fx">
                        <div>
                            <input type="text" v-model="edit.shi">
                            <p>室</p>
                        </div>
                        <div>
                            <input type="text" v-model="edit.ting">
                            <p>厅</p>
                        </div>
                        <div>
                            <input type="text" v-model="edit.wei">
                            <p>卫</p>
                        </div>
                        <div>
                            <input type="text" v-model="edit.yang">
                            <p>阳</p>
                        </div>
                    </div>
                </div>
                <div class="jiage">
                    <div class="zj">
                        <p class="fonts">
                            <span class="font">总价</span>
                        </p>
                        <div>
                            <el-input v-model="edit.xqzj1" size="mini"></el-input>
                            <p class="h">—</p>
                            <el-input v-model="edit.xqzj2" size="mini"></el-input>
                            <p class="f">万</p>
                        </div>
                    </div>
                    <div class="mj">
                        <p class="fonts">
                            <span class="font">面积</span>
                        </p>
                        <div>
                            <el-input v-model="edit.xqmianji1" size="mini"></el-input>
                            <p class="h">—</p>
                            <el-input v-model="edit.xqmianji2" size="mini"></el-input>
                            <p class="f">㎡</p>
                        </div>
                    </div>
                </div>
                <div class="leixing">
                    <div class="lx">
                        <p class="fonts">
                            <span class="font">类型</span>
                        </p>
                         <el-select v-model="edit.fwleixing" placeholder="" size="mini">
                                <el-option
                                v-for="item in xiala.fwleixing"
                                :key="item.value"
                                :label="item.lable"
                                :value="item.value">
                                </el-option>
                        </el-select>
                    </div>
                    <div class="zx">
                        <p class="fonts">
                           </span><span class="font">装修</span>
                        </p>
                         <el-select v-model="edit.zhuangxiu" placeholder="住宅" size="mini">
                            <el-option
                                v-for="item in xiala.zhuangxiu"
                                :key="item.value"
                                :label="item.lable"
                                :value="item.value">
                                </el-option>
                            </el-select>
                    </div>
                     <div class="mj">
                        <p class="fonts">
                           </span><span class="font">楼层</span>
                        </p>
                        <div>
                            <el-input v-model="edit.louceng1" size="mini"></el-input>
                            <p class="h">—</p>
                            <el-input v-model="edit.louceng2" size="mini"></el-input>
                            <p class="f">层</p>
                        </div>
                    </div>
                   
                </div>
                 <div class="cx">
                            <span class="font">朝向</span><br>
                            <br>  

                        <el-select v-model="edit.chaoxiang" placeholder="朝向" size="mini">
                            <el-option
                                v-for="item in xiala.chaoxiang"
                                :key="item.value"
                                :label="item.lable"
                                :value="item.value">
                                </el-option>
                            </el-select>
                    </div>
                <div class="mudi ">
                    <el-radio-group v-model="edit.mudi">
                        <el-radio :label="1">就学</el-radio>
                        <el-radio :label="2">结婚</el-radio>
                        <el-radio :label="3">投资</el-radio>
                        <el-radio :label="4">换房</el-radio>
                        <el-radio :label="5">其他</el-radio>
                    </el-radio-group>
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
      radio1: "1",
      radio2: "2",
      radio3: "3",
      radio4: "4",
      radio5: "5",
      input: "",
      value: "",
      textarea: "",
      edit: [],
      xiala: [],
      quyu: []
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.KyEdit();
    });
  },
  store,
  watch: {
    listenId() {
      this.KyEdit();
    }
  },
  computed: {
    listenId: function() {
      return this.$store.state.id;
    }
  },
  methods: {
    KyEdit() {
      var that = this;
      Axios.post(window.http_url + "edit", {
        id: that.$store.state.id
      })
        .then(res => {
          Axios.post(window.http_url + "xiala", {})
            .then(res => {
              that.xiala = res.data.data.pz;
              that.quyu = res.data.data.quyu;
            })
            .catch(error => {
              console.log("xiala拿不到");
            });
          that.edit = res.data.data;
        })
        .catch(error => {
          console.log("edit拿不到");
        });
    },
    KyAdd() {
      var that = this;
      Axios.post(window.http_url + "editdata", {
        id: that.$store.state.id,
        row: that.edit,
      })
        .then(res => {
          var data = res.data;
          that.$message.success(data.msg);
          var timer = setTimeout(function() {
            that.$emit("kylist");
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
.title {
  font-size: 24px;
  font-weight: 1000;
}
.red {
  color: red;
  margin-bottom: 10px;
}
.font {
  font-size: 14px;
}
.fonts {
  margin-bottom: 5px;
}
.h {
  margin-left: 10px;
  margin-right: 10px;
}
.f {
  margin-left: 10px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #ececec;
  button {
    width: 85px;
    height: 40px;
    background: #1e9ff2;
    color: #fff;
    border: none;
    border-radius: 4px;
  }
}
.xinxi {
  .xx {
    height: 100px;
    line-height: 100px;
    font-size: 24px;
    font-weight: 1000;
  }
  .kehu {
    display: flex;
    align-items: flex-end;

    .name {
      width: 150px;
    }
    .tel {
      width: 170px;
      margin-left: 40px;
      margin-right: 40px;
    }
    .tels {
      width: 175px;
    }
  }
}
.leixing {
  display: flex;
  margin-top: 30px;
  .lx {
    width: 95px;
    margin-right: 30px;
  }
  .dj {
    margin-left: 30px;
    width: 167px;
  }
}
.beizhu {
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ececec;
}
.address {
  display: flex;
  align-items: flex-end;
  .quyu {
    width: 93px;
  }
  .sq {
    width: 130px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .xq {
    width: 184px;
  }
}
.fangxing {
  margin-top: 30px;
  .fx {
    display: flex;
    position: relative;
    input {
      width: 60px;
      height: 24px;
      line-height: 24px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      padding-right: 30px;
      padding-left: 10px;
      margin-right: 20px;
    }
    p {
      position: absolute;
      margin-left: 81px;
      margin-top: -23px;
    }
  }
}
.jiage {
  display: flex;
  margin-top: 30px;
  .zj {
    margin-right: 45px;
    div {
      display: flex;
      align-items: center;
    }
  }
  .mj {
    div {
      display: flex;
      align-items: center;
    }
  }
  .el-input {
    width: 100px;
  }
}
.leixing {
  .zx {
    width: 137px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .mj {
    div {
      display: flex;
      align-items: center;
      .el-input {
        width: 100px;
      }
    }
  }
  .lx {
    .el-select {
      width: 138px;
    }
  }
}
.cx {
  margin-top: 30px;
  .el-select {
    width: 137px;
  }
}
.mudi {
  margin-top: 30px;
}
</style>
