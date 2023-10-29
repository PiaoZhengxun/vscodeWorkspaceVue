<template>
  <div> <h1>This is an mycomponent page</h1> </div>

  <div v-html="msg"></div>
  <div :title="msg2"></div>

  <div id="app">
        <div :class="className">aaaaaaaaaaaaaaaaaaa</div>
    </div>



  <div :class="{color1:oneActive,size1:twoActive}">bbbbbbbbbbbbb</div>

  <button @click="closecolor"> closecolor </button>
  <button @click="switchcolor2"> switchcolor </button>
   <!-- <div v-text="msg"></div> -->
  <div>
  {{num}}
          <button v-on:click="add(1,$event)">add</button>
          <button @click="subtract(1)">subtract</button>
  </div>

 


  <div   class="div1"  @click="showdiv1msg" @contextmenu.prevent>
    <div class="div2"  @click.stop="showdiv2msg">

    </div>
  </div>

    <div v-if="isShow">v-if msg </div>
     <div v-show="isShow">v-show msg </div>
      <button @click="changeIsShow">isShow</button>


        <div v-if="type==1">A</div>
        <div v-else-if="type==2">B</div>
        <div v-else-if="type==3">C</div>
        <div v-else>D</div>

     <div>tpyenum:<input v-model="type"></div>

    <!-- <div  v-for="elem in user" >{{elem}}</div> -->
    <!-- <div  v-for="(elemindex1,elemindex2,elemindex3) in user" >{{elemindex3+1}}.{{elemindex2}}:{{elemindex1}}</div> -->

      <div  v-for="(elem,indexnum) in userArr"  :key="elem.userId" >
         
           <!-- <div v-for="e in elem">
            {{e}}
           </div> -->
         {{indexnum}}:{{elem.userId}},{{elem.userName}},{{elem.userSex}} 
           
          -------------------------
      </div>



  <div>
      View
      {{msga}}
      <input type="text"  v-model="msga" >


  </div>


</template>

<script>
export default {
   data(){
    return {
      msga:"aaaaaaaaaaaaa",
      type:1,
      msg:'<h1>Hello World!</h1>',
      msg2:"hello title",

      className:"color2",
      oneActive: true,
      twoActive: true,
      num:0,
      isShow:true,
      user: {
          userId: 1,
          userName: 'tom',
          userSex: 'male'
      },
      userArr: [{
                        userId: 1001,
                        userName: 'tom',
                        userSex: 'male'
                    }, {
                        userId: 1002,
                        userName: 'jerry',
                        userSex: 'male'
                    }, {
                        userId: 1003,
                        userName: 'marry',
                        userSex: 'female'
                    }]
    }
   },
    methods: {
      changeIsShow(){
        this.isShow=!this.isShow
      },

      showdiv2msg(){
        console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
      },
      showdiv1msg(){
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      },
      closecolor(){
         this.oneActive=false
      },
      switchcolor(){
          if(this.oneActive==true){
            this.oneActive=false
          }else{
            this.oneActive=true
          }
      },
      switchcolor2(){
          this.oneActive=!this.oneActive
      },
      add(val,event){
          this.num=this.num+val
          console.log(event)
      },subtract(val){
          this.num=this.num-val
      }
  }


}
</script>

<style>
 .div1{
        width: 200px;
        height: 200px;
        background-color: red;
    }
  .div2{
        width: 100px;
        height: 100px;
        background-color: blue;
  }
 .color1{
  color: blue;
 }
 .color2{
  color: red;
 }
 .size1{
  font-size: 48px;
 }
 .size2{
  font-size: 28px;
 }

</style>