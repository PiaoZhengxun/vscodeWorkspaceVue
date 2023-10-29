<template>
  <div>
       <div>LoginView</div> 
<div><input v-model="userinfo.username"></div>
<div><input v-model="userinfo.password"></div>
        <div>
                <button >login</button>
                  <button @click="toRegister">toRegister</button>
                  <button @click="back">back</button>
        </div>

  </div>
</template>

<script>
export default {
name:"LoginView",
data(){
        return{
                userinfo:{
                        userid:"",
                        username:"",
                        password:"",

                }
        }
},
mounted(){
       console.log("mounted route.query",this.$route.query)
       this.userinfo.username=this.$route.query.username



},
methods:{
        toRegister(){
                this.$router.push('/beforeLogin/RegisterView');
        },
        back(){
                // this.$router.back();
                this.$router.go(-1);
        }


},
           beforeCreate() {
                console.log('LoginView beforeCreate ');
            },
            //Vue实例创建后
            created() {
                console.log('LoginView created ');
            },
            //挂载DOM前
            beforeMount() {
                console.log('LoginView beforeMount ');
            },
            //挂载DOM后
            mounted() {
                console.log('LoginView mounted ');
            },
            //数据更新前
            beforeUpdate() {
                console.log('LoginView beforeUpdate ');
            },
            //数据更新后
            updated() {
                console.log('LoginView updated');
            },
            //实例销毁前
            beforeUnmount() {
                console.log('LoginView beforeUnmount ');
            },
            //实例销毁后
            unmounted() {
                console.log('LoginView unmounted ');
            },
}
</script>

<style>

</style>