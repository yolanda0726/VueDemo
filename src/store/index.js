import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: { param1: 10 },
    mutations: {
        add(state, n) {
            state.param1 += n;
        }
    },
    actions: {
        add(context, n) {
            context.commit('add', n)
        }
    },
    getters: {},
    modules: {}
})