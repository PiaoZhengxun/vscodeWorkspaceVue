<template>
  <div>
          <router-link to="/beforeLogin/LoginView">login</router-link>|
          <router-link to="/beforeLogin/RegisterView">Register</router-link>

        <router-view></router-view>

  </div>


</template>

<script>
export default {
name:"BeforeLoginView",
watch:{
  $route(newRoute, oldRoute){
    console.log('watch', newRoute, oldRoute)
  }
}


}
</script>

<style>



</style>