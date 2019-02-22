<template>
    <div>
        <el-card class="el-col-24 big">
          <div id="wrap">
            <el-select v-model="mendians" placeholder="选择门店" size="mini">
              <el-option
                v-for="item in mendian"
                :key="item.value"
                :label="item.lable"
                :value="item.value"
              ></el-option>
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
                      <el-button type="text"  @click="add(),dialogVisible = true">
                        <span class="p1">+</span>
                        <span class="p2">添加大区</span>
                      </el-button>
                      <el-dialog
                                title="添加大区"
                                :visible.sync="dialogVisible"
                                width="30%"
                                :modal="false"
                                :before-close="handleClose">
                                <div class="add_big">
                                    <div class="dq_name ss" >
                                      <p>
                                        <span class="red">*</span><span class="name">大区名称</span>

                                      </p>
                                        <el-input v-model="add_list.name" placeholder="请输入内容" size="mini"></el-input>
                                    </div>
                                    <div class="ses ss">
                                        <p>管辖门店</p>
                                        <el-select
                                            v-model="add_list.mendian"
                                            multiple
                                            filterable
                                            allow-create
                                            default-first-option
                                            size="mini"
                                            placeholder="请选择门店">
                                            <el-option
                                            v-for="item in add_list.mendian"
                                            :key="item.value"
                                            :label="item.lable"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </div>
                                    <div class="ses ss"> 
                                        <p>区域成员</p>
                                        <el-select
                                            v-model="add_list.peo"
                                            multiple
                                            filterable
                                            allow-create
                                            default-first-option
                                            size="mini"
                                            placeholder="请选择成员">
                                            <el-option
                                            v-for="item in add_list.peo"
                                            :key="item.value"
                                            :label="item.lable"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </div>
                                <span slot="footer" class="dialog-footer">
                                  <el-button @click="dialogVisible = false">取 消</el-button>
                                  <el-button type="primary" @click="ads(), dialogVisible = false">确 定</el-button>
                                </span>
                              </el-dialog>
                    </div>
                    <p slot="reference" class="btn">...</p>
                  </el-popover>
              </div>
                 <div class="list">
                          <div class="list_hd">
                            <div class="list_text list_title el-col-6">大区名称</div>
                            <div class="list_text list_title el-col-6">大区经理</div>
                            <div class="list_text list_title el-col-10">管辖门店</div>
                          </div>
                          <div class="list_li" v-for="(item,index) in list" :key="index"  @click="xiangqing(item.id)">
                              <div class="list_text list_title el-col-6">{{item.name}}</div>
                              <div class="list_text list_title el-col-6 user">
                                  <img src="@/assets/images/fang.jpg" alt="" class="list_img"/>
                                  <span>王梦娇</span>
                              </div>
                              <div class="list_text list_title el-col-10">
                                <span v-for="items in item.mendian"> {{items.name}} |</span>
                              </div>
                          </div>
                    </div>
          </div>
          <div class="block el-col-24">
                  <el-pagination 
                  background
                  @size-change="handleSizeChange"
                   @current-change="handleCurrentChange" 
                   :current-page.sync="page" 
                   :page-size="limit" 
                   layout="sizes, prev, pager, next" 
                   :total="total">
                  </el-pagination>
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
      list: [],
      total: 0,
      lists: [],
      page: this.$store.state.page,
      name: this.$store.state.search,
      limit: this.$store.state.limit,
      id: this.$store.state.id,
      dialogVisible: false,
      dialogVisibles: false,
      input: "",
      add_list: {},
      md:[],
      cy:[],
      //搜索筛选
      daqu:[],
      daqus:"",
      mendian:[],
      mendians:"",
    };
  },
  store,
  mounted() {
    this.$nextTick(function() {
      this.Dqlist();
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
    ss() {
      var _this = this;
      var page = _this.$store.state.page;
      var data = _this.$store.state.shaixuan;
      Axios.post(window.http_urld + "dsearch", {
        page: page,
        limit: _this.limit,
        data: data,
        name: _this.$store.state.search,
        id:_this.id
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
    Dqlist() {
      var that = this;
      Axios.post(window.http_urld + "index", {
        page: that.page,
        limit: that.limit
      })
        .then(res => {
          var data = res.data;
          that.list = data.data.list;
          that.total = Number(data.data.count);
          that.$store.state.id = data.data.list[0].id;
          that.id = data.data.list[0].id;
        })
        .catch(error => {
          console.log("sb");
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
    add() {
      Axios
        .post(window.http_urld+ "xiala", {})
        .then(res => {
          that.md = res.data.data.mendian;
          that.cy = res.data.data.peo;
        })
        .catch(error => {
          console.log("xiala没拿到");
        });
    },
    ads() {
      var that = this;
      Axios.post(window.http_urld + "add", {
        col: that.add_list
      })
        .then(res => {
          this.$message({
            message: "添加成功",
            type: "success"
          });
        })
        .catch(error => {
          this.$message.error("添加失败");
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
  }
};
</script>

<style lang="less" scope>
#wrap {
  position: absolute;
  left: 350px;
  margin-top: -30px;
}
.el-select {
  width: 130px;
  margin-left: 20px;
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
.big {
  padding-left: 2%;
}
.add_big {
  .ss {
    margin-bottom: 10px;
  }
  .red {
    color: red;
  }
  p {
    margin-bottom: 5px;
  }
  .name {
    display: inline;
  }
}
.add {
  width: 95%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: space-between;
  margin-top: -90px;
  margin-left: 660px;
  position: absolute;
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
</style>
