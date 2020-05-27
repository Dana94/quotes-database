import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        theme: 'light',
        quotes: [],
        search: '',
        tags: []
    },
    mutations: {
        SET_THEME(state, theme) {
            state.theme = theme;
            localStorage.setItem('theme', theme);
        },
        SET_SEARCH(state, search) {
            state.search = search;
        },
        ADD_TAG(state, tag) {
            state.tags.push(tag);
        },
        REMOVE_TAG(state, tag) {
            const index = state.tags.indexOf(tag);
            state.tags.splice(index, 1);
        }
    },
    actions: {
        setTheme({ commit }, theme) {
            commit('SET_THEME', theme);
        },
        initTheme({ commit }) {
            if (localStorage.getItem('theme') === 'light' || localStorage.getItem('theme') === 'dark') {
                commit('SET_THEME', localStorage.getItem('theme'));
            } else {
                commit('SET_THEME', 'light');
            }
        },
        setSearch({ commit }, search) {
            commit('SET_SEARCH', search);
        },
        addTag({ commit }, tag) {
            commit('ADD_TAG', tag);
        },
        removeTag({ commit }, tag) {
            commit('REMOVE_TAG', tag);
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
        },
        getTags(state) {
            return state.tags;
        }
    }
})
