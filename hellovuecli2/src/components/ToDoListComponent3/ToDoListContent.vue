<template>
  <div>
          <h2 >
                                <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">ongoing</font>
                                </font>
                                <span id="todocount">{{state.toDoListCountNum}}</span>
                        </h2>
                       

			<ol id="todolist" class="demo-box">
                            <li draggable="true"  v-for="(item,index)  in state.toDoList" >
                                <!-- <input type="checkbox" onchange="update(index,&quot;done&quot;,true)"> -->
                                <input type="checkbox" v-model="state.checknamearray"  @click="addToDoneList(index)"   :value="index">
                                <p id="p-6" onclick="edit(6)">
                                        <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">
                                                        {{item.title}}
                                                </font>
                                        </font>
                                </p>
                                <a @click="removeToDoList(index)">-</a></li>
                        
                        </ol>
                        <h2><font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Has been completed</font></font>
                                <span id="donecount">
                                        <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">
                                                {{state.doneListCountNum}}
                                        </font>
                                </font>
                                </span></h2>
			
                        
                        <ul id="donelist">
                              <li draggable="true" v-for="(item,index)  in state.doneList ">
                                <!-- <input type="checkbox" onchange="update(0,&quot;done&quot;,false)" checked="checked"> -->
                                <input type="checkbox" checked="checked"  v-model="state.checknamearrayDoneList"  @click="addToTodoList(index)"   :value="index">
                                <p id="p-0" onclick="edit(0)">
                                       <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">
                                                        {{item.title}}
                                                </font>
                                        </font>
                                </p>
                                <a @click="removeDoneList(index)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-</font></font></a>
                              </li>
                        </ul>
  </div>

</template>

<script setup>
import { useStore } from "vuex";
import {ref,toRefs,reactive, watch,computed } from 'vue';
   
 const store = useStore();
                // let todoObj=props.todoObj
                // console.log("todolistconent setup todoObj",todoObj)

                

                // console.log("todolistconent setup todoObjRef",todoObjRef.value)
 const state=reactive({
         titleValue:null,
         toDoList:[],
         doneList:[],
         checknamearray:[],
         checknamearrayDoneList:[],
         toDoListCountNum:0,
         doneListCountNum:0,
         todoObjCom: computed(() => {    //使用computed函数
                console.log("todolistConent todoObjCom props.todoObj:",props.todoObj)
                return props.todoObj;
        }),
        })
           
        watch(() =>store.getters.getTodo,(newValue, oldValue) => {
                                console.log("todolistContentWatch  ")
                                console.log(newValue, oldValue);
                                addTitleToTodoList(newValue)

         });
                

         function addTitleToTodoList(todo){
                      
             // console.log("todolistconent setup props.todoObj",props.todoObj)
                        // let todo=todoObj
              state.toDoList.push(todo)
              console.log("toDoList:",state.toDoList)
              state.toDoListCountNum=state.toDoList.length
         }



                function removeToDoList(index){
                        state.toDoList.splice(index,1)
                        state.toDoListCountNum=state.toDoList.length
                }

                function removeDoneList(index){
                        state.doneList.splice(index,1)
                        state.doneListCountNum=state.doneList.length
                }


              

                function addToTodoList(index){
                              let indexValue=state.doneList[index]
                                state.toDoList.push(indexValue)
                                state.doneList.splice(index,1)
                                state.checknamearrayDoneList.splice(0)// clear
                                state.toDoListCountNum=state.toDoList.length
                                state.doneListCountNum=state.doneList.length
                }

                function addToDoneList(index){
                        console.log("addToDoneList index:",index);
                        let indexValue=state.toDoList[index];
                        state.doneList.push(indexValue)
                        state.toDoList.splice(index,1)
                        state.checknamearray.splice(0) // clear
                        console.log("toDoList",state.toDoList)
                        console.log("doneList",state.doneList)

                        state.toDoListCountNum=state.toDoList.length
                        state.doneListCountNum=state.doneList.length
                       



                }
             



      



</script>

<style scoped>
 label{float:left;width:100px;line-height:50px;color:#DDD;font-size:24px;cursor:pointer;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;}
        .header input{float:right;width:60%;height:24px;margin-top:12px;text-indent:10px;border-radius:5px;box-shadow: 0 1px 0 rgba(255,255,255,0.24), 0 1px 6px rgba(0,0,0,0.45) inset;border:none}
        input:focus{outline-width:0}
        h2{position:relative;}
        span{position:absolute;top:2px;right:5px;display:inline-block;padding:0 5px;height:20px;border-radius:20px;background:#E6E6FA;line-height:22px;text-align:center;color:#666;font-size:14px;}
        ol,ul{padding:0;list-style:none;}
        li input{position:absolute;top:2px;left:10px;width:22px;height:22px;cursor:pointer;}
        p{margin: 0;}
        li p input{top:3px;left:40px;width:70%;height:20px;line-height:14px;text-indent:5px;font-size:14px;}
        li{height:32px;line-height:32px;background: #fff;position:relative;margin-bottom: 10px;
                padding:0 45px;border-radius:3px;border-left: 5px solid #629A9C;box-shadow: 0 1px 2px rgba(0,0,0,0.07);}
        ol li{cursor:move;}
        ul li{border-left: 5px solid #999;opacity: 0.5;}
        li a{position:absolute;top:2px;right:5px;display:inline-block;width:14px;height:12px;border-radius:14px;border:6px double #FFF;background:#CCC;line-height:14px;text-align:center;color:#FFF;font-weight:bold;font-size:14px;cursor:pointer;}
        .footer{color:#666;font-size:14px;text-align:center;}
        .footer a{color:#666;text-decoration:none;color:#999;}
        @media screen and (max-device-width: 620px) {section{width:96%;padding:0 2%;}}
        @media screen and (min-width: 620px) {section{width:600px;padding:0 10px;}}
</style>