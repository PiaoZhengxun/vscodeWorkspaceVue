<template>
  <div>GrandChildCompositionApiComponent</div>
  <div>
      msgd:  {{msgd}}
     msgd: <input v-model="msgd">
  </div>
  <div>
      msgGrandChild:<input v-model="msg">

  </div>
</template>

<script>
import{inject,toRefs,reactive,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'

import { useStore } from "vuex";


export default {
 setup() {

    const store = useStore();

     const state = reactive({
      msgd:inject('msgd'),
      msg:"ddd"
    })




  
     onBeforeMount(() => {
      console.log("onBeforeMount!");
      store.commit('setMsgGrandChild',state.msg)
    });

    onMounted(() => {
      console.log("onMounted!");
       
    });

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate!");
    })
 
    onUpdated(() => {
      console.log("onUpdated!");
     


    })

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount!");
    })

    onUnmounted(() => {
      console.log("onUnmounted!");
    })







      return{
    
      ...toRefs(state), 
 

     }






   },



}
</script>

<style>

</style>