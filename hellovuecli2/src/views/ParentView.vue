<template>
<div> ParentView</div>
<div>

        <router-link :to="{path:'/parentview/child1',query:{id:userinfo.userid,name:userinfo.username}}">child1</router-link>|
     <!-- <router-link :to="{name:'Child1View',state:{userinfo}}">child1</router-link>| -->
     <router-link to="/parentview/child2/100/tom">child2</router-link></div>
       username: <input v-model="userinfo.username"> <br/>
        userid:<input v-model="userinfo.userid"><br/>


        <div>
                <router-view></router-view>
        </div>

</template>

<script>
import About from '../../../hellovuecli/src/components/About.vue'
export default {
  data(){
        return{
                userinfo:{
                        username:"",
                        userid:""}
        }
  },      
  components: { About },
        name:"ParentView"

}
</script>

<style>

</style>