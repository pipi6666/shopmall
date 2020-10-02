<template>
  <div class="catqqq">
    <navbar class="daohang">
      <!--导航  -->
      <div slot="center">购物车({{length}})</div>
    </navbar>
    <!-- 商品列表 -->
    <shoplist ></shoplist>
    <!-- 底部总计 -->
<p>.</p>
<p>.</p>
<p>.</p>
<p>.</p>
  </div>
</template>
<script>
import navbar from "../../components/common/navbar";

import shoplist from "./children/shoplist";
import { mapGetters } from "vuex";
export default {
  name: "shopcat",
  components: {
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
.daohang {
  background-color: pink;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  height: 44px;
}
.daohang div {
  text-align: center;
  font-size: 20px;
  color: fff;
}
</style>