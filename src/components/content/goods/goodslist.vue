<template>
  <div class="goods">
    <goodslistitem v-for='(item,index) in goods' :key="index" :goodsitem='item'>
    </goodslistitem>
  </div>
</template>

<script>
import goodslistitem from './goodslistitem'
export default {
  name: "goodslist",
  components:{
    goodslistitem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
};
</script>

<style>
.goods{
  display: flex;
  flex-wrap: wrap;
}
</style>