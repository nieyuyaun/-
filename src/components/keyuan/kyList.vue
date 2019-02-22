 <template>
    <div>
        <div class="add">
          <p class="add_p">求购客源</p>
          <el-popover
            placement="bottom-end"
            width="120"
            v-model="visible2">
            <div @click="adds(),dialogVisible = true"  class="add_img">
              <img src="../../assets/images/+.png" alt="">
              <p>添加求购客源</p>
            </div>
            <div slot="reference"  class="add_ddd">...</div>
          </el-popover>
          <el-dialog
                title="添加客源"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
                <div class="add_inp">
                  <div>
                    <p>客户姓名</p>
                    <el-input v-model="edit.name" size="mini" placeholder="请输入内容"></el-input>
                  </div>
                  <div>
                    <p>联系电话</p>
                    <el-input v-model="edit.tel" size="mini" placeholder="请输入内容"></el-input>
                  </div>
                  <div>
                    <p>客源类型</p>
                    <el-input v-model="edit.kehulx" size="mini" placeholder="请输入内容"></el-input>
                  </div>
                  <div>
                    <p>客源等级</p>
                    <el-select v-model="edit.kydengji" placeholder="请选择" size="mini">
                      <el-option
                        v-for="item in  xiala.kydengji"
                        :key="item.value"
                        :label="item.lable"
                        :value="item.lable">
                      </el-option>
                    </el-select>
                  </div>
                  <div>
                    <p>所在地区</p>
                    <el-select v-model="edit.quyu" placeholder="请选择" size="mini">
                      <el-option
                        v-for="item in quyu"
                        :key="item.value"
                        :label="item.lable"
                        :value="item.lable">
                      </el-option>
                    </el-select>
                  </div>
                  <div>
                    <p>小区</p>
                    <el-input v-model="edit.xiaoqum" size="mini" placeholder="请输入内容"></el-input>
                  </div>
                  <div>
                    <p>房型</p>
                    <el-input v-model="edit.shi" size="mini" placeholder="请输入内容" class="inp_h"></el-input><span>室</span>
                    <el-input v-model="edit.ting" size="mini" placeholder="请输入内容" class="inp_h inp_hh"></el-input><span>厅</span>
                    <el-input v-model="edit.wei" size="mini" placeholder="请输入内容" class="inp_h inp_hh"></el-input><span>卫</span>
                    <el-input v-model="edit.yang" size="mini" placeholder="请输入内容" class="inp_h inp_hh"></el-input><span>阳</span>
                  </div>
                  <div>
                    <p>面积</p>
                    <el-input v-model="edit.xqmianji1" size="mini" placeholder="最小面积" class="inp_h"></el-input><span>—</span>
                    <el-input v-model="edit.xqmianji2" size="mini" placeholder="最大面积" class="inp_h"></el-input><span>㎡</span>
                  </div>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="add(),dialogVisible = false">确 定</el-button>
                </span>
          </el-dialog>
        </div>
        <el-card class="el-col-24">
            <div class="quyu">
                <span>位置</span>
                <el-select v-model="quyu " placeholder="请选择" size="mini">
                    <el-option
                    v-for="item in quyu"
                    :key="item.value"
                    :label="item.lable"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <screen ref="screenFun" @shaixuan="shaixuan()"></screen>
            <div class="tab_list">
                <div v-for="(tab,index) in tabs" :key="index" :class="{tab_bc:tab.bool}" @click="tabClick(tab)" class="tab_li tab_moren">
                  {{tab.name}} <i class="icon iconfont" :class="{'icon-jiantou-xiangshang':tab.shangxia,'icon-jiantou-xiangxia-copy':!tab.shangxia}" v-if="tab.san"></i>
                  </div>
            </div>
            <div class="sx">
                <p>筛选 </p>
                <ul>
                    <li><el-checkbox label="三室"></el-checkbox></li>
                    <li><el-checkbox label="已带看"></el-checkbox></li>
                    <li><el-checkbox label="换房"></el-checkbox></li>
                    <li><el-checkbox label="投资"></el-checkbox></li>
                    <li><el-checkbox label="结婚"></el-checkbox></li>
                    <li><el-checkbox label="就学"></el-checkbox></li>
                </ul>
            </div>
            <div class="list">
              <div class="list_li" v-for="item in fylist"  @click="xiangqing(item.id)">
                <img src="@/assets/images/test.jpg" alt="" class="list_img el-col-4"/>
                <div class="list_text list_title el-col-2">{{item.name}}</div>
                <div class="list_text list_jiage el-col-4">{{item.tel}}</div>
                <div class="list_text list_mianji el-col-2">{{item.kehulx}}</div>
                <div class="list_text list_huxing el-col-2">{{item.kydengji}}</div>
                <div class="list_text list_louceng el-col-7">{{item.quyu}}/{{item.shi}}室{{item.ting}}厅{{item.wei}}卫{{item.yang}}阳/{{item.xqmianji1}}—{{item.xqmianji2}}㎡/</div>
              </div>
            </div>
            <div class="fenye">
            <div class="block">
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
          </div>
        </el-card>
      </div>
</template>

