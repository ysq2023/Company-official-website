<template>
  <div class="call-me">
    <div class="c-left">
      <div class="c-title">联系我们</div>
      <div class="c-text">公司地址:{{ others.address }}</div>
      <!-- <div class="c-text">联系电话:{{ others.telephone }}</div> -->
	  <div class="boxBottomOne">
	  	<div>
	  		<div class="" style=" ">微信咨询:</div>
	  		<div class=""  style="margin-top: 0.5rem;">{{ others.wx }}</div>
	  	</div>
	  	 <div>
	  		 <div class="" >联系电话:</div>
	  		 <div class="" style="margin-top: 0.5rem;">{{ others.telephone }}</div>
	  	 </div>
	  </div>
    </div>
    <div class="c-right">
      <div id="baiduMap" style="width: 100%; height: 100%"></div>
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
@import url("@/less/index.less");
.boxBottomOne{
		
		// border: 1px solid red;
		display: flex;
		justify-content: space-between;
		align-items: center;
		 color: #fff;
	}
 
 
.call-me {
  width: 100%;
  padding: 5rem 10rem 5rem 10rem;
  box-sizing: border-box;
  background: @color;
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;
  .c-right {
    width: 65rem;
    height: 25rem;
    background: lightcoral;
  }

  .c-left {
    // line-height: 25rem;
    text-align: left;
    padding-top: 5rem;
  }

  .c-title {
    font-size: 3.2rem;
    color: #fff;
  }

  .c-text {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #eee;
  }
}
</style>
