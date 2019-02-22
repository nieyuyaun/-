<template>
  <div>
    <el-card class="box-card el-col-24 Edit" >
      <!-- 头部 -->
      <div class="header">
        <p>房源编辑</p>
        <el-button type="primary" @click="submitUpload">保存</el-button>
      </div>
      <!-- 照片上传 -->
      <div class="pic">
        <el-upload
          action="http://upload.qiniu.com/"
          list-type="picture-card"
          accept="image/*"
          ref="upload"
          :limit="imgLimit"   
          :file-list="editData.fyimg"
          :on-success="upImgSuccess1"
          :on-remove="removeone"
          :on-change="addKey1"
          :data="token"
          :auto-upload="true">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>

      </div>
      <!-- 房源信息 -->
      <div class="fangyuan">
        <div class="title">
          <p>房源信息</p>
        </div>
        <el-form :model="editData" :rules="rules" ref="" size="mini" class="demo-ruleForm">
          <el-form-item label="标题" prop="fybiaoti">
            <br>
            <el-input v-model="editData.fybiaoti" placeholder="6-30个汉子或字母，不能填写电话" size="mini"></el-input>
          </el-form-item>
        </el-form>

        <div class="counts">
          <el-form :model="editData" :rules="rules" ref="" size="mini" class="demo-ruleForm">
            <el-form-item label="座/栋" prop="louhao">
              <br>
              <el-input v-model="editData.louhao" style="width:70%;"  size="mini"></el-input>
            </el-form-item>
          </el-form>
          <el-form :model="editData" :rules="rules" ref="" size="mini" class="demo-ruleForm">
            <el-form-item label="单元" prop="danyuan">
              <br>
              <el-input v-model="editData.danyuan" style="width:70%;"  size="mini"></el-input>
            </el-form-item>
          </el-form>
          <el-form :model="editData" :rules="rules" ref="" size="mini" class="demo-ruleForm">
            <el-form-item label="房号" prop="fanghao">
              <br>
              <el-input v-model="editData.fanghao" style="width:70%;"  size="mini"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <el-form :model="editData" :rules="rules" ref="" size="mini" class="demo-ruleForm">
          <el-form-item label="小区名称" prop="xiaoqum">
            <br>
            <el-input v-model="editData.xiaoqum"  size="mini"></el-input>
          </el-form-item>

          <div class="el-form-item">
            <p>所在地区</p>
            <el-select @change="quyu(editData.quyu)" size="mini" v-model="editData.quyu" placeholder="区域" class="address">
              <el-option v-for="item in area" :key="item.value" :label="item.lable" :value="item.value"></el-option>
            </el-select>
            <p>商圈</p>
            <el-select size="mini" v-model="editData.shangquan" placeholder="商圈" class="address">
              <el-option v-for="item in shangquan" :key="item.value" :label="item.lable" :value="item.value"></el-option>
            </el-select>
            <div class="xiangxi">
                                <span >
                                    详细内容
                                </span>
              <input type="text"  v-model="editData.xiangxi">
            </div>
          </div>
        </el-form>
        <div class="el-form-item">
          <p>房源等级</p>
          <el-select v-model="editData.fydengji" placeholder="请选择"  size="mini" style="margin-top: 5px;">
            <el-option
              v-for="item in xialaData.fydengji"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="zongjia">
          <div class="zj_li">
            <p><span class="red">*</span>总价</p>
            <p class="pos">万元</p>
            <input type="number" v-model="editData.shoujia">
          </div>
          <div class="zj_li">
            <p class="pos">元/㎡</p>
            <input type="number" v-model="editData.danjia">
          </div>
          <div class="zj_li">
            <p class="pos">㎡</p>
            <input type="number" v-model="editData.mianji">
          </div>
        </div>

        <div class="Row_one two" style="display: flex;margin-top: 20px;">
          <div class="select_one">
            <p><span class="red">*</span>室</p>
            <el-select v-model="editData.shi" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.shi"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="select_one">
            <p><span class="red">*</span>厅</p>
            <el-select v-model="editData.ting" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.ting"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="select_one">
            <p><span class="red">*</span>卫</p>
            <el-select v-model="editData.wei" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.wei"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="select_one">
            <p><span class="red">*</span>阳</p>
            <el-select v-model="editData.yang" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.yang"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="zx">
          <div class="zhuangxiu">
            <p><span class="red">*</span>装修</p>
            <el-select v-model="editData.zhuangxiu" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.zhuangxiu"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="zhuangxiu">
            <p><span class="red">*</span>楼型</p>
            <el-select v-model="editData.jiegou" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.jiegou"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <!-- 更多信息 -->
      <div class="more">
        <div class="title">
          <p>更多房源</p>
        </div>
        <div class="Row_one">
          <div class="select_one">
            <p>来源渠道</p>
            <el-select v-model="editData.laiyuan" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.laiyuan"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="text_one">
            <p>套内面积</p>
            <p class="p_one p_two">㎡</p>
            <input type="number" v-model="editData.shiyongmj">
          </div>
          <div class="text_one">
            <p>底价</p>
            <p class="p_one p_two">万元</p>
            <input type="number" v-model="editData.chushoudj">
          </div>
          <div class="radio_one">
            <p>电梯</p>
            <div class="radio" v-model="editData.dianti">
              <input type="radio" name="you"><span>有电梯</span>
              <input type="radio" name="you"><span>无电梯</span>
            </div>
          </div>
        </div>
        <div class="Row_one two">
          <div class="select_one">
            <p>产权年限</p>
            <el-select v-model="editData.cqnianxian" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.cqnianxian"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="select_one">
            <p>房屋卖点</p>
            <el-select v-model="editData.csfwmd" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.csfwmd"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="select_one">
            <p>建筑结构 </p>
            <el-select v-model="editData.jiegou" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.jiegou"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="select_one">
            <p>建筑类型</p>
            <el-select v-model="editData.jianzhulx" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.jianzhulx"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="Row_one two">
          <div class="select_one">
            <p>唯一住房</p>
            <el-select v-model="editData.weiyi" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.weiyi"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="time">
            <div>
              <p class="p___">建造时间</p>
              <div class="block">
                <el-date-picker v-model="editData.guaipaitime" type="date" placeholder="选择日期" size="mini">
                </el-date-picker>
              </div>
            </div>
          </div>
          <div class="select_one">
            <p>权属</p>
            <el-select v-model="editData.jyquanshu" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.jyquanshu"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="Row_one two">
          <div class="select_one">
            <div class="block">
              <span class="demonstration">年</span>
              <el-date-picker
                v-model="editData.jzshijian"
                type="year"
                placeholder="选择年" size="mini" style="margin-top: 5px;">
              </el-date-picker>
            </div>
          </div>
          <div class="select_one">
            <p>供暖方式</p>
            <el-select v-model="editData.cainuanfs" placeholder="请选择"  size="mini" >
              <el-option
                v-for="item in xialaData.cainuanfs"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="select_one">
            <p>户型结构 </p>
            <el-select v-model="editData.lcleixing" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.lcleixing"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="select_one">
            <p>产权</p>
            <el-select v-model="editData.cqnianxian" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.cqnianxian"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="Row_one two">

          <div class="time">
            <div>
              <p class="p__">上次交易</p>
              <div class="block">
                <el-date-picker
                  size="mini"
                  v-model="editData.sctime"
                  type="date"
                  placeholder="选择日期" style="margin-top: 5px;">
                </el-date-picker>
              </div>
            </div>
          </div>

          <div class="select_one">
            <p>梯户比例</p>
            <el-select v-model="editData.tihubili" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.tihubili"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="Row_one two">
          <div class="select_one">
            <p>抵押信息</p>
            <el-select v-model="editData.diya" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.diya"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="select_one">
            <p>用途</p>
            <el-select v-model="editData.yongtu" placeholder="请选择"  size="mini" >
              <el-option
                v-for="item in xialaData.yongtu"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="select_one">
            <p>产权所有 </p>
            <el-select v-model="editData.cqsuoshu" placeholder="请选择"  size="mini">
              <el-option
                v-for="item in xialaData.cqsuoshu"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>

        </div>
      </div>
      <!-- 房本备件  -->
      <div class="fangben">
        <div class="title">
          <p>房本备件</p>
        </div>
        <el-upload
          action="http://upload.qiniu.com/"
          list-type="picture-card"
          accept="image/*"
          ref="upload"
          :limit="imgLimit"
          :file-list="editData.beijian"
          :on-success="upImgSuccess2"
          :on-remove="removetwo"
          :on-change="addKey2"
          :data="token"
          :auto-upload="true">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <!-- 房源特色 -->
      <div class="tese">
        <div class="title">
          <p>房源特色</p>
        </div>
        <el-select
          v-model="biaoqian"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签"
          class="el-col-24">
          <el-option
            v-for="item in xialaData.biaoqian"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

      </div>
      <!-- 备注信息 -->
      <div class="mark">
        <div class="titles">
          <p>备注</p>
        </div>
        <el-input
          type="textarea"
          :rows="5"
          placeholder="请输入内容"
          v-model="editData.beizhu">
        </el-input>
      </div>
      <!-- 日志 -->
      <div class="rizhi">
        <div  class="title_s">
          <p>房源日志</p>
        </div>
        <div class="user">
          <img :src="log.avatar" alt="" class="user_portrait"/>
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
            <span>{{log.updatetime}}修改</span></p>
          <p>
            <span>修改人：</span>
            <span>{{log.name}}</span>
          </p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import store from "@/store/store.js";

