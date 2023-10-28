<template>
<div>
        <div class="userinfotable">
                <table>
                <tr>
                
                        <th>userid</th>
                        <th>username</th>
                        <th>age</th>
                        <th>OP</th>
                </tr>


                <tr  v-for="(elem,indexnum) in userArr"  :key="elem.userId">
                        <!-- <td>{{indexnum}}</td> -->
                        <td>{{elem.userId}}</td>
                        <td>{{elem.userName}}</td>
                        <td>{{elem.userAge}}</td>
                        <td><button @click="deleteUser(indexnum)"> delete </button></td>
                </tr>


                  <tr>
                        <td colspan="4"><button @click="clear()"> clear </button></td>
                </tr>

                
                </table>
        </div>
        <div class="adduserinfo">
                <div class="adduserinfo_title">add</div>
                username:<input type="text" v-model="addUserinfo.username" /> <br/>
                age:<input type="text" v-model="addUserinfo.age" /><br/>
                <button @click="add()" > add </button>

        </div>
  
       

</div>

</template>

<script>
export default {
   data(){
    return {
      addUserinfo: {
          username: 'tom',
          age: '9'
      },
      userArr: [{
                        userId: 1001,
                        userName: 'tom',
                        userAge: '18'
                    }, {
                        userId: 1002,
                        userName: 'jerry',
                        userAge: '19'
                    }, {
                        userId: 1003,
                        userName: 'marry',
                        userAge: '20'
                    }]
    }
   },
    methods: {
        deleteUser(indexnum){
                console.log(indexnum)
                 this.userArr.splice(indexnum,1)

        },
        clear(){
                        this.userArr.splice(0)
        },
        
        add(){

                        let newUserid=this.userArr[this.userArr.length-1].userId+1


                        this.userArr.push(
                       {
                        userId: newUserid,
                        userName: this.addUserinfo.username,
                        userAge: this.addUserinfo.age
                       }

                       )

        }



      
  }


}
</script>

<style>

table {
        width: 300px;
        /*居中*/
        margin: 0 auto;
        /*边框*/
        /* border: 1px solid black; */

        border-collapse: collapse;
        /*设置背景颜色*/
        /* background-color: #bfa; */
      }

      /*
       * 设置边框
       */
      td,
      th {
        border: 1px solid black;
      }

    /*
     * 设置隔行变色
     */
      tbody > tr:nth-child(even) {
        background-color: #bfa;
      }

    /*
     * 鼠标移入到tr以后，改变颜色
     */
      tr:hover {
        background-color: #ff0;
      }





</style>