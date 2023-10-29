<template>
  
			<h2 onclick="save()"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ongoing</font></font><span id="todocount">2</span></h2>
			<ol id="todolist" class="demo-box"><li draggable="true"><input type="checkbox" onchange="update(4,&quot;done&quot;,true)"><p id="p-4" onclick="edit(4)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bbbb</font></font></font></font></font></font></font></font></font></font></font></font></font></font></p><a href="javascript:remove(4)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-</font></font></a></li><li draggable="true"><input type="checkbox" onchange="update(3,&quot;done&quot;,true)"><p id="p-3" onclick="edit(3)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">java homework</font></font></font></font></font></font></font></font></font></font></font></font></font></font></p><a href="javascript:remove(3)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-</font></font></a></li></ol>
			<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Has been completed</font></font><span id="donecount"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3</font></font></span></h2>
			<ul id="donelist"><li draggable="true"><input type="checkbox" onchange="update(2,&quot;done&quot;,false)" checked="checked"><p id="p-2" onclick="edit(2)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ccc</font></font></font></font></font></font></font></font></font></font></p><a href="javascript:remove(2)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-</font></font></a></li><li draggable="true"><input type="checkbox" onchange="update(1,&quot;done&quot;,false)" checked="checked"><p id="p-1" onclick="edit(1)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">aaa</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></p><a href="javascript:remove(1)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-</font></font></a></li><li draggable="true"><input type="checkbox" onchange="update(0,&quot;done&quot;,false)" checked="checked"><p id="p-0" onclick="edit(0)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">aaaa</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></p><a href="javascript:remove(0)"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-</font></font></a></li></ul>
		


</template>

<script>
export default {

}
</script>

<style scoped>
 label{float:left;width:100px;line-height:50px;color:#DDD;font-size:24px;cursor:pointer;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;}
        .header input{float:right;width:60%;height:24px;margin-top:12px;text-indent:10px;border-radius:5px;box-shadow: 0 1px 0 rgba(255,255,255,0.24), 0 1px 6px rgba(0,0,0,0.45) inset;border:none}
        input:focus{outline-width:0}
        h2{position:relative;}
        span{position:absolute;top:2px;right:5px;display:inline-block;padding:0 5px;height:20px;border-radius:20px;background:#E6E6FA;line-height:22px;text-align:center;color:#666;font-size:14px;}
        ol,ul{padding:0;list-style:none;}
        li input{position:absolute;top:2px;left:10px;width:22px;height:22px;cursor:pointer;}
        p{margin: 0;}
        li p input{top:3px;left:40px;width:70%;height:20px;line-height:14px;text-indent:5px;font-size:14px;}
        li{height:32px;line-height:32px;background: #fff;position:relative;margin-bottom: 10px;
                padding:0 45px;border-radius:3px;border-left: 5px solid #629A9C;box-shadow: 0 1px 2px rgba(0,0,0,0.07);}
        ol li{cursor:move;}
        ul li{border-left: 5px solid #999;opacity: 0.5;}
        li a{position:absolute;top:2px;right:5px;display:inline-block;width:14px;height:12px;border-radius:14px;border:6px double #FFF;background:#CCC;line-height:14px;text-align:center;color:#FFF;font-weight:bold;font-size:14px;cursor:pointer;}
        .footer{color:#666;font-size:14px;text-align:center;}
        .footer a{color:#666;text-decoration:none;color:#999;}
        @media screen and (max-device-width: 620px) {section{width:96%;padding:0 2%;}}
        @media screen and (min-width: 620px) {section{width:600px;padding:0 10px;}}
</style>