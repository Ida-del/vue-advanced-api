import Vue from 'vue'; // load vue lib
import Vuex from 'vuex'; // load vuex lib
import mutations from './mutations.js' // load vuex lib
import actions from './actions.js'


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        asks: [],
        jobs: [],
        user: {}, // object
        item: {},
        list: [],
    },
    getters: {
        fetchedAsks(state) {
            return state.asks;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations,
    actions
});