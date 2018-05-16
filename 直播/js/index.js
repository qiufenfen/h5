/*
JS:
	JavaScript
	网景(netspace) C-- -->LiveScript  -->ECMAScript --> JavaScript
	脚本语言(无法独立运行，需要嵌入到html中作为脚本运行)  (nodejs可以直接运行js)
	js是一门弱类型语言:任何数据类型在使用的时候无需声明数据类型,还能在运行期间动态改变数据类型，所以
		js是一门动态语言
	
	JS包含三大核心组成部分
		ECMAScript:js基本语法
		BOM:浏览器对象模型
		DOM:文档对象模型
 */
//获取视频播放区域(弹幕出现的区域)
var sc = $('.show-msg');
//获取输入框对象
var txt = $('#msg');
//获取按钮对象
var btn = $('.btn');
//封装函数用于查询指定元素对象
function $(selector)
{
	return document.querySelector(selector);
}
//为按钮设置点击事件
btn.addEventListener('click',function(e){
	//获取输入框中输入的内容
	var content = txt.value;
	ws.send((content));
	txt.value="";
})
//监听按键事件
txt.addEventListener('keydown',function(e){
	//获取按钮的按键码(键盘上的每一个按键，都对应一个独一无二的数字:ascii码)
	var code = e.keyCode;
	//判断是否按下回车(发送)
	if(code == 13){
		//获取输入框中输入的内容
		var content = txt.value;
		ws.send((content));
	}
});
var txtSize = 20;
//发送弹幕
function showMsg(content){
	
	//随机获取一个y轴位置
	var height = parseInt(Math.random()*sc.offsetHeight);
	//创建span元素
	var sp = document.createElement('span');
	sp.style.position = 'absolute';//设置定位方式为绝对定位
	sp.style.left = (sc.offsetWidth-150)+'px';
	sp.style.top = height + 'px';	//设置span在距离父容器的高度
	sp.style.fontSize = txtSize+'px';
	sp.style.display = 'block';
	sp.style.fontFamily='微软雅黑';
	sp.style.width = txtSize*content.length + 'px';
	sp.innerHTML = content;	//设置span中要显示的文本内容(弹幕内容)
	sp.style.color = randomColor();
	sc.appendChild(sp);//将产生的弹幕内容追加到屏幕中
	//滚动开始
	startMove(sp);
}
/*
 1.设置内容显示不同颜色(随机显示颜色:#+6位16进制颜色编码 0123456789abcdef)
 2.内容应该要从屏幕右边滚动到屏幕的左边(动画效果:setInterval/setTimeout)
*/
var randomColor = function(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return 'rgb('+r+','+g+','+b+')';
}

function startMove(sp){
	var left = parseInt(sp.style.left);
	left--;
	sp.style.left = left+'px';
	if(left > 0 ){
		setTimeout(function(){startMove(sp)},10);
	}else{
		sc.removeChild(sp);
	}
}

var ws;//声明websocket对象
function socket(){
	if(typeof(WebSocket) !== 'undefined'){
		console.log('支持webSocket')
		//打开websocket连接
		ws = new WebSocket('ws://192.168.0.74:8080/websocket/barrage');
		//初始连接回调
		ws.onopen=function(){
			console.log('连接成功');
			ws.send('发送初始数据');
		}
		//数据接收回调
		ws.onmessage=function(event){
			console.log('数据接收中...');
			var receiver_msg = event.data;
			console.info('收到的数据:'+receiver_msg);
			showMsg(receiver_msg);
		}
		//关闭连接回调
		ws.onclose=function(){
			console.log('连接已关闭!');
		}
	}else{
		console.error('浏览器不支持websocket');
	}
}


socket();
//每隔5秒钟发送一次心跳，避免websocket连接因超时而自动断开
window.setInterval(function(){ 
var ping = {"type":"ping"};
ws.send(JSON.stringify(ping));
},5000);