export default {
  data: function() {
    return {
      biaoqian: [],
      xialaData: {},
      editData: {},
      log: {},
      id: 1,
      area: this.$store.state.area,
      shangquan: [],
      picture: [],
      token: {},
      // 照片上传
      urlhttp: "",
      dialogImageUrl: "",
      dialogVisible: false,
      productImgs: [],
      productImgs1: [],
      imgLimit: 10, //最大上传 数量
      //        正则验证
      rules: {
        fanghao: { required: true, message: "请输入房号", trigger: "blur" },
        fybiaoti: {
          required: true,
          message: "请输入房源标题",
          trigger: "blur"
        },
        danyuan: { required: true, message: "请输入单元", trigger: "blur" },
        louhao: { required: true, message: "请输入楼号", trigger: "blur" },
        xiaoqum: { required: true, message: "请输入小区名", trigger: "blur" }
      }
    };
  },
  store,
  watch: {
    listenId: function(val, oldVal) {
      this.xiala();
    },
    listenArea: function(val, oldVal) {
      this.area = this.$store.state.area;
    }
  },
  computed: {
    listenId: function() {
      return this.$store.state.id;
    },
    listenArea: function() {
      return this.$store.state.area;
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.xiala();
      this.zheng();
      this.id = this.$store.state.id;
    });
  },
  methods: {
    //      获取下拉并获取编辑值
    xiala: function() {
      var that = this;
      var id = that.$store.state.id;
      axios
        .post(window.http_url + "xiala", {})
        .then(res => {
          var data = res.data;
          that.xialaData = data.data;
          axios
            .post(window.http_url + "fyxx", {
              id: id
            })
            .then(res => {
              var data = res.data;
              that.editData = data.data.list;
              that.biaoqian = data.data.list.biaoqian;
              that.log = data.data.log[0];
            })
            .catch(res => {
              console.log("您的网络开小差了！");
            });
        })
        .catch(res => {
          console.log("您的网络开小差了！");
        });
    },
    //      获取区域
    quyu: function(val) {
      var that = this;
      axios
        .post(window.http_url + "liandong", {
          val: val
        })
        .then(res => {
          var data = res.data;
          that.shangquan = data.data.shangquan;
        })
        .catch(res => {
          console.log("您的网络开小差了！");
        });
    },
    //      获取token
    zheng: function() {
      var that = this;
      axios
        .post("http://vue.zhamengyun.com/index/zheng", {})
        .then(res => {
          var data = res.data;
          that.token.token = data.data.token;
          that.urlhttp = "http://" + data.data.url + "/";
        })
        .catch(res => {
          console.log("您的网络开小差了！");
        });
    },
    submitUpload() {
      var that = this;
      var id = that.$store.state.id;
      axios
        .post(window.http_url + "editdata", {
          id: id,
          row: that.editData
        })
        .then(res => {
          var data = res.data;
          that.$message.success(data.msg);
          var timer = setTimeout(function() {
            that.$emit("sxlist");
            clearTimeout(timer);
          }, 50);
        })
        .catch(res => {
          console.log("您的网络开小差了！");
        });
    },
    //      图片上传
    addKey1: function(file) {
      this.token.key = "ershou/" + Math.random() + "" + file.name;
    },
    addKey2: function(file) {
      this.token.key = "beijian/" + Math.random() + "" + file.name;
    },
    upImgSuccess1: function(data, file) {
      this.editData.fyimg.push({
        name: file.name,
        url: this.urlhttp + "" + data.key
      });
    },
    upImgSuccess2: function(data, file) {
      this.editData.beijian.push({
        name: file.name,
        url: this.urlhttp + "" + data.key
      });
    },
    removeone: function(file) {
      var fyimg = this.editData.fyimg;
      for (var key in fyimg) {
        if (fyimg[key].name == file.name) {
          fyimg.splice(key, 1);
        }
      }
    },
    removetwo: function(file) {
      var beijian = this.editData.beijian;
      for (var key in beijian) {
        if (beijian[key].name == file.name) {
          beijian.splice(key, 1);
        }
      }
    },
    beforeAvatarUpload(file) {
      //文件上传之前调用做一些拦截限制
      return false;
      console.log(file);
      const isJPG = true;
      // const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    

    keyCoude() {
      document.onkeydown = function(e) {
        //对整个页面文档监听
        var keyNum = window.event ? e.keyCode : e.which; //获取被按下的键值
        //判断如果用户按下了回车键（keycode=13）
        if (keyNum == 13) {
          alert("您准备创建标签了");
        }
        // 空格键（keycoude=32）
        if (keyNum == 32) {
          alert("您准备创建标签了");
        }
      };
    }
  }
};
</script>

