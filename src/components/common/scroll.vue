<template>
  <div
    class="wrapper"
    ref="wrapper"
  >
    <div class="contnet">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BSscroll from "better-scroll";
export default {
  name: "scroll",
  props: {
    probetypes: {
      type: Number,
      default: 0,
    },
    pullUpLoads: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BSscroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      probeType: this.probetypes,
      pullUpLoad: this.pullUpLoads,
    });
    if (this.probetypes === 2 || this.probetypes === 3) {
      this.scroll.on("scroll", (position) => {
         this.$emit("scroll", position);

      });
    }
    if (this.pullUpLoads) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");

      });
    }
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
  },
};
</script>

<style>
</style>