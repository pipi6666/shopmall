<template>
  <div id="home">
    <navbar class="homenav">
      <h2 slot="center">购物街</h2>
    </navbar>
     <tabcontrol
        :titles="['流行','新款','精选']"
        @tabclick='tabclick'
        ref='tabcontrol' class="tabcontroltop"
      ></tabcontrol>
    <scroll
      class="content"
      ref='scrollq'
      :probetypes='3'
      @scroll="scrollclick"
      :pullUpLoads='true'
      @pullingUp='loadmore'
    >
      <homeswiper
        :banners="banners"
        class="swiperqqq"
        @swiperimageload.once='swiperimageload'
      ></homeswiper>
      <recommendview :recommends="recommends"></recommendview>
      <featureview></featureview>
      <tabcontrol
        :titles="['流行','新款','精选']"
        @tabclick='tabclick'
        ref='tabcontrol' :class="{fixed:isfixed}"
      ></tabcontrol>
      <goodslist :goods="goods[currentype].list"></goodslist>
      <ul>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
      </ul>
    </scroll>

    <backtop
      class="backtops"
      @click.native="backclick"
      v-show="isshowbacktop"
    ></backtop>

  </div>
</template>
<script>
import navbar from "../../components/common/navbar";
import tabcontrol from "../../components/content/tabcontrol";
import goodslist from "../../components/content/goods/goodslist";
import scroll from "../../components/common/scroll";
import backtop from "../../components/content/backtop";

import homeswiper from "./children/homeswiper";
import recommendview from "./children/recommendview";
import featureview from "./children/featureview";

import { gethomemultidata, gethomegoods } from "../../network/home";

export default {
  name: "home",
  components: {
    navbar,
    homeswiper,
    recommendview,
    featureview,
    tabcontrol,
    goodslist,
    scroll,
    backtop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentype: "pop",
      isshowbacktop: false,
      taboffsettop: 0,
      isfixed: false,
    };
  },
  created() {
    //请求多个数据
    this.gethomemultidata();
    //请求商品数据
    this.gethomegoods("pop");
    this.gethomegoods("new");
    this.gethomegoods("sell");
  },
  mounted() {},
  methods: {
    //事件监听
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentype = "pop";
          break;
        case 1:
          this.currentype = "new";
          break;
        case 2:
          this.currentype = "sell";
          break;
      }
    },
    backclick() {
      this.$refs.scrollq.scrollTo(0, 0);
    },
    scrollclick(position) {
      //判断bakctop 是否显示
      if (-position.y > 1000) {
        this.isshowbacktop = true;
      } else {
        this.isshowbacktop = false;
      }
      //决定tabcontrol是否吸顶 position:fixed
      this.isfixed = -position.y > this.taboffsettop;
    },
    loadmore() {
      this.gethomegoods(this.currentype);
    },
    swiperimageload() {
      this.taboffsettop = this.$refs.tabcontrol.$el.offsetTop;
    },
    //网络请求相关的方法
    gethomemultidata() {
      gethomemultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    gethomegoods(type) {
      const pagg = this.goods[type].page + 1;
      gethomegoods(type, pagg).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scrollq.finishPullUp();
      });
    },
  },
};
</script>
<style scoped>
#home {
		position: relative;
		height: 100vh;
	}
.homenav {
  text-align: center;
  color: #fff;
  position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
}
.swiperqqq {
  display: block;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  left: 0;
  right: 0;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
.tabcontroptop{
 position: relative;
		top: 44px;
		z-index: 9;
}

</style>