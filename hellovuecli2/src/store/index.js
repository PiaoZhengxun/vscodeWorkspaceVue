import { createStore } from 'vuex'

export default createStore({
  state: {
    num:0,
    msgGrandChild:"",
    todo:null,
    
  },
  getters: {
    getTodo(state){
       return state.todo
    },
    newnum(state){
      return state.num ;
    },
    getMsgGrandChild(state){
      return state.msgGrandChild
    }
  },
  mutations: {
    setTodo(state,param){
      state.todo = param;
    },
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
