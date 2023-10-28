<template>


         <div> msgaa: <input v-model="msgaa"></div>
         <div> msgaaa: <input v-model="msgaaa"></div>
         <div>msgccc{{msgccc}}</div>
        <div>
                <child1component @childAmsg="getMsga" :msgbb="msgaa"    ></child1component>

        </div>
        <div>
                parent msgb:{{msgb}}
        </div>
        <div>
                <child2component  :msgc="msgb"    ></child2component>
        </div>
       



</template>

<script>

import child1component from '@/components/Child1Component.vue'
import child2component from '@/components/Child2Component.vue'
export default {
name:"Parent",
data(){
        return{
                msgb:"",
                msgaa:"",
                msgaaa:"abc",
        }
},
provide() {
         return {
               msgccc: this.msgaaa
           }
},

methods:{
        getMsga(msga){
               this.msgb =msga
        }
},
components:{
        child1component,
        child2component
}



}
</script>

<style>

</style>