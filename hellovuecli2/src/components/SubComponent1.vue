<template>
  
<div>
        SubComponent1 
        msgbb:{{msgbb}}
        <div>
                msgb:<input type="text" v-model="msgb"> 
                <button @click="changeMsgb">getmsgb</button>
                <button @click="msgbtozzzzz">msgbtozzzzz</button>
        </div>
        <div>
                msgc:  <input v-model="msgc"  type="text"   > 
                <button @click="sendToParent">sendToParent</button>

        </div>
</div>


</template>

<script>
export default {
 data(){
        return {
                msgbb:"",
                msgc:""
        }
       

 },
 props:['msgb'],//props.   msgb  read-only
 methods:{
        sendToParent(){
                this.$emit('childmsg', this.msgc);
        },
        changeMsgb(){
                this.msgbb=this.msgb
                // this.msgbb="zzzzzzzzzzzzzzzzzz"  
                      },
         msgbtozzzzz(){
                         this.msgbb="zzzzzzzzzzzzzzzzzz"  
         }
 }



}
</script>

<style>

</style>