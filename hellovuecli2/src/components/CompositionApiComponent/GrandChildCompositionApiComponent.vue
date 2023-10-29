<template>
  <div>GrandChildCompositionApiComponent</div>
  <div>
      msgd:  {{msgd}}
     msgd: <input v-model="msgd">
  </div>
</template>

<script>
import{inject,toRefs,reactive,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'


export default {
 setup() {

    
     const state = reactive({
      msgd:inject('msgd')
    })
  
     onBeforeMount(() => {
      console.log("onBeforeMount!");
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