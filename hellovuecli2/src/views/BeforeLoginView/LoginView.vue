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


}
}
</script>

<style>

</style>