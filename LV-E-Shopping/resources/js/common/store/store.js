import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// constractor value import a {} use korte hoy must 
import { user } from './modules/user'
import { admin } from './modules/admin'
import { category } from './modules/category'

import {size} from './modules/size'
import {productList} from './modules/productList'




export  const store = new Vuex.Store({
    modules: {
        user: user,
        admin: admin,
        category: category,
        size: size,
        productList: productList,



    }
})
