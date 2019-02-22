 <template>
  <div id="list">
    <!--筛选-->
    <div class="screen">
      <div class="screen_header">
        <div class="quyu_btn">
          位置
          <el-select v-model="quyu" placeholder="区域">
            <el-option
              v-for="item in area"
              :key="item.value"
              :label="item.lable"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div @click="reset" class="reset right">重置条件</div>
      </div>
      <div class="quyu"></div>
      <Screen ref="screenFun" @shaixuan="shaixuan()"></Screen>
      <div class="tab_list">
        <div v-for="(tab,index) in tabs" :key="index" :class="{tab_bc:tab.bool}" @click="tabClick(tab)" class="tab_li tab_moren">
          {{tab.name}}
           <i class="icon iconfont" :class="{'icon-jiantou-xiangshang':tab.shangxia,'icon-jiantou-xiangxia-copy':!tab.shangxia}" v-if="tab.san"></i>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="list_li" v-for="item in fylist" @click="xiangqing(item.id)">
        <img src="@/assets/images/fang.jpg" alt="" class="list_img el-col-3"/>
        <div class="list_text list_title el-col-6">{{item.fybiaoti}}</div>
        <div class="list_text list_jiage el-col-2">{{item.shoujia}}万</div>
        <div class="list_text list_mianji el-col-2">{{item.mianji}}m²</div>
        <div class="list_text list_huxing el-col-2">{{item.shi}}{{item.ting}}</div>
        <div class="list_text list_louceng el-col-3">第{{item.louceng}}层 共{{item.zlouceng}}层</div>
        <div class="list_text list_chaoxiang el-col-1">{{item.chaoxiang}}</div>
        <div class="list_text list_fangxing el-col-1">{{item.zhuangxiu}}</div>
        <div class="list_text list_loutype el-col-1">{{item.fwleixing}}</div>
      </div>
    </div>
    <div class="fenye">
      <div class="block">
        <!--<span class="demonstration">调整每页显示条数</span>-->
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
  </div>
</template>
<script type="text/ecmascript-6">
  import Screen from "@/components/ershou/screen"
  import store from '@/store/store.js'
  import axios from "axios"
  export default {
    data: function () {
      return {
        page: this.$store.state.page,
        limit: this.$store.state.limit,
        total: 0,
        fylist: [],   //房源列表
        paixu: '',    //排序
        city: '淄博市',
        area: '',
        quyu: '',
        fyname: this.$store.state.search,   //搜索房源标题
        tabs:[
          {
            name: '默认排序',
            bool: true,
            san: false,
            shangxia: true,
            paixu: '',
          },
          {
            name: '最新',
            bool: false,
            san: false,
            shangxia: true,
            paixu: 'createtime desc',
          },
          {
            name: '总价',
            bool: false,
            san: true,
            shangxia: true,
            paixu: 'shoujia ',
          },
          {
            name: '单价',
            bool: false,
            san: true,
            shangxia: true,
            paixu: 'danjia ',
          },
          {
            name: '面积',
            bool: false,
            san: true,
            shangxia: true,
            paixu: 'mianji ',
          },
          {
            name: '带看较多',
            bool: false,
            san: false,
            shangxia: true,
            paixu: 'daikan desc',
          }
        ]
      }
    },
    store,
    watch: {
      listenSearch: function(val, oldVal) {
        this.shaixuan();
      },
      listenArea: function(val, oldVal) {
        this.area = this.$store.state.area
      },
      quyu: function (val, oldVal) {
        this.shaixuan()
      }
    },
    computed:{
      listenSearch: function () {
        return this.$store.state.search;
      },
      listenArea: function () {
        return this.$store.state.area;
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.showlist();
      });
    },
    components:{
      Screen
    },
    methods:{
      reset: function () {
        window.location.reload();
      },
      xiangqing: function (id) {
        this.$store.state.id = id;
        this.$store.state.Rshow = true;
      },
      tabClick: function (tab) {
//        动画
        tab.shangxia = !tab.shangxia;
        this.tabs.forEach(function (n ,index) {
          n.bool = false;
        });
        tab.bool = !tab.bool;
//        交互
        if(tab.san){
          if(tab.shangxia){
            this.paixu = tab.paixu + 'desc';
          }else {
            this.paixu = tab.paixu + 'asc';
          }
        }else {
          this.paixu = tab.paixu;
        }
        this.shaixuan();
      },
      shaixuan: function(){
        var _this = this;
        var page = _this.$store.state.page
        var data = _this.$store.state.shaixuan
        axios.post(window.http_url+'shaixuan',{
          page: page,
          limit: _this.limit,
          data: data,
          paixu: _this.paixu,
          fyname: _this.$store.state.search,
          quyu: _this.quyu
        }).then(res=>{
          var data = res.data;
          _this.fylist = data.data.list;
          _this.total = Number(data.data.total)
        })
        .catch(res => {
          console.log('您的网络开小差了！');
        });
      },
      showlist: function () {
        var _this = this;
        axios.post(window.http_url+'index',{
          page:_this.page,
          limit: _this.limit,
        }).then(res=>{
          var data = res.data;
          _this.fylist = data.data.list
          _this.total = Number(data.data.total)
          _this.area = data.data.area
          _this.$store.state.area = data.data.area
          _this.$store.state.id = data.data.list[0].id
          _this.id = data.data.list[0].id
        })
        .catch(res => {
          console.log('您的网络开小差了！');
        });
      },
      map: function(){
        var that = this;
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            that.city = r.address.city;
            that.showlist();
          }
          else {
            console.log('failed' + this.getStatus());
          }
        },{enableHighAccuracy: true})
      },
      handleSizeChange(val) {
        this.$store.state.limit = val;
      },
      handleCurrentChange(val) {
        this.$store.state.page = val;
        this.shaixuan();
      }
    },
  }
</script>
<style lang="less" scoped>
  @color: #1E9FF2;
  .fenye {
    padding-bottom: 20px;
  }
  .right {
    float: right;
  }
  .left {
    float: left;
  }
  /*tabs*/
  .tab_bc {
    background-color: @color;
    color: #FFFFFF;
  }
  #list {
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 0 20px;
    .screen {
      /*筛选位置*/
      .screen_header {
        height: 56px;
        line-height: 56px;
        width: 100%;
        border-bottom: 1px solid #e3e3e3;
        .quyu_btn{
          width: 200px;
          float: left;
          .el-select{
            margin-left: 1em;
            width: 100px;
            input{
              outline: none;
              border: 0;
            }
          }
        }
        .reset{
          cursor: pointer;
        }
      }
      /*tab栏*/
      .tab_list {
        width: 79.5%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background-color: #F5F5F6;
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
      /*标签*/
      .tag{
        height: 58px;
        line-height: 58px;
        width: 100%;
        border-bottom: 1px solid #e3e3e3;
        font-size: 15px;
        .tag_title {
          float: left;
          width: 45px;
        }
      }
    }
    /*列表*/
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
  }

</style>
