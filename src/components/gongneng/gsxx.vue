<template>
    <div id="gsxx">
        <ul>
            <li class="li">
                <div class="left">
                    <span class="red">*</span>
                    <span>公司名称</span>
                </div>
                <div class="right">
                    <el-input v-model="editData.zj_name" placeholder="请输入公司名称" size="mini"></el-input>
                </div>
            </li class="li">
            <li class="li">
                <div class="left">
                    <span class="red">*</span>
                    <span>公司logo</span>
                </div>
                <div class="right">
                   <el-upload
                        action="http://upload.qiniu.com/"
                        list-type="picture-card"
                        accept="image/*"
                        ref="upload"
                        :limit="imgLimit"   
                        :on-success="upImgSuccess1"
                        :on-change="addKey1"
                        :data="token"
                        :auto-upload="true">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>
            </li class="li">
            <li class="li">
                <div class="left">
                    <span class="red">*</span>
                    <span>公司标语</span>
                </div>
                <div class="right">
                    <el-input v-model="editData.zj_biaoyu" placeholder="请输入公司标语" size="mini"></el-input>
                </div>
            </li class="li">
            <li class="li">
                <div class="left">
                    <span>&nbsp;&nbsp;</span>
                    <span>客服电话</span>
                </div>
                <div class="right">
                    <el-input v-model="editData.zj_phone" placeholder="请输入客服电话" size="mini"></el-input>
                </div>
            </li class="li">
            <li class="li">
                <div class="left">
                    <span class="red">*</span>
                    <span>公司地址</span>
                </div>
                <div class="right">
                    <div>
                        <el-select v-model="editData.zj_sheng" placeholder="请选择省 " size="mini">
                            <el-option
                            v-for="item in sheng"
                            :key="item.value"
                            :label="item.lable"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="editData.zj_shi" placeholder="请选择市" size="mini">
                            <el-option
                            v-for="item in shi"
                            :key="item.value"
                            :label="item.lable"
                            :value="item.lable">
                            </el-option>
                        </el-select>
                        <el-select v-model="editData.zj_qu" placeholder="请选择区县" size="mini">
                            <el-option
                            v-for="item in options"
                            :key="item.qu"
                            :label="item.lable"
                            :value="item.value">
                            </el-option>
                        </el-select>  
                    </div>
                    <div class="reserch">
                       <el-input v-model="editData.zj_dizhi" placeholder="请填写具体位置" size="mini"></el-input>
                       <button class="reserch_map">搜索地图</button>
                    </div>
                </div>
            </li class="li">
            <li class="li">
                <div class="left">
                    <span class="red">*</span>
                    <span>地图定位</span>
                </div>
                <div class="right map">
                     <Map></Map>
                </div>
            </li class="li">
            <li class="li">
                <div class="left people">
                    <span class="red">*</span>
                    <span>维权联系人</span>
                </div>
                <div class="right">
                    <el-input v-model="editData.zj_lianxiren" placeholder="请输入公司名称" size="mini"></el-input>
                </div>
            </li class="li">
            <li class="li">
                <div class="left">
                    <span class="red">*</span>
                    <span>联系电话</span>
                </div>
                <div class="right">
                    <el-input v-model="editData.zj_phone" placeholder="请输入公司名称" size="mini"></el-input>
                </div>
            </li class="li">
        </ul>
        <div class="bottom">
            <button class="add" @click="addClick()">保存</button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Map from "@/components/ershou/map";
import store from "@/store/store.js";
import axios from "axios";
export default {
    name:"gsxx",
    data(){
        return{
            input:"",
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            imageUrl: '',
            editData:{},
            token:{},
            //照片上传
            picture: [],

            urlhttp: "",
            dialogImageUrl: "",
            dialogVisible: false,
            productImgs: [],
            imgLimit: 1, //最大上传 数量
            //省市区
            sheng:[],
            shi:[],
            qu:[],
        }
    },
    mounted(){
        this.$nextTick(function() {
            this.Xadd();
            this.tok();
            this.xiala();
        })
    },
    store,
    components:{
        Map
    },
    methods:{
    Xadd(){
          var that=this;
          var id=that.$store.state.id
          axios.post("http://vue.zhamengyun.com/setting/gongsi",{
            //   id:id
          }).then(res=>{
              var data=res.data;
              that.editData=data.data.zhongjie;
              that.dialogImageUrl=data.data.zhongjie.log
          }).catch(error=>{
              console.log("data")
          })
    },
    tok(){
        var that=this;
        axios.post("http://vue.zhamengyun.com/index/zheng", {

        }).then(res => {
          var data = res.data;
          that.token.token = data.data.token;
          that.urlhttp = "http://" + data.data.url + "/";
        }).catch(res => {
          console.log("您的网络开小差了！");
        });
    },
    //上传照片
    addKey1: function(file) {
      this.token.key = "gongneng/" + Math.random() + "" + file.name;
    },
    upImgSuccess1: function(data, file) {
      this.editData.zj_logo.push({
        name: file.name,
        url: this.urlhttp + "" + data.key
      });
    },
    removeone: function(file) {
      var fyimg = this.editData.zj_logo;
      for (var key in zj_logo) {
        if (zj_logo[key].name == file.name) {
          zj_logo0.splice(key, 1);
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
    addClick(){
        var that=this
        axios.post("http://vue.zhamengyun.com/setting/gongsi",{
            edit:1,
            data:{
                zj_name:that.editData.zj_name,
                zj_logo:that.editData.zj_logo,
                zj_biaoyu:that.editData.zj_biaoyu,
                zj_phone:that.editData.zj_phone,
                zj_sheng:that.editData.zj_sheng,
                zj_shi:that.editData.zj_shi,
                zj_qu:that.editData.zj_qu,
                zj_dizhi:that.editData.zj_dizhi,
                zj_lianxiren:that.editData.zj_lianxiren,
            }
        }).then(res=>{
            var data=res.data
            that.$message.scuuess(data.msg)
        }).catch(error=>{
            that.$message.error(data.msg)
        })
    },
    xiala(){
        var that=this
        axios.post("http://vue.zhamengyun.com/setting/xiala",{
            id:that.$store.state.id,
            aid:that.value
        }).then(res=>{
            var data=res.data;
            that.sheng=data.data.sheng
            that.shi=data.data.shi
            that.qu=data.data.qu
            console.log(data)
        }).catch(error=>{
            console.log("下拉拿不到")
        })
    }
    }

}
</script>
<style lang="less" scoped>
.red{
    color:red;
}
.el-input{
    width:496px;
}
ul{
    padding-bottom:80px;
    border-bottom:1px solid #eeeeee;
.li{
    display: flex;
    align-items: flex-start;
    padding-top: 30px;
    padding-left: 58px;
    .left{
        margin-right: 25px;
    }
    .people{
        margin-right: 11px;
    }
    .el-select{
        width:130px;
        margin-right: 20px;
    }
    .reserch{
        margin-top: 20px;
        .reserch_map{
                width: 88px;
                height: 27px;
                border:none;
                background:#efefef;
                margin-left: -6px;
                cursor: pointer;
                
            }
    }
    .map{
        width:1000px;
        height:396px;
        background:#f5f5f5;
        overflow: hidden;
    }
    
}
}
.add{
    width:72px;
    height: 32px;;
    background:#1e9ff2;
    color:white;
    border-radius: 4px;
    margin-top:10px;
    margin-left: 800px;
    border:none;
    cursor: pointer;
}
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
