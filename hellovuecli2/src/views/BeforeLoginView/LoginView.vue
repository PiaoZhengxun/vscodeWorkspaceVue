<template>
<div>
       <!-- <div>LoginView</div> 
<div><input v-model="userinfo.username"></div>
<div><input v-model="userinfo.password"></div>
        <div>
                <button >login</button>
                  <button @click="toRegister">toRegister</button>
                  <button @click="back">back</button>
        </div> -->
<div class="common-layout">
<el-container>
    <el-header>   
    <el-row>
    <el-col :span="10"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6">
        <div>LoginView</div>                  
    </el-col>
    </el-row>
    </el-header>
    <el-main>
    <el-row>
        <el-col :span="6"></el-col>
        <el-col :span="3">username:</el-col>
        <el-col :span="9"> <el-input v-model="state.userinfo.username" placeholder="Please input username" />   </el-col>
        <el-col :span="6"></el-col>
    </el-row>
    <el-row>
        <el-col :span="6"></el-col>
        <el-col :span="3">password:</el-col>
        <el-col :span="9"> 
            <el-input
                v-model="state.userinfo.password"
                type="password"
                placeholder="Please input password"
                show-password
            />
        </el-col>
        <el-col :span="6"></el-col>
    </el-row>     
    <el-row>
        <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="3"><el-button type="primary" @click="login" >login</el-button></el-col>
        <el-col :span="9">  
            <el-button
        key="toRegister"
        type="primary"
        link
        @click="toRegister"
        >toRegister </el-button
        >
        </el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple-light" /></el-col>
    </el-row>
    </el-main>
    <el-footer>
        Footer
    </el-footer>
</el-container>
        </div>



  </div>
</template>

<script  setup> 
import { ElMessage } from 'element-plus'
import axios from "axios";
import {ref,computed,watch,toRefs,reactive,provide} from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();



 const state = reactive({
   
      userinfo:{
        username: null,
        password: null
      }
    })

function login(){
     axios.post("/testmybatisplusbackendserver/testmybatisplus/userinfo/login", 
        state.userinfo
        )
        .then(function (response) {
         console.log(response)
        if(response.data.statusCode==200){
            // let userinfo={
            //     nickname:response.data.nickname,
            //     userid:response.data.userid,
            // }
             ElMessage({
                message: response.data.msg,
                type: 'success',
            })

            router.push({path:'/home',query:{
                nickname:response.data.obj.nickname,
                userid:response.data.obj.userid,
            }});
        }else{
             ElMessage({
                message: response.data.msg,
                type: 'error',
            })




        }


                      
        })
        .catch(function (error) {
        console.log(error);
        });

}

function toRegister(){
                 router.push('/beforeLogin/RegisterView');
}


// export default {
// name:"LoginView",
// data(){
//         return{
//                 userinfo:{
//                         userid:"",
//                         username:"",
//                         password:"",

//                 }
//         }
// },
// mounted(){
//        console.log("mounted route.query",this.$route.query)
//        this.userinfo.username=this.$route.query.username



// },
// methods:{
//         toRegister(){
//                 this.$router.push('/beforeLogin/RegisterView');
//         },
//         back(){
//                 // this.$router.back();
//                 this.$router.go(-1);
//         }


// },
//            beforeCreate() {
//                 console.log('LoginView beforeCreate ');
//             },
//             //Vue实例创建后
//             created() {
//                 console.log('LoginView created ');
//             },
//             //挂载DOM前
//             beforeMount() {
//                 console.log('LoginView beforeMount ');
//             },
//             //挂载DOM后
//             mounted() {
//                 console.log('LoginView mounted ');
//             },
//             //数据更新前
//             beforeUpdate() {
//                 console.log('LoginView beforeUpdate ');
//             },
//             //数据更新后
//             updated() {
//                 console.log('LoginView updated');
//             },
//             //实例销毁前
//             beforeUnmount() {
//                 console.log('LoginView beforeUnmount ');
//             },
//             //实例销毁后
//             unmounted() {
//                 console.log('LoginView unmounted ');
//             },
// }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    /* text-align: center;
    line-height: 60px; */
  }
  

  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center;
    line-height: 160px; */
  }

</style>