<template>
  <div>
    <navbar>
      <div
        slot="left"
        class="leftqqq"
        @click="backclick"
      > <img src="../../../assets/img/fanhui.png"></div>
      <div
        slot="center"
        class="title"
      >
        <span
          v-for="(item,index) in titles"
          :key='index'
          class="titleitem"
          :class="{active:currentindex===index}"
          @click="titleitem(index)"
        >{{item}}</span>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from "../../../components/common/navbar";
export default {
  name: "detailnavbar",
  components: {
    navbar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentindex: 0,
    };
  },
  methods: {
    titleitem(index) {
      this.currentindex = index;
      this.$emit("titleitem", index);
    },
    backclick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.title {
  display: flex;
}
.titleitem {
  flex: 1;
}
.active {
  color: red;
}
.leftqqq {
  text-align: center;
}
.leftqqq img {
  height: 30px;
  width: 30px;
  margin-top: 5px;
}
</style>