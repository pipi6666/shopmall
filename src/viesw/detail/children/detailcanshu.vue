<template>
  <div
    class="canshu"
    v-if="Object.keys(itemparams).length!==0"
  >
    <table
      v-for="(table,index) in itemparams.sizes"
      :key="index"
    >
      <tr
        v-for='(tr,indez) in table'
        :key="indez"
      >
        <td
          class="canshusize"
          v-for="(td,indec) in tr"
          :key="indec"
        >{{td}}</td>
      </tr>
    </table>

    <table>
      <tr
        v-for="(info,index) in itemparams.infos"
        :key="index"
        class="canshuparams"
      >
        <td class="canshuitem">{{info.key}}</td>
        <td>{{info.value}}</td>
      </tr>
    </table>
    <div v-if="itemparams.image.length!==0">
      <img
        :src="itemparams.image"
        alt=""
      >

    </div>
  </div>
</template>

<script>
export default {
  name: "detailcanshu",
  props: {
    itemparams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.canshu {
  border-top: 4px solid #ececec;
  border-bottom: 4px solid #ececec;
}
.canshusize {
  font-size: 12px;
  width: 20%;
  border-bottom: 1px solid #ececec;
  padding: 10px 4px;
}
.canshuparams {
  font-size: 14px;
  border-bottom: 1px solid #ececec;
  padding: 10px 4px;
  line-height: 20px;
}
.canshuitem {
  width: 18%;
}
</style>