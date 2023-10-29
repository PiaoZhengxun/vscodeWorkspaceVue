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
// 监听路由跳转。
watch:{
        $route(newRoute, oldRoute) {
                        console.log('watch', newRoute, oldRoute)
        }

},

           beforeCreate() {
                console.log('BeforeLoginView beforeCreate ');
            },
            //Vue实例创建后
            created() {
                console.log('BeforeLoginView created ');
            },
            //挂载DOM前
            beforeMount() {
                console.log('BeforeLoginView beforeMount ');
            },
            //挂载DOM后
            mounted() {
                console.log('BeforeLoginView mounted ');
            },
            //数据更新前
            beforeUpdate() {
                console.log('BeforeLoginView beforeUpdate ');
            },
            //数据更新后
            updated() {
                console.log('BeforeLoginView updated');
            },
            //实例销毁前
            beforeUnmount() {
                console.log('BeforeLoginView beforeUnmount ');
            },
            //实例销毁后
            unmounted() {
                console.log('BeforeLoginView unmounted ');
            },


}
</script>

<style>



</style>