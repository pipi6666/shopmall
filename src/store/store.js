import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 安装插件
Vue.use(Vuex)
    //创建实例
const storeq = new Vuex.Store({
        state: {
            cartlist: []
        },
        mutations,
        actions,
        getters
    })
    //挂载
export default storeq