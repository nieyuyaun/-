<template>
    <div>
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
        <el-card class="box-cards el-col-24" >
                    <div class="list">
                          <div class="list_hd">
                            <div class="list_text list_title el-col-4">头像</div>
                            <div class="list_text list_title el-col-4">姓名</div>
                            <div class="list_text list_title el-col-4">职称</div>
                            <div class="list_text list_title el-col-6">电话</div>
                            <div class="list_text list_title el-col-6">所属门店</div>
                          </div>
                          <div class="list_li" v-for="(item,index) in tableData" :key="index"  @click="xiangqing(item.id)">
                              <div class="list_text list_title el-col-4">
                                  <img :src="item.avatar" alt="" class="list_img"/>
                              </div>
                              <div class="list_text list_title el-col-4">{{item.name}}</div>
                              <div class="list_text list_title el-col-4">{{item.zhiwei}}</div>
                              <div class="list_text list_title el-col-6">{{item.mobile}}</div>
                              <div class="list_text list_title el-col-6">{{item.mendian}}</div>
                          </div>
                    </div>
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
        </el-card> 
    </div>
</template>
<script>
import Axios from "axios";
import store from "@/store/store.js";

export default {
  data() {
    return {
      tableData: [],
      total: 0,
      page: this.$store.state.page,
      name: this.$store.state.search,   
      limit: this.$store.state.limit,
      daqu:[],
      daqus:"",
      mendian:[],
      mendians:"",
    };
  },
  store,
  mounted() {
    this.$nextTick(function() {
      this.Rylist();
      this.ss();
      this.xiala()
      // this.fw()
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
      Axios.post("http://vue.zhamengyun.com/renyuan/search", {
          page: page,
          data: data,
          limit: _this.limit,
          name: _this.$store.state.search,
          id:_this.id,
        })
        .then(res => {
          var data = res.data;
          _this.tableData = data;
          this.$message.success(data.msg)
        })
        .catch(error => {
          console.log("您的网络开小差了!2");
          this.$message.error("没有搜索到任何结果")
        });
    },
    // fw(){
    //   Axios.post(window.http_url+"index",{

    //   }).then(res=>{
      
    //     var data=res.data;
    //     that.tableData=data.data;
    //     that.id=data.data.list[0].id;
    //     that.limt=data.data.limit,
    //     that.total=data.data.content;
    //   }).catch(error=>{
    //     that.$message.error("没有获取到到啊哦")
    //   })
    // },
    Rylist() {
      var that = this;
      Axios.post("http://vue.zhamengyun.com/renyuan/index", {
        page: that.page,
        limit: that.limit
      })
        .then(res => {
          var data = res.data;
          that.tableData = data.data.list;
          that.total = Number(data.data.totle);
          that.id = data.data.list[0].id;
          that.$store.state.id = data.data.list[0].id;
          
        })
        .catch(error => {
          console.log("333");
        });
     
    },
    xiangqing(id) {
      this.$store.state.id = id;
      this.$store.state.Rshow = true;
    },
    handleSizeChange(val) {
      this.limit = val;
      this.ss()
    },
    handleCurrentChange(val) {
      this.$store.state.page = val;
      this.ss()
    },
    xiala(){
      var that=this;

      Axios.post("http://vue.zhamengyun.com/renyuan/xiala",{

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
<style lang="less" scoped>
#wrap {
  position: relative;
  left: 350px;
  top: -35px;
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
// .div_show{
//   display: inline;
// }
// .rylist{
//   margin-left: 2%;
//   font-size: 20px;
//   color: #000000;
//   margin-bottom: 20px;
// }
// .list_{
//   margin-right:2%;
//   margin-left: 2%;
//   margin-bottom: 20px;
//   cursor: pointer;
//   .head{
//     display: flex;
//     border-bottom:2px dashed #ececec;
//     padding-bottom: 20px;
//     img{
//       width: 80px;
//       height: 80px;
//       border-radius: 50px;
//     }
//     .user{
//       margin-left: 40px;
//       .name{
//         font-size: 22px;
//       }
//       .job{
//         font-size: 14px;
//         padding: 2px 10px 2px 10px;
//         background: #ececec;
//         color: #000000;
//         margin-left: 20px;
//       }
//       p{
//         padding-top: 35px;
//         .sex{
//           font-size: 20px;
//         }
//         .time{
//           font-size: 14px;
//           line-height: 14px;
//           margin-left: 24px;
//         }
//       }
//     }
//   }
//   .tel,.md{
//     display: flex;
//     margin-top: 20px;
//     img{
//       width: 18px;
//       height: 20px;
//     }
//     p{
//       margin-left: 10px;
//     }
//   }
// }
.block {
  float: left;
  margin-top: 20px;
  margin-bottom: 20px;
}
.box-cards {
  width: 100%;
  margin-top: 30px;
 
}
.scope {
  border-radius: 50px;
}

</style>
