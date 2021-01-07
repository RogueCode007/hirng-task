import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    assignData(state, data){
      console.log(data)
    }
  },
  actions: {
    async fetchData({commit}){
      try{
        const response = await fetch(`https://hirng-x2021.glitch.me/api`);
        const body = await response.json();

        commit('assignData', body);
      }catch(err){
        console.log(err)
      }
    }
  },
  modules: {
  }
})
