<template>
  <div>
    <li
      v-for="(item,index) in cartlist"
      :key="index"
    >{{item}}</li>
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
</style>