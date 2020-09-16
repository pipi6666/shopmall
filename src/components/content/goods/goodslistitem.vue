<template>
  <div class="goodsdiv">
    <img
      :src="goodsitem.show.img"
      alt=""
      class="goodsimg"
      @click="itemclick"
    >
    <div>
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsitem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemclick() {
      this.$router.push("/detail/" + this.goodsitem.iid);
    },
  },
};
</script>

<style scoped>
.goodsdiv {
  float: left;
  width: 180px;
  margin-right: 7px;
  text-align: center;
  /* height: 320px; */
}
.goodsimg {
  width: 100%;
}
P {
  margin: 0;
  padding: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
}
span {
  margin: 2px 5px 4px;
}
.price {
  color: red;
}
</style>