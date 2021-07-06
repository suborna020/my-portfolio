import Axios from "axios"

export const category = {
    // later we will import it on store.js , using vuex, for data store perpose 
    namespaced: true,
    state: {
        // user: {}
        categories:[],
    },
    getters: {
        categoryList(state) {
            return state.categories;
        }

    },
    actions: {
        categoryList(context,payload) {
            Axios.get('category/?page='+ payload)
                .then((result) => {
                    context.commit('categoryList', result.data.categories);
                    console.log('from category js : ', result.data.categories);

                }).catch((err) => {

                });
        },
        categoryAllList(context) {
            Axios.get('categoryAllList')
                .then((result) => {
                    context.commit('categoryList', result.data.categories);
                    console.log('from category js : ', result.data);

                }).catch((err) => {

                });
        },


    },
    mutations: {
        categoryList(state, payload) {
            return state.categories = payload
        },
    },

}