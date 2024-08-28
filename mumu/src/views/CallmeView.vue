<template>
  <img
    src="../../src/assets/img/banner3.png"
    alt=""
  />

  <div class="address-main">
    <h2 class="address">公司地址</h2>
    <div class="map-cont">
      <div class="map-box">
        <div id="baiduMap" style="width: 100%; height: 100%"></div>
      </div>
      <div class="map-info">
        <div class="map-label">公司地址：</div>
        <div class="map-value">
          {{ others.address }}
        </div>
		<div class="boxBottom">
			<div>
				<div class="map-label" style="margin-top:0">微信咨询:</div>
				<div class="map-value">{{ others.wx }}</div>
			</div>
			 <div>
				 <div class="map-label" >联系电话:</div>
				 <div class="map-value" >{{ others.telephone }}</div>
			 </div>

		</div>
       
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["others"]),
  },

  mounted() {
    // 初始化地图
    var map = new BMap.Map("baiduMap");
    var point = new BMap.Point(120.420234,27.5312); // 地图中心点坐标
    map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
    // 其他地图操作...
	var marker = new BMap.Marker(point);
	  
	// 可选：设置标记的图标  
	// 假设你有一个自定义图标的URL  
	// var myIcon = new BMap.Icon("http://example.com/myicon.png", new BMap.Size(32,32),{anchor:new BMap.Point(16,16)});  
	// marker.setIcon(myIcon);  
	  
	// 可选：设置标记的标签  
	var label = new BMap.Label("", {offset:new BMap.Size(10,-20)});  
	marker.setLabel(label);  
	  
	// 将标记添加到地图上  
	map.addOverlay(marker);
	// 其他地图操作...
  },
};
</script>

<style lang="less">
.boxBottom{
		
		// padding-top: 8rem;
		// border: 1px solid red;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 5rem;
		height: 10rem;
		margin-top: 100px;
		 
	}
.address-main {
  padding-left: 10rem;
  padding-right: 10rem;
  margin-bottom: 5rem;
}
.address {
  text-align: left;
}

.map-cont {
  display: flex;
}

.map-box {
  width: 70%;
  height: 30rem;
  background-color: aqua;
}

.map-info {
  padding: 4rem;
  text-align: left;
}
.map-label {
  color: #888;
}

.map-value {
	color: #888;
  margin-top: 4px;
  font-weight: 600;
}
</style>
