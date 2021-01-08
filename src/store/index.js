import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    loading: true,
    error: false
  },
  mutations: {
    assignData(state, data){
      state.user = data;
      console.log(state.user)
    },
    changeLoading(state){
      state.loading = false
    },
    fetchError(state){
      state.error = true
    }
  },
  actions: {
    async fetchData({commit}){
      try{
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://hirng-x2021.glitch.me/api`
        const response = await fetch(proxyurl + url);
        const body = await response.json();
        commit('assignData', body);
      }catch(err){
        console.log(err)
        commit('fetchError');
      }finally{
        commit ('changeLoading')
      }
    }
  },
  modules: {
  }
})
