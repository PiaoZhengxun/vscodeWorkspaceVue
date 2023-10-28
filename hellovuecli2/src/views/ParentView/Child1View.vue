<template>
  <div>Child1</div>
  <div>
            param1：{{$route.query.id}}； 
	    param2：{{$route.query.name}}
  </div>
</template>

<script>
export default {
        name:"Child1",
          //挂载DOM后
         mounted() {
              console.log(this.$route.params)
              console.log(this.$route)
        },


}
</script>

<style>

</style>