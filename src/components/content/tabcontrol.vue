<template>
  <div class="tabcontrol">
    <div
      v-for='(item,index) in titles'
      :key="index" class="controlitem" :class="{active:index===currenindex}" @click="tabitem(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabcontrol",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
    return {
      currenindex:0
    }
  },
  methods:{
    tabitem(index){
      this.currenindex=index;
      this.$emit('tabclick',index)
    }
  }
};
</script>
<style scoped>
.tabcontrol{
  display: flex;
  text-align: center;
    height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.controlitem{
  flex: 1;
}
.active span{
  color: lightpink;
border-bottom:3px solid  lightpink ;
}
.controlitem span{
  padding: 5px;
}
</style>