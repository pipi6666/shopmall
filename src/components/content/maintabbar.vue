<template>
<tabbar>
      <!-- <div class="tab-bar-item"><i class="iconfont">&#xe60a;</i>
        <p>首页</p>
      </div>
      <div class="tab-bar-item"><i class="iconfont">&#xe60b;</i>
        <p>分类</p>
      </div>
      <div class="tab-bar-item"><i class="iconfont">&#xe60d;</i>
        <p>购物车</p>
      </div>
      <div class="tab-bar-item"><i class="iconfont">&#xe60b;</i>
        <p>我的</p>
      </div> -->
      <tabitem path='/home'><i class="iconfont" slot="itemicon">&#xe618;</i>
      <i class="iconfont" slot="changeicon">&#xe627;</i>
        <p slot="itemtext">首页</p>
      </tabitem>
      <tabitem path='/lemon'><i class="iconfont" slot="itemicon">&#xe617;</i>
       <i class="iconfont" slot="changeicon">&#xe628;</i>
        <p slot="itemtext">分类</p>
      </tabitem>
      <tabitem path='/shopcat'><i class="iconfont" slot="itemicon">&#xe60a;</i>
       <i class="iconfont" slot="changeicon">&#xe630;</i>
        <p slot="itemtext">购物车</p>
      </tabitem>
      <tabitem path='/me'><i class="iconfont" slot="itemicon">&#xe615;</i>
       <i class="iconfont" slot="changeicon">&#xe609;</i>
        <p slot="itemtext">我的</p>
      </tabitem>
    </tabbar>
</template>
<script>
import tabbar from "../common/tabbar";
import tabitem from "../common/tabitem";
export default {
  name:'maintabbar',
   components: {
    tabbar,
    tabitem,
  },
}
</script>
<style scoped>
@import "../../assets/img/font_hq54qu51t3f/iconfont.css";
</style>