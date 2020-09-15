import Vue from 'vue'
import Vuerouter from 'vue-router'
Vue.use(Vuerouter);
const hhome = () =>
    import ('../viesw/home/home');
const hlemon = () =>
    import ('../viesw/lemon/lemon');
const hshopcat = () =>
    import ('../viesw/shopcat/shopcat');
const hme = () =>
    import ('../viesw/me/me');
const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: hhome
}, {
    path: '/lemon',
    component: hlemon
}, {
    path: '/shopcat',
    component: hshopcat
}, {
    path: '/me',
    component: hme
}]
const router = new Vuerouter({
    routes,
    mode: 'history'
})
export default router;