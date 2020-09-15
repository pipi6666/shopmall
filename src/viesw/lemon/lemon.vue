<template>
  <div>
    <navbar>
      <div slot='left'>></div>
    </navbar>
    <div class="wrapper">
      <ul class="content">
        <button @click="btnclick">按钮</button>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>
<script>
//引入顶部nav
import navbar from "../../components/common/navbar";

import BScroll from "better-scroll";
export default {
  name: "lemon",
  mounted() {
    this.scroll = new BScroll(".wrapper", {
      probeType: 3,
      pullUpLoad: true,
    });
    this.scroll.on("scroll", (position) => {
      console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
  },
  data() {
    return {
      scroll: null,
    };
  },
  components: {
    navbar,
  },
  methods: {
    btnclick() {
      console.log("btnclick");
    },
  },
};
</script>
<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;
}

</style>