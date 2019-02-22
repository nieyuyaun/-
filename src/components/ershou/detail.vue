<template>
  <div id="detail">
    <el-card class="cards">
      <div class="header">
        <div class="title">
          <p>房源信息</p>
          <div style="cursor: pointer;">
            <ul>
              <li @click="$store.state.Rshow=false">
                <span class="li">
                  <img src="../../assets/images/1.png">
                  <br>编辑
                </span>
              </li>
              <li>
                <span @click="chakan" class="li">
                  <img src="../../assets/images/2.png">
                  <br>查看
                </span>
                <el-dialog
                  title="业主信息"
                  :visible.sync="dialogVisible_two"
                  width="30%"
                  :before-close="handleClose_two"
                >
                  <div class="div2">
                    <div>
                      <span>姓名：</span>
                      <span>王梦娇</span>
                    </div>
                    <div>
                      <span>电话：</span>
                      <span>15335578869</span>
                    </div>
                  </div>
                  <div class="address">
                    <span>小区：</span>
                    <span>城中小区东北村23号楼八单元880</span>
                  </div>
                  <!--<div class="adduser">-->
                  <!--<span>添加业主信息</span>-->
                  <!--</div>-->
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible_two = false">
                      <span>取 消</span>
                    </el-button>
                    <el-button type="primary" @click="dialogVisible_two = false">
                      <span>确 定</span>
                    </el-button>
                  </span>
                </el-dialog>
              </li>
              <li>
                <span @click="dialogVisibles= true" class="li">
                  <img src="../../assets/images/3.png">
                  <br>写跟进
                </span>
              </li>
              <li>
                <span @click="dialogVisible_three = true" class="li">
                  <img src="../../assets/images/4.png">
                  <br>分享
                </span>
                <el-dialog
                  title="分享该房源"
                  :visible.sync="dialogVisible_three"
                  width="20%"
                  :before-close="handleClose"
                >
                  <div class="div3">
                    <div>
                      <qriously class="erwei" :value="fenxiang" :size="140"/>
                      <p>微信扫一扫分享给微信好友/朋友圈</p>
                    </div>
                  </div>
                </el-dialog>
              </li>
              <li>
                <span @click="dialogVisible_four = true" class="li">
                  <img src="../../assets/images/5.png">
                  <br>下架房源
                </span>
                <el-dialog
                  title="下架房源"
                  :visible.sync="dialogVisible_four"
                  width="30%"
                  :before-close="handleClose_four"
                >
                  <div class="div4">
                    <el-select v-model="xia.xjyuanyin" placeholder="请选择" size="mini" width="100">
                      <el-option
                        v-for="item in chengjiao"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                    <div>
                      <input type="number" v-model="xia.chengjiaojia" class="inpt">
                      <span>万元</span>
                      <br>
                      <br>
                      <textarea name v-model="xia.xjbeizhu" cols="65" rows="10" placeholder="备注"></textarea>
                    </div>
                  </div>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible_four = false">
                      <span>取 消</span>
                    </el-button>
                    <el-button type="primary" @click="xiajia">
                      <span>确 定</span>
                    </el-button>
                  </span>
                </el-dialog>
              </li>
            </ul>
          </div>
        </div>
        <div class="titles">
          <p>{{detailData.fybiaoti}}</p>
          <p style="cursor: pointer;">小区</p>
        </div>
        <p class="dengji" style="display: inline-block;">{{detailData.fydengji}}</p>
        <img src="../../assets/images/map.png" @click="showmap" class="map_btn">
        <div class="details">
          <ul>
            <li>
              <p>{{detailData.shoujia}}万</p>
              <p>{{detailData.danjia}}元/㎡</p>
            </li>
            <li>
              <p>{{detailData.mianji}}㎡</p>
              <p>建筑面积</p>
            </li>
            <li>
              <p>{{detailData.shi}}{{detailData.ting}}{{detailData.wei}}{{detailData.yang}}</p>
              <p>房型</p>
            </li>
            <li>
              <p>{{detailData.louceng}}/{{detailData.zlouceng}}层</p>
              <p>楼层</p>
            </li>
            <li>
              <p>{{detailData.chaoxiang}}</p>
              <p>朝向</p>
            </li>
            <li>
              <p>{{detailData.zhuangxiu}}</p>
              <p>装修</p>
            </li>
            <li>
              <p>{{detailData.fwleixing}}</p>
              <p>楼型</p>
            </li>
          </ul>
        </div>
        <div class="swiper">
          <el-carousel :interval="4000" type="card" height="250px" width="310px">
            <el-carousel-item v-for="(item,index) in detailData.fyimg" :key="index">
              <img :src="item.url" alt style="width: 100%;height: 100%;">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="content">
        <div class="title">
          <p>更多信息</p>
        </div>
        <div class="content_detail">
          <ul>
            <li>
              <p>来源渠道</p>
              <p>{{detailData.laiyuan}}</p>
            </li>
            <li>
              <p>室内面积</p>
              <p>{{detailData.shiyongmj}}</p>
            </li>
            <li>
              <p>底价</p>
              <p>{{detailData.chushoudj}}</p>
            </li>
            <li>
              <p>电梯</p>
              <p>{{detailData.dianti}}</p>
            </li>
            <li>
              <p>房屋年限</p>
              <p>{{detailData.nianxian}}</p>
            </li>
            <li>
              <p>房屋卖点</p>
              <p>{{detailData.maidian}}</p>
            </li>
            <li>
              <p>建筑结构</p>
              <p>{{detailData.jiegou}}</p>
            </li>
            <li>
              <p>建筑类型</p>
              <p>{{detailData.jianzhulx}}</p>
            </li>
            <li>
              <p>唯一住房</p>
              <p>{{detailData.weiyi}}</p>
            </li>
            <li>
              <p>挂牌时间</p>
              <p>{{detailData.guapaitime}}</p>
            </li>
            <li>
              <p>权属</p>
              <p>{{detailData.jyquanshu}}</p>
            </li>
            <li>
              <p>供暖方式</p>
              <p>{{detailData.cainuanfs}}</p>
            </li>
            <li>
              <p>户型结构</p>
              <p>{{detailData.lcleixing}}</p>
            </li>
            <li>
              <p>产权</p>
              <p>{{detailData.cqnianxian}}</p>
            </li>
            <li>
              <p>上次交易</p>
              <p>{{detailData.sctime}}</p>
            </li>
            <li>
              <p>梯户比例</p>
              <p>{{detailData.tihubili}}</p>
            </li>
            <li>
              <p>抵押信息</p>
              <p>{{detailData.diya}}</p>
            </li>
            <li>
              <p>用途</p>
              <p>{{detailData.yongtu}}</p>
            </li>
            <li>
              <p>产权所属</p>
              <p>{{detailData.cqsuoshu}}</p>
            </li>
          </ul>
        </div>
        <div class="more">
          <div class="neirong">
            <el-collapse-transition>
              <div v-show="show3">
                <div class="transition-box fb">
                  <p class="mini_title">房本备件</p>
                  <ul>
                    <li v-for="item in detailData.beijian">
                      <img :src="item.url" class="beijian" alt>
                    </li>
                  </ul>
                </div>
                <div class="transition-box tese">
                  <p class="mini_title">房源特色</p>
                  <ul>
                    <li v-for="item in detailData.biaoqian">
                      <p>{{item}}</p>
                    </li>
                  </ul>
                </div>
                <div class="transition-box introduce">
                  <div>
                    <div class="add">
                      <p class="mini_title">房源介绍</p>
                      <el-button type="text" @click="dialogVisible = true">添加介绍</el-button>
                    </div>
                    <ul>
                      <li v-if="detailData.huxingjieshao!=null">
                        <p>户型介绍</p>
                        <p>{{detailData.huxingjieshao}}</p>
                      </li>
                      <li v-if="detailData.fyliangdian!=null">
                        <p>房源亮点</p>
                        <p>{{detailData.fyliangdian}}</p>
                      </li>
                      <li v-if="detailData.xqjiesao!=null">
                        <p>小区介绍</p>
                        <p>{{detailData.xqjieshao}}</p>
                      </li>
                      <li v-if="detailData.zbpeitao!=null">
                        <p>周边配套</p>
                        <p>{{detailData.zbpeitao}}</p>
                      </li>
                      <li v-if="detailData.zxmiaoshu!=null">
                        <p>装修描述</p>
                        <p>{{detailData.zxmiaoshu}}</p>
                      </li>
                      <li v-if="detailData.shuifei!=null">
                        <p>税费解析</p>
                        <p>{{detailData.shuifei}}</p>
                      </li>
                      <li v-if="detailData.jiaotong!=null">
                        <p>交通出行</p>
                        <p>{{detailData.jiaotong}}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <el-dialog
                  title="房源介绍"
                  :visible.sync="dialogVisible"
                  width="466px"
                  :before-close="handleClose"
                >
                  <div>
                    <ul class="dailog clearfixs">
                      <li
                        v-for="(tab,index) in tabsDailog"
                        v-bind:class="{active:tab.Actives}"
                        class="tabs-links"
                      >
                        <a
                          href="#"
                          @click="tabsDailogs(index)"
                          v-bind:class="{active:tab.Actives}"
                        >{{tab.name}}</a>
                      </li>
                    </ul>
                    <div class="con">
                      <div class="tabs-card" style="display: block;">
                        <p>户型介绍</p>
                        <textarea
                          name
                          v-model="detailData.huxingjieshao"
                          cols="45"
                          rows="10"
                          placeholder="我该说点什么"
                        ></textarea>
                      </div>
                      <div class="tabs-card cont">
                        <p>房源亮点</p>
                        <textarea
                          name
                          v-model="detailData.fyliangdian"
                          cols="45"
                          rows="10"
                          placeholder="我该说点什么"
                        ></textarea>
                      </div>
                      <div class="tabs-card cont">
                        <p>小区介绍</p>
                        <textarea
                          name
                          v-model="detailData.xqjieshao"
                          cols="45"
                          rows="10"
                          placeholder="我该说点什么"
                        ></textarea>
                      </div>
                      <div class="tabs-card cont">
                        <p>周边配套</p>
                        <textarea
                          name
                          v-model="detailData.zbpeitao"
                          cols="45"
                          rows="10"
                          placeholder="我该说点什么"
                        ></textarea>
                      </div>
                      <div class="tabs-card cont">
                        <p>装修描述</p>
                        <textarea
                          name
                          v-model="detailData.zxmiaoshu"
                          cols="45"
                          rows="10"
                          placeholder="我该说点什么"
                        ></textarea>
                      </div>
                      <div class="tabs-card cont">
                        <p>税费解析</p>
                        <textarea
                          name
                          v-model="detailData.jiaotong"
                          cols="45"
                          rows="10"
                          placeholder="我该说点什么"
                        ></textarea>
                      </div>
                      <div class="tabs-card cont">
                        <p>交通出行</p>
                        <textarea
                          name
                          v-model="detailData.fyliangdian"
                          cols="45"
                          rows="10"
                          placeholder="我该说点什么"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">
                      <span>取 消</span>
                    </el-button>
                    <el-button type="primary" @click="jieshao">
                      <span>确 定</span>
                    </el-button>
                  </span>
                </el-dialog>
              </div>
            </el-collapse-transition>
          </div>
          <p @click="show3 = !show3" class="mores">显示更多</p>
        </div>
        <div class="dynamic">
          <span class="title">
            <p>房源动态</p>
          </span>
          <div>
            <ul class="tabs clearfix">
              <li v-for="(tab,index) in tabsName">
                <a
                  href="#"
                  class="tab-link"
                  @click="tabsSwitch(index)"
                  v-bind:class="{active:tab.isActive}"
                >{{tab.name}}</a>
              </li>
            </ul>
            <el-card class="cards el-col-24">
              <div class="tab-card" style="display: block;">
                <div class="top"></div>
                <div v-for="item in dongtaiData['1']" class="cont">
                  <div class="time">
                    <p>{{item.createtime}}</p>
                    <div class="zero"></div>
                  </div>
                  <div class="detail">
                    <div class="user">
                      <img :src="item.avatar" alt>
                      <p>{{item.name}}</p>
                    </div>
                    <p class="details">{{item.content}}</p>
                  </div>
                </div>
              </div>
              <div class="tab-card cont">
                <div class="top"></div>
                <div v-for="item in dongtaiData['2']" class="cont">
                  <div class="time">
                    <p>{{item.createtime}}</p>
                    <div class="zero"></div>
                  </div>
                  <div class="detail">
                    <div class="user">
                      <img :src="item.avatar" alt>
                      <p>{{item.name}}</p>
                    </div>
                    <p class="details">{{item.content}}</p>
                  </div>
                </div>
              </div>
              <div class="tab-card cont">
                <div class="top"></div>
                <div v-for="item in dongtaiData['3']" class="cont">
                  <div class="time">
                    <p>{{item.createtime}}</p>
                    <div class="zero"></div>
                  </div>
                  <div class="detail">
                    <div class="user">
                      <img :src="item.avatar" alt>
                      <p>{{item.name}}</p>
                    </div>
                    <p class="details">{{item.content}}</p>
                  </div>
                </div>
              </div>
              <div class="tab-card cont">
                <div class="top"></div>
                <div v-for="item in dongtaiData['4']" class="cont">
                  <div class="time">
                    <p>{{item.createtime}}</p>
                    <div class="zero"></div>
                  </div>
                  <div class="detail">
                    <div class="user">
                      <img :src="item.avatar" alt>
                      <p>{{item.name}}</p>
                    </div>
                    <p class="details">{{item.content}}</p>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="gj">
            <div class="Gj_zero"></div>
            <el-button type="text" @click="dialogVisibles = true">写跟进</el-button>
          </div>
          <el-dialog
            title="写跟进"
            :visible.sync="dialogVisibles"
            width="30%"
            :before-close="handleClose_gj"
          >
            <!--<p class="times">10-18  14：25</p>-->
            <textarea name v-model="genjin" class="text" placeholder="我想说些什么"></textarea>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisibles = false">
                <span>取 消</span>
              </el-button>
              <el-button type="primary" @click="xiegenjin">
                <span>确 定</span>
              </el-button>
            </span>
          </el-dialog>
        </div>
      </div>
      <div class="rizhi">
        <div class="title_s">
          <p>房源日志</p>
        </div>
        <div class="user">
          <img :src="log.avatar" class="user_portrait" alt>
          <div class="name">
            <p>{{log.lname}}</p>
            <p>录入人</p>
          </div>
        </div>
        <div class="times">
          <p>
            <span>录入时间</span>
            <span>{{log.createtime}}录入</span>
          </p>
          <p>
            <span>修改时间</span>
            <span>{{log.updatetime}}修改</span>
          </p>
          <p>
            <span>修改人：</span>
            <span>{{log.name}}</span>
          </p>
        </div>
      </div>
    </el-card>

    <el-dialog title="房源地图" :visible.sync="centerDialogVisible" width="30%" center>
      <Map></Map>
    </el-dialog>
  </div>
