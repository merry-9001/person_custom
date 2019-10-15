import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admin'
import user from './user'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {},
    modules: {
        admin,
        user
    }
})