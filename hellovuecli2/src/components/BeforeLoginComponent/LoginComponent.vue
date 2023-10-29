<template>
   <div>LoginComponent</div>
</template>

<script>
export default {
  name:"LoginComponent",
   //Vue实例创建前
            beforeCreate() {
                console.log('LoginComponent beforeCreate ');
            },
            //Vue实例创建后
            created() {
                console.log('LoginComponent created ');
            },
            //挂载DOM前
            beforeMount() {
                console.log('LoginComponent beforeMount ');
            },
            //挂载DOM后
            mounted() {
                console.log('LoginComponent mounted ');
            },
            //数据更新前
            beforeUpdate() {
                console.log('LoginComponent beforeUpdate ');
            },
            //数据更新后
            updated() {
                console.log('LoginComponent updated');
            },
            //实例销毁前
            beforeUnmount() {
                console.log('LoginComponent beforeUnmount ');
            },
            //实例销毁后
            unmounted() {
                console.log('LoginComponent unmounted ');
            },



}
</script>

<style>

</style>