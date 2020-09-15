<template>

    <swiper>
      <swiperitem
        v-for="(item,index) in banners"
        :key=index
      >
        <a :href="item.link">
          <img
            :src="item.image"
            alt="" @load="imageload"
          >
        </a>
      </swiperitem>
    </swiper>

</template>
<script>
import swiper from "../../../components/common/swiper/swiper";
import swiperitem from "../../../components/common/swiper/swiperitem";
export default {
  name: "homeswiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    swiper,
    swiperitem,
  },
  methods :{
    imageload (){
      this.$emit('swiperimageload')
    }
  }
};
</script>
<style scoped>
</style>