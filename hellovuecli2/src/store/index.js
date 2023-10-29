import { createStore } from 'vuex'

export default createStore({
  state: {
    num:0,
    msgGrandChild:""
    
  },
  getters: {
    newnum(state){
      return state.num ;
    },
    getMsgGrandChild(state){
      return state.msgGrandChild
    }
  },
  mutations: {
    setnum(state,param){
      state.num += param;
    },
    setMsgGrandChild(state,param){
      state.msgGrandChild += param;
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
