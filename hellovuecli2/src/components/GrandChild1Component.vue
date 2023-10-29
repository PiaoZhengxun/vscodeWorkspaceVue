<template>
  <div>GrandChild1Component</div>
        <div>GrandChild1Component msgcc:{{msgcc}}</div>
        <div>GrandChild1Component msgccc:{{msgccc}}</div>

</template>

<script>
export default {
   name:"grandchild1",
   data(){
        return{

        }
   },
   props:["msgcc"],

   inject: {
    msgccc: { value: "msgccc", default: null },
   
  },
}
</script>

<style>

</style>