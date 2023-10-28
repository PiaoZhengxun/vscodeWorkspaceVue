<template>
  <div>myview2</div>
        <p>raw data：{{msg}}</p>
        <div>
                <input type="text" v-model="msg">
        </div>

        <p>reverse data computed：{{reversedMsg}}</p>

	 <p>reverse data method：{{msgmethod}}</p> 

        <button @click="reversedMsg2">reversedMsg2</button>
        
        <p>reverse data method2：{{reversedMsg2()}}</p> 
      




        <div>
              msgb:   {{msgb}}

                <input type="text" v-model="msgb">

        </div>


        <div>
            {{userinfo.username}}

               username <input type="text" v-model.lazy="userinfo.username"><br/>
               password <input type="password" v-model="userinfo.password">

              <button @click="changeUserinfo">
                changeUserinfo
              </button>
        </div>


        <div>
              price : <input type="number" v-model="price" ><br/>
              num :  <input type="number" v-model="num" ><br/>
             totalprice: {{totalprice}}

        </div>



       
</template>

<script>
export default {
        data(){
                return{
                        msg:"Hello world!",
                        msgmethod:"",
                        msgb:"aaaaaaa",
                        userinfo:{
                                username:"",
                                password:""
                        },
                        price:0,
                        num:0,
                        

                }
        },
        computed:{
            totalprice(){
                return this.price*this.num;

            },    
            reversedMsg(){
                console.log("reversedMsg**********************************")
                return this.msg.split('').reverse().join('');
            }
        },
        methods:{
        changeUserinfo(){
                      let u1=new Object();  
                        u1.username="jerry"
                        u1.password="123456";
                      this.userinfo=u1  


        },
            reversedMsg2(){
                 console.log("method reversedMsg2**********************************")
                this.msgmethod=this.msg.split('').reverse().join('')
                return this.msgmethod;
            },

            
            
        },
        watch:{
            msg(newVal,oldVal){
                console.log("watch**************");
                console.log(newVal,oldVal);

                // this.quantity = newVal<=0?oldVal:newVal

            },
        //    userinfo(newVal,oldVal){
        //         console.log("watch11111**************userinfo");
        //         console.log(newVal,oldVal);
        //    }


             userinfo:{
                handler(newVal,oldVal){
                    /**
                     * 注意：虽然使用深度监听，可以监听到对象的改变。
                     *      但是，由于是对象类型，所以newVal与oldVal都指向同一个对象。
                     *      所以，newVal与oldVal中的quantity都是改变后的新值。
                     */
                     console.log("watch**************userinfo");
                    console.log(newVal,oldVal);
                //     this.goods.quantity = newVal.quantity<=0?oldVal.quantity:newVal.quantity;
                },
                deep:true
            }
        }



}
</script>

<style>

</style>