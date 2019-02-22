<template>
  <div>
    <el-card class="el-col-24 big">
      <div id="wrap">
          <el-select v-model="mendians" placeholder="选择门店" size="mini">
            <el-option
              v-for="item in mendian"
              :key="item.value"
              :label="item.lable"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="daqus" placeholder="选择大区" size="mini">
            <el-option
              v-for="item in daqu"
              :key="item.value"
              :label="item.lable"
              :value="item.value"
            ></el-option>
          </el-select>
      </div>
      <div class="big">
        <div class="add el-col-24" >
          <el-popover placement="bottom" width="140" trigger="click">
            <div class="dailog">
              <el-button type="text" @click="adds(),dialogVisible = true">
                <span class="p1">+</span>
                <span class="p2">添加门店</span>
              </el-button>
              <el-dialog
                        title="添加门店"
                        :visible.sync="dialogVisible"
                        width="30%"
                        :modal="false"
                        :before-close="handleClose">
                        <div class="add_big">
                          <div class="name">
                              <p>
                                <span class="red">*</span>
                                <span class="add_name">门店名称</span>
                              </p>
                            <el-input v-model="add_list.name" placeholder="请输入内容" size="mini"></el-input>
                          </div>
                          <div class="ssq">
                              <p>
                                <span class="red">*</span>
                                <span class="add_name">省市区</span>
                              </p>
                              <div>
                                <el-select v-model="list_.sheng" placeholder="请选择" size="mini">
                                  <el-option
                                    v-for="item in list_.sheng"
                                    :key="item.value"
                                    :label="item.lable"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                                <el-select v-model="add_list.shi" placeholder="请选择" size="mini">
                                  <el-option
                                    v-for="item in add_list.shi"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                                <el-select v-model="add_list.qu" placeholder="请选择" size="mini">
                                  <el-option
                                    v-for="item in add_list.qu"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                              </div>
                          </div>
                          <div class="address">
                              <p>
                                <span class="red">*</span>
                                <span class="add_name">门店地址</span>
                              </p>
                            <el-input v-model="add_list.address" placeholder="请输入内容" size="mini"></el-input>
                          </div>
                          <div class="biao">
                              <p>
                                <span class="red">*</span>
                                <span class="add_name">门店坐标</span>
                              </p>
                            <el-input v-model="add_list.lng" placeholder="请输入内容" size="mini"></el-input>
                            <el-input v-model="add_list.lat" placeholder="请输入内容" size="mini"></el-input>
                            <Map></Map>
                          </div>
                          <div class="daqu">
                              <p>
                                <span class="red">*</span>
                                <span class="add_name">所属大区</span>
                              </p>
                              <div>
                                <el-select v-model="add_list.daqu" placeholder="请选择大区" size="mini">
                                  <el-option
                                    v-for="item in list_.daqu"
                                    :key="item.value"
                                    :label="item.lable"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                              </div>
                          </div>
                          <div class="cy">
                              <p>
                                <span class="add_name">门店成员</span>
                              </p>
                              <el-select
                                  v-model="add_list.peo"
                                  multiple
                                  filterable
                                  allow-create
                                  default-first-option
                                  size="mini"
                                  placeholder="请选择文章标签">
                                  <el-option
                                    v-for="item in list_.people"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                          </div>
                        </div>
                        <span slot="footer" class="dialog-footer">
                          <el-button @click="dialogVisible = false">取 消</el-button>
                          <el-button type="primary" @click="add(), dialogVisible = false">确 定</el-button>
                        </span>
                      </el-dialog>
            </div>
            <p slot="reference" class="btn">...</p>
          </el-popover>
        </div>
        <div class="list">
          <div class="list_hd">
            <div class="list_text list_title el-col-7">门店名称</div>
            <div class="list_text list_title el-col-7 user" >
              <span>店长头像/姓名</span>
            </div>
            <div class="list_text list_jiage el-col-6">电话</div>
            <div class="list_text list_mianji el-col-4">所属大区</div>
          </div>
          <div class="list_li" v-for="(item,index) in lists" :key="index"  @click="xiangqing(item.id)">
            <div class="list_text list_title el-col-7">{{item.name}}</div>
            <div class="list_text list_title el-col-7 user" >
              <img :src="leader.avatar" alt="" class="list_img"/>
              <span>{{leader.name}}</span>
            </div>
            <div class="list_text list_jiage el-col-6">{{leader.mobile}}</div>
            <div class="list_text list_mianji el-col-4">{{item.daqu}}</div>
          </div>
        </div>
      </div>
      <div class="block">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="page" :page-size="limit" layout="sizes, prev, pager, next" :total="total">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>
