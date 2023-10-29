<template>
     <div>lifeCycleView</div>
  

   <div>
   {{msg}}
   msg:<input v-model="msg">
   </div>


   <div>
        num:{{num}} * price:{{price}}
        <input v-model.number="num">
       totalPrice: {{totalPrice}}


   </div>
   <div>
        {{num2}}
        <button @click="add" >+</button>   

   </div>

</template>

<script>
export default {
        name:"lifeCycleView",
        data(){
                return {
                        msg:"aaaaa",
                        num:0,
                        price:10,
                        totalPrice:0,
                        num2:0




                }
        },
         //Vue实例创建前
            beforeCreate() {
                console.log('beforeCreate Vue this:',this);
                // this.msg="beforeCreate msg"


            },
            //Vue实例创建后
            created() {
                console.log(this.msg)
                console.log('created Vue this:',this);
                this.msg="created msg"
            },
            beforeMount(){
               
                console.log('beforeMount Vue this:',this);
                this.msg="beforeMount msg"
            }    ,
            mounted(){
                 console.log('mounted  Vue this:',this);
                this.msg="mounted msg"
            } ,

            beforeUpdate(){
                let msglet=this.msg
                 console.log('beforeUpdate  Vue msg',msglet);
                //   this.totalPrice=this.price*this.num
                this.num2= this.num2*10
                  
            },


            updated(){
                
                let msglet=this.msg
                
                 console.log('updated  Vue ',msglet);
                //   this.num2= this.num2 /10
                 
                
            },
        methods:{
                add(){
                        this.num2=this.num2+1
                }
        }




}
</script>

<style>

</style>