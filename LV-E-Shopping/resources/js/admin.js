
require('./bootstrap');

window.Vue = require('vue');

Vue.component('admin-master', require('./components/admin/AdminMaster.vue').default);
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        test: 'this is test ',
        abc: '',
        user: {
            name: 'sumona',
            email: "@gmail"
        }
    },
    getters: {
        us(state) {
            return state.user
        },
        abc(state) {
            return state.abc
        },
    },
    actions: {

    },
    mutations: {

    },
   
})

const admin = new Vue({
    el: '#admin',
    router,
    store,
    data: {
        test: 'testing for admin'
    }
});
