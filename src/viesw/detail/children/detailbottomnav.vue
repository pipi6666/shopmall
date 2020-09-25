<template>
  <div class="bottomnav">

    <div class="iconf">
      <i class="iconfont">&#xe630;</i>
      <p>客服</p>
    </div>
    <div class="iconf">
      <i class="iconfont">&#xe60a;</i>
      <p>店铺</p>
    </div>
    <div class="iconf">
      <i class="iconfont">&#xe618;</i>
      <p>收藏</p>
    </div>
    <div
      class="cartbtn"
      @click="addshopcat"
    >加入购物车</div>
    <div class="buybtn">购买</div>
  </div>
</template>

<script>
export default {
  name: "detailbottomnav",
  methods: {
    addshopcat() {
      this.$emit("addshopcat");
    },
  },
};
</script>

<style scoped>
@import "../../../assets/img/font_hq54qu51t3f/iconfont.css";
.bottomnav {
  display: flex;
  bottom: 100px;
  right: 0;
  left: 0;
  height: 49px;
  line-height: 49px;
  z-index: 1000;
  text-align: center;
}
.iconf {
  background-color: #fff;
  height: 100%;
  width: 60px;
}
.cartbtn {
  background-color: coral;
  height: 100%;
  width: 120px;
  font-size: 20px;
}
.buybtn {
  width: 20%;
  font-size: 20px;
  background-color: pink;
}
</style>