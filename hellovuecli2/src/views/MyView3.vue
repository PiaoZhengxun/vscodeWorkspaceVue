<template>
  <div>myvue3 </div>
  <div>
        parent msga：{{msga}}
        <div>msga:<input type="text" v-model="msga"> </div>

        <subcomponent1   :msgb="msga"    @childmsg="getMsgcFromChild" ></subcomponent1>


        <div>msgd:{{msgd}}</div>

  </div>
</template>

<script>
import subcomponent1 from '@/components/SubComponent1.vue'



export default {
        name:"MyView3",
 data(){
        return{
                msga:"aaaaaaaaaaaaaaaaaaa",
                msgd:""
        }
 },
 methods:{
        getMsgcFromChild(msgc){
                this.msgd=msgc
        }
 },       
 components:{
        subcomponent1
 }


}
</script>

<style>

</style>