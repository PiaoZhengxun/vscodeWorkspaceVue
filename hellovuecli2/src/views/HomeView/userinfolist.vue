<template>
  <div> 
        <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="userid" label="userid" width="150" />
    <el-table-column prop="username" label="username" width="120" />
    <el-table-column prop="nickname" label="nickname" width="120" />
    <el-table-column prop="hiredate" label="hiredate" width="120" />
    <el-table-column prop="email" label="email" width="400" />
    <el-table-column prop="age" label="age" width="120" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick"
          >Detail</el-button
        >
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div>
         <el-pagination
      v-model:current-page="pageCondition.currentPage"
      v-model:page-size="pageCondition.pageSize"
      :page-sizes="[5, 10, 20, 50]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total4"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />

  </div>



  </div>
</template>

<script setup>
import {ref,computed,watch,toRefs,reactive,provide,onBeforeMount} from 'vue';
import axios from "axios";
const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const total4=ref(400)

const handleClick = () => {
  console.log('click')
}
const state = reactive({
     pageCondition:{
        currentPage:1,
        pageSize:5
     },   
     tableData :[
                {
                date: '2016-05-03',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
                tag: 'Home',
                },
                {
                date: '2016-05-02',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
                tag: 'Office',
                },
                {
                date: '2016-05-04',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
                tag: 'Home',
                },
                {
                date: '2016-05-01',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
                tag: 'Office',
                },
                ]
    })


let { tableData,pageCondition } = toRefs(state) 
currentPage4.value=1
pageSize4.value=5
onBeforeMount(() => {


     axios
                .get(
                "/testmybatisplusbackendserver/testmybatisplus/userinfo/searchUserinfoByPageCondition",
                {
                        params:state.pageCondition
                }
                )
                .then((response) => {
                        console.log(response)
                        total4.value=response.data.obj.total
                        state.tableData=response.data.obj.records
                        // total4.value=state.tableData.length
                        // state.userinfos=response.data.obj
                        // console.log(state.userinfos)

                        // state.userinfo1=state.userinfos[0]
                        // console.log(state.userinfo1)
                })
                .catch((error) => {
                        
                });

    });



const handleSizeChange = (val) => {
//   console.log(`${val} items per page`)
  state.pageCondition.pageSize=val
  axios
                .get(
                "/testmybatisplusbackendserver/testmybatisplus/userinfo/searchUserinfoByPageCondition",
                {
                        params:state.pageCondition
                }
                )
                .then((response) => {
                        console.log(response)
                        total4.value=response.data.obj.total
                        state.tableData=response.data.obj.records
                        // total4.value=state.tableData.length
                        // state.userinfos=response.data.obj
                        // console.log(state.userinfos)

                        // state.userinfo1=state.userinfos[0]
                        // console.log(state.userinfo1)
                })
                .catch((error) => {
                        
                });



}
const handleCurrentChange = (val) => {

        state.pageCondition.currentPage=val
    axios
                .get(
                "/testmybatisplusbackendserver/testmybatisplus/userinfo/searchUserinfoByPageCondition",
                {
                        params:state.pageCondition
                }
                )
                .then((response) => {
                        console.log(response)
                        total4.value=response.data.obj.total
                        state.tableData=response.data.obj.records
                        // total4.value=state.tableData.length
                        // state.userinfos=response.data.obj
                        // console.log(state.userinfos)

                        // state.userinfo1=state.userinfos[0]
                        // console.log(state.userinfo1)
                })
                .catch((error) => {
                        
                });




}

</script>

<style>

</style>