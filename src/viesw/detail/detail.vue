<template>
  <div class="detail">
    <detailnavbar></detailnavbar>
    <detailswiper :topImages='topImages'></detailswiper>
    <detailbaseinfo :goods='goods'></detailbaseinfo>
  <datailshopinfo :shop='shop'></datailshopinfo>
  </div>
</template>

<script>
import detailnavbar from "./children/detailnavbar";
import detailswiper from "./children/detailswiper";
import detailbaseinfo from "./children/detailbaseinfo";
import datailshopinfo from './children/detailshopinfo'

import { getdetail1, goods, Shop } from "../../network/detail";
export default {
  name: "detail",
  components: {
    detailnavbar,
    detailswiper,
    detailbaseinfo,
    datailshopinfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getdetail1(this.iid).then((res) => {
      //获取顶部轮播图数据
      console.log(res);
      const shuju = res.data.result;
      this.topImages = shuju.itemInfo.topImages;
      //获取商品信息
      this.goods = new goods(shuju.itemInfo, shuju.columns, shuju.shopInfo);
      //创建店铺信息
      this.shop = new Shop(shuju.shopInfo);
      console.log(this.shop);
    });
  },
};
</script>
<style>
</style>