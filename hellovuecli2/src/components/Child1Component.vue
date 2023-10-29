<template>
        <div>child1component</div>
        msga:<input v-model="msga">
        <button @click="sendToParent">sendToParent</button>
        <div> 
        <grandchild1component :msgcc="msgbb">

        </grandchild1component>
        </div>


</template>

<script>
import grandchild1component from '@/components/GrandChild1Component.vue'


export default {
name:"Child1",
data(){
        return{
                msga:""
        }
},
props:["msgbb"],
methods:{
        sendToParent(){
                 this.$emit('childAmsg', this.msga);
        }
},
components:{
        grandchild1component
}




}
</script>

<style>

</style>