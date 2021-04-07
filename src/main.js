// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//高德地图
import VueAMap from 'vue-amap';
import router from './router'
import axios from 'axios'
import Vuex from 'vuex';
import store from'./store/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = axios

Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
    key: 'ace8e0e452ad74e210aef8ee4ec42586',
    // 插件集合 （插件按需引入）
    plugin: [
        "AMap.Autocomplete", //输入提示插件
        "AMap.PlaceSearch", //POI搜索插件
        "AMap.Scale", //右下角缩略图插件 比例尺
        "AMap.OverView", //地图鹰眼插件
        "AMap.ToolBar", //地图工具条
        "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
        "AMap.PolyEditor", //编辑 折线多，边形
        "AMap.CircleEditor", //圆形编辑器插件
        "AMap.Geolocatio", //定位控件，用来获取和展示用户主机所在的经纬度位置
        'AMap.TruckDriving' // 路径规划
    ],
    uiVersion: '1.0.14', // 版本号
    v: '1.4.4'
});

//视频功能
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.use(VideoPlayer)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
