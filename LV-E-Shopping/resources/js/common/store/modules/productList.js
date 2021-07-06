import jsonData from './jsonData'

export const productList = {
    // later we will import it on store.js , using vuex, for data store perpose 
    namespaced: true,
    state: {
        // user: {}
        productList:jsonData.options.products
    },
    getters: {
        displayProductList(state) {
            return state.productList;
        }

    },
    actions: {
       


    },
    mutations: {
      
    },

}