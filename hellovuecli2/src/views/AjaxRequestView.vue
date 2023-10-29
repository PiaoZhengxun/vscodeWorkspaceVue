<template>
  <div>
        <div>AjaxRequestView</div>
        <div>
                <button @click="sendRequestToBackEnd">sendRequestToBackEnd</button>
                <div>
                      <div>state.ename<input v-model="state.ename"  /><input v-model="state.deptno"/></div>  

                     <div> state.userinfoRequest.ename <input v-model="state.userinfoRequest.ename"  /><input v-model="state.userinfoRequest.deptno"/></div>   
 <button @click="sendRequestToBackEndWithParams">sendRequestToBackEndWithParams</button>
                </div>
                <button @click="sendPostRequestToBackEnd">sendPostRequestToBackEnd</button>



               
               state.msg: {{state.msg}}
        </div>

                <div v-for="userinfo in state.userinfos">
                        {{userinfo}}
                </div>
                <div>
                      userinfo1:  {{state.userinfo1}}

                </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {reactive} from 'vue'

const state=reactive({
        ename:null,
        deptno:0,
        userinfoRequest:{
                 ename:null,
                  deptno:0,
        },
        userinfos:[],
        msg:"aaaa",
        userinfo1:{}


})
function sendPostRequestToBackEnd(){
        axios.post("/testmybatisplusbackendserver/testmybatisplus/emp/getEmpsByQueryCondition2", 
        state.userinfoRequest)
        .then(function (response) {
         console.log(response)
                        state.userinfos=response.data.obj
                        console.log(state.userinfos)

                        state.userinfo1=state.userinfos[0]
                        console.log(state.userinfo1)
        })
        .catch(function (error) {
        console.log(error);
        });
}

function sendRequestToBackEndWithParams(){
        //   axios
        //         .get(
        //         "http://127.0.0.1:8080/testmybatisplus/emp/getEmplistByCondition2?deptno="+state.deptno+"&ename="+state.ename
        //         )
        //         .then((response) => {
        //                 console.log(response)
        //                 state.userinfos=response.data.obj
        //                 console.log(state.userinfos)

        //                 state.userinfo1=state.userinfos[0]
        //                 console.log(state.userinfo1)
        //         })
        //         .catch((error) => {
                        
        //         });
 axios
                .get(
                "/testmybatisplusbackendserver/testmybatisplus/emp/getEmplistByCondition2"
                , {
                params: {
                        deptno: state.deptno,
                        ename:state.ename
                        }
                        }
                )
                .then((response) => {
                        console.log(response)
                        state.userinfos=response.data.obj
                        console.log(state.userinfos)

                        state.userinfo1=state.userinfos[0]
                        console.log(state.userinfo1)
                })
                .catch((error) => {
                        
                });



}


function sendRequestToBackEnd(){
        axios
                .get(
                "/testmybatisplusbackendserver/testmybatisplus/emp/getAllEmps"
                )
                .then((response) => {
                        console.log(response)
                        state.userinfos=response.data.obj
                        console.log(state.userinfos)

                        state.userinfo1=state.userinfos[0]
                        console.log(state.userinfo1)
                })
                .catch((error) => {
                        
                });


}


</script>

<style>

</style>