</template>
<script type="text/ecmascript-6">
import axios from "axios";
import store from "@/store/store.js";
import Map from "@/components/ershou/map";
export default {
  data: function() {
    return {
      // 显示更多默认关闭
      show3: false,
      value: "",
      id: this.$store.state.id,
      detailData: {},
      dongtaiData: {},
      log: {}, //日志
      genjin: "", //跟进内容
      xia: {}, //下架
      centerDialogVisible: false, //  mapshow
      fenxiang: "https://www.baidu.com/?tn=98012088_5_dg&ch=12",
      //      下架原因list
      chengjiao: [
        {
          label: "已成交",
          value: "已成交"
        },
        {
          label: "外成交",
          value: "外成交"
        },
        {
          label: "信息有误",
          value: "信息有误"
        },
        {
          label: "其他",
          value: "其他"
        }
      ],
      // tab切换
      tabsName: [
        {
          name: "跟进",
          isActive: true
        },
        {
          name: "带看",
          isActive: false
        },
        {
          name: "查看",
          isActive: false
        },
        {
          name: "分享",
          isActive: false
        }
      ],
      tabsDailog: [
        {
          name: "户型介绍",
          Actives: true
        },
        {
          name: "房源亮点",
          Actives: false
        },
        {
          name: "小区介绍",
          Actives: false
        },
        {
          name: "周边配套",
          Actives: false
        },
        {
          name: "装修描述",
          Actives: false
        },
        {
          name: "税费解析",
          Actives: false
        },
        {
          name: "交通出行",
          Actives: false
        }
      ],
      index: 0,
      active: false,
      dialogVisible: false,
      dialogVisibles: false,
      dialogVisible_two: false,
      dialogVisible_three: false,
      dialogVisible_four: false
    };
  },
  store,
  watch: {
    listenId: function(val, oldVal) {
      this.detailShow();
      this.dongtai();
    }
  },
  computed: {
    listenId: function() {
      return this.$store.state.id;
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.detailShow();
      this.dongtai();
      this.id = this.$store.state.id;
    });
  },
  methods: {
    showmap: function() {
      var that = this;
      this.$store.state.lng = that.detailData.lng;
      this.$store.state.lat = that.detailData.lat;
      that.centerDialogVisible = true;
    },
    //    下架
    xiajia: function() {
      var that = this;
      if (that.xia.xjyuanyin == undefined) {
        that.$message.warning("请选择下架原因！");
        return;
      }
      that.dialogVisible_four = false;
      axios
        .post(window.http_url + "del", {
          fid: that.id,
          xjyuanyin: that.xia.xjyuanyin,
          chengjiaojia: that.xia.chengjiaojia,
          xjbeizhu: that.xia.xjbeizhu
        })
        .then(res => {
          var data = res.data;
          that.$message.success(data.msg);
          if (data.code == 1) {
            that.$emit("dellist");
          }
        })
        .catch(res => {
          console.log("您的网络开小差了！");
        });
    },
    jieshao: function() {
      var that = this;
      that.dialogVisible = false;
      axios
        .post(window.http_url + "jieshao", {
          fid: that.id,
          data: that.detailData
        })
        .then(res => {
          var data = res.data;
          that.$message.success(data.msg);
        })
        .catch(res => {
          console.log("您的网络开小差了！");
        });
    },
    chakan: function() {
      var that = this;
      that.dialogVisible_two = true;
      axios
        .post(window.http_url + "chakan", {
          fid: that.id
        })
        .then(res => {
          var data = res.data;
          that.dongtai();
        })
        .catch(res => {
          console.log("您的网络开小差了！");
        });
    },
    xiegenjin: function() {
      var that = this;
      if (that.genjin == "") {
        that.$message.warning("请填写跟进内容！");
        return;
      }
      that.dialogVisibles = false;
      axios
        .post(window.http_url + "genjin", {
          fid: that.$store.state.id,
          content: that.genjin
        })
        .then(res => {
          var data = res.data;
          that.genjin = "";
          that.$message.success(data.msg);
          that.dongtai();
        })
        .catch(res => {
          console.log("您的网络开小差了！");
        });
    },
    detailShow: function() {
      var that = this;
      var id = this.$store.state.id;
      if (id == 0) {
        return;
      }
      axios
        .post(window.http_url + "detail", {
          fid: id
        })
        .then(res => {
          var data = res.data;
          that.detailData = data.data.list;
          that.log = data.data.log[0];
        })
        .catch(res => {
          console.log("您的网络开小差了！");
        });
    },
    
    dongtai: function() {
      var that = this;
      var id = that.$store.state.id;
      axios
        .post(window.http_url + "dongtai", {
          fid: id
        })
        .then(res => {
          var data = res.data;
          that.dongtaiData = data.data;
        })
        .catch(res => {
          console.log("您的网络开小差了！");
        });
    },
    //tab切换
    tabsSwitch: function(tabIndex) {
      var tabCardCollection = document.querySelectorAll(".tab-card"),
        len = tabCardCollection.length;
      for (var i = 0; i < len; i++) {
        tabCardCollection[i].style.display = "none";
        this.tabsName[i].isActive = false;
      }
      this.tabsName[tabIndex].isActive = true;
      tabCardCollection[tabIndex].style.display = "block";
    },
    tabsDailogs: function(tabIndexs) {
      var tabCardCollections = document.querySelectorAll(".tabs-card"),
        lens = tabCardCollections.length;
      for (var j = 0; j < lens; j++) {
        tabCardCollections[j].style.display = "none";
        this.tabsDailog[j].Actives = false;
      }
      this.tabsDailog[tabIndexs].Actives = true;
      tabCardCollections[tabIndexs].style.display = "block";
    },
    // 弹窗
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleClose_gj(dones) {
      this.$confirm("确认关闭？")
        .then(_ => {
          dones();
        })
        .catch(_ => {});
    },
    handleClose_two(done_two) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done_two();
        })

        .catch(_ => {});
    },
    handleClose_four(done_four) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done_four();
        })
        .catch(_ => {});
    }
  },
  components: {
    Map
  }
};
</script>
<style lang="less" scoped>
@color: #1e9ff2;
textarea {
  width: 96%;
  height: 100px;
  padding: 2%;
}
.map_btn {
  display: inline-block;
  width: 40px;
  height: 30px;
  margin-left: 20px;
  margin-top: 10px;
  cursor: pointer;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-button {
  width: 48px;
  height: 24px;
  border-radius: 4px;
  line-height: 0;
  span {
    margin-left: -12px !important;
    font-size: 12px;
  }
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  p {
    font-size: 24px;
    font-weight: 1000;
  }
  div {
    ul {
      display: flex;
      li {
        margin-right: 20px;
        img {
          width: 32px;
          height: 32px;
        }
        .li {
          cursor: pointer;
          font-size: 10px;
          color: #1e9ff2;
          display: block;
          text-align: center;
        }
        /*查看*/

        .div2 {
          display: flex;
          flex-wrap: wrap;
          margin-top: -40px;
          border-top: 1px solid #ececee;
          font-size: 14px;
          div {
            margin-top: 20px;
          }
        }
        .address {
          text-align: start;
          margin-top: 20px;
        }
        .adduser {
          margin-top: 20px;
          color: #1e9ff2;
          cursor: pointer;
          text-align: start;
          font-size: 14px;
        }

        /*分享*/
        .div3 {
          display: block;
          width: 100%;
          margin-bottom: 40px;
          margin-top: -20px;
          padding-top: 10px;
          border-top: 1px solid #e3e3e3;
          justify-content: space-around;
          .erwei {
            width: 140px;
            height: 140px;
            margin: 0 auto;
            display: block;
            background: #9a9a9a;
          }
          p {
            text-align: center;
            margin-top: 20px;
            line-height: 16px;
            font-size: 14px;
          }
        }

        /*下架房源*/
        .div4 {
          .el-select {
            width: 100px;
            position: absolute;
            top: 15px;
            left: 150px;
            border: none;
          }
          .inpt {
            width: 70px;
            border: none;
            padding-left: 10px;
            border-bottom: 1px solid #e3e3e3;
          }
          textarea {
            resize: none;
            border-radius: 4px;
            background: #f5f5f6;
            color: #959595;
          }
        }
      }
    }
  }
}
.cards {
  .header {
    border-bottom: 1px solid #e3e3e3;

    .titles {
      display: flex;
      align-items: flex-end;
      p:nth-child(1) {
        font-size: 20px;
      }
      p:nth-child(2) {
        margin-left: 10px;
        font-size: 16px;
        color: #1e9ff2;
      }
    }
    .dengji {
      width: 76px;
      height: 28px;
      border-radius: 6px;
      background: #ececec;
      color: #9d9d9d;
      text-align: center;
      line-height: 28px;
      margin-top: 10px;
      font-size: 16px;
    }
    .details {
      width: 100%;
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          width: 16%;
          margin-top: 20px;
          line-height: 25px;
          p:nth-child(1) {
            color: #000000;
            font-weight: 300;
          }
          p:nth-child(2) {
            color: #9a9a9a;
            font-size: 14px;
            font-weight: 100;
          }
        }
      }
    }
  }
  .content {
    .content_detail {
      ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
        li {
          width: 33%;
          margin-bottom: 20px;
          p:nth-child(1) {
            color: #6b6f82;
            font-size: 18px;
            font-weight: 700;
          }
          p:nth-child(2) {
            color: #959595;
            margin-top: 10px;
            font-size: 14px;
            font-weight: 100;
          }
        }
      }
    }
    .more {
      border-bottom: 1px solid #e3e3e3;
      padding-bottom: 10px;
      .beijian {
        width: 200px;
        height: 150px;
      }
      .mini_title {
        font-size: 18px;
        font-weight: 100;
        color: #a5a5a5;
        line-height: 40px;
        margin-top: 10px;
      }
      .mores {
        font-size: 15px;
        font-weight: 700;
        color: #1e9ff2;
        text-align: center;
        cursor: pointer;
        margin-top: 20px;
      }
      .fb {
        ul {
          display: flex;
          justify-content: flex-start;
          li {
            margin-right: 40px;
            div {
              width: 100px;
              height: 100px;
              background: #1e9ff2;
              border-radius: 6px;
            }
          }
        }
      }
      .tese {
        ul {
          display: flex;
          justify-content: flex-start;

          li {
            width: 86px;
            height: 36px;
            line-height: 36px;
            background: #c6e7fc;
            margin-right: 50px;
            border-radius: 4px;
            line-height: 36px;
            text-align: center;
            p {
              color: #1e9ff2;
              font-size: 16px;
              z-index: 5;
              opacity: 1;
            }
          }
        }
      }
      .introduce {
        .add {
          display: flex;
          justify-content: start;
          align-items: flex-end;
          p {
            margin-right: 80px;
          }
          .el-button {
            font-size: 18px;
          }
        }
        ul {
          li {
            p:nth-child(1) {
              color: #9f9f9f;
              font-size: 16px;
              font-weight: 100;
            }
            p:nth-child(2) {
              color: black;
              font-size: 14px;
              line-height: 40px;
            }
          }
        }
      }
    }
    .dynamic {
      margin-top: 35px;
      .el-card__body {
        margin: 0;
        overflow: hidden;
      }
      .tabs {
        width: 560px;
        height: 44px;
        background: #f5f5f6;
        border-radius: 50px;
        display: flex;
        margin-left: 12%;
        margin-bottom: 35px;
        li {
          width: 140px;
          height: 44px;
          list-style: none;
          .tab-link {
            display: block;
            width: 140px;
            height: 44px;
            text-align: center;
            line-height: 44px;
            border-radius: 50px;
            font-size: 18px;
            color: #000000;
            text-decoration: none;
          }
        }
      }
      .tabs a.active {
        height: 44px;
        color: #ffffff;
        font-size: 18px;
        background-color: #1e9ff2;
        transition: 0.3s;
      }
      .tab-card {
        display: none;
        height: 280px;
        margin-top: -20px !important;
        margin-bottom: -20px !important;
        overflow-y: scroll;
        margin-right: -33px;
        .top {
          width: 124px;
          height: 20px;
          border-right: 1px solid #000000;
        }
        .cont {
          display: flex;
          .time {
            width: 124px;
            border-right: 1px solid #000000;
            height: 67px;
            text-align: center;
            padding-top: 15px;
            position: relative;

            .zero {
              width: 10px;
              height: 10px;
              border-radius: 50px;
              background: #1e9ff2;
              position: absolute;
              right: -6px;
              top: 20px;
            }
          }
          .detail {
            margin-left: 12px;

            .user {
              display: flex;
              align-items: center;
              margin-top: 10px;
              img {
                width: 24px;
                height: 24px;
                border-radius: 50px;
                background: #e3e3e3;
                margin-right: 10px;
              }
            }
            .details {
              margin-top: 10px;
              font-size: 12px;
            }
          }
        }
      }
      .cards {
        margin-top: 34px;
        padding: 0;
        margin: 0;
      }
      .clearfix:after {
        content: "";
        display: block;
        height: 0;
        clear: both;
      }
      .clearfix {
        zoom: 1;
      }
      .gj {
        clear: both;
        display: flex;
        margin-top: 20px;
        padding-top: 10px;
        align-items: center;
        .Gj_zero {
          width: 20px;
          height: 20px;
          border-radius: 50px;
          background: #1e9ff2;
          margin-right: 10px;
        }
      }
    }
  }
  .rizhi {
    width: 112%;
    padding-left: 6%;
    margin-left: -6%;
    margin-bottom: -20px;
    height: 186px;
    margin-top: 34px;
    background: #ececec;

    .title_s {
      p {
        padding-top: 26px;
        margin-bottom: 8px;
        font-size: 25px;
        font-weight: 1000;
      }
    }
    .user {
      display: flex;
      align-items: center;
      .user_portrait {
        width: 56px;
        height: 56px;
        background: #d9d9d9;
        border-radius: 50px;
      }
      .name {
        margin-left: 10px;
        p:nth-child(1) {
          font-size: 16px;
        }
        p:nth-child(2) {
          font-size: 12px;
        }
      }
    }
    .times {
      padding-top: 18px;
      margin-top: 18px;
      width: 90%;
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #e3e3e3;
    }
  }
}
.dailog {
  width: 466px;
  display: flex;
  flex-wrap: wrap;
  margin-top: -30px;
  .active {
    background-color: @color;
    color: #ffffff;
  }
  li {
    width: 73px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border: 1px solid #e3e3e3;
    border-radius: 50px;
    background: #ececec;
    color: #a7a7a7;
    margin-right: 10px;
    margin-top: 12px;
    font-size: 14px;
    a {
      text-decoration: none;
    }
  }
}
.con {
  .tabs-card {
    display: none;
    border: 1px solid #e3e3e3;
    border-radius: 6px;
    background: #f5f5f6;
    width: 90%;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    p:nth-child(1) {
      line-height: 30px;
      font-size: 14px;
      color: #959595;
    }
    textarea {
      border: none;
      resize: none;
      background: #f5f5f6;
      text-decoration: none;
    }
  }
}
.text {
  border: none;
  resize: none;
}
.times {
  margin-top: -30px;
  border-top: 1px solid #e3e3e3;
  padding-top: 20px;
  margin-bottom: 20px;
}
</style>
