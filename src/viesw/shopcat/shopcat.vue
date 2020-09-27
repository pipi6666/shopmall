<template>

  <div>
    <navbar class="daohang">
      <!--导航  -->
      <div slot="center">购物车({{length}})</div>
    </navbar>
    <!-- 商品列表 -->
    <shoplist></shoplist>
    <!-- 底部总计 -->
    <scroll class="content">
      <ul>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
        <li>个人信息</li>
      </ul>
    </scroll>
  </div>
</template>
<script>
import scroll from "../../components/common/scroll";
import navbar from "../../components/common/navbar";

import shoplist from "./children/shoplist";
import { mapGetters } from "vuex";
export default {
  name: "shopcat",
  components: {
    scroll,
    navbar,
    shoplist,
  },
  computed: {
    ...mapGetters({
      length: "cartlength",
    }),
  },
  // updated() {
  //   console.log(this.$store.state.cartlist[0])
  // }
};
</script>
<style scoped>
.content {
  height: 300px;
  background-color: coral;
  overflow: hidden;
}
.daohang {
  background-color: pink;
}
.daohang div {
  text-align: center;
  font-size: 20px;
  color: fff;
}
</style>