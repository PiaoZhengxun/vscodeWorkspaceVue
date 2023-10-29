<template>
  
   <div>RegisterComponent</div>

</template>

<script>
export default {
 name:"RegisterComponent",
            beforeCreate() {
                console.log('RegisterComponent beforeCreate ');
            },
            //Vue实例创建后
            created() {
                console.log('RegisterComponent created ');
            },
            //挂载DOM前
            beforeMount() {
                console.log('RegisterComponent beforeMount ');
            },
            //挂载DOM后
            mounted() {
                console.log('RegisterComponent mounted ');
            },
            //数据更新前
            beforeUpdate() {
                console.log('RegisterComponent beforeUpdate ');
            },
            //数据更新后
            updated() {
                console.log('RegisterComponent updated');
            },
            //实例销毁前
            beforeUnmount() {
                console.log('RegisterComponent beforeUnmount ');
            },
            //实例销毁后
            unmounted() {
                console.log('RegisterComponent unmounted ');
            },



}
</script>

<style>

</style>