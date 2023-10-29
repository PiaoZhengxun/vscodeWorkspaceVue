<template>
  <div>sub2CompositionApiComponent</div>
        <div>sub2CompositionApiComponent msgd :{{msgd}}</div>
         <div ref="myRef">myref aaaaaa</div>

</template>

<script>

import { useStore } from "vuex";
import{inject,toRefs,reactive,ref, onMounted ,onBeforeMount} from 'vue'
export default {

  setup(){

         const myRef = ref(null); 
        const store = useStore();

        const state =reactive({
                msgd:""
        })

      
         onBeforeMount(() => {
                console.log("sub2CompositionApiComponent onBeforeMount:")
                state.msgd=store.getters.getMsgGrandChild
         });
          onMounted(() => {
                console.dir(myRef.value);
         });



        return {
                ...toRefs(state),
                myRef

        }


  }


}
</script>

<style>

</style>