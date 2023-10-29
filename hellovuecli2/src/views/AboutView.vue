<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{username}}</div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import {reactive,toRefs,onBeforeMount} from 'vue'
export default {
  setup(){
    const route = useRoute();

    const state= reactive({
        username:""


    })

    console.log(route.query.name);
      
    onBeforeMount(() => {
          state.username=route.query.name
        });

      return {
        ...toRefs(state), 
      }
  }
}
</script>
