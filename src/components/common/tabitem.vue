<template>
  <div class="tab-bar-item">
    <div
      v-if='!showicon'
      @click="itemclick"
>
      <slot name="itemicon"></slot>
    </div>
    <div v-else>
      <slot name="changeicon"></slot>
    </div>
    <div :class="{active:showicon}">
      <slot name="itemtext"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabitem",
  props: {
    path: String,
  },
  data() {
    return {
      // showicon: false,
    };
  },
  computed:{
showicon(){
  return this.$route.path.indexOf(this.path) !== -1
}
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path);
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  line-height: 49px;
}
.active {
  color: red;
}
</style>