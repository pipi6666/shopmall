<template>
    <div class="recommend">
      <div
        v-for="(item,index) in recommends"
        :key=index class="recommenditem"
      >
        <a :href="item.link">
          <img
            :src="item.image"
            alt=""
          >
        </a>
      <p>{{item.title}}</p>
      </div>
    </div>

</template>
<script>
export default {
  name: "recommendview",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
};
</script>
<style scoped>
.recommend{
display: flex;
width: 100%;
text-align: center;
border-bottom: 8px solid #eee;
padding-bottom: 15px;
}
.recommenditem{
flex: 1;

}
.recommenditem img {
  width: 80px;
  height: 80px;
margin-top: 5px;
}
</style>