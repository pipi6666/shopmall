<template>
  <div
    class="pinglun"
    v-if="Object.keys(pinglun).length!==0"
  ><span>用户评价</span><span class="gengduo">更多</span>
    <div class="user"><img :src="pinglun.user.avatar"><span>{{pinglun.user.uname}}</span></div>
    <div class="content">{{pinglun.content}}</div>
    <p><span>{{pinglun.created}}</span><span>{{pinglun.style}}</span></p>
  </div>
</template>

<script>
export default {
  name: "detailpinglun",
  props: {
    pinglun: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
span {
  margin-left: 15px;
}
.gengduo {
  margin-left: 200px;
}
.user {
  padding: 15px 0 15px 5px;
  border-top: 4px solid #ececec;
}
.user img {
  width: 50px;
  height: 50px;
}
.user span {
  margin-top: 5px;
}
.content {
  padding: 0px 10px 10px;
  font-size: 13px;
}
</style>