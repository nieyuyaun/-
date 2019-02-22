<template>
  <div class="map">
    <div id="allmap"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BMap from 'BMap'
  import axios from "axios";
  import store from '@/store/store.js'
  export default {
    data:function() {
      return {

      }
    },
    store,
    methods:{
      mapshow: function () {
        var map = new BMap.Map('allmap');
        var lng = this.$store.state.lng;
        var lat = this.$store.state.lat;
        var point = new BMap.Point(lng, lat);
        map.centerAndZoom(point, 14);
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      }
    },
    mounted: function () {
      this.$nextTick(function() {
        this.mapshow()
      });
    }
  };
</script>

<style lang="less" scoped>
#allmap{
  width: 100%;
  height: 500px;;;
}
.anchorBL {
  height: 0;
  margin-bottom: -50px;
}

</style>
