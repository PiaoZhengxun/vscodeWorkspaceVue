<template>
    <div>
       <div>RegisterView</div> 

                <div>
                   username:     <input v-model="userinfo.username"> <br/>
                    password:    <input v-model="userinfo.password"><br/>
                     nickname:   <input v-model="userinfo.nickname"><br/>
                     age:   <input v-model="userinfo.age"><br/>
                    email:    <input v-model="userinfo.email"><br/>

                </div>



        <div><button @click="toLogin">toLogin</button></div>
  </div>
</template>

<script>
export default {
name:"RegisterView",
data(){
        return {
                userinfo:{
                        username:"",
                        password:"",
                        nickname:"",
                        age:0,
                        email:""
                },
                userinfoFromBackEnd:{
                        userid:"",
                        username:"",
                        nickname:""
                }
        }
},
methods:{
        toLogin(){

                console.log("send userinfo to back-end back-end return status=200 userid=1001");
                this.userinfoFromBackEnd.userid="1001";
                this.userinfoFromBackEnd.username=this.userinfo.username
              


                this.$router.push( {path:'/beforeLogin/LoginView', query:{ userid:this.userinfoFromBackEnd.userid, username:this.userinfoFromBackEnd.username}} );
        } 
              
},
           beforeCreate() {
                console.log('RegisterView beforeCreate ');
            },
            //Vue实例创建后
            created() {
                console.log('RegisterView created ');
            },
            //挂载DOM前
            beforeMount() {
                console.log('RegisterView beforeMount ');
            },
            //挂载DOM后
            mounted() {
                console.log('RegisterView mounted ');
            },
            //数据更新前
            beforeUpdate() {
                console.log('RegisterView beforeUpdate ');
            },
            //数据更新后
            updated() {
                console.log('RegisterView updated');
            },
            //实例销毁前
            beforeUnmount() {
                console.log('RegisterView beforeUnmount ');
            },
            //实例销毁后
            unmounted() {
                console.log('RegisterView unmounted ');
            },
}
</script>

<style>

</style>