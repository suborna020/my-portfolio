import Vue from 'vue' // not on tutorial

require('./bootstrap');
window.Vue = require('vue');
// ElementUI
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })
import 'element-ui/lib/theme-chalk/index.css';

Vue.component('public-master', require('./components/public/PublicMaster.vue').default);
import router from './public/router'
import {store} from './common/store/store'

const app = new Vue({
    el: '#app',
    store,
    router,
    data: {
        test: 'testing for frontend'
    }
});
