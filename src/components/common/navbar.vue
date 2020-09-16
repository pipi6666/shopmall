<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>

  </div>
</template>
<script>
export default {
  name: "navbar",
};
</script>
<style scoped>
.navbar{
  display: flex;
  line-height: 44px;
}
.left,.right{
  height: 44px;
  width: 60px;

}
.center{
    height: 44px;
  flex: 1;

}
</style>