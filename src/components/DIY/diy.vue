<template>
  <div id="content" style="width: 100%;min-height: 1000px;margin-bottom: 100px;">
    <div class="zujian_list_cover">
      <div class="zujian_list">
        <div class="zujian_title">模板</div>
        <el-collapse accordion>
          <el-collapse-item title="房源类">
            <div class="zj_icon" @click="show('banner1')">
              <i class="icon iconfont icon-fangzi"></i>
              <span>banner1</span>
            </div>
            <div class="zj_icon" @click="show('banner2')">
              <i class="icon iconfont icon-fangzi"></i>
              <span>banner2</span>
            </div>
            <div class="zj_icon" @click="show('banner3')">
              <i class="icon iconfont icon-fangzi"></i>
              <span>banner3</span>
            </div>
          </el-collapse-item>
          <el-collapse-item title="图片类">
            <div class="zj_icon" @click="show('picture1')">
              <i class="icon iconfont icon-fangzi"></i>
              <span>图片组1</span>
            </div>
            <div class="zj_icon" @click="show('picture2')">
              <i class="icon iconfont icon-fangzi"></i>
              <span>图片组2</span>
            </div>
            <div class="zj_icon" @click="show('picture3')">
              <i class="icon iconfont icon-fangzi"></i>
              <span>图片组3</span>
            </div>
            <div class="zj_icon" @click="show('picture4')">
              <i class="icon iconfont icon-fangzi"></i>
              <span>图片组4</span>
            </div>
          </el-collapse-item>
          <el-collapse-item title="图标类">
            <div class="zj_icon" @click="show('icon1')">
              <i class="icon iconfont icon-fangzi"></i>
              <span>图标组1</span>
            </div>
          </el-collapse-item>
          <el-collapse-item title="列表类">
            <div class="zj_icon" @click="show('ershou1')">
              <i class="icon iconfont icon-fangzi"></i>
              <span>二手房列表组1</span>
            </div>
            <div class="zj_icon" @click="show('ershou2')">
              <i class="icon iconfont icon-fangzi"></i>
              <span>二手房列表组2</span>
            </div>
          </el-collapse-item>
          <el-collapse-item title="其他类">
            <div class="zj_icon" @click="show('kong')">
              <i class="icon iconfont icon-fangzi"></i>
              <span>空白块</span>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <!--<div class="zujian_tiao"></div>-->
    </div>
    <div class="phone">
      <img src="@/assets/images/tel_top.png" alt="" class="phone_top"/>
      <div class="phone_content">
        <img src="@/assets/images/tel_content.png" alt="" class="phone_content_img"/>
        <draggable v-model="items" :options="{animation:100,group:'people'}" @start="drag" @end="drop" :move="checkMove">
        <div v-for="item in items" class="box">
          <!--手机内start-->
          <!--第一个头部start-->
          <div v-if="item.model == 'banner1'&&item.bool" @click="dian(item.model)" class="banner1 model">
            <div class="close_btn" @click="del('banner1')">
              <i class="icon iconfont icon-Rectangle"></i>
            </div>
            <div class="header" :style="{'background-color': item.banner1.bcolor}"></div>
            <div class="search" :style="{'border-radius': item.banner1.radius}">
              <div class="area">
                淄博
                <i class="icon iconfont icon--xialajiantou"></i>
              </div>
              <div class="shu"></div>
              <div class="inp" :style="{'text-align': item.banner1.textWZ}"><i class="icon iconfont icon-icon-"></i>  输入小区或位置搜索</div>
            </div>
          </div>
          <!--第一个头部end-->
          <!--第二个头部start-->
          <div v-if="item.model == 'banner2'&&item.bool" @click="dian(item.model)" class="banner2 model">
            <div class="close_btn" @click="del('banner2')">
              <i class="icon iconfont icon-Rectangle"></i>
            </div>
            <div class="banner_box">
              <div class="search" :style="{'border-radius': item.banner2.radius,'top': item.banner2.top}">
                <div class="area">
                  淄博
                  <i class="icon iconfont icon--xialajiantou"></i>
                </div>
                <div class="shu"></div>
                <div class="inp" :style="{'text-align': item.banner2.textWZ}"><i class="icon iconfont icon-icon-"></i>  输入小区或位置搜索</div>
              </div>
              <div class="banner">
                  <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="(list,i) in item.banner2.list" :key="i">
                      <img :src="list.img" alt=""/>
                    </el-carousel-item>
                  </el-carousel>
              </div>
            </div>
          </div>
          <!--第二个头部end-->
          <!--第三个头部start-->
          <div v-if="item.model == 'banner3'&&item.bool" @click="dian(item.model)" class="banner3 model" :style="{'background-color': item.banner3.bcolor}">
            <div class="close_btn" @click="del('banner3')">
              <i class="icon iconfont icon-Rectangle"></i>
            </div>
            <div class="search" :style="{'border-radius': item.banner3.radius}">
              <div class="area">
                淄博
                <i class="icon iconfont icon--xialajiantou"></i>
              </div>
              <div class="shu"></div>
              <div class="inp" :style="{'text-align': item.banner3.textWZ}"><i class="icon iconfont icon-icon-"></i>  输入小区或位置搜索</div>
            </div>
          </div>
          <!--第三个头部end-->
          <!--第一个图片组start-->
          <div v-if="item.model == 'picture1'&&item.bool" @click="dian(item.model)" class="picture1 model">
            <div class="close_btn" @click="del('picture1')">
              <i class="icon iconfont icon-Rectangle"></i>
            </div>
            <a :href="item.picture1.url" class="pic">
              <img :src="item.picture1.img" alt="" class="pic_img"/>
              <div class="pic_title">{{item.picture1.title}}</div>
            </a>
          </div>
          <!--第一个图片组end-->
          <!--第二个图片组start-->
          <div v-if="item.model == 'picture2'&&item.bool" @click="dian(item.model)" class="picture2 model">
            <div class="close_btn" @click="del('picture2')">
              <i class="icon iconfont icon-Rectangle"></i>
            </div>
            <div :style="{'height': item.picture2.height}" class="pic_duo">
              <img v-for="(image,index) in item.picture2.list" v-if="index < item.picture2.number" :style="{'height': item.picture2.height,'width': item.picture2.width}" :src="image.img" alt="" class="pic_img"/>
            </div>
          </div>
          <!--第二个图片组end-->
          <!--第三个图片组start-->
          <div v-if="item.model == 'picture3'&&item.bool" @click="dian(item.model)" class="picture3 model">
            <div class="close_btn" @click="del('picture3')">
              <i class="icon iconfont icon-Rectangle"></i>
            </div>
            <div class="ul">
              <img v-for="image in item.picture3.list" :src="image.img" alt="" class="li"/>
            </div>
          </div>
          <!--第三个图片组end-->
          <!--第四个图片组start-->
          <div v-if="item.model == 'picture4'&&item.bool" @click="dian(item.model)" class="picture4 model">
            <div class="close_btn" @click="del('picture4')">
              <i class="icon iconfont icon-Rectangle"></i>
            </div>
            <div class="box4">
              <div v-for="(list,index) in item.picture4.list" class="top4">
                <img :src="list.img" alt="" class="pic_img"/>
                <div class="title1">{{list.title1}}</div>
                <div class="title2">{{list.title2}}</div>
              </div>
            </div>
          </div>
          <!--第四个图片组end-->
          <!--第一个图标组start-->
          <div v-if="item.model == 'icon1'&&item.bool" @click="dian(item.model)" class="icon1 model">
            <div class="close_btn" @click="del('icon1')">
              <i class="icon iconfont icon-Rectangle"></i>
            </div>
            <div class="icon_list" :style="{'background-color': item.icon1.bcolor,'border-radius': item.icon1.bradius}">
              <div class="icon_li" v-if="index < item.icon1.number" v-for="(list,index) in item.icon1.list">
                <img :style="{'border-radius': item.icon1.iradius}" :src="list.img" alt="" class="icon_img"/>
                <div class="icon_title" :style="{'color': item.icon1.titcolor}">{{list.url_title}}</div>
              </div>
            </div>
          </div>
          <!--第一个图标组end-->
          <!--第一个二手房列表start-->
          <div v-if="item.model == 'ershou1'&&item.bool" @click="dian(item.model)" class="ershou1 model">
            <div class="close_btn" @click="del('ershou1')">
              <i class="icon iconfont icon-Rectangle"></i>
            </div>
            <div class="tab_title">
              <div @click="item.ershou1.leixing = '0'" class="tab_btn">二手房</div>
              <div @click="item.ershou1.leixing = '1'" class="tab_btn">新房</div>
              <div @click="item.ershou1.leixing = '2'" class="tab_btn">租房</div>
            </div>
            <div v-if="item.ershou1.leixing == '0'" class="er_list">
              <div v-for="list in item.ershou1.list0" class="er_li">
                <img :src="list.img" alt="" class="er_img"/>
                <div class="er_right">
                  <div class="er_title">{{list.title}}</div>
                  <div v-if="item.ershou1.showbiaoqian == '1'" class="er_biaoqian_box">
                    <div :style="{'color':bq.color,'background-color':bq.bcolor}" v-for="bq in list.biaoqian" class="er_biaoqian">{{bq.title}}</div>
                  </div>
                  <div class="er_shoujia">{{list.shoujia}}万</div>
                </div>
              </div>
            </div>
            <div v-if="item.ershou1.leixing == '1'" class="er_list">
              <div v-for="list in item.ershou1.list1" class="er_li">
                <img :src="list.img" alt="" class="er_img"/>
                <div class="er_right">
                  <div class="er_title">{{list.title}}</div>
                  <div v-if="item.ershou1.showbiaoqian == '1'" class="er_biaoqian_box">
                    <div :style="{'color':bq.color,'background-color':bq.bcolor}" v-for="bq in list.biaoqian" class="er_biaoqian">{{bq.title}}</div>
                  </div>
                  <div class="er_shoujia">{{list.shoujia}}万</div>
                </div>
              </div>
            </div>
            <div v-if="item.ershou1.leixing == '2'" class="er_list">
              <div v-for="list in item.ershou1.list2" class="er_li">
                <img :src="list.img" alt="" class="er_img"/>
                <div class="er_right">
                  <div class="er_title">{{list.title}}</div>
                  <div v-if="item.ershou1.showbiaoqian == '1'" class="er_biaoqian_box">
                    <div :style="{'color':bq.color,'background-color':bq.bcolor}" v-for="bq in list.biaoqian" class="er_biaoqian">{{bq.title}}</div>
                  </div>
                  <div class="er_shoujia">{{list.shoujia}}万</div>
                </div>
              </div>
            </div>
          </div>
          <!--第一个二手房列表end-->
          <!--第二个二手房列表start-->
          <div v-if="item.model == 'ershou2'&&item.bool" @click="dian(item.model)" class="ershou2 model">
            <div class="close_btn" @click="del('ershou2')">
              <i class="icon iconfont icon-Rectangle"></i>
            </div>
            <div class="tab_title">
              <div @click="item.ershou2.leixing = '0'" class="tab_btn">二手房</div>
              <div @click="item.ershou2.leixing = '1'" class="tab_btn">新房</div>
              <div @click="item.ershou2.leixing = '2'" class="tab_btn">租房</div>
            </div>
            <div v-if="item.ershou2.leixing == '0'" class="er_list">
              <div v-for="list in item.ershou2.list0" class="er_li">
                <img :src="list.img" alt="" class="er_img"/>
                <div class="er_right">
                  <div class="er_title">{{list.title}}</div>
                  <div v-if="item.ershou2.showbiaoqian == '1'" class="er_biaoqian_box">
                    <div :style="{'color':bq.color,'background-color':bq.bcolor}" v-for="bq in list.biaoqian" class="er_biaoqian">{{bq.title}}</div>
                  </div>
                  <div class="er_shoujia">{{list.shoujia}}万</div>
                </div>
              </div>
            </div>
            <div v-if="item.ershou2.leixing == '1'" class="er_list">
              <div v-for="list in item.ershou2.list1" class="er_li">
                <img :src="list.img" alt="" class="er_img"/>
                <div class="er_right">
                  <div class="er_title">{{list.title}}</div>
                  <div v-if="item.ershou2.showbiaoqian == '1'" class="er_biaoqian_box">
                    <div :style="{'color':bq.color,'background-color':bq.bcolor}" v-for="bq in list.biaoqian" class="er_biaoqian">{{bq.title}}</div>
                  </div>
                  <div class="er_shoujia">{{list.shoujia}}万</div>
                </div>
              </div>
            </div>
            <div v-if="item.ershou2.leixing == '2'" class="er_list">
              <div v-for="list in item.ershou2.list2" class="er_li">
                <img :src="list.img" alt="" class="er_img"/>
                <div class="er_right">
                  <div class="er_title">{{list.title}}</div>
                  <div v-if="item.ershou2.showbiaoqian == '1'" class="er_biaoqian_box">
                    <div :style="{'color':bq.color,'background-color':bq.bcolor}" v-for="bq in list.biaoqian" class="er_biaoqian">{{bq.title}}</div>
                  </div>
                  <div class="er_shoujia">{{list.shoujia}}万</div>
                </div>
              </div>
            </div>
          </div>
          <!--第二个二手房列表end-->
          <!--空白块start-->
          <div v-if="item.model == 'kong'&&item.bool" @click="dian(item.model)" class="kong model">
            <div class="close_btn" @click="del('kong')">
              <i class="icon iconfont icon-Rectangle"></i>
            </div>
            <div class="kongbai" :style="{'height': item.kong.height+'px'}"></div>
          </div>
          <!--空白块end-->
          <!--手机内end-->
        </div>
        </draggable>
      </div>
      <img src="@/assets/images/tel_bottom.png" alt="" class="phone_bottom"/>
    </div>
    <div class="edit_box">
      <div class="edit_title">
        <div class="edit_title_l">内容</div>
        <el-button type="primary" @click="baocun" class="edit_submit" round>保存</el-button>
      </div>
      <!--编辑start-->
      <!--第一个头部start-->
      <div v-for="item in items" v-if="item.edit&&item.model == 'banner1'&&item.bool" class="banner1 banner box">
        <div class="ebox">
          <div class="ebox_title">颜色选择</div>
          <div class="ebox_box">
            <div class="ebox_li">
              背景色:&nbsp;&nbsp;&nbsp;&nbsp;<el-color-picker v-model="item.banner1.bcolor"></el-color-picker>
            </div>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">文字位置</div>
          <div class="ebox_box">
            <el-radio v-model="item.banner1.textWZ" label="left">左对齐</el-radio>
            <el-radio v-model="item.banner1.textWZ" label="center">居中</el-radio>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">边角样式</div>
          <div class="ebox_box">
            <div class="ebox_r">
              <div  :class="{edit_zhong:item.banner1.radius == '19px'}" @click="item.banner1.radius = '19px'" class="ebox_r_li1 ebox_r_li"></div>
              <div  :class="{edit_zhong:item.banner1.radius == '12px'}" @click="item.banner1.radius = '12px'" class="ebox_r_li2 ebox_r_li"></div>
              <div  :class="{edit_zhong:item.banner1.radius == '0'}" @click="item.banner1.radius = '0'" class="ebox_r_li3 ebox_r_li"></div>
            </div>
          </div>
        </div>
      </div>
      <!--第一个头部end-->
      <!--第二个头部start-->
      <div v-for="item in items" v-if="item.edit&&item.model == 'banner2'&&item.bool" class="banner2 banner box">
        <div class="ebox">
          <div class="ebox_title">文字位置</div>
          <div class="ebox_box">
            <el-radio v-model="item.banner2.textWZ" label="left">左对齐</el-radio>
            <el-radio v-model="item.banner2.textWZ" label="center">居中</el-radio>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">搜索栏位置</div>
          <div class="ebox_box">
            <el-radio v-model="item.banner2.top" label="30px">居上</el-radio>
            <el-radio v-model="item.banner2.top" label="140px">居中</el-radio>
            <el-radio v-model="item.banner2.top" label="230px">居下</el-radio>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">边角样式</div>
          <div class="ebox_box">
            <div class="ebox_r">
              <div  :class="{edit_zhong:item.banner2.radius == '19px'}" @click="item.banner2.radius = '19px'" class="ebox_r_li1 ebox_r_li"></div>
              <div  :class="{edit_zhong:item.banner2.radius == '12px'}" @click="item.banner2.radius = '12px'" class="ebox_r_li2 ebox_r_li"></div>
              <div  :class="{edit_zhong:item.banner2.radius == '0'}" @click="item.banner2.radius = '0'" class="ebox_r_li3 ebox_r_li"></div>
            </div>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">轮播列表</div>
          <div class="ebox_box">
            <div @click="addlist('banner2','0')" class="add_btn">+ 添加</div>
            <div class="addlist">
              <div v-for="(list,index) in item.banner2.list" class="addli">
                <img :src="list.img" alt="" class="addimg"/>
                <div class="URLline">{{list.url}}</div>
                <div @click="delList('banner2',index)" class="icon iconfont icon-Rectangle close_btn"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--第二个头部end-->
      <!--第三个头部start-->
      <div v-for="item in items" v-if="item.edit&&item.model == 'banner3'&&item.bool" class="banner3 banner box">
        <div class="ebox">
          <div class="ebox_title">颜色选择</div>
          <div class="ebox_box">
            <div class="ebox_li">
              背景色:&nbsp;&nbsp;&nbsp;&nbsp;<el-color-picker v-model="item.banner3.bcolor"></el-color-picker>
            </div>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">文字位置</div>
          <div class="ebox_box">
            <el-radio v-model="item.banner3.textWZ" label="left">左对齐</el-radio>
            <el-radio v-model="item.banner3.textWZ" label="center">居中</el-radio>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">边角样式</div>
          <div class="ebox_box">
            <div class="ebox_r">
              <div  :class="{edit_zhong:item.banner3.radius == '19px'}" @click="item.banner3.radius = '19px'" class="ebox_r_li1 ebox_r_li"></div>
              <div  :class="{edit_zhong:item.banner3.radius == '12px'}" @click="item.banner3.radius = '12px'" class="ebox_r_li2 ebox_r_li"></div>
              <div  :class="{edit_zhong:item.banner3.radius == '0'}" @click="item.banner3.radius = '0'" class="ebox_r_li3 ebox_r_li"></div>
            </div>
          </div>
        </div>
      </div>
      <!--第三个头部end-->
      <!--第一个图片组start-->
      <div v-for="item in items" v-if="item.edit&&item.model == 'picture1'&&item.bool" class="picture1 box">
        <div class="ebox">
          <div class="ebox_title">详情编辑</div>
          <div class="ebox_box">
            <img @click="tankuang('picture1')" :src="item.picture1.img" alt="" class="pic_img"/>
            标题：<input type="text" class="pic_title el-input__inner" v-model="item.picture1.title"/>
            <div @click="tankuang('picture1')" class="URLbtn">链接：{{item.picture1.url}}</div>
          </div>
        </div>
      </div>
      <!--第一个图片组end-->
      <!--第二个图片组start-->
      <div v-for="item in items" v-if="item.edit&&item.model == 'picture2'&&item.bool" class="picture2 box">
        <div class="ebox">
          <div class="ebox_title">每列数量</div>
          <div class="ebox_box" @click="picture2(item.picture2)">
            <el-radio v-model="item.picture2.number" label="1">一个</el-radio>
            <el-radio v-model="item.picture2.number" label="2">两个</el-radio>
            <el-radio v-model="item.picture2.number" label="3">三个</el-radio>
            <el-radio v-model="item.picture2.number" label="4">四个</el-radio>
            <el-radio v-model="item.picture2.number" label="5">五个</el-radio>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">图片高度</div>
          <div class="ebox_box">
            <el-radio v-model="item.picture2.height" label="80px">低</el-radio>
            <el-radio v-model="item.picture2.height" label="120px">中</el-radio>
            <el-radio v-model="item.picture2.height" label="200px">高</el-radio>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">图片列表</div>
          <div class="ebox_box">
            <div class="ebox_li" v-for="(list,index) in item.picture2.list" v-if="index < item.picture2.number">
              <img @click="tankuang('picture2',index)" :src="list.img" alt="" class="image"/>
              <div @click="tankuang('picture2',index)" class="URLbtn URLline">链接：{{list.url}}</div>
            </div>
          </div>
        </div>
      </div>
      <!--第二个图片组end-->
      <!--第三个图片组start-->
      <div v-for="item in items" v-if="item.edit&&item.model == 'picture3'&&item.bool" class="picture3 box">
        <div class="ebox">
          <div class="ebox_title">图片列表（滚动）</div>
          <div @click="addlist('picture3', '0')" class="addbtn">+ 添加</div>
          <div class="ebox_box">
            <div class="ebox_li" v-for="(list,index) in item.picture3.list">
              <img :src="list.img" alt="" class="image"/>
              <div class="URLbtn URLline">链接：{{list.url}}</div>
              <div @click="delList('picture3',index)" class="close_btn icon iconfont icon-Rectangle"></div>
            </div>
          </div>
        </div>
      </div>
      <!--第三个图片组end-->
      <!--第四个图片组start-->
      <div v-for="item in items" v-if="item.edit&&item.model == 'picture4'&&item.bool" class="picture4 box">
        <div class="ebox">
          <div class="ebox_title">图片列表</div>
          <div class="ebox_box ebox_box4">
            <div class="ebox_li" v-for="(list,index) in item.picture4.list">
              <img @click="tankuang('picture4',index)" :src="list.img" alt="" class="image4"/>
              <div @click="tankuang('picture4',index)" class="URLbtn URLline pic4_li">链接：{{list.url}}</div>
              主标题：<input v-model="list.title1" type="text" class="pic4_li el-input__inner"/>
              副标题：<input v-model="list.title2" type="text" class="pic4_li el-input__inner"/>
              <div @click="delList('picture4',index)" class="close_btn icon iconfont icon-Rectangle"></div>
            </div>
          </div>
        </div>
      </div>
      <!--第四个图片组end-->
      <!--第一个图标组start-->
      <div v-for="item in items" v-if="item.edit&&item.model == 'icon1'&&item.bool" class="icon1 box">
        <div class="ebox">
          <div class="ebox_title">图标数</div>
          <div class="ebox_box" @click="picture2(item.icon1)">
            <el-radio v-model="item.icon1.number" label="5">五个</el-radio>
            <el-radio v-model="item.icon1.number" label="10">十个</el-radio>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">图标样式</div>
          <div class="ebox_box">
            <div class="ebox_li">
              字体颜色:&nbsp;&nbsp;&nbsp;&nbsp;<el-color-picker v-model="item.icon1.titcolor"></el-color-picker>
            </div>
            <div class="ebox_r">
              <div style="border-radius: 50%;width: 30px;height: 30px;"  :class="{edit_zhong:item.icon1.iradius == '27px'}" @click="item.icon1.iradius = '27px'" class="ebox_r_li1 ebox_r_li"></div>
              <div  :class="{edit_zhong:item.icon1.iradius == '14px'}" @click="item.icon1.iradius = '14px'" class="ebox_r_li2 ebox_r_li"></div>
              <div  :class="{edit_zhong:item.icon1.iradius == '0'}" @click="item.icon1.iradius = '0'" class="ebox_r_li3 ebox_r_li"></div>
            </div>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">背景样式</div>
          <div class="ebox_box">
            <div class="ebox_li">
              背景色:&nbsp;&nbsp;&nbsp;&nbsp;<el-color-picker v-model="item.icon1.bcolor"></el-color-picker>
            </div>
            <div  :class="{edit_zhong:item.icon1.bradius == '20px'}" @click="item.icon1.bradius = '20px'" class="ebox_r_li1 ebox_r_li"></div>
            <div  :class="{edit_zhong:item.icon1.bradius == '12px'}" @click="item.icon1.bradius = '12px'" class="ebox_r_li2 ebox_r_li"></div>
            <div  :class="{edit_zhong:item.icon1.bradius == '0'}" @click="item.icon1.bradius = '0'" class="ebox_r_li3 ebox_r_li"></div>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">图标列表</div>
          <div class="ebox_box">
            <div v-if="index < item.icon1.number" v-for="(list,index) in item.icon1.list" class="ebox_li">
              <img @click="tankuang('icon1',index)" :src="list.img" alt="" class="list_image"/>
              <div @click="tankuang('icon1',index)" class="url_title">{{list.title}}</div>
              标题：<input type="text" v-model="list.url_title" class="list_title el-input__inner"/>
            </div>
          </div>
        </div>
      </div>
      <!--第一个图标组end-->
      <!--第一个二手房列表start-->
      <div v-for="item in items" v-if="item.edit&&item.model == 'ershou1'&&item.bool" class="ershou1 box">
        <div class="ebox">
          <div class="ebox_title">
            是否显示标签
          </div>
          <div class="ebox_box">
            <el-radio v-model="item.ershou1.showbiaoqian" label="1">显示</el-radio>
            <el-radio v-model="item.ershou1.showbiaoqian" label="0">不显示</el-radio>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">列表显示方式</div>
          <div class="ebox_box">
            <el-radio v-model="item.ershou1.shoudong" label="1">手动显示</el-radio>
            <el-radio v-model="item.ershou1.shoudong" label="0">自动显示</el-radio>
          </div>
        </div>
        <div v-if="item.ershou1.shoudong == '1'" class="ebox">
          <div class="ebox_title">列表类型</div>
          <div class="ebox_box">
            <el-radio v-model="item.ershou1.leixing" label="0">二手房</el-radio>
            <el-radio v-model="item.ershou1.leixing" label="1">新房</el-radio>
            <el-radio v-model="item.ershou1.leixing" label="2">租房</el-radio>
          </div>
        </div>
        <div v-if="item.ershou1.shoudong == '1'&&item.ershou1.leixing == '0'" class="ebox">
          <div class="ebox_title">二手房列表</div>
          <div class="ebox_box">
            <div @click="addlist('ershou1','2')" class="er_add">+ 添加</div>
            <div v-for="(list,index) in item.ershou1.list0" class="er_box">
              <img :src="list.img" alt="" class="er_img"/>
              <div class="er_title">{{list.title}}</div>
              <div @click="delList('ershou1',index)" class="er_close icon iconfont icon-Rectangle"></div>
            </div>
          </div>
        </div>
        <div v-if="item.ershou1.shoudong == '1'&&item.ershou1.leixing == '1'" class="ebox">
          <div class="ebox_title">新房列表</div>
          <div class="ebox_box">
            <div @click="addlist('ershou1','2')" class="er_add">+ 添加</div>
            <div v-for="(list,index) in item.ershou1.list1" class="er_box">
              <img :src="list.img" alt="" class="er_img"/>
              <div class="er_title">{{list.title}}</div>
              <div @click="delList('ershou1',index)" class="er_close icon iconfont icon-Rectangle"></div>
            </div>
          </div>
        </div>
        <div v-if="item.ershou1.shoudong == '1'&&item.ershou1.leixing == '2'" class="ebox">
          <div class="ebox_title">租房列表</div>
          <div class="ebox_box">
            <div @click="addlist('ershou1','2')" class="er_add">+ 添加</div>
            <div v-for="(list,index) in item.ershou1.list2" class="er_box">
              <img :src="list.img" alt="" class="er_img"/>
              <div class="er_title">{{list.title}}</div>
              <div @click="delList('ershou1',index)" class="er_close icon iconfont icon-Rectangle"></div>
            </div>
          </div>
        </div>
        <div v-if="item.ershou1.shoudong == '0'" class="ebox">
          <div class="ebox_title">排序方式</div>
          <div class="ebox_box">
            <el-radio v-model="json.paixu" label="1">自动排序</el-radio>
            <el-radio v-model="json.paixu" label="2">按带看次数排序</el-radio>
            <el-radio v-model="json.paixu" label="3">按房源更新排序</el-radio>
          </div>
        </div>
      </div>
      <!--第一个二手房列表end-->
      <!--第二个二手房列表start-->
      <div v-for="item in items" v-if="item.edit&&item.model == 'ershou2'&&item.bool" class="ershou2 box">
        <div class="ebox">
          <div class="ebox_title">
            是否显示标签
          </div>
          <div class="ebox_box">
            <el-radio v-model="item.ershou2.showbiaoqian" label="1">显示</el-radio>
            <el-radio v-model="item.ershou2.showbiaoqian" label="0">不显示</el-radio>
          </div>
        </div>
        <div class="ebox">
          <div class="ebox_title">列表显示方式</div>
          <div class="ebox_box">
            <el-radio v-model="item.ershou2.shoudong" label="1">手动显示</el-radio>
            <el-radio v-model="item.ershou2.shoudong" label="0">自动显示</el-radio>
          </div>
        </div>
        <div v-if="item.ershou2.shoudong == '1'" class="ebox">
          <div class="ebox_title">列表类型</div>
          <div class="ebox_box">
            <el-radio v-model="item.ershou2.leixing" label="0">二手房</el-radio>
            <el-radio v-model="item.ershou2.leixing" label="1">新房</el-radio>
            <el-radio v-model="item.ershou2.leixing" label="2">租房</el-radio>
          </div>
        </div>
        <div v-if="item.ershou2.shoudong == '1'&&item.ershou2.leixing == '0'" class="ebox">
          <div class="ebox_title">二手房列表</div>
          <div class="ebox_box">
            <div @click="addlist('ershou2','2')" class="er_add">+ 添加</div>
            <div v-for="(list,index) in item.ershou2.list0" class="er_box">
              <img :src="list.img" alt="" class="er_img"/>
              <div class="er_title">{{list.title}}</div>
              <div @click="delList('ershou2',index)" class="er_close icon iconfont icon-Rectangle"></div>
            </div>
          </div>
        </div>
        <div v-if="item.ershou2.shoudong == '1'&&item.ershou2.leixing == '1'" class="ebox">
          <div class="ebox_title">新房列表</div>
          <div class="ebox_box">
            <div @click="addlist('ershou2','2')" class="er_add">+ 添加</div>
            <div v-for="(list,index) in item.ershou2.list1" class="er_box">
              <img :src="list.img" alt="" class="er_img"/>
              <div class="er_title">{{list.title}}</div>
              <div @click="delList('ershou2',index)" class="er_close icon iconfont icon-Rectangle"></div>
            </div>
          </div>
        </div>
        <div v-if="item.ershou2.shoudong == '1'&&item.ershou2.leixing == '2'" class="ebox">
          <div class="ebox_title">租房列表</div>
          <div class="ebox_box">
            <div @click="addlist('ershou2','2')" class="er_add">+ 添加</div>
            <div v-for="(list,index) in item.ershou2.list2" class="er_box">
              <img :src="list.img" alt="" class="er_img"/>
              <div class="er_title">{{list.title}}</div>
              <div @click="delList('ershou2',index)" class="er_close icon iconfont icon-Rectangle"></div>
            </div>
          </div>
        </div>
        <div v-if="item.ershou2.shoudong == '0'" class="ebox">
          <div class="ebox_title">排序方式</div>
          <div class="ebox_box">
            <el-radio v-model="json.paixu" label="1">自动排序</el-radio>
            <el-radio v-model="json.paixu" label="2">按带看次数排序</el-radio>
            <el-radio v-model="json.paixu" label="3">按房源更新排序</el-radio>
          </div>
        </div>
      </div>
      <!--第二个二手房列表end-->
      <!--空白块start-->
      <div v-for="item in items" v-if="item.edit&&item.model == 'kong'&&item.bool" class="kong box">
        <div class="ebox">
          <div class="ebox_title">空白高度</div>
          <div class="ebox_box">
            高度：<el-input type="number" v-model="item.kong.height" placeholder="请输入高度"></el-input>
          </div>
        </div>
      </div>
      <!--空白块end-->
      <!--编辑end-->
    </div>
    <el-dialog
      title="链接选择"
      :visible.sync="centerDialogVisible"
      width="50%"
      center>
      <div class="url_box">
        <div class="url_left">
          <div v-for="item in urlLeft.list" @click="urlleft(item)" :class="{cover:item.bool}" class="title">{{item.title}}</div>
        </div>
        <div v-if="urlLeft.list[0].bool" class="url_right">
          <div :class="{cover: list.bool}" @click="urlStr(list)" v-for="list in urlList" class="btn">{{list.title}}</div>
          <div class="tu_box">
            <el-upload
              class="upload-demo"
              action="http://upload.qiniu.com/"
              :on-success="upImage"
              :on-change="addkey"
              :data="qiniu"
              :show-file-list="false">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
            <div class="tu_list">
              <div @click="choosimg(item)" :class="{tu_img_cover:item.bool}" v-for="(item,index) in imgList" class="tu_li">
                <div @click="delimg(index)" class="del_img">删除</div>
                <img :src="item.img" alt="" class="tu_img"/>
              </div>
            </div>
          </div>
        </div>
        <div v-if="urlLeft.list[1].bool" class="url_right">
          2
        </div>
        <div v-if="urlLeft.list[2].bool" class="url_right">
          <div class="right3">
            <div class="header">
              <el-select class="el-col-3" v-model="tkfangyuan.type" placeholder="二手房">
                <el-option
                  v-for="item in tkfangyuan.typeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <input type="text" v-model="tkfangyuan.search" @change="tksearch()" placeholder="搜索标题" class="el-input__inner search"/>
            </div>
            <div class="list">
              <div @click="choosefy(item)" :class="{fycover:item.bool}" class="fy_li" v-for="item in tkfangyuan.list">
                <!--<img :src="item.fyimg[0].url" alt="" class="fy_img"/>-->
                <img src="" alt="" class="fy_img"/>
                <div class="fy_title">{{item.fybiaoti}}</div>
                <div class="fy_yuan">{{item.shoujia}}万</div>
              </div>
            </div>
            <el-pagination
              background
              @current-change="handleCurrentChange"
              :current-page.sync="tkfangyuan.page"
              :page-size="tkfangyuan.limit"
              layout="sizes, prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="tkSubmit">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import draggable from 'vuedraggable'
  import axios from 'axios'

  export default {
    data: function () {
      return{
        centerDialogVisible: false,
        radio: 'left',
        color: '#409EFF',
        items:[],
        json: {},
//        弹框start
        modelName: '',
        index: '',
        tkdata: {
          img: '',
          url: '',
          title: '',
          wxurl: '',
        },     //弹框传回的img和url
        urlhttp: '',    //拼接前缀
        urlList: [],    //基础链接
        qiniu: {},      //传七牛的token和key
        tkfangyuan: {
          search: '',
          page: 1,
          limit: 6,
          total: 6,
          type: '二手房',
          typeList: [
            {
              value: '1',
              label: '二手房'
            },{
              value: '2',
              label: '新房'
            },{
              value: '3',
              label: '租房'
            },
          ],
          list: [],
        },
        imgList: [      //弹框图片
          {
            img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg',
            bool: false
          },
          {
            img: 'http://xghdcdn.xghd.cc/diy/0.5707985049476909two_Arrow.png',
            bool: false
          },
        ],
        urlLeft: {   //左边标题
          list: [
            {
              title: '基础链接',
              bool : true
            },
            {
              title: '专题',
              bool : false
            },
            {
              title: '房源',
              bool : false
            },
          ]
        },
//        弹框end
        obj: {
          banner1:{
            bcolor: '#54BAE5',
            textWZ: 'left',
            radius: '19px'
          },
          banner2:{
            textWZ: 'left',
            radius: '19px',
            top: '30px',
            list: [
              {
                img: 'http://xghdcdn.xghd.cc/diy/0.5707985049476909two_Arrow.png',
                url: '#fdg',
                title: 'dsjsdj',
              },
              {
                img: 'http://xghdcdn.xghd.cc/diy/0.5707985049476909two_Arrow.png',
                url: '#fdg',
                title: 'dsjsdj',
              }
            ]
          },
          banner3: {
            bcolor: '#54BAE5',
            textWZ: 'left',
            radius: '19px',
            postione: 'flex'
          },
          picture1: {
            title: '这是一个优质房源。',
            img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg',
            url: '#'
          },
          picture2: {
            number: '5',
            height: '80px',
            width: '20%',
            list: [
              {
                url: '#',
                title: '图标示例',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              }
            ]
          },
          picture3: {
            list: [
              {
                url: '#',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              }
            ]
          },
          picture4: {
            list: [
              {
                title1: '111梵蒂冈',
                title2: '222发电公司发',
                url: '#',
                img: 'http://xghdcdn.xghd.cc/ershou/0.2820190509922982test.jpg'
              },
              {
                title1: '11烦得慌1',
                title2: '22等等2',
                url: '#',
                img: 'http://xghdcdn.xghd.cc/ershou/0.2820190509922982test.jpg'
              }
            ]
          },
          icon1: {
            bcolor: '#fff',
            bradius: '0',
            titcolor: '#000',
            iradius: '0',
            number: '5',
            list: [
              {
                url: '#',
                title: '图标示例',
                url_title: '专题页面',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                title: '图标示例',
                url_title: '专题页面1',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                title: '图标示例',
                url_title: '专题页面2',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                title: '图标示例',
                url_title: '专题页面',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                title: '图标示例',
                url_title: '专题页面',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                title: '图标示例',
                url_title: '专题页面',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                title: '图标示例',
                url_title: '专题页面',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                title: '图标示例',
                url_title: '专题页面',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                title: '图标示例',
                url_title: '专题页面',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
              {
                url: '#',
                title: '图标示例',
                url_title: '专题页面',
                img: 'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=899c4221bc003af359b7d4235d43ac29/3b87e950352ac65caf77c45bf1f2b21193138aac.jpg'
              },
            ]
          },
          ershou1: {
            showbiaoqian: '1',
            shoudong: '1',
            leixing: '0',
            list0: [
              {
                url: '',
                img: 'http://pceiho3ms.bkt.clouddn.com/ershou/0.748471660543663fang.jpg',
                title: '这是一条房源fgrdg富贵荣华日火热光和热好人特好人头1.',
                biaoqian: [
                  {
                    title: '敞亮',
                    color: '#000',
                    bcolor: 'yellow'
                  },
                  {
                    title: '便宜',
                    color: 'red',
                    bcolor: 'green'
                  },
                  {
                    title: '便宜1',
                    color: 'red',
                    bcolor: 'green'
                  },
                  {
                    title: '便宜2',
                    color: 'red',
                    bcolor: 'green'
                  },
                  {
                    title: '便宜1',
                    color: 'red',
                    bcolor: 'green'
                  },
                  {
                    title: '便宜2',
                    color: 'red',
                    bcolor: 'green'
                  }
                ],
                shoujia: 260,
              },
              {
                url: '',
                img: 'http://pceiho3ms.bkt.clouddn.com/ershou/0.748471660543663fang.jpg',
                title: '这是一条房源2.',
                biaoqian: [
                  {
                    title: '敞亮',
                    color: '#000',
                    bcolor: 'yellow'
                  },
                  {
                    title: '便宜',
                    color: 'red',
                    bcolor: 'green'
                  }
                ],
                shoujia: 200,
              }
            ],
            list1: [],
            list2: [],
          },
          ershou2: {
            showbiaoqian: '1',
            shoudong: '1',
            leixing: '0',
            list0: [
              {
                url: '',
                img: 'http://pceiho3ms.bkt.clouddn.com/ershou/0.748471660543663fang.jpg',
                title: '这是一条房源fgrdg富贵荣华日火热光和热好人特好人头1.',
                biaoqian: [
                  {
                    title: '敞亮',
                    color: '#000',
                    bcolor: 'yellow'
                  },
                  {
                    title: '便宜',
                    color: 'red',
                    bcolor: 'green'
                  }
                ],
                shoujia: 260,
              },
              {
                url: '',
                img: 'http://pceiho3ms.bkt.clouddn.com/ershou/0.748471660543663fang.jpg',
                title: '这是一条房源2.',
                biaoqian: [
                  {
                    title: '敞亮',
                    color: '#000',
                    bcolor: 'yellow'
                  },
                  {
                    title: '便宜',
                    color: 'red',
                    bcolor: 'green'
                  },
                  {
                    title: '便宜1',
                    color: 'red',
                    bcolor: 'green'
                  },
                  {
                    title: '便宜2',
                    color: 'red',
                    bcolor: 'green'
                  }
                ],
                shoujia: 200,
              }
            ],
            list1: [],
            list2: [],
          },
          kong: {
            height: '20'
          }
        }
      }
    },
    mounted: function() {
      var that = this;
      this.$nextTick(function() {
        for(var key in this.obj){
          var object = {};
          object[key] = this.obj[key];
          object.model = key;
          object.bool = false;
          object.edit = false;
          this.items.push(object)
        }
        axios.post('http://vue.zhamengyun.com/index/zheng',{}).then(res=>{
          var data = res.data;
          that.qiniu.token = data.data.token;
          that.urlhttp = 'http://'+data.data.url;
        }).catch(res => {
          console.log('您的网络开小差了！');
        });
//        获取data并读取渲染
        axios.post(window.http_url + "diydata", {}).then(res => {
          var data = res.data;
          that.items = data.data;
        }).catch(res => {
          this.$message({type: 'error', message: '您的网络开小差了！'});
        });
      });
    },
    methods: {
//      图片组2切换列表显示数量
      picture2: function (item) {
        var number;
        var that  = this;
        var timer = setTimeout(function () {
          for (var key in that.items){
            if(that.items[key].model == 'picture2'){
              number = that.items[key].picture2.number;
            }
          }
          if(number == 1){
            item.width = '100%'
          }else if(number == 2){
            item.width = '50%'
          }else if(number == 3){
            item.width = '33.33%'
          }else if(number == 4){
            item.width = '25%'
          }else if(number == 5){
            item.width = '20%'
          }
          clearTimeout(timer)
        },50)

      },
      baocun: function () {
        var that = this;
        axios.post(window.http_url+'style',{
          style: that.items
        }).then(res=>{
          that.$message.success(res.msg)
        }).catch(res => {
          console.log('您的网络开小差了！');
        });
      },
//      弹框start
//      弹框提交数据
      tkSubmit: function () {
        var that = this;
        if(that.tkdata.img == ''){
          that.$message.error('请选择图片.');
          return
        }else if (that.tkdata.url == ''){
          that.$message.error('请选择链接..');
          return
        }else {
          var modelName = that.modelName;
          var index = that.index;
          that.items.forEach(function (n, i) {
            if(n.model == modelName){
              if(modelName == 'ershou1' || modelName == 'ershou2'){
                if(n[modelName].leixing == '0'){
                  n[modelName].list0.push({
                    'url':that.tkdata.url,
                    'wxurl':that.tkdata.wxurl,
                    'img':that.tkdata.img,
                    'title':that.tkdata.title,
                    'biaoqian':that.tkdata.biaoqian,
                    'shoujia':that.tkdata.shoujia,
                  })
                }else if(n[modelName].leixing == '1'){
                  n[modelName].list1.push({
                    'url':that.tkdata.url,
                    'wxurl':that.tkdata.wxurl,
                    'img':that.tkdata.img,
                    'title':that.tkdata.title,
                    'biaoqian':that.tkdata.biaoqian,
                    'shoujia':that.tkdata.shoujia,
                  })
                }else if(n[modelName].leixing == '2'){
                  n[modelName].list2.push({
                    'url':that.tkdata.url,
                    'wxurl':that.tkdata.wxurl,
                    'img':that.tkdata.img,
                    'title':that.tkdata.title,
                    'biaoqian':that.tkdata.biaoqian,
                    'shoujia':that.tkdata.shoujia,
                  })
                }
              }else if(modelName == 'banner2'|| modelName == 'picture3'){
                n[modelName].list.push({
                  'url':that.tkdata.url,
                  'wxurl':that.tkdata.wxurl,
                  'img':that.tkdata.img,
                  'title':that.tkdata.title,
                })
              }else if(modelName == 'picture1'){
                n[modelName].img = that.tkdata.img
                n[modelName].url = that.tkdata.url
                n[modelName].wxurl = that.tkdata.wxurl
              }else {
                n[modelName].list[index].img = that.tkdata.img;
                n[modelName].list[index].url = that.tkdata.url;
                n[modelName].list[index].wxurl = that.tkdata.wxurl
                n[modelName].list[index].title = that.tkdata.title;
              }
            }
          })
//          弹框初始化start
          this.centerDialogVisible = false;
          this.tkdata.img = '';
          this.tkdata.url = '';
          this.tkdata.wxurl = '';
          this.urlList.forEach(function (n, i) {
            n.bool = false;
          })
          this.imgList.forEach(function (n, i) {
            n.bool = false;
          })
          this.tkfangyuan.list.forEach(function (n, i) {
            n.bool = false;
          })
        }
      },
//      弹框添加列表
      addlist: function (modelName,shu) {
        var that = this;
        this.modelName = modelName;
        this.urlLeft.list.forEach(function (n, i) {
          n.bool = false;
        })
        this.urlLeft.list[shu].bool = true;
        axios.post(window.http_url + "web", {

        }).then(res => {
          var data = res.data;
          that.urlList = data;
          that.centerDialogVisible = true
        }).catch(res => {
          this.$message({type: 'error', message: '您的网络开小差了！'});
        });
        var searchType = '';
        if(that.tkfangyuan.type == '二手房'){
          searchType = 1;
        }else {
          searchType = that.tkfangyuan.type;
        }
        axios.post(window.http_url + "search", {
          page: that.tkfangyuan.page,
          limit: that.tkfangyuan.limit,
          type: searchType,
          name: that.tkfangyuan.search
        }).then(res => {
          var data = res.data;
          that.tkfangyuan.list = data.data.list;
          that.tkfangyuan.total = data.data.total;
        }).catch(res => {
          this.$message({type: 'error', message: '您的网络开小差了！'});
        });

      },
//      删除列表
      delList: function (modelName, index) {

        this.$confirm('此操作将删除选中项, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.items.forEach(function (n, i) {
            if(n.model == modelName){
              n[modelName].list.splice(index ,1);
            }
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({type: 'info', message: '已取消删除'});
        });

      },
//      换图片打开弹框
      tankuang: function (modelName,index) {
        var that = this;
        this.modelName = modelName;
        this.index = index;
//        初始化链接
        axios.post(window.http_url + "web", {})
          .then(res => {
            var data = res.data;
            that.urlList = data;
            that.centerDialogVisible = true
        }).catch(res => {
            this.$message({type: 'error', message: '您的网络开小差了！'});
        });
//        初始化房源列表
        axios.post(window.http_url + "search", {
          page: that.tkfangyuan.page,
          limit: that.tkfangyuan.limit,
          type: 1,
          name: that.tkfangyuan.search
        }).then(res => {
          var data = res.data;
          that.tkfangyuan.list = data.data.list;
          that.tkfangyuan.total = data.data.total;
        }).catch(res => {
          this.$message({type: 'error', message: '您的网络开小差了！'});
        });
      },
//      上传图片修改图片名
      addkey: function (file) {
        this.qiniu.key = 'diy/'+Math.random()+''+file.name
      },
//      上传图片
      upImage: function (file) {
        var that = this;
        this.imgList.push({
          img: this.urlhttp+'/'+file.key,
          bool: false
        })
        axios.post(window.http_url + "picture", {
          img_url: that.imgList
        }).then(res => {
          var data = res.data;
          that.$message.success('上传成功。')
        }).catch(res => {
          this.$message({type: 'error', message: '您的网络开小差了！'});
        });

      },
//选择图
      choosimg: function (item) {
        this.imgList.forEach(function (n, i) {
          n.bool = false;
        })
        item.bool = true;
        this.tkdata.img = item.img;
      },
//      删除弹框内图片
      delimg: function (index) {
        var that = this;
        that.imgList.forEach(function (n, i) {
          if(i == index){
            that.imgList.splice(i,1);
          }
        })
        axios.post(window.http_url + "picture", {
          img_url: that.imgList
        }).then(res => {
          var data = res.data;
          that.$message.success('删除成功。')
        }).catch(res => {
          this.$message({type: 'error', message: '您的网络开小差了！'});
        });

      },
//      弹框内链接
      urlStr: function (list) {
        this.urlList.forEach(function (n, i) {
          n.bool = false;
        })
        list.bool = true;
        this.tkdata.url = list.url;
        this.tkdata.wxurl = list.url;
        this.tkdata.title = list.title;
      },
//      选择房源
      choosefy: function (item) {
        this.tkfangyuan.list.forEach(function (n, i) {
          n.bool = false;
        })
        item.bool = true;
//        this.tkdata.img = item.fyimg[0].url;
        if(this.tkfangyuan.type == '1'){
          this.tkdata.url = 'http://h5.zhamengyun.com/h5yemian/details?fid='+item.id;
          this.tkdata.wxurl = '../detail/detail?fid='+item.id;
        }
        this.tkdata.shoujia = item.shoujia;
        this.tkdata.biaoqian = item.biaoqian;
        this.tkdata.title = item.fybiaoti;
      },
//      搜索房源
      tksearch: function () {
        var that = this;
        var searchType = '';

        if(that.tkfangyuan.type == '二手房'){
          searchType = 1;
        }else {
          searchType = that.tkfangyuan.type;
        }
        console.log(searchType);
        axios.post(window.http_url + "search", {
          page: that.tkfangyuan.page,
          limit: that.tkfangyuan.limit,
          type: searchType,
          name: that.tkfangyuan.search,
        }).then(res => {
          var data = res.data;
          that.tkfangyuan.list = data.data.list;
          that.tkfangyuan.total = data.data.total;
        }).catch(res => {
          this.$message({type: 'error', message: '您的网络开小差了！'});
        });
      },
//      分页
      handleCurrentChange: function (val) {
        var that = this;
        var searchType = '';
        if(that.tkfangyuan.type == '二手房'){
          searchType = 1;
        }else {
          searchType = that.tkfangyuan.type;
        }
        axios.post(window.http_url + "search", {
          page: that.tkfangyuan.page,
          limit: that.tkfangyuan.limit,
          type: searchType,
          name: that.tkfangyuan.search
        }).then(res => {
          var data = res.data;
          that.tkfangyuan.list = data.data.list;
          that.tkfangyuan.total = data.data.total;
        }).catch(res => {
          this.$message({type: 'error', message: '您的网络开小差了！'});
        });
      },

//      弹框end
      drag: function (id) {
//        console.log(id.item.innerHTML);
      },
      drop: function (id) {
//        console.log(this.items);
      },
      checkMove: function (id) {

      },
      show: function (model) {
        this.items.forEach(function (item, i) {
          if(item.model == model){
            item.bool = true
          }
        })
      },
      dian: function (model) {;
        this.items.forEach(function (item, i) {
          if(item.model == model){
            item.edit = true
          }else {
            item.edit = false
          }
        })
      },
      del: function (model) {
        this.$confirm('此操作将去除该模板, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
          this.items.forEach(function (item, i) {
            if(item.model == model){
              item.bool = false
            }
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

      },
//      弹框样式变化
      urlleft: function (item) {
//        切换初始化start
        this.tkdata.img = '';
        this.tkdata.url = '';
        this.urlList.forEach(function (n, i) {
          n.bool = false;
        })
        this.imgList.forEach(function (n, i) {
          n.bool = false;
        })
        this.tkfangyuan.list.forEach(function (n, i) {
          n.bool = false;
        })
//        切换初始化end
        this.urlLeft.list.forEach(function (n, i) {
          n.bool = false;
        })
        item.bool = true;
      }
    },
    components: {
      draggable
    }
  }
</script>

<style lang="less" scoped>
  /*手机模型box*/
  .phone_content {
    min-height: 600px;
    user-select:none;
      .model{
        overflow: hidden;
        margin-bottom: 10px;
      }
      .model:hover {
      border: 2px dashed red;
      cursor: move;
    }
    .close_btn{
      position: absolute;
      width: 26px;
      height: 26px;
      line-height: 30px;
      border-radius: 50%;
      background-color: red;
      color: #FFFFFF;
      top: -10px;
      right: -12px;
      font-size: 16px;
      cursor: pointer;
      z-index: 10;
      /*text-align: center;*/
      .icon {
        width: 95%;
        padding-left: 5%;
        height: 100%;
      }
    }
  /*第一个banner*/
    .banner1 {
      width: 100%;
      position: relative;
      height: 135px;
      .header {
        width: 100%;
        position: absolute;
        height: 114px;
        top: 0;
        left: 0;
        background-color: yellow;
      }
      .search {
        position: absolute;
        width: 305px;
        bottom: 0;
        left: 35px;
        height: 38px;
        line-height: 39px;
        border-radius: 19px;
        overflow: hidden;
        z-index: 1;
        box-shadow: 0 0 3px 1px #dedede;
        background-color: #FFFFFF;
        .area {
          font-size: 16px;
          height: 100%;
          width: 70px;
          float: left;
          text-align: center;
          position: relative;
          .icon{
            font-size: 8px;
            right: 2px;
            position: absolute;
          }
        }
        .shu{
          width: 1px;
          height: 26px;
          background-color: #dedede;
          float: left;
          margin-top: 8px;
        }
        .inp {
          margin-left: 10px;
          display: inline-block;
          width: 220px;
          height: 38px;
          font-size: 15px;
          line-height: 38px;
          color: #999;
          float: left;
          .icon {
            font-size: 24px;
          }
        }
      }
    }
    /*第一个头部end*/
    /*第二个头部start*/
    .banner2{
      height: 330px;
      position: relative;
      .banner{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .search {
        position: absolute;
        width: 305px;
        top: 30px;
        left: 35px;
        height: 38px;
        line-height: 39px;
        border-radius: 19px;
        overflow: hidden;
        z-index: 3;
        box-shadow: 0 0 3px 1px #dedede;
        background-color: #FFFFFF;
        .area{
          font-size: 16px;
          height: 100%;
          width: 70px;
          float: left;
          text-align: center;
          position: relative;
          .icon {
            font-size: 8px;
            right: 2px;
            position: absolute;
          }
        }
        .shu{
          width: 1px;
          height: 26px;
          background-color: #dedede;
          float: left;
          margin-top: 8px;
        }
        .inp{
          margin-left: 10px;
          display: inline-block;
          width: 220px;
          height: 38px;
          font-size: 15px;
          line-height: 38px;
          color: #999;
          float: left;
            .icon {
              font-size: 24px;
            }
        }
      }
    }
    /*第二个头部end*/
    /*第三个头部start*/
    .banner3{
      height: 60px;
      position: relative;
      width: 100%;
      .search{
        position: absolute;
        width: 305px;
        top: 10px;
        left: 35px;
        height: 38px;
        line-height: 39px;
        border-radius: 19px;
        overflow: hidden;
        z-index: 3;
        box-shadow: 0 0 3px 1px #dedede;
        background-color: #FFFFFF;
        .area{
          font-size: 16px;
          height: 100%;
          width: 70px;
          float: left;
          text-align: center;
          position: relative;
          .icon {
            font-size: 8px;
            right: 2px;
            position: absolute;
          }
        }
        .shu{
          width: 1px;
          height: 26px;
          background-color: #dedede;
          float: left;
          margin-top: 8px;
        }
        .inp{
          margin-left: 10px;
          display: inline-block;
          width: 220px;
          height: 38px;
          font-size: 15px;
          line-height: 38px;
          color: #999;
          float: left;
          .icon {
            font-size: 24px;
          }
        }
      }
    }
    /*第三个头部end*/
    /*第一个图片组start*/
    .picture1 {
      height: 290px;
      width: 100%;
      .pic{
        display: block;
        text-decoration: none;
        width: 100%;
        height: 100%;
        .pic_img {
          width: 100%;
          height: 250px;
        }
        .pic_title {
          height: 40px;
          line-height: 40px;
          width: 100%;
          font-size: 16px;
          text-indent: 1em;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    /*第一个图片组end*/
    /*第二个图片组start*/
    .picture2{
      display: block;
      .pic_img{
        float: left;
      }
    }
    /*第二个图片组end*/
    /*第三个图片组start*/
    .picture3{
      height: 100px;
      display: block;
      .ul {
        width: 100%;
        height: 100px;
        margin-bottom: 20px;
        overflow: hidden;
        .li{
          width: 160px;
          height: 100%;
          display: inline-block;
          margin-right: 20px;
        }
      }
    }
    /*第三个图片组end*/
    /*第四个图片组start*/
    .picture4 {
      .box4 {
        display: block;
        width: 100%;
        .top4{
          height: 170px;
          width: 165px;
          display: inline-block;
          vertical-align: middle;
          margin: 10px;
          .pic_img {
            width: 165px;
            height: 100px;
          }
          .title1 {
            font-size: 18px;
            line-height: 40px;
            font-weight: 700;
            width: 100%;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
          .title2 {
            font-size: 12px;
            color: #cccccc;
            line-height: 20px;
            width: 100%;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    /*第四个图片组end*/
    /*第一个图标组start*/
    .icon1 {
      width: 100%;
      display: block;
      .icon_list {
        width: 90%;
        margin: 0 auto;
        .icon_li {
          width: 20%;
          display: inline-block;
          text-align: center;
          .icon_img {
            width: 80%;
            height: 55px;
            margin: 10px 10%;
            display: block;
          }
          .icon_title {
            line-height: 30px;
          }
        }
      }
    }
    /*第一个图标组end*/
    /*第一个二手房列表start*/
    .ershou1 {
      .tab_title {
        width: 100%;
        height: 40px;
        text-align: right;
        line-height: 40px;
        .tab_btn {
          padding: 0 3px;
          display: inline-block;
          line-height: 40px;
          cursor: pointer;
          margin-right: 10px;
        }
      }
      .er_li {
        margin-bottom: 20px;
        .er_img {
          width: 100px;
          height: 80px;
          margin: 10px;
          display: inline-block;
          vertical-align: top;
        }
        .er_right {
          display: inline-block;
          vertical-align: middle;
          width: 240px;
          margin-top: 5px;
          margin-right: 3px;
          .er_title {
            font-size: 16px;
            font-weight: 700;
          }
          .er_biaoqian_box {
            padding: 10px 0;
            .er_biaoqian {
              padding: 3px 8px;
              display: inline-block;
              vertical-align: middle;
              margin-right: 10px;
              border-radius: 3px;
              margin-bottom: 8px;
            }
          }
          .er_shoujia {
            color: red;
          }
        }
      }
    }
    /*第一个二手房列表end*/
    /*第二个列表start*/
    .ershou2 {
      .tab_title {
        width: 100%;
        height: 40px;
        text-align: right;
        line-height: 40px;
        .tab_btn {
          padding: 0 3px;
          display: inline-block;
          line-height: 40px;
          cursor: pointer;
          margin-right: 10px;
        }
      }
      .er_li {
        display: inline-block;
        vertical-align: top;
        width: 160px;
        margin: 0 11px;
        .er_img {
          width: 140px;
          height: 140px;
          margin: 10px;
          display: block;
          vertical-align: top;
        }
        .er_title {
          font-size: 16px;
          font-weight: 700;
          width: 100%;
          height: 20px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .er_biaoqian_box {
          padding: 10px 0;
          .er_biaoqian {
            padding: 3px 8px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
            border-radius: 3px;
            margin-bottom: 8px;
          }
        }
        .er_shoujia {
          color: red;
          height: 20px;
          line-height: 20px;
        }
      }
    }
    /*第二个列表end*/
  }
  /*手机内end*/

  /*编辑项box*/
  .edit_box{
    overflow-y: scroll;padding-bottom: 100px;
    .ebox{
      width: 100%;
      display: block;
      padding: 15px 0;
      border-bottom: 1px solid #dedede;
      .ebox_title {
        font-weight: 700;
      }
      .ebox_box {
        width: 94%;
        padding: 10px 3% 0;
        .edit_zhong {
          border: 2px dashed red;
        }
      }
    }
    .URLbtn{
      width: 80%;
      height: 20px;
      line-height: 20px;
      border: 20px solid #e6e6e6;
      margin: 10px 0;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }
    .URLline{
      display: inline-block;
      vertical-align: middle;
      width: 50%;
    }
  /*第一个banner*/
    .banner {
      .ebox_li {
        line-height: 30px;
      }
      .ebox_r_li {
        margin: 20px 20px;
        width: 40px;
        height: 20px;
        display: inline-block;
        cursor: pointer;
        background-color: #dedede;
      }
      .ebox_r_li1{
        border-radius: 10px;
      }
      .ebox_r_li2{
        border-radius: 3px;
      }
      .ebox_r_li3{
        border-radius: 0;
      }
    }
    /*公共banner样式end*/
    /*banner2样式start*/
    .banner2{
      .add_btn{
        width: 70%;
        height: 40px;
        line-height: 40px;
        margin: 10px auto;
        text-align: center;
        border: 1px dashed #999;
        border-radius: 5px;
        cursor: pointer;
      }
      .addlist{
        margin-top: 20px;
      }
      .addli {
        width: 100%;
        height: 70px;
        display: block;
        margin: 10px 0;
        line-height: 70px;
        .addimg {
          width: 80px;
          height: 80px;
          display: inline-block;
          vertical-align: middle;
        }
        .close_btn{
          display: inline-block;
          vertical-align: middle;
          width: 30px;
          height: 30px;
          font-size: 30px;
          color: red;
          cursor: pointer;
        }
      }

    }
    /*banner2样式end*/
    /*第一个图片组start*/
    .picture1 {
      .pic_img {
        width: 60%;
        margin: 0 auto;
        display: block;
        height: 200px;
        cursor: pointer;
        margin-bottom: 20px;
      }
      .pic_title {
        margin-top: 10px;
      }
    }
    /*第一个图片组end*/
    /*第二个图片组start*/
    .ebox_li {
      width: 100%;
      margin: 10px auto;
      cursor: pointer;
      display: block;
      .image{
        height: 80px;
        width: 20%;
        display: inline-block;
        vertical-align: middle;
      }
      .url{
        width: 79%;
        display: inline-block;
      }
    }
    /*第二个图片组end*/
    /*第三个图片组start*/

    .picture3 {
      .addbtn{
        width: 70%;
        height: 40px;
        line-height: 40px;
        margin: 10px auto;
        text-align: center;
        border: 1px dashed #999;
        border-radius: 5px;
        cursor: pointer;
      }
      .close_btn {
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 30px;
        font-size: 30px;
        color: red;
        cursor: pointer;
      }
    }
    .picture4{
      .ebox_box4 {
        .ebox_li {
          padding-bottom: 10px;
          margin-bottom: 20px;
          width: 100%;
          position: relative;
          border-bottom: 1px solid #dedede;
        }
        .image4 {
          width: 40%;
          height: 120px;
          display: block;
          margin: 5px auto;
        }
        .pic4_li {
          width: 80%;
          display: block;
          margin-bottom: 5px;
        }
        .close_btn {
          position: absolute;
          display: inline-block;
          vertical-align: middle;
          top: 30px;
          right: 100px;
          width: 30px;
          height: 30px;
          font-size: 30px;
          color: red;
          cursor: pointer;
        }
      }
    }
    /*第三个图片组end*/
    /*第一个图标组start*/
    .icon1{
      padding-bottom: 120px;
      .list_image {
        width: 80px;
        height: 60px;
        vertical-align: middle;
        display: inline-block;
      }
      .url_title {
        display: inline-block;
        margin-left: 10px;
        padding: 3px;
        vertical-align: middle;
        background-color: #f4d4d4;
        border-radius: 5px;
        margin-right: 50px;
      }
      .list_title {
        width: 200px;
        vertical-align: middle;
        display: inline-block;
      }
      .ebox_li {
        line-height: 30px;
      }
      .ebox_r_li {
        margin: 20px 20px;
        width: 40px;
        height: 20px;
        display: inline-block;
        cursor: pointer;
        background-color: #dedede;
      }
      .ebox_r_li1{
        border-radius: 10px;
      }
      .ebox_r_li2{
        border-radius: 3px;
      }
      .ebox_r_li3{
        border-radius: 0;
      }
    }
    /*第一个图标组end*/
    /*第一个二手房列表start*/
    .ershou1,.ershou2 {
      .er_add{
        width: 70%;
        height: 40px;
        line-height: 40px;
        margin: 10px auto;
        text-align: center;
        border: 1px dashed #999;
        border-radius: 5px;
        cursor: pointer;
      }
      .er_box {
        margin: 30px auto;
        .er_img {
          width: 100px;
          height: 80px;
          display: inline-block;
          vertical-align: middle;
        }
        .er_title {
          width: 250px;
          height: 40px;
          margin: 20px;
          padding: 0 10px;
          line-height: 40px;
          border-radius: 5px;
          display: inline-block;
          vertical-align: middle;
          background-color: #f4d4d4;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .er_close {
          display: inline-block;
          vertical-align: middle;
          width: 30px;
          height: 30px;
          font-size: 30px;
          color: red;
          cursor: pointer;
        }
      }
    }
    /*第一个二手房列表end*/
  }
  /*编辑项end*/

  /*手机*/
  .phone {
    display: inline-block;
    position: relative;
    top: 70px;
    left: 30%;
    overflow: hidden;
    width: 427px;
    .phone_top {
      width: 100%;
      height: 116px;
    }
    .phone_content {
      position: relative;
      width: 100%;
      .phone_content_img{
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .box{
        position: relative;
        z-index: 1;
        width: 375px;
        overflow: hidden;
        margin: 0 auto;
        .list {
          width: 100%;
          height: 60px;
          text-align: center;
          line-height: 60px;
          font-size: 20px;
          cursor: move;
          border: 2px solid #00ffff;
          background-color: #000000;
        }
      }
    }
    .phone_bottom {
      width: 100%;
      height: 116px;
    }
  }
  /*弹框*/
  .url_box {
    height: 600px;
    border-bottom: 1px solid #dedede;
    border-top: 1px solid #dedede;
    margin: 0 auto;
    .url_left {
      width: 12%;
      padding: 0 1%;
      height: 100%;
      border-right: 1px solid #dedede;
      vertical-align: middle;
      display: inline-block;
      .title {
        width: 100%;
        height: 50px;
        margin-top: 10px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        background-color: #eeeeee;
        font-size: 16px;
        color: #000;
      }
      .cover {
        background-color: #fff3ef;
        color: #fb6638;
      }
    }
    .url_right {
      width: 85%;
      height: 100%;
      vertical-align: middle;
      display: inline-block;
      .btn {
        height: 40px;
        line-height: 40px;
        /*float: left;*/
        display: inline-block;
        width: 100px;
        border-radius: 5px;
        color: #000;
        text-align: center;
        margin: 20px;
        cursor: pointer;
        background-color: #eee;
      }
      .cover {
        color: #f7623d;
        background-color: #FFFFFF;
        border: 2px solid #f7623d;
      }
      .tu_box {
        height: 70%;
        border: 1px solid #dedede;
        margin-top: 10px;
        .upload-demo {
          margin-left: 20px;
          margin-top: 20px;
        }
        .tu_list {

          position: relative;
          height: 90%;
          overflow-x: hidden;
          overflow-y: scroll;
          .tu_img_cover {
            border: 2px solid #f7623d;
          }
          .tu_li {
            position: relative;
            width: 140px;
            height: 140px;
            margin: 10px;
            box-shadow: 0 0 5px 3px #dedede;
            cursor: pointer;
            border-radius: 5px;
            overflow: hidden;
            display: inline-block;
            .tu_img{
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
            }
            .tu_img:hover {
              opacity: 0.6;
            }

            .del_img{
              position: absolute;
              z-index: 1;
              border-radius: 3px;
              top: 0;
              right: 0;
              color: #FFFFFF;
              padding: 5px;
              background-color: red;
            }
          }
        }
      }
      .right3{
        margin: 3%;
        width: 96%;
        .header {
          margin: 20px auto;
          .search {
            width: 300px;
            display: inline-block;
          }
        }
        .fy_li {
          width: 45%;
          margin: 10px 2.2%;
          display: inline-block;
          border: 1px solid #dedede;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border-radius: 8px;
          .fy_img {
            width: 100px;
            height: 100px;
          }
          .fy_title {
            font-size: 18px;
            font-weight: 700;
            position: absolute;
            top: 10px;
            width: 200px;
            left: 120px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap
          }
          .fy_yuan {
            font-size: 15px;
            font-weight: 700;
            position: absolute;
            color: red;
            bottom: 10px;
            left: 120px;
          }
        }
        .fycover {
          background-color: #FFFFFF;
          border: 2px solid #f7623d;
        }
      }
    }
  }
  /*弹框end*/
  /*右边编辑项*/
  .edit_box {
    width: 30%;
    height: 100%;
    position: fixed;
    top: 70px;
    right: 0;
    background-color: #FFFFFF;
    .edit_title {
      width: 100%;
      font-size: 20px;
      font-weight: 700;
      height: 60px;
      line-height: 60px;
      text-align: center;
      border-bottom: 1px solid #dedede;
      .edit_title_l {
        float: left;
        margin-left: 30px;
      }
      .edit_submit{
        float: right;
        margin-right: 30px;
        margin-top: 10px;
      }
    }
    .box{
      width: 94%;
      padding: 3%;
      padding-bottom: 100px;
      border-bottom: 3px solid #dedede;
    }
  }
  /*左边*/
  .zujian_list_cover {
    width: 18%;
    top: 70px;
    /*display: inline-block;*/
    position: fixed;
    padding: 2% 1%;
    height: 96%;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 3px 3px #dedede;
    -moz-box-shadow: 0 0 3px 3px #dedede;
    box-shadow: 0 0 3px 3px #dedede;
    background-color: #FFFFFF;
    .zujian_title {
      width: 100%;
      text-align: center;
      height: 30px;
      line-height: 30px;
      font-size: 20px;
      font-weight: 700;
      border-bottom: 1px solid #dedede;
    }
    .zujian_list{
      width: 100%;
      .zj_icon {
        width: 60px;
        height: 60px;
        display: inline-block;
        text-align: center;
        cursor: pointer;
        margin: 20px;
        i{
          font-size: 30px;
          display: block;
        }
        span{
          font-size: 14px;
        }
      }
      .zj_icon:hover {
        color: red;
      }
    }
  }
  .zujian_tiao{
    width: 17px;
    height: 100%;
    margin-left: -16px;
    background-color: #F4F5FA;
    position: absolute;
    top: 70px;
    left: 30%;
  }

  .diy {
    width: 600px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 30px;
    color: #FFFFFF;
    background-color: #000000;
    border: 3px solid red;
    cursor: move;
  }
  .ccc{
    height: 200px;
    width: 600px;
    line-height: 50px;
    text-align: center;
    font-size: 30px;
    color: #FFFFFF;
    background-color: #000000;
    border: 3px solid red;
    cursor: move;
  }
  .red{
    color: red;
  }
  .yellow{
    color: yellow
  }
  .green{
    color: green;
  }
  .blue{
    color: blue;
  }
  /*.box {*/
    /*margin: 50px;*/
    /*display: block;*/
    /*width: 100%;*/
    /*height: 80px;*/
    /*text-align: center;*/
    /*line-height: 80px;*/
    /*background-color: #cccccc;*/
    /*font-size: 50px;*/
    /*font-weight: 700;*/
  /*}*/
</style>