<style lang="less" scoped>
.select_one {
  margin-right: 30px;
}
.red {
  color: red;
}
.Edit {
  width: 96%;
  padding-right: 2%;
  padding-left: 2%;
  height: 100%;
  background: #ffffff;
  box-shadow: -2px -2px -2px #e3e3e3;
  .title {
    height: 100px;
    line-height: 100px;
    font-size: 20px;
    font-weight: 1000;
  }
  .header {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e3e3e3;
    p {
      font-family: "Hiragino Sans GB";
      font-size: 20px;
      font-weight: 1000;
    }
  }
  .pic {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    img {
      width: 100px !important;
      height: 100px !important;
    }
  }
  .fangyuan {
    .address {
      width: 120px;
    }
    .shangquan {
      width: 90px;
      height: 28px;
      border-radius: 5px;
      border: 1px solid #e3e3e3;
      padding-left: 10px;
      margin-left: 20px;
    }
    .xiangxi {
      margin-left: 30px;
      display: inline;
      input {
        width: 200px;
        height: 28px;
        border-radius: 5px;
        border: 1px solid #e3e3e3;
        padding-left: 10px;
      }
    }
    .counts {
      display: flex;
      justify-content: start;
      .count {
        width: 120px;
        margin-right: 30px;
        p {
          position: absolute;
          top: 28px;
          z-index: 999;
          left: 60px;
          padding-left: 15px;
          border-left: 1px solid gainsboro;
        }
      }
    }
    .zongjia {
      width: 518px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .zj_li {
        width: 164px;
        position: relative;
        input {
          width: 70px;
          border-radius: 2px;
          height: 25px;
          line-height: 25px;
          border: 1px solid #e3e3e3;
          margin-top: 5px;
          padding-left: 10px;
          padding-right: 40px;
        }
        .pos {
          position: absolute;
          z-index: 1;
          right: 50px;
          margin-top: 10px;
          font: 15px;
          color: gray;
        }
      }
    }
    .fangxing {
      display: flex;
      justify-content: space-between;
      width: 550px;
      margin-top: 30px;
      align-items: flex-end;
      .fx_li {
        width: 120px;
        position: relative;
        input {
          width: 80px;
          border-radius: 2px;
          height: 25px;
          line-height: 25px;
          border: 1px solid #e3e3e3;
          margin-top: 5px;
          padding-right: 30px;
          padding-left: 10px;
        }
        .pos {
          position: absolute;
          z-index: 999;
          margin-top: 10px;
          right: 10px;
          font: 15px;
          color: gray;
          background: white;
        }
      }
    }
    .zx {
      display: flex;
      .zhuangxiu {
        margin-top: 30px;
        margin-right: 30px;
        .el-select {
          margin-top: 5px;
          width: 136px;
        }
      }
    }
  }
  .more {
    .p_two {
      position: absolute;
      top: 28px;
      right: 10px;
    }
    .Row_one {
      display: flex;
      .select_one {
        margin-right: 30px;
        p {
          font-weight: 1000px;
        }
        .el-select {
          width: 100px;
          margin-top: 5px;
        }
      }
      .text_one {
        margin-right: 30px;
        position: relative;
        width: 100px;
        input {
          width: 45px;
          border-radius: 5px;
          height: 25px;
          line-height: 25px;
          border: 1px solid #e3e3e3;
          margin-top: 5px;
          padding-left: 10px;
          padding-right: 40px;
        }
      }
      .radio_one {
        .radio {
          margin-top: 10px;
          cursor: pointer;
          span {
            margin-right: 10px;
          }
        }
      }
    }
    .time {
      display: flex;
      align-items: flex-end;
      margin-right: 20px;
      .p___ {
        margin-bottom: 5px;
      }
      div {
        margin-right: 10px;
        position: relative;
        input {
          width: 60px;
          border-radius: 5px;
          border: 1px solid #e3e3e3;
          height: 25px;
          margin-top: 5px;
          padding-right: 30px;
          padding-left: 10px;
        }
        .p_one {
          position: absolute;
          right: 10px;
          margin-top: 10px;
        }
      }
    }
    .two {
      margin-top: 30px;
    }
  }

  .tese {
    .biaoqian {
      ul {
        margin-top: -45px;
        display: flex;
        justify-content: flex-start;
        width: 450px;
        flex-wrap: wrap;

        li {
          div {
            width: 75px;
            height: 30px;
            line-height: 30px;
            background: #f5f5f5;
            margin-top: 20px;
            border: 1px solid #e3e3e3;
            border-radius: 5px;
            text-align: center;
            margin-right: 35px;
          }
        }
      }
    }
  }
  .mark {
    .titles {
      margin-top: 80px;
      font-size: 20px;
      font-weight: 1000;
      margin-bottom: 10px;
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
