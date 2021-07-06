import jsonData from './jsonData'

export const size = {
    // later we will import it on store.js , using vuex, for data store perpose 
    namespaced: true,
    state: {
        // user: {}
        size:jsonData.options.size
    },
    getters: {
        displaySize(state) {
            return state.size;
        }

    },
    actions: {
       


    },
    mutations: {
      
    },

}