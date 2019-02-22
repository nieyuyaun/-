<template>
   <div class="map">
       <div class="maps">
            <p>{{lng}}</p>
            <p>{{lat}}</p>
            <input type="text" @change="search(this.value)" class="search" placeholder="请输入搜索内容" />
            <div id="list"></div>
            <div id="l-map"></div>  
       </div>
  </div>
</template>

<script>
import store from "@/store/store.js";
import Axios from "axios";
import BMap from "BMap";

export default {
  data() {
    return {
      lng:"",
      lat:""
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.mapshow();
    });
  },
  methods: {
    mapshow() {
      //浏览器定位
      var geolocation = new BMap.Geolocation();
      var map = new BMap.Map("l-map");
      var local = new BMap.LocalSearch(map, {
        renderOptions: { autoViewport: true },
        selectFirstResult: true,
        onSearchComplete: function(res) {
          map.clearOverlays();
          var data = res.Ar[0];
          map.centerAndZoom(data.point, 14);
          var marker = new BMap.Marker(data.point);
          map.addOverlay(marker);
          map.panTo(data.point);
          alert(data.point.lng + "," + data.point.lat);
          marker.enableDragging(); //标注可拖拽
          //marker.disableDragging();           // 不可拖拽
          // 开启事件监听
          marker.addEventListener("dragend", function(e) {
            alert(e.point.lng + "," + e.point.lat);
          });
        }
      });
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            cmap(r);
            console.log(cmap)
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
      function cmap(r) {
        map.centerAndZoom(r.point, 12);
        console.log(r.point+"res")
        map.enableScrollWheelZoom(true); //启用地图滚轮放大缩小
        var marker = new BMap.Marker(r.point);
        map.addOverlay(marker);
        map.panTo(r.point);
        marker.enableDragging(); //标注可拖拽
        //marker.disableDragging();           // 不可拖拽
        // 开启事件监听
        marker.addEventListener("dragend", function(e) {
          var x = e.point.lng; //经度
          var y = e.point.lat; //纬度
          console.log(x);
          this.lng=this.x;
          this.lat=this.y;
          console.log(lng);
          console.log(y);
        });
      }
    },
    search(val) {
      this.local.search(val);
    }
  }
};
</script>

<style>
.maps {
  display: block;
  width: 100%;
}
#l-map {
  height: 200px;
  width: 100%;
}
#r-result {
  width: 100%;
}
.search {
  width: 98%;
  border-radius: 4px;
  border: 1px solid #ececec;
  height: 30px;
  line-height: 30px;
  padding-left: 2%;
  margin-bottom: 20px;
}
</style>
