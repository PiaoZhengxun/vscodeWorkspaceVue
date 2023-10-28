<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is an MyView page</h1>
    <mycomponent></mycomponent>
  </div>
</template>
<script>
import mycomponent from '@/components/MyComponent.vue'



export default {
        
 components:{
   mycomponent
 }


}
</script>