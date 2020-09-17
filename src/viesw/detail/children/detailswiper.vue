<template>

    <swiper class="detailqqq">
      <swiperitem

        v-for='(item,index) in topImages'
        :key="index"
      >
        <img
          :src="item"
          alt=""
        >
      </swiperitem>
    </swiper>

</template>

<script>
import swiper from "../../../components/common/swiper/swiper";
import swiperitem from "../../../components/common/swiper/swiperitem";
export default {
  name: "detailswiper",
  components: {
    swiper,
    swiperitem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.detailqqq {
  height: 350px;
  overflow: hidden;
}
</style>