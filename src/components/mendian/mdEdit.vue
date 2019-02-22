<template>
    <div>
        <el-card class="el-col-24">
            <header>
                <p>门店编辑</p>
                <button @click="MdeditAdd()">保存</button>
            </header>
            <div class="Md_name">
                <div class="title_one">
                    <span class="red">*</span>
                    <span class="Md_names">门店名称</span>
                </div>
                <el-input v-model="editData.name" placeholder="请输入内容" size="mini" class="inp_one"></el-input>
            </div>
            <div class="Md_province">
                <div class="title_one">
                    <span class="red">*</span>
                    <span class="Md_province">省市区</span>    
                </div>
                <div>
                     <el-select @change="quyu(editData.sheng)" size="mini" v-model="editData.sheng" placeholder="省" class="address">
                      <el-option v-for="item in sheng" :key="item.value" :label="item.lable" :value="item.value"></el-option>
                    </el-select>

                    <el-select @change="quyus(editData.shi)" size="mini" v-model="editData.shi" placeholder="市" class="address">
                      <el-option v-for="item in shi" :key="item.value" :label="item.lable" :value="item.value"></el-option>
                    </el-select>

                    <el-select size="mini" v-model="editData.qu" placeholder="区" class="address">
                      <el-option v-for="item in qu" :key="item.value" :label="item.lable" :value="item.value"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="Md_address">
                <div class="title_one">
                    <span class="red">*</span>
                    <span class="Md_address">门店地址</span>    
                </div>
                    <el-input v-model="editData.addr" placeholder="请输入门店地址" size="mini" class="inp_one"></el-input>
            </div>
            <div class="Md_coordinate">
                <div class="title_two">
                    <span class="red">*</span>
                    <span class="Md_coordinates">门店坐标</span>    
                </div>
                <div class="map"> 

                <el-input v-model="input" placeholder="请输入内容" size
                ="mini" class="inp_two"></el-input>
                <el-input v-model="input" placeholder="请输入内容" size="mini" class="inp_two"></el-input>
                <el-button type="text" @click="dialogVisible = true">选择坐标</el-button>
                  <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="50%"
                    :before-close="handleClose">
                    <map-edit></map-edit>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
                  </el-dialog>
                </div>

            </div>
            <div class="Md_daqu">
                <p class="Md_daqus">所属大区</p>    
                <el-select v-model="editData.daquid" placeholder="请选择大区" size="mini">
                    <el-option
                    v-for="item in daqu.daqu"
                    :key="item.value"
                    :label="item.lable"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="Md_chengyuan">
                <p class="Md_chengyuan">门店成员 </p>
                 <el-select
                        v-model="editData.people"
                        multiple
                        filterable
                        allow-create
                        default-first-option
                        placeholder="请选择门店成员">
                        <el-option
                        v-for="item in lister"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
            </div>
        </el-card>
    </div>
    </div>
    
</template>
<script>
import MapEdit from "@/components/mendian/map";
import Axios from "axios";
import store from "@/store/store.js";

export default {
  data() {
    return {
      data: [],
      input: "",
      value: "",
      daqu: [],
      lister: [],
      value10: [],
      editData: [],
      shi: [],
      qu: [],
      sheng: [],
      area: [],
       dialogVisible: false
    };
  },
  store,
  mounted: function() {
    this.$nextTick(function() {
      this.edit();
      this.selectList();
      this.id = this.$store.state.id;
    });
  },
  watch: {
    listenId: function(val, oldVal) {
      this.selectList();
    }
  },
  computed: {
    listenId: function() {
      return this.$store.state.id;
    }
  },
  components: {
    MapEdit
  },
  methods: {
    edit() {
      var _this = this;
      Axios.post(window.http_urlm + "edit", {
        id: _this.$store.state.id
      })
        .then(res => {
          var data = res.data;
          _this.editData = data.data;
        })
        .catch(error => {
          console.log("msg");
        });
    },
    selectList() {
      var that = this;
      Axios.post(window.http_urlm + "xiala", {
        id: that.$store.state.id
      })
        .then(rese => {
          var data = rese.data;
          that.daqu = data.data;
          that.lister = data.data.people;
          that.sheng = data.data.sheng;
        })
        .catch(errors => {
          console.log("真的获取不到呢");
        });
    },
    quyu(value) {
      var that = this;
      Axios.post(window.http_urlm + "liandong", {
        aid: value
      })
        .then(res => {
          var data = res.data;
          that.shi = data.data;
        })
        .catch(res => {
          console.log("您的网络开小差了！");
        });
    },
    quyus(value){
      var that=this
      Axios.post(window.http_urlm + "liandong",{
        aid:value
      }).then(res => {
          var data = res.data;
          that.qu = data.data;
        })
        .catch(error => {
          console.log("您的网络开小差了！");
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    
    MdeditAdd() {
      var that = this;
      Axios.post(window.http_urlm + "editdata", {
        id: that.$store.state.id,
        row: that.editData
      })
        .then(res => {
          var data = res.data;
          that.$message.success(data.msg);
          var timer = setTimeout(function() {
            that.$emit("mdlist");
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
.map {
  display: flex;
  align-items: flex-end;
}
.el-card {
  padding-bottom: 150px;
  margin-bottom: 50px;
  .red {
    color: red;
  }
  .Md_names {
    font-size: 16px;
  }
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
      cursor: pointer;
    }
  }
  .Md_name {
    height: 140px;
    .title_one {
      padding-top: 35px;
    }
    .inp_one {
      margin-top: 10px;
    }
  }
  .Md_province {
    font-size: 16px;
    .title_one {
      margin-bottom: 10px;
    }
    .el-select {
      width: 128px;
      margin-right: 20px;
    }
  }
  .Md_address {
    font-size: 16px;
    .title_one {
      padding-top: 35px;
      margin-bottom: 10px;
    }
  }
  .Md_coordinate {
    .title_two {
      margin-top: 30px;
      font-size: 16px;
    }
    .inp_two {
      width: 208px;
      margin-top: 10px;
      margin-right: 20px;
    }
    .change {
      height: 30px;
      width: 106px;
      border: 1px solid #1e9ff2;
      color: #1e9ff2;
      background: white;
      font-size: 15px;
    }
  }
  .Md_daqu {
    p {
      margin-top: 35px;
      font-size: 16px;
    }
    .el-select {
      margin-top: 10px;
    }
  }
  .Md_chengyuan {
    margin-top: 35px;
    p {
      font-size: 16px;
    }
    .el-select {
      margin-top: 10px;
      width: 700px;
    }
  }
}
</style>
