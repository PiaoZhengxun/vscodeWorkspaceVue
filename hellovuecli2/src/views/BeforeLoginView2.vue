<template>
       

        <div>

                <LoginComponent v-if="isShowLogin" ></LoginComponent>
        <RegisterComponent v-else></RegisterComponent>

        </div>
        <div>
                <button @click="toggleButton"> toggleButton</button>

        </div>
</template>

<script>

import LoginComponent from '@/components/BeforeLoginComponent/LoginComponent.vue'
import RegisterComponent from '@/components/BeforeLoginComponent/RegisterComponent.vue'

export default {
name:"BeforeLoginView2",
data(){
        return{
                isShowLogin:true
        }
},
methods:{
        toggleButton(){
                this.isShowLogin=!this.isShowLogin;
        }
},
components:{
        LoginComponent,
        RegisterComponent
},   beforeCreate() {
                console.log('BeforeLoginView2 beforeCreate ');
            },
            //Vue实例创建后
            created() {
                console.log('BeforeLoginView2 created ');
            },
            //挂载DOM前
            beforeMount() {
                console.log('BeforeLoginView2 beforeMount ');
            },
            //挂载DOM后
            mounted() {
                console.log('BeforeLoginView2 mounted ');
            },
            //数据更新前
            beforeUpdate() {
                console.log('BeforeLoginView2 beforeUpdate ');
            },
            //数据更新后
            updated() {
                console.log('BeforeLoginView2 updated');
            },
            //实例销毁前
            beforeUnmount() {
                console.log('BeforeLoginView2 beforeUnmount ');
            },
            //实例销毁后
            unmounted() {
                console.log('BeforeLoginView2 unmounted ');
            },


}
</script>

<style>

</style>