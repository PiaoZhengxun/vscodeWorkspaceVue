<template>
  <div>Composition API</div>
  <div>count:{{count}}</div>
  <div><button @click="add">add</button></div>
  <div>
        <!-- <div>state.count {{state.count}}</div> -->
         <div>count {{count}}</div>
        <div>doubleCount {{doubleCount}}</div>

        <div><button @click="add2">add2</button></div>
        <div>{{user.userId}}:{{user.username}}</div>
  </div>
  <div>
    <SubCompositionApiComponent :msg="msga"    @childmsg="getFromChild"></SubCompositionApiComponent>
  </div>
  <div>
     get msgc from child. msgc:{{msgc}}
  </div>

</template>

<script>
import {ref,computed,watch,toRefs,reactive,provide} from 'vue';

import SubCompositionApiComponent from '../components/CompositionApiComponent/SubCompositionApiComponent.vue'

export default {
  

    setup(props,context){

     


     console.log('setup aaa '); 
    //  let count=ref(10);

     const state = reactive({
      msga:"hello msgaaaaaaaaaa",
      msgc:"",
      msgd:"dddddddddddddddddddddddddd",
      count: 10,
      user:{
        userId: 1,
        username: 'tom'
      },
        doubleCount: computed(() => {    //使用computed函数
        return state.count * 2;
      }),
    })

      provide('msgd',state.msgd);
     watch(state,(newValue, oldValue) => {
        console.log("state",newValue, oldValue);
      }
    );

    watch(() => state.count,(newValue, oldValue) => {
      
      console.log("state.count",newValue, oldValue);
    });


    function getFromChild(param){
        state.msgc=param



    }

    function add(){
     
      count.value++;       //setup函数中没有this指针
       console.log("function add count.value:"+count.value)
    }
     function add2(){
        state.count++;
            //setup函数中没有this指针
       console.log("function add2 state.count:"+state.count)
    }


     return{
    
      ...toRefs(state), 
      add,add2,getFromChild

     }


    },
    components:{
      SubCompositionApiComponent
    }


}
</script>

<style>

</style>