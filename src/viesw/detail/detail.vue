<template>
  <div class="detail">
    <detailnavbar
      class="detailnav"
      @titleitem='titleitem'
    ></detailnavbar>
    <scroll
      class="detailscroll"
      :probetypes='3'
      ref="scrollqq"
      :pullUpLoads='true'
      @scroll="scrollclick"
    >
      <detailswiper :topImages='topImages'></detailswiper>
      <detailbaseinfo :goods='goods'></detailbaseinfo>
      <datailshopinfo :shop='shop'></datailshopinfo>
      <detailinfo
        :detailinfo='detailinfo'
        @imageload='imageload'
      ></detailinfo>
      <detailcanshu
        :itemparams='itemparams'
        ref="canshu"
      ></detailcanshu>
      <detailpinglun
        :pinglun='pinglun'
        ref="pinglun"
      ></detailpinglun>
      <goodslist
        :goods='recommend'
        ref="tuijian"
      ></goodslist>
    </scroll>
    <backtop
      v-show="isshowbacktop"
      class="backtops"
      @click.native="backclick"
    ></backtop>

  </div>
</template>

<script>
import detailnavbar from "./children/detailnavbar";
import detailswiper from "./children/detailswiper";
import detailbaseinfo from "./children/detailbaseinfo";
import datailshopinfo from "./children/detailshopinfo";
import detailinfo from "./children/detailinfo";
import detailcanshu from "./children/detailcanshu";
import detailpinglun from "./children/detailpinglun";

import scroll from "../../components/common/scroll";
import backtop from "../../components/content/backtop";
import goodslist from "../../components/content/goods/goodslist";

import {
  getdetail1,
  goods,
  Shop,
  goodsparams,
  getrecommend,
} from "../../network/detail";
export default {
  name: "detail",
  components: {
    detailnavbar,
    detailswiper,
    detailbaseinfo,
    datailshopinfo,
    scroll,
    detailinfo,
    detailcanshu,
    backtop,
    detailpinglun,
    goodslist,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailinfo: {},
      itemparams: {},
      isshowbacktop: false,
      pinglun: {},
      recommend: [],
      offtop: [],
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getdetail1(this.iid).then((res) => {
      //获取顶部轮播图数据
      const shuju = res.data.result;
      this.topImages = shuju.itemInfo.topImages;
      //获取商品信息
      this.goods = new goods(shuju.itemInfo, shuju.columns, shuju.shopInfo);
      //创建店铺信息
      this.shop = new Shop(shuju.shopInfo);
      //店家数据
      this.detailinfo = shuju.detailInfo;
      //获取参数
      this.itemparams = new goodsparams(
        shuju.itemParams.info,
        shuju.itemParams.rule
      );
      //评论数据
      if (shuju.rate.cRate !== 0) {
        this.pinglun = shuju.rate.list[0];
      }
    });
    getrecommend().then((res) => {
      this.recommend = res.data.data.list;
    });
  },
  updated() {
    this.offtop.push(0);
    this.offtop.push(this.$refs.canshu.$el.offsetTop);
    this.offtop.push(this.$refs.pinglun.$el.offsetTop);
    this.offtop.push(this.$refs.tuijian.$el.offsetTop);
  },
  methods: {
    imageload() {
      this.$refs.scrollqq.refresh();
    },
    scrollclick(position) {
      //判断bakctop 是否显示
      if (-position.y > 1000) {
        this.isshowbacktop = true;
      } else {
        this.isshowbacktop = false;
      }
    },
    backclick() {
      this.$refs.scrollqq.scrollTo(0, 0);
    },
    titleitem(index) {
      this.$refs.scrollqq.scrollTo(0, -this.offtop[index]);
    },
  },
};
</script>
<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detailnav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detailscroll {
  height: calc(100% - 44px);
}
</style>
