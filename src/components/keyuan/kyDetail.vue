<template>
    <div>
        <el-card class="el-col-24">
            <p class="title">客源详情</p>
            <div class="header">
                <div class="avatar">
                    <img src="../../assets/images/wechat.png" alt="">
                </div>
                <div class="user">
                    <div class="top">
                        <div class="user_name">
                            <span class="sp1">{{detail.name}}</span>
                            <span class="sp2">{{detail.kydengji}}</span>
                            <span class="sp3">{{detail.kehulx}}</span>
                        </div>
                        <div class="user_edit">
                            <div class="edit_div">
                                <p type="text" @click="dialogVisible1 = true">
                                    <img src="../../assets/images/1.png" alt="">
                                    <p class="edit_p">联系</p>
                                </p>
                                <el-dialog
                                  title="客户信息"
                                  :visible.sync="dialogVisible1"
                                  width="30%"
                                  :before-close="handleClose1">
                                  <div>
                                    <span>客户姓名：{{detail.name}}</span>
                                    <br>
                                    <span>联系方式 ：{{detail.tel}}</span>
                                  </div>
                                  <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisible1 = false">取 消</el-button>
                                    <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
                                  </span>
                                </el-dialog>
                            </div>
                            <div class="edit_div">
                                <p type="text" @click="dialogVisible2 = true">
                                    <img src="../../assets/images/1.png" alt="">
                                    <p class="edit_p">录带看</p>
                                </p>
                                <el-dialog
                                  title="录带看"
                                  :visible.sync="dialogVisible2"
                                  width="30%"
                                  append-to-body
                                  :before-close="handleClose2">
                                  <div class="ldk">
                                      <div class="dkfy" >
                                        <p>带看房源</p>
                                        <div  @click="innerVisible = true">
                                          <p>请选择带看房源</p>
                                          <img src="../../assets/images/rights.png" alt="" width="20px;" height="20px">
                                        </div>
                                      </div>
                                        <el-dialog
                                          width="25%"
                                          title="选择房源"
                                          :visible.sync="innerVisible"
                                          :before-close="innerhandleClose"
                                          append-to-body>
                                          <div>
                                              <div class="sousuo">
                                                <input type="text" class="inp_1" v-model="xiaoqum" placeholder="小区名称" @change="name()">
                                                <input type="text" class="inp_2" v-model="zuodong" placeholder="座/栋" @change="name()">
                                                <input type="text" class="inp_3" v-model="fanghao" placeholder="房间号" @change="name()">
                                                <input type="text" class="inp_4" v-model="yezhutel" placeholder="业主电话"@change="name()">
                                              </div>
                                              <div class="caozuo">
                                                <p class="hist">搜索历史</p>
                                                <p class="clear" @click="clear()">清空</P>
                                              </div>
                                              <div>
                                                <ul>
                                                    <li>
                                                        <div class="user_fys">
                                                            <img src="../../assets/images/wechat.png" alt="" class="lefts_">
                                                            <div class="fx_details">
                                                              <p class="details_p1">方原标题</p>
                                                              <p class="details_p1">方原标题</p>
                                                            </div>
                                                            <p class="rights"></p>
                                                        </div>
                                                    </li>
                                                </ul>
                                              </div>
                                          </div>
                                          <span slot="footer" class="dialog-footer">
                                            <el-button @click="innerVisible = false">取 消</el-button>
                                            <el-button type="primary" @click="innerVisible = false">确 定</el-button>
                                          </span>
                                        </el-dialog>
                                      <div class="dkry" @click="innerVisible2 = true">
                                            <p >陪带看人员</p>
                                            <p>{{zyname}}</p>
                                            <img src="../../assets/images/rights.png" alt="" width="20px;" height="20px">
                                      </div>
                                      <el-dialog
                                          width="25%"
                                          title="选择人员"
                                          :visible.sync="innerVisible2"
                                          :before-close="innerhandleClose2"
                                          append-to-body>
                                          <div>
                                              <input type="text" placeholder="搜索公司人员姓名" class="ss_ry"  v-model="fyname" @change="searchInp()">
                                              <div class="lister">
                                                  <img src="../../assets/images/wechat.png" alt="">
                                                  <div>
                                                      <p>{{zyname}}</p>
                                                      <p>{{md}}</p>
                                                  </div>
                                                  <button  @click="innerVisible2 = false">选择</button>
                                              </div>
                                          </div>
                                      </el-dialog>
                                      <div class="text_">
                                        <textarea rows="10" placeholder="备注" v-model="daikan">
                                        </textarea>
                                      </div>
                                      <div class="date">
                                        <p>带看日期</p>
                                          <div class="block">
                                              <el-date-picker v-model="date" type="date" placeholder="选择日期" size="mini">
                                              </el-date-picker>
                                          </div>
                                      </div>
                                      <div class="dates">
                                        <p>带看时间</p>
                                         <el-time-picker
                                              v-model="value2"
                                              placeholder="选择时间"
                                               size="mini">
                                          </el-time-picker>
                                      </div>
                                  </div>
                                  <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisible2 = false">取 消</el-button>
                                    <el-button type="primary" @click="xiedaikan(),dialogVisible2 = false">确 定</el-button>
                                  </span>
                                </el-dialog>
                            </div>
                            <div class="edit_div">
                                <p type="text" @click="dialogVisible3 = true">
                                    <img src="../../assets/images/1.png" alt="">
                                    <p class="edit_p">跟进</p>
                                </p>
                                <el-dialog
                                  title="写跟进"
                                  :visible.sync="dialogVisible3"
                                  width="30%"
                                  :before-close="handleClose3">
                                  <div>
                                    <span>10-18 14:25</span>
                                    <textarea name="" id="" cols="50" rows="10" placeholder="今天看的很好啊" v-model="genjin"></textarea>
                                  </div>
                                  <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisible3 = false">取 消</el-button>
                                    <el-button type="primary" @click="xiegenjin(),dialogVisible3 = false">确 定</el-button>
                                  </span>
                                </el-dialog>
                            </div>
                            <el-popover
                                placement="bottom-end"
                                width="100"
                                v-model="visible2">
                                <div  class="edit_div">
                                    <ul class="gengduo">
                                        <li  @click="$store.state.Rshow=false">
                                          <img src="../../assets/images/bianji.png" alt="">
                                          <p>编辑客源</p>
                                        </li>
                                        <li type="text" @click="dialogVisible4 = true">
                                            <img src="../../assets/images/tixing.png" alt="">
                                            <p>写提醒</p>
                                        </li>
                                       <li  type="text" @click="outerVisible5 = true">
                                          <img src="../../assets/images/zhuanyi.png" alt="">
                                          <p>转移客源</p>
                                        </li>
                                        <li type="text" @click="dialogVisible6 = true">
                                          <img src="../../assets/images/wuxiao.png" alt="">
                                          <p>转为无效</p>
                                        </li>
                                    </ul>
                                </div>
                                <div slot="reference"  class="edit_div">
                                  <img src="../../assets/images/1.png" alt="">
                                  <p  class="edit_p">更多</p>
                                </div>
                            </el-popover>
                            <el-dialog
                                title="写提醒"
                                :visible.sync="dialogVisible4"
                                width="30%"
                                :before-close="handleClose4">
                                  <textarea v-model="tx" cols="57" rows="10" placeholder="今天看的很好阿"></textarea>
                                <div class="tixing">
                                     <p class="tx_p1">提醒日期</p>
                                     <div class="block">
                                      <el-date-picker
                                        v-model="value1"
                                        type="datetime"
                                        @change="getSTime" 
                                        placeholder="选择日期时间"
                                        value-format="yyyy-MM-dd-HH"
                                        size="mini">
                                      </el-date-picker>
                                    </div>
                                </div>
                                <span slot="footer" class="dialog-footer">
                                  <el-button @click="dialogVisible4 = false">取 消</el-button>
                                  <el-button type="primary" @click="tixing(),dialogVisible4 = false">确 定</el-button>
                                </span>
                            </el-dialog>
                            <el-dialog
                                title="转移客源"
                                :visible.sync="outerVisible5"
                                width="30%"
                                :before-close="handleClose5"
                                append-to-body>
                                <div class="zhuanyi" >
                                    <div class="zhuanyi_">
                                      <p>转移至</p>
                                      <div>
                                          <input type="text" placeholder="请输入经纪人" v-model="fyname" @change="searchInp()">
                                          <img src="../../assets/images/ss.png" alt="">
                                      </div>
                                    </div>
                                    <div class="lister">
                                        <img src="../../assets/images/wechat.png" alt="">
                                        <div>
                                            <p>{{zyname}}</p>
                                            <p>{{md}}</p>
                                        </div>
                                        <button  @click="innerVisible5 = true">选择</button>
                                    </div>
                                </div>
                                <div>
                                    <el-dialog
                                      width="15%"
                                      :visible.sync="innerVisible5"
                                      append-to-body>
                                        <div>确定要把客源转移给{{zyname}}吗</div>
                                          <span slot="footer" class="dialog-footer">
                                              <el-button @click="innerVisible5 = false,outerVisible5 = false">取 消</el-button>
                                              <el-button type="primary" @click="zy(),innerVisible5  = false,outerVisible5 = false">确 定</el-button>
                                          </span>
                                    </el-dialog>
                                   
                                </div>
                              
                            </el-dialog>
                            <el-dialog
                                title="转为无效"
                                :visible.sync="dialogVisible6"
                                width="30%"
                                :before-close="handleClose6">
                                <div class="wuxiao">
                                  <p>无效原因</p>
                                  <el-select v-model="wxxiala" placeholder="请选择" size="mini">
                                    <el-option
                                      v-for="item in chengjiao"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value">
                                    </el-option>
                                  </el-select>
                                </div>
                                <textarea name="" id="" cols="57" rows="10" placeholder="备注" v-model="wxbeizhu"></textarea>
                                <span slot="footer" class="dialog-footer">
                                  <el-button @click="dialogVisible6 = false">取 消</el-button>
                                  <el-button type="primary" @click="wx(),dialogVisible6 = false">确 定</el-button>
                                </span>
                            </el-dialog>
                        </div>
                    </div>
                    <div class="bottom">
                        <textarea  cols="30" rows="10" placeholder="">
                          {{detail.beizhu}}
                        </textarea>
                    </div>
                </div>
            </div>
            <div class="Tab_">
                <ul class="tabs clearfix">
                    <li v-for="(tab,index) in tabsName">
                        <a href="#" class="tab-link" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.name}}</a>
                    </li>
                </ul>
                <div class="cards">
                    <div class="tab-card" style="display: block;">
                        <div class="time">
                            <p @click="times()">星期三</p>
                            <div class="block">
                              <div class="demonstration">{{ value10 }}</div>
                              <el-date-picker
                                v-model="value10"
                                type="date"
                                size="mini"
                                placeholder="选择日期"
                                format="yyyy 年 MM 月 dd 日">
                              </el-date-picker>
                            </div>
                            <p class="kong"></p>
                        </div>
                        <div class="list" >
                            <div class="li" v-for="item in 7">
                              <p class="second">9:30</p>
                              <div class="dtail">
                                  <div class="user_img">
                                    <img src="../../assets/images/wechat.png" alt="">
                                  </div>
                                  <div class="fx_detail">
                                    <p>东二环 培新街 东西通透两居 不临街 地铁</p>
                                    <p>126万 12㎡ 2室1厅</p>
                                  </div>
                              </div>
                              <img src="../../assets/images/rights.png" alt="" class="right">
                            </div>
                        </div>
                    </div>
                    <div class="tab-card">
                       <div class="time">
                            <p>星期三</p>
                            <div>
                                <img src="../../assets/images/lefts.png" alt="">
                                <span>2018年</span>
                                <span>12月</span>
                                <span>18日</span>
                                <img src="../../assets/images/rights.png" alt="">
                            </div>
                            <p class="kong"></p>
                        </div>
                        <div class="list">
                            <div class="li" v-for="item in 7">
                              <p class="second">10:30</p>
                              <div class="dtail">
                                  <div class="user_img">
                                    <img src="../../assets/images/wechat.png" alt="">
                                  </div>
                                  <div class="fx_detail">
                                    <p>东二环 培新街 东西通透两居 不临街 地铁</p>
                                    <p>126万 12㎡ 2室1厅</p>
                                  </div>
                              </div>
                              <img src="../../assets/images/rights.png" alt="" class="right">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="xq">
                <p class="title">客源详情</p>
                <ul>
                    <li>
                        <p class="p1">区域</p>
                        <p class="p2">{{detail.did}}</p>
                    </li>
                    <li>
                        <p class="p1">商圈</p>
                        <p class="p2">{{detail.bussiness}}</p>
                    </li>
                    <li>
                        <p class="p1">小区</p>
                        <p class="p2">{{detail.xiaoqum}}</p>
                    </li>
                    <li>
                        <p class="p1">户型</p>
                        <p class="p2">{{detail.shi}}室{{detail.ting}}厅{{detail.wei}}卫{{detail.yang}}阳</p>
                    </li>
                    <li>
                        <p class="p1">总价</p>
                        <p class="p2">{{detail.xqzj1}}—{{detail.xqzj1}}万元</p>
                    </li>
                    <li>
                        <p class="p1">面积</p>
                        <p class="p2">{{detail.xqmianji1}}—{{detail.xqmianji1}}㎡</p>
                    </li>
                    <li>
                        <p class="p1">类型</p>
                        <p class="p2">{{detail.fwleixing}}</p>
                    </li>
                    <li>
                        <p class="p1">装修</p>
                        <p class="p2">{{detail.zhuangxiu}}</p>
                    </li>
                    <li>
                        <p class="p1">楼层</p>
                        <p class="p2">{{detail.louceng1}}—{{detail.louceng2}}层</p>
                    </li>
                    <li>
                        <p class="p1">朝向</p>
                        <p class="p2">{{detail.chaoxiang}}</p>
                    </li>
                    <li>
                        <p class="p1">目的</p>
                        <p class="p2">{{detail.mudi}}</p>
                    </li>
                </ul>
            </div>
            <div class="gj">
                <p class="title">客源跟进</p>
                <div class="big_tab">
                  <ul class="tabs_ clearfixs">
                      <li v-for="(tab,index) in tabsNames">
                          <a href="#" class="tab-links" @click="tabsSwitchs(index)" v-bind:class="{actives:tab.isActive}">{{tab.name}}</a>
                      </li>
                  </ul>
                  <div class="cards_">
                      <div class="tab-cards" style="display: block;">
                          <div class="list">
                              <div class="li" v-for="item in daikanData">
                                  <div class="times">
                                    <p>12-17 14:12</p>
                                    <div class="zero"></div>
                                  </div>
                                  <div class="detail">
                                    <div class="user_name">
                                        <img src="../../assets/images/wechat.png" alt="">
                                        <span>{{item.name}}</span>
                                    </div>
                                    <div class="bzs">
                                      <p>{{item.beizhu}}</p>
                                    </div>
                                    <div class="user_fy">
                                        <img src="../../assets/images/wechat.png" alt="" class="lefts">
                                        <div class="fx_detail">
                                          <p>{{item.fybiaoti}}</p>
                                        </div>
                                        <img src="../../assets/images/rights.png" alt="" class="rights">
                                    </div>
                                    <div class="pk">
                                      <p>王小明陪看</p>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="tab-cards">
                          <div class="list">
                              <div class="li" v-for="item in genjinData">
                                  <div class="times">
                                    <p>12-17 14:12</p>
                                    <div class="zero"></div>
                                  </div>
                                  <div class="detail">
                                    <div class="user_name">
                                        <img src="../../assets/images/wechat.png" alt="">
                                        <span>{{item.name}}</span>
                                    </div>
                                    <div class="user_session">
                                        <p class="session">
                                            {{item.beizhu}}
                                        </p>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <div class="rizhi">
                <div  class="title_s">
                <p>房源日志</p>
                </div>
                <div class="user">
                <img src="../../assets/images/wechat.png" class="user_portrait" alt=""/>
                <div class="name">
                    <p>王梦娇</p>
                    <p>录入人</p>
                </div>
                </div>
                <div class="times">
                <p>
                    <span>录入时间</span>
                    <span>10-24 13：46录入</span>
                </p>
                <p>
                    <span>修改时间</span>
                    <span>10-24 13：46修改</span></p>
                <p>
                    <span>修改人：</span>
                    <span>10-24 13：46</span>
                </p>
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
      innerVisible: false,
      innerVisible2: false,
      innerVisible5: false,
      visible2: false,
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      dialogVisible5: false,
      outerVisible5: false,
      dialogVisible6: false,
      dialogVisible7: false,
      dialogVisible8: false,
      value2: new Date(2016, 9, 10, 18, 40),
      tabsName: [
        {
          name: "浏览房源",
          isActive: true
        },
        {
          name: "预约带看",
          isActive: false
        }
      ],
      tabsNames: [
        {
          name: "带看",
          isActive: true
        },
        {
          name: "跟进",
          isActive: false
        }
      ],
      detail: [],
      // 写带看
      daikan: "",
      daikanData: {},
      // 写跟进
      genjin: "",
      genjinData: {},
      disabledDate(time) {
        return time.getTime() > Date.now();
      },
      date: "2016/12/12",
      xiaoqum: this.$store.state.search,
      zuodong: this.$store.state.search,
      fanghao: this.$store.state.search,
      yezhutel: this.$store.state.search,
      value10: "",

      // 转为无效
      wxbeizhu: "",
      wxxiala: "",
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
      value: "",
      // 转移客源
      search: "",
      fyname: this.$store.state.search, //搜索房源标题
      zyname: "",
      md: "",
      //写提醒
      value1: "",
      tx: "",
      // 
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.Kydetail();
      this.tabs();
      this.tabs_();
      // this.shaixuan();
    });
  },

  store,
  methods: {
    Kydetail() {
      var that = this;
      var id = that.$store.state.id;
      if (id == 0) {
        return;
      }
      Axios.post(window.http_url + "kdetails", {
        id: id
      })
        .then(res => {
          that.detail = res.data.data.list;
        })
        .catch(error => {
          console.log("kdetails拿不到");
        });
    },
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
    tabsSwitchs: function(tabIndex) {
      var tabCardCollections = document.querySelectorAll(".tab-cards"),
        len = tabCardCollections.length;
      for (var i = 0; i < len; i++) {
        tabCardCollections[i].style.display = "none";
        this.tabsNames[i].isActive = false;
      }
      this.tabsNames[tabIndex].isActive = true;
      tabCardCollections[tabIndex].style.display = "block";
    },
    handleClose1(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleClose2(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleClose3(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleClose4(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleClose5(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
          (this.zyname = ""), (this.md = "");
        })
        .catch(_ => {});
    },
    handleClose6(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    innerhandleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    innerhandleClose2(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //带看
    xiedaikan() {
      var that = this;
      var id = that.$store.state.id;
      if (that.daikan == "") {
        that.$message.warning("请填写带看内容！");
        return;
      }
      that.dialogVisible2 = false;
      Axios.post(window.http_url + "daikan", {
        fid: id,
        status: 0,
        content: that.daikan
      })
        .then(res => {
          var data = res.data;
          that.daikan = "";
          that.fyname = "";
          that.$message.success(data.msg);
          that.tabs();
        })
        .catch(error => {
          console.log("daikan拿不到");
        });
    },
    tabs() {
      var that = this;
      var id = that.$store.state.id;
      Axios.post(window.http_url + "gd", {
        status: 0,
        fid: id
      })
        .then(res => {
          // console.log(res)
          var data = res.data;
          that.daikanData = data.data.daikan;
          // console.log("gd拿到了")
        })
        .catch(error => {
          console.log("gd拿不到");
        });
    },
    // 跟进
    xiegenjin() {
      var that = this;
      var id = that.$store.state.id;
      if (that.genjin == "") {
        that.$message.warning("请填写带看内容！");
        return;
      }
      Axios.post(window.http_url + "daikan", {
        status: 1,
        fid: id,
        contents: that.genjin
      })
        .then(res => {
          var data = res.data;
          that.daikan = "";
          that.$message.success(data.msg);
          that.tabs_();
        })
        .catch(error => {
          console.log("genjin拿不到");
        });
    },
    tabs_() {
      var that = this;
      var id = that.$store.state.id;
      Axios.post(window.http_url + "gd", {
        status: 1,
        fid: id
      })
        .then(res => {
          // console.log(res)
          var data = res.data;
          that.genjinData = data.data.daikan;
          // console.log("gd拿到了")
        })
        .catch(error => {
          console.log("gd拿不到");
        });
    },
    name() {
      var that = this;
      var search = that.$store.state.search;
      Axios.post(window.http_url + "ss", {
        row: {
          xiaoqum: that.xiaoqum,
          zuodong: that.zuodong,
          fanghao: that.fanghao,
          yezhutel: that.yezhutel
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log("ss拿不到");
        });
    },
    wx() {
      var that = this;
      var id = that.$store.state.id;
      if (that.wxxiala == "") {
        that.$message.warning("请选择下架原因！");
        return;
      }
      that.dialogVisible6 = false;
      Axios.post(window.http_url + "wuxiao", {
        id: id,
        content: that.wxbeizhu,
        xiala: that.wxxiala
      })
        .then(res => {
          var data = res.data;
          that.$message.success(data.msg);
          if (data.code == 1) {
            that.$emit("dellist");
          }
        })
        .catch(error => {
          console.log("您的网络开小差了！");
        });
    },
    searchInp() {
      var that = this;
      var id = that.$store.state.id;
      that.$store.state.search = this.search;
      Axios.post(window.http_url + "sspeo", {
        name: that.fyname,
        id: id
      })
        .then(res => {
          var data = res.data;
          that.zyname = data.data[0].name;
          that.md = data.data[0].mendian;
          that.$message.success(data.msg);
        })
        .catch(error => {});
    },
    zy(id) {
      var that = this;
      var kid = that.$store.state.id;
      Axios.post(window.http_url + "zykeyuan", {
        id: id,
        kid: kid
      })
        .then(res => {
          var data = res.data;
          that.$message.success(data.msg);
        })
        .catch(error => {
          that.$message.warning("转移失败");
        });
    },
    tixing() {
      var that = this;
      var id = that.$store.state.id;
      var content = that.tx;
      Axios.post(window.http_url + "tixing", {
        id: id,
        content: that.tx,
        time: that.value1
      })
        .then(res => {
          var data=res.data
          that.$message.success(data.msg);
        })
        .catch(error => {
          var data=res.data
          that.$message.warning(data.msg);
        });
    },
    getSTime(val) {
      this.value1 =val; //这个sTime是在data中声明的，也就是v-model绑定的值
      console.log(this.value1);
    },
    
  },
  computed: {
    listenId: function() {
      return this.$store.state.id;
    },
    listenSearch: function() {
      return this.$store.state.search;
    }
  },
  watch: {
    listenId: function() {
      this.Kydetail();
      this.tabs();
    },
    listenSearch: function(val, oldVal) {
      this.shaixuan();
    }
  }
};
</script>

<style lang="less" scoped>
.ss_ry {
  width: 100%;
  height: 28px;
  line-height: 28px;
  background: #ebeaec;
  border: none;
  border-radius: 4px;
}
.sousuo {
  display: flex;
  align-items: center;
  height: 30px;
  background: #f7f6f6;
  margin-top: -20px;
  input {
    height: 18px;
    background: #ebeaec;
    border: none;
    margin-right: 5px;
  }
  .inp_1 {
    width: 120px;
  }
  .inp_2 {
    width: 66px;
  }
  .inp_3 {
    width: 66px;
  }
  .inp_4 {
    width: 110px;
  }
}
.caozuo {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 10px;
  .clear {
    color: #1e9ff2;
  }
}
textarea {
  width: 100%;
}
.ldk {
  .dkfy {
    display: flex;
    align-items: center;
    width: 100%;
    color: #959595;
    height: 30px;
    background: #ececec;
    div {
      margin-left: 50px;
      display: flex;
      align-items: center;
      font-size: 14px;
      cursor: pointer;
      img {
        width: 20px !important;
        height: 20px !important;
      }
    }
  }
  .dkry {
    display: flex;
    height: 30px;
    border-bottom: 1px solid #ececec;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  p:nth-child(2){
    margin-left: 50px;
  }
    img {
      margin-left:10px;
      width: 20px !important;
      height: 20px !important;
    }
  }
  textarea {
    border: none;
  }
  .date {
    display: flex;
    align-items: center;
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
    .el-date-editor {
      width: 150px;
      margin-left: 20px;
    }
  }
  .dates {
    display: flex;
    align-items: center;
    margin-right: 20px;
    height: 32px;
    background: #f7f6f6;
    font-size: 14px;
    .el-date-editor {
      width: 150px;
      margin-left: 20px;
    }
  }
}
.zhuanyi {
  .zhuanyi_ {
    display: flex;
    height: 32px;
    padding-left: 10px;
    background: #ececec;
    align-items: center;
    div {
      position: relative;
      img {
        position: absolute;
        width: 15px;
        height: 15px;
        top: 0;
        left: 10px;
      }
      input {
        padding-left: 30px;
        background: #ececec;
        border: none;
      }
    }
  }
  
}
.lister {
    display: flex;
    justify-content: space-between;
    height: 82px;
    align-items: center;
    border-bottom: 1px solid #ececec;
    div {
      margin-left: -200px;
      font-size: 12px;
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    button {
      width: 50px;
      height: 25px;
      background: #cbebff;
      font-size: 12px;
      color: #1e9ff2;
      text-align: center;
      line-height: 25px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
    }
  }
.wuxiao {
  margin-top: -20px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  color: #000000;
  .el-select {
    margin-left: 30px;
  }
  textarea {
    border: none;
    resize: none;
  }
}
.tixing {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  height: 40px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  .tx_p2 {
    color: #ececec;
  }
  textarea {
    border: none;
    width: 100%;
    border-top: 1px solid #ececec;
  }
}
.gengduo {
  li {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    border-bottom: 1px solid #ececec;
    padding-bottom: 5px;
    padding-top: 5px;
    cursor: pointer;
    img {
      width: 15px;
      height: 15px;
    }
  }
}
.title {
  font-size: 24px;
  font-weight: 1000;
}
.header {
  display: flex;
  height: 187px;
  .avatar {
    margin-right: 20px;
    margin-top: 40px;
    img {
      width: 132px;
      height: 132px;
    }
  }
  .user {
    width: 578px;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 66px;
      .user_name {
        width: 200px;
        height: 50px;
        line-height: 50px;
        .sp1 {
          font-size: 20px;
          font-weight: 800;
        }
        .sp2,
        .sp3 {
          font-size: 16px;
          margin-left: 20px;
          font-weight: 200;
        }
      }
      .user_edit {
        display: flex;
        height: 74px;
        float: right;
        .edit_div {
          margin-left: 20px;
          img {
            width: 33px;
            height: 33px;
          }
          .edit_p {
            text-align: center;
            font-size: 10px;
            color: #1e9ff2;
          }
        }
      }
    }
    .bottom {
      textarea {
        height: 100px;
        padding-top: 10px;
        padding-left: 2%;
        display: inline-block;
        width: 98%;
        resize: none;
        border: none;
        background: #f1f1f1;
        border-radius: 4px;
      }
    }
  }
}
.Tab_ {
  .tabs {
    margin-top: 25px;
    width: 280px;
    height: 44px;
    background: #f5f5f6;
    border-radius: 50px;
    display: flex;
    margin-left: 180px;
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
  .clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
  .clearfix {
    zoom: 1;
  }
}
.tab-card {
  display: none;
  height: 340px;
  width: 100%;
  overflow-y: scroll;
  border-radius: 4px;
  border: 1px solid #ececec;
  .time {
    width: 90%;
    position: absolute;
    height: 48px;
    background: #ececec;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding-left: 2%;
    font-size: 16px;
    padding-right: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
    .kong {
      width: 45px;
    }
  }
  .list {
    margin-top: 50px;
    .li {
      cursor: pointer;
      width: 96%;
      padding-left: 2%;
      padding-right: 2%;
      height: 65px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ececec;
      .dtail {
        display: flex;
        align-items: center;
        .user_img {
          width: 50px;
          height: 50px;
          margin-right: 20px;
          margin-left: -200px;
          img {
            width: 50px;
            height: 50px;
          }
        }
      }
      .right {
        width: 15px;
        height: 18px;
      }
    }
  }
}
.big_tab {
  .tabs_ {
    margin-top: 25px;
    width: 280px;
    height: 44px;
    background: #f5f5f6;
    border-radius: 50px;
    display: flex;
    margin-left: 180px;
    margin-bottom: 35px;
    li {
      width: 140px;
      height: 44px;
      list-style: none;
      .tab-links {
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
  .tabs_ a.actives {
    height: 44px;
    color: #ffffff;
    font-size: 18px;
    background-color: #1e9ff2;
    transition: 0.3s;
  }
  .clearfixs:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
  .clearfixs {
    zoom: 1;
  }
}
.tab-cards {
  display: none;
  height: 340px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ececec;
  overflow-y: scroll;
  .list {
    .li {
      display: flex;
      .times {
        width: 80px;
        padding-left: 40px;
        padding-right: 15px;
        border-right: 1px solid #000000;
        position: relative;
        margin-right: 13px;
        .zero {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #4564fc;
          background: white;
          position: absolute;
          right: -6px;
          top: 30px;
        }
        p {
          margin-top: 30px;
        }
      }
      .detail {
        margin-top: 30px;
        .bzs {
          margin-top: 5px;
        }
        .pk {
          margin-top: 10px;
        }
        .user_name {
          display: flex;
          align-items: center;
          img {
            width: 25px;
            height: 25px;
          }
          span {
            font-size: 16px;
            margin-left: 10px;
          }
        }
        .user_fy {
          display: flex;
          width: 380px;
          padding-left: 10px;
          padding-right: 10px;
          margin-top: 10px;
          height: 70px;
          background: #ececec;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .lefts {
            width: 50px;
            height: 50px;
            border-radius: 4px;
          }
          .rights {
            height: 20px;
            width: 15px;
          }
          .fx_detail {
            margin-left: -20px;
          }
        }
        .user_session {
          .session {
            margin-top: 10px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
.xq {
  padding-bottom: 20px;
  border-bottom: 1px solid #ececec;
  .title {
    margin-top: 35px;
  }
  ul {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33%;
      margin-top: 20px;
      .p1 {
        font-size: 20px;
        font-weight: 500;
      }
      .p2 {
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
}
.gj {
  .title {
    margin-top: 20px;
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
.second {
  width: 40px;
  text-align: center;
}
.user_fys {
  display: flex;
  width: 380px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  height: 50px;
  background: #ececec;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .lefts_ {
    width: 30px;
    height: 30px;
    border-radius: 4px;
  }
  .rights {
    height: 20px;
    width: 15px;
    img {
      border-radius: 50%;
    }
  }
  .fx_details {
    margin-left: -20px;
    .details_p1 {
      color: #6b6f82;
    }
    .details_p2 {
      color: #959595;
    }
  }
}
</style>
