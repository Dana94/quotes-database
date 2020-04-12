import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        theme: 'light',
        cardIndex: null,
        selectedQuote: null
    },
    mutations: {
        SET_THEME(state, theme) {
            state.theme = theme;
        },
        SET_CARD_INDEX(state, cardIndex) {
            state.cardIndex = cardIndex;
        },
        SET_QUOTE(state, quote) {
            state.selectedQuote = quote;
        }
    },
    actions: {
        setTheme({ commit }, theme) {
            commit('SET_THEME', theme);
        },
        setCardIndex({ commit }, cardIndex) {
            commit('SET_CARD_INDEX', cardIndex);
        },
        setQuote({ commit }, quote) {
            commit('SET_QUOTE', quote);
        }
    },
    getters: {
        getTheme(state) {
            return state.theme;
        },
        getCardIndex(state) {
            return state.cardIndex;
        },
        getQuote(state) {
            return state.selectedQuote;
        }
    }
})
