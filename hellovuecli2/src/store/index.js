import { createStore } from 'vuex'

export default createStore({
  state: {
    num:0
  },
  getters: {
    newnum(state){
      return state.num ;
    }
  },
  mutations: {
    setnum(state,param){
      state.num += param;
    }


  },
  actions: {
    setnum(state,param){
      //这里使用setTimeout模拟异步方法
      setTimeout(()=>{
        state.commit('setnum',param);
      },5000);
    }

  },
  modules: {
  }
})
