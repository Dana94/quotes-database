import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        theme: 'light',
        quotes: [],
        search: ''
    },
    mutations: {
        SET_THEME(state, theme) {
            state.theme = theme;
        },
        SET_SEARCH(state, search) {
            state.search = search;
        }
    },
    actions: {
        setTheme({ commit }, theme) {
            commit('SET_THEME', theme);
        },
        initTheme({commit}) {
            if(localStorage.getItem('theme')) {
                commit('SET_THEME', localStorage.getItem('theme'));
            }
        },
        setSearch({commit}, search) {
            commit('SET_SEARCH', search);
        }
        // initQuotes({commit}) {
        //     commit('INIT_QUOTES');
        // }
    },
    getters: {
        getTheme(state) {
            return state.theme;
        },
        getSearch(state) {
            return state.search;
        }
    }
})
