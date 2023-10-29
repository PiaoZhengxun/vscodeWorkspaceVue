<template>
  <div>
        <div>SubCompositionApiComponent </div>
              <div>msg: {{ msg }}</div> 
        <div>
               <div>msgc:<input v-model="msgc" ></div> 
               <div><button @click="sendToParent">sendToParent</button></div>

        </div>
        <div>
          <GrandChildCompositionApiComponent v-if="isShow" ></GrandChildCompositionApiComponent>
        </div>
        <div>
          <button @click="toggleWithGrandChildCompositionApiComponent">toggleWithGrandChildCompositionApiComponent</button>
        </div>

  </div>
</template>

<script>
import {ref,computed,watch,toRefs,reactive,} from 'vue';                             
import GrandChildCompositionApiComponent from '../../components/CompositionApiComponent/GrandChildCompositionApiComponent.vue'

export default {

   setup(props, context) {

     console.log("props.msg:",props.msg)   
     const state = reactive({
      msg:props.msg,
      isShow:true,
      msgc:""
     
    })
    
    function sendToParent(){
        context.emit("childmsg", state.msgc);


    }

    function toggleWithGrandChildCompositionApiComponent(){
        state.isShow=!state.isShow
    }


      return{
    
      ...toRefs(state), 
     sendToParent,
     toggleWithGrandChildCompositionApiComponent

     }


   },
  props: {
    msg: String,
  },
  components:{
    GrandChildCompositionApiComponent
  }


}
</script>

<style>

</style>