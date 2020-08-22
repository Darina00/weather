import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        weather: {},
    },
    getters: {
        weather: state => {
            return state.weather;
        },
    },
    mutations: {
        setWeather: (state, newValue) => {
            return state.weather = newValue;
        },
    },
})