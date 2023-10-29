<template>
  
        <div>
                <el-container>
                        <el-header>  
                                <div>
                                id: {{userinfo.userid}}
                                nickname: {{userinfo.nickname}}
                                status: {{userinfo.status}}
                                </div>
                        </el-header>

                        <el-container>
                                <el-aside width="200px">
                                        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
                                           <el-radio-button :label="false">expand</el-radio-button>
                                                <el-radio-button :label="true">collapse</el-radio-button>
                                                </el-radio-group>
                                                <el-menu
                                                default-active="2"
                                                class="el-menu-vertical-demo"
                                                :collapse="isCollapse"
                                                @open="handleOpen"
                                                @close="handleClose"
                                                router
                                                >
                                                <el-sub-menu index="1">
                                                <template #title>
                                                        <el-icon><location /></el-icon>
                                                        <span>Navigator One</span>
                                                </template>
                                             
                                                        <el-menu-item index="/home/main">main</el-menu-item>
                                                        <el-menu-item index="/home/news">news</el-menu-item>
                                                        <el-menu-item index="/home/userinfolist">userinfo</el-menu-item>
                                                        <el-menu-item index="1-4-1">item one</el-menu-item>
                                              

                                                </el-sub-menu>
                                                <el-menu-item index="2">
                                                <el-icon><icon-menu /></el-icon>
                                                <template #title>Navigator Two</template>
                                                </el-menu-item>
                                                <el-menu-item index="3" disabled>
                                                <el-icon><document /></el-icon>
                                                <template #title>Navigator Three</template>
                                                </el-menu-item>
                                                <el-menu-item index="4">
                                                <el-icon><setting /></el-icon>
                                                <template #title>Navigator Four</template>
                                                </el-menu-item>
                                                </el-menu>``

                                </el-aside>

                                <el-main>
                                        <router-view></router-view>

                                </el-main>
                        </el-container>
                </el-container>



        </div>





      


</template>

<script setup>
import {ref,computed,watch,toRefs,reactive,provide,onBeforeMount} from 'vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

  const isCollapse = ref(true)

  const state = reactive({
      userinfo:{
                userid:null,
                nickname:null,
                username:null,
      }
      
      
    
    })

       let { userinfo } = toRefs(state) 

     onBeforeMount(() => {
     
        //      state.userinfo.userid=   window.sessionStorage.getItem("userid")
        //      state.userinfo.nickname=   window.sessionStorage.getItem("nickname")
        let userinfoStr=   window.sessionStorage.getItem("userinfo")
        console.log(userinfoStr)
        if(userinfoStr!=null){
                state.userinfo=JSON.parse(userinfoStr)
        }
    });





const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}

const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}



</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
 }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    /* text-align: center; */
    /* line-height: 60px; */
  }
  
  .el-aside {
    /* background-color: #D3DCE6; */
    color: #333;
    /* text-align: center; */
    /* line-height: 200px; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
  }
  

</style>