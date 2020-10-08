import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        theme: 'light',
        search: '',
        authorId: null,
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
        SET_AUTHOR(state, authorId) {
            state.authorId = authorId;
        },
        ADD_TAG(state, tag) {
            state.tags.push(tag);
        },
        REMOVE_TAG(state, tag) {
            const index = state.tags.indexOf(tag);
            state.tags.splice(index, 1);
        },
        CLEAR_TAGS(state) {
            state.tags = [];
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
        setAuthor({ commit }, authorId) {
            commit('SET_AUTHOR', authorId);
        },
        addTag({ commit }, tag) {
            commit('ADD_TAG', tag);
        },
        removeTag({ commit }, tag) {
            commit('REMOVE_TAG', tag);
        },
        clearTags({commit}) {
            commit('CLEAR_TAGS');
        }
    },
    getters: {
        getTheme(state) {
            return state.theme;
        },
        getSearch(state) {
            return state.search;
        },
        getAuthor(state) {
            return state.authorId;
        },
        getTags(state) {
            return state.tags;
        }
    }
})
