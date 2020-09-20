<template>
  <div
    v-if="Object.keys(detailinfo).length !== 0"
  >
    <div class="infodesc">{{detailinfo.desc}}</div>
    <div class="infokey">{{detailinfo.detailImage[0].key}}</div>
    <div class="infolist"><img
        v-for='(item,index) in detailinfo.detailImage[0].list'
        :key="index"
        :src="item" alt=""
      >
    </div>

  </div>
</template>

<script>
export default {
  name: "detailinfo",
  props: {
    detailinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.infodesc {
  width: 100%;
  margin: 5px 10px 5px 10px;
  font-size: 12px;
  border-bottom:2px solid#ccc ;
}
.infokey {
  text-align: center;
  font-size: 20px;
  color: red;
}
.infolist img {
  height: 400px;
  width: 100%;
}
</style>