<template>
  <div class="detail">
    <detailnavbar></detailnavbar>
  </div>
</template>

<script>
import detailnavbar from "./children/detailnavbar";
export default {
  name: "detail",
  components: {
    detailnavbar,
  },
  data() {
    return {
      iid: null,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
  },
};
</script>

<style>
</style>