<template>
  <div>
    <div class="home_content">
      <div class="content_body">
        <Reserch></Reserch>
        <div class="content-body_bottom">
          <div class="content_list">
            <RyList ref="rylist"></RyList>
          </div>
          <div v-if="$store.state.Rshow" class="content_edit">
            <RyDetail @dellist="dellist"></RyDetail>
          </div>
          <div v-if="!$store.state.Rshow" class="content_edit">
            <RyEdit @rylist="rylist"></RyEdit>
          </div>
          <!-- <div class="content_my" v-if="!$store.state.Rshows">
            <My></My>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reserch from "@/components/renyuan/reserch";
import RyList from "@/components/renyuan/ryList";
import RyDetail from "@/components/renyuan/ryDetail";
import RyEdit from "@/components/renyuan/ryEdit";
import Cookies from "js-cookies";
import My from "@/components/public/my";
import store from "@/store/store";

export default {
  data: function() {
    return {};
  },
  components: {
    Reserch,
    RyList,
    RyEdit,
    RyDetail,
    My
  },
  mounted: function() {
    this.getCookies();
  },
  store,
  methods: {
    dellist: function() {
      // console.log(123);
      this.$refs.RyList.Rylist();
    },
    rylist: function() {
      // console.log(123);
      this.$refs.rylist.Rylist();
    },
    getCookies: function() {}
  }
};
</script>
<style lang="less" scoped>
@color: #1e9ff2;
.content-body_bottom {
    display: block;
    position: relative;
  }
  .content_list {
    margin-right: 3%;
    width: 50%;
    position: relative;
    min-height: 2800px;
  }
  .content_edit {
    width: 48%;
    position: absolute;
    right: 0;
    top: 0;
  }
  .content_detail {
    width: 48%;
    position: absolute;
    right: 0;
    top: 0;
  }
  //  .content_my{
  //   width: 100%;
  //   height: 100%;;
  //   right: 0;
  //   top: 0;
  //   margin-top: -100px;
  //   position: absolute;
  //   background: #f4f5fa;
  //   overflow: hidden;
  //   z-index:2;
  // }
  .minbody1{
    float: left;
    animation: minbody1 0.5s ease-out forwards;
  }
  .maxbody1{
    float: left;
    animation: maxbody1 0.5s ease-out forwards;
  }
  .minbody2{
    float: right;
    animation: minbody2 0.5s ease-out forwards;
  }
  .maxbody2{
    float: right;
    animation: maxbody2 0.5s ease-out forwards;
  }

  @keyframes minbody1 {
    0% {
      width: 12.5%;
    }
    100% {
      width: 4%;
    }
  }
  @keyframes maxbody1 {
    0% {
      width: 4%;
    }
    100% {
      width: 12.5%;
    }
  }
  @keyframes minbody2 {
    0% {
      width: 96%;
    }
    100% {
      width: 87.5%;
    }
  }
  @keyframes maxbody2 {
    0% {
      width: 87.5%;
    }
    100% {
      width: 96%;
    }
  }
.el-col {
  height: 100%;
}

.Home {
  width: 100%;
  height: 100%;
  display: block;
  margin-top: 30px;
  .home_left {
    height: 100%;
    display: block;
    background-color: white;
    .logo {
      display: flex;
      align-items: center;
      height: 70px;
      border-bottom: 1px solid #e3e3e3;
      border-right: 1px solid #e3e3e3;
      img {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 16px;
      }
      .logo_text{
        margin-left: 14px;
        font-family: "Microsoft YaHei";
        font-size: 18px;
        font-weight: 700;
        position: absolute;
        left: 50px;
      }
      .logo_btn {
        position: absolute;
        left: 170px;
      }
    }
    .select{
      span{
        margin-left: 20px;
      }
      .el-menu-item{
        padding-left: 40px;
      }
    }
  }
  .home_right {
    height: 100%;
    display: block;

    .home_content {
      height: 100%;
      overflow-y: scroll;
      .content_body {
        margin-bottom: 60px;
        .content-body_bottom{
          width: 96%;
          margin: 0 auto;
          position: relative;
        }
      }
      .content_footer {
        height: 60px;
        background-color: #000000;
        position: relative;
        top: -50px;
      }
    }
  }
}
.el-submenu .el-menu-item{
  min-width: 0;
}
  .erji {
    margin-left: 30px;
  }
</style>