<script>
import Axios from "axios";
import store from "@/store/store.js";
import Map from "@/components/mendian/map.vue";
export default {
  data() {
    return {
      add_list: {},
      lists: [],
      list_: [],
      total: 0,
      page: this.$store.state.page,
      limit: this.$store.state.limit,
      dialogVisible: false,
      dialogVisibles: false,
      input: "",
      value: "",
      value10: [],
      leader:[],
       options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      daqu:[],
      daqus:"",
      mendian:[],
      mendians:"",
    };
  },
  store,
  mounted() {
    this.$nextTick(function() {
      this.Mdlist();
      this.xiala();
    });
  },
  watch: {
    listenSearch: function(val, oldVal) {
      this.ss();
    }
  },
  computed: {
    listenSearch: function() {
      return this.$store.state.search;
    }
  },
  methods: {
    log() {
      // alert("1");
    },
    ss() {
      var _this = this;
      var page = _this.$store.state.page;
      var data = _this.$store.state.shaixuan;
      Axios.post(window.http_urlm + "msearch", {
        page: page,
        limit: _this.limit,
        data: data,
        name: _this.$store.state.search
      })
        .then(res => {
          var data = res.data;
          _this.total = Number(data.data.count);
          _this.lists = data.data.list;
        })
        .catch(error => {
          console.log("您的网络开小差了!2");
        });
    },
    Mdlist() {
      var that = this;
      Axios.post(window.http_urlm + "index", {
        page: that.page,
        limit: that.limit
      })
        .then(res => {
          var data = res.data;
          that.lists = data.data.list;
          that.total = Number(data.data.totle);
          that.$store.state.id = data.data.list[0].id;
          that.id = data.data.list[0].id;
          that.leader=data.data.list.people[0]
        })
        .catch(error => {
          console.log("111");
        });
    },
    xiangqing(id) {
      this.$store.state.id = id;
      this.$store.state.Rshow = true;
    },
    handleSizeChange(val) {
      this.$store.state.limit = val;
    },
    handleCurrentChange(val) {
      this.$store.state.page = val;
      this.ss();
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    adds() {
      var that = this;
      var col = that.list_;
      Axios.post(window.http_urlm + "xiala", {
        col: col
      })
        .then(res => {
          that.list_ = res.data.data;
        })
        .catch(error => {
          console.log("error");
        });
    },
    add() {
      var that = this;
      var col = that.col;
      var cols = that.add_list;
      Axios.post(window.http_urlm + "add", {
        cols: cols,
        col: col
      })
        .then(res => {
          this.$message({
            message: "添加成功",
            type: "success"
          });
        })
        .catch(error => {
          this.$message.error("添加失败");
          console.log("error");
        });
    },
    xiala(){
      var that=this;

      Axios.post(window.http_urlm+"xiala",{

      }).then(res=>{
        var data=res.data;
        that.mendian=data.data.mendian;
        that.daqu=data.data.daqu;
      }).catch(error=>{
        console.log("xiala拿不到")
      })
    }
  },
  components: {
    Map
  }
};
</script>
<style lang="less" scoped>
#wrap {
  position: absolute;
  left: 350px;
  top: -60px;
}
.el-select {
  width: 130px;
  margin-left: 20px;
}
.add_big {
  div {
    margin-bottom: 10px;
  }
  .red {
    color: red;
  }
  .add_name {
    font-size: 16px;
  }
  p {
    margin-bottom: 5px;
  }
  .name {
    .el-input {
      width: 394px;
    }
  }
  .ssq {
    .el-select {
      width: 126px;
      margin-right: 15px;
    }
  }
  .biao {
    .el-input {
      width: 170px;
    }
  }
  .daqu {
    .el-select {
      width: 255px;
    }
  }
}
.add {
  width: 95%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: space-between;
  position: absolute;
  margin-top: -90px;
  margin-left: 660px;
  .btn {
    border-radius: 50%;
    background: #fff;
    border: 1px solid #ececec;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 20px;
    color: #1e9ff2;
  }
  .p1 {
    width: 20px;
    height: 20px;
    font-size: 18px;
    background: #1e9ff2;
    color: white;
  }
}

.block {
  clear: both;
}
.big {
  padding-left: 2%;
}
.list_li{
  width:100%;
  text-align: center;
  padding-top: 18px;
  padding-bottom: 18px;
  border-bottom:2px solid #f6f6f6;
  height: 48px;
  display: flex;
  align-items: center;
  .list_img{
    width:48px;
    height: 48px;
    border-radius:50%;
  }
}
.list_hd{
  width:100%;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom:2px solid #f6f6f6;
  height: 20px;
  display: flex;
  align-items: center;
}
.user{
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    margin-left: 8px;
  }
}

// .box {
//   cursor: pointer;
//   margin-right: 4%;
//   margin-bottom: 4%;
//   width: 45%;;
//   padding: 20px;
//   box-shadow: 1px 1px 5px #888888;
//   border:1px solid #ececec;
//   .md_name,
//   .md_map {
//     margin-bottom: 30px;
//     img {
//       width: 20px;
//       height: 20px;
//     }
//     span {
//       font-size: 14px;
//       margin-left: 10px;
//     }
//   }
//   .md_lister {
//     div {
//       img {
//         width: 20px;
//         height: 20px;
//       }
//       span {
//         font-size: 14px;
//         margin-left: 10px;
//       }
//     }
//     ul {
//       display: flex;
//       text-align: center;
//       margin-left: 25px;
//       margin-top: 10px;
//       li {
//         width: 52px;
//         margin-right: 20px;
//         img {
//           width: 52px;
//           height: 52px;
//           border-radius: 50px;
//         }
//         p {
//           font-size: 12px;
//           margin-top: 12px;
//         }
//       }
//     }
//   }
// }
</style>