<script>
import store from "@/store/store.js";
import axios from "axios";
import Screen from "@/components/keyuan/screen";
export default {
  data() {
    return {
      checkList: ["复选框 A"],
      tabs: [
        {
          name: "默认排序",
          bool: true,
          san: false,
          shangxia: true,
          paixu: ""
        },
        {
          name: "最新",
          bool: false,
          san: false,
          shangxia: true,
          paixu: "createtime desc"
        },
        {
          name: "总价",
          bool: false,
          san: true,
          shangxia: true,
          paixu: "shoujia "
        },
        {
          name: "单价",
          bool: false,
          san: true,
          shangxia: true,
          paixu: "danjia "
        },
        {
          name: "面积",
          bool: false,
          san: true,
          shangxia: true,
          paixu: "mianji "
        },
        {
          name: "带看较多",
          bool: false,
          san: false,
          shangxia: true,
          paixu: "daikan desc"
        }
      ],
      visible2: false,
      dialogVisible: false,
      value: "",
      // 添加房源
      edit: {},
      fylist: [],
      xiala: [],
      quyu: [],
      area: "",
      paixu: "",
      // 分页
      page: this.$store.state.page,
      limit: this.$store.state.limit,
      total: 0
    };
  },
  components: {
    Screen
  },
  store,
  watch: {
    listenArea: function(val, oldVal) {
      this.area = this.$store.state.area;
    },
    quyu: function(val, oldVal) {
      this.shaixuan();
    }
  },
  computed: {
    listenArea: function() {
      return this.$store.state.area;
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.Kylist();
      this.shaixuan();
    });
  },

  methods: {
   
    tabClick: function(tab) {
      //        动画
      tab.shangxia = !tab.shangxia;
      this.tabs.forEach(function(n, index) {
        n.bool = false;
      });
      tab.bool = !tab.bool;
      //        交互
      if (tab.san) {
        if (tab.shangxia) {
          this.paixu = tab.paixu + "desc";
        } else {
          this.paixu = tab.paixu + "asc";
        }
      } else {
        this.paixu = tab.paixu;
      }
      this.shaixuan();
    },
    xiangqing: function(id) {
      this.$store.state.id = id;
      this.$store.state.Rshow = true;
    },
    shaixuan: function() {
      var that = this;
      var page = that.$store.state.page;
      var data = that.$store.state.shaixuan;
      axios
        .post("http://vue.zhamengyun.com/keyuan/shaixuan", {
          page: page,
          limit: that.limit,
          row: data,
          paixu: that.paixu,
          quyu: that.quyu
        })
        .then(res => {
          var data = res.data;
          that.fylist = data.data.list;
          that.total = Number(data.data.totle);
        })
        .catch(res => {
          console.log("您的网络开小差了！");
        });
    },
   
    Kylist() {
      var that = this;
      var id = this.$store.state.id;
      var page = that.$store.state.page;
      axios
        .post(window.http_url + "index", {
          page: page,
          limit: that.limit
        })
        .then(res => {
          var data = res.data;
          that.fylist = data.data.list;
          that.total = Number(data.data.totle);
          that.area = data.data.area;
          that.$store.state.area = data.data.area;
          that.$store.state.id = data.data.list[0].id;
          that.id = data.data.list[0].id;
        })
        .catch(error => {
          console.log("index拿不到");
        });
    },
    handleSizeChange(val) {
      this.$store.state.limit = val;
    },
    handleCurrentChange(val) {
      this.$store.state.page = val;
      this.shaixuan();
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
      axios
        .post(window.http_url + "xiala", {})
        .then(res => {
          // console.log(res);
          that.xiala = res.data.data.pz;
          that.quyu = res.data.data.quyu;
        })
        .catch(error => {
          console.log("xiala没拿到");
        });
    },
    add() {
      var that = this;
      var row = this.edit;
      var id = this.$store.state.id;
      axios
        .post(window.http_url + "add", {
          row: row
        })
        .then(res => {
          that.edit = res.data.data;
          this.$message({
            message: "添加成功",
            type: "success"
          });
        })
        .catch(error => {
          this.$message.error("添加失败");
          console.log("error");
        });
    }
  }
};
</script>

<style lang="less" scoped>
.add_inp {
  margin-top: -20px;
  p {
    margin-bottom: 5px;
  }
  span {
    margin-left: 5px;
  }
  .el-input {
    width: 250px;
    margin-bottom: 10px;
  }
  .el-select {
    width: 250px;
    margin-bottom: 10px;
  }
  .inp_h {
    width: 80px;
  }
  .inp_hh {
    margin-left: 20px;
  }
}
.add {
  display: flex;
  justify-content: space-between;
  height: 65px;
  align-items: center;
  .add_p {
    font-size: 20px;
  }
  .add_ddd {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: white;
    line-height: 19px;
    font-size: 24px;
    text-align: center;
    color: #1e9ff2;
  }
}
.add_img {
  display: flex;
  align-items: center;
  img {
    width: 15px;
    margin-right: 10px;
    height: 15px;
  }
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.el-card {
  padding-bottom: 100px;
}
.quyu {
  margin-bottom: 20px;
  .el-select {
    width: 100px;
    margin-left: 28px;
  }
}

.sx {
  display: flex;
  margin-top: 20px;
  p {
    width: 70px;
  }
  ul {
    display: flex;
    float: left;
    flex-wrap: wrap;
    li {
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }
}
.btn {
  text-align: center;
  font-size: 14px;
  color: #1e9ff2;
  width: 100%;
  margin-top: 20px;
  border-bottom: 1px solid #ececec;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.tab_bc {
  background-color: #1e9ff2;
  color: #ffffff;
}
.tab_list {
  width: 79.5%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #f5f5f6;
  border-radius: 22px;
  position: relative;
  margin: 25px 0;
  font-size: 16px;
  .tab_li {
    width: 16.66%;
    float: left;
    cursor: pointer;
    border-radius: 22px;
  }
}
.list {
  padding-bottom: 20px;
  .list_li {
    height: 88px;
    line-height: 88px;
    cursor: pointer;
    border-bottom: 1px solid #e3e3e3;
    .list_text {
      margin-left: 1%;
    }
    .list_img {
      height: 75px;
      margin-top: 6px;
    }
    .list_text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
