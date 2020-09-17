<template>
  <div v-if='Object.keys(goods).length !== 0'>
    <h3 class="wenzi">{{goods.title}}</h3>
    <p class="price">
      <span>${{goods.lowNowPrice}}</span>
      <span>{{goods.oldPrice}} </span>

      <span>{{goods.discountDesc}}</span>
    </p>
    <p class="peisong">
      <span>{{goods.columns[0]}} </span>
      <span>{{goods.columns[1]}} </span>
      <span>{{goods.columns[2]}}</span>
    </p>
    <div class="server">
      <div
        v-for="(index,item) in goods.services.length-1"
        :key="item"
      >
        <img
          :src="goods.services[index-1].icon"
          alt=""
        >
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailbaseinfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.wenzi {
  font-size: 20px;
  margin:10px 5px;
}
.price span:nth-of-type(1) {
  color: pink;
  font-size: 25px;
}
.price span:nth-of-type(2) {
  font-size: 15px;
 text-decoration: line-through
}
.price span:nth-of-type(3) {
  font-size: 20px;
  background-color: springgreen;
  border-radius: 13px 13px 13px 13px ;
}
.peisong {
  padding: 5px ;
  border-top: 2px solid  black;
   border-bottom: 2px solid  black;
}
.peisong span:nth-of-type(2) {
  margin: 0 75px;
  color: blue;
}
.server {
  display: flex;
}
.server div {
  text-align: center;
  flex: 1;
}
.server img {
  width: 15px;
  height: 15px;
}
</style>