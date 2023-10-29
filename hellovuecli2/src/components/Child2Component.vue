<template>
   <div>child2component</div>
    <div>child2component $store.state.num:{{$store.state.num}}</div>
   <div>
      <button @click="changeStoreNum">changeStoreNum</button>
   </div>


   <div>child2component msgc:{{msgc}}</div>

</template>

<script>
export default {
 name:"Child2",
 data(){
   return{
      msga:99
   }
 },
 props:["msgc"],
 methods:{
   changeStoreNum(){
      // this.$store.state.num = this.msga
      // this.$store.commit('setnum',this.msga);
       this.$store.dispatch('setnum',this.msga);

   }



 }

}
</script>

<style>

</style>