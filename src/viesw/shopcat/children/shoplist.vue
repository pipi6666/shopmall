<template>
  <div>
    <scroll class="content">

      <li
        v-for="(item,index) in cartlist"
        :key="index"
      >
        <div class="listleft">
          <img
            :src="item.image"
            alt=""
            class="image"
          >
        </div>
        <div class="listright">
          <div class="title">{{item.title}}</div>
          <div class="zongshu">
            <span class="price">￥{{item.price}}</span><span>x{{item.count}}</span>
          </div>
        </div>
      </li>

    </scroll>
  </div>
</template>

<script>
import scroll from "../../../components/common/scroll";
import { mapGetters } from "vuex";
export default {
  name: "shoplist",
  components: {
    scroll,
  },
  computed: {
    ...mapGetters(["cartlist"]),
  },
};
</script>

<style>
.listleft {
  width: 30%;
  height: 100px;
  float: left;
  align-items: center;
  margin: 0 10px;
}
li {
  list-style: none;
}
.content {
padding-top: 44px;
  height: calc(100vh-44px);
  overflow: hidden;
}
.image {
  width: 100%;
  height: 100px;
  overflow: hidden;
  border: 1px solid #ececec;
  border-radius: 6px;
  vertical-align: middle;
}
.listright {
  width: calc(100%-30%-10px);
  height: 100px;
}
.price {
  color: #f9cd0b;
}
</style>