

var ctx;  //主画布

var wallctx; //游戏画布

var tankctx; //坦克的画布
var menu; //菜单
var gamemap; //游戏界面

var player1;
var player2;

var stage;
//当页面加载完之后 执行里面的方法

var gamestu=0;
// this ==>window
/**
  * 加载
  */
$(document).ready(function(){
	initScreen();
	initObject();
	//指的是 隔几秒 调用一个 gameLoop
	setInterval(gameLoop,10);
	
	
});

/**
 * 初始化对象
 */
function initObject(){
	//初始化菜单对象
	menu = new Menu(ctx);
	//初始化 舞台对象
	stage = new Stage(ctx);
	
	gamemap = new Map(wallctx);
	
	player1 = new playTank(tankctx);
	player1.x = 129 + gamemap.offerx;
	player1.y = 385 + gamemap.offery;

	player2 = new playTank(tankctx);
	player2.offx = 128; 
	player2.x = 256 + gamemap.offerx;
	player2.y = 385 + gamemap.offery;
}
/**
 * 初始化主游戏区域
 */
function initMap(){
	gamemap.setLevelMap();
	gamemap.draw(1,menu.playnum);
//	drawTankAll();
}


/**
 * 初始化屏幕
 */
function initScreen(){
	//取画布=document.getelementById("stageCanvas");
	var canvas = $("#stageCanvas");
	//将画布设置为2D 并且赋值给CTX
	ctx = canvas[0].getContext("2d");
	
	//设置画布的长宽
	canvas.attr({"width":SCREEN_WIDTH});
	canvas.attr({"height":SCREEN_HEIGHT});
	
	//设置主游戏画布的大小
	wallctx = $("#wallCanvas")[0].getContext("2d");
	
	$("#wallCanvas").attr({"width":SCREEN_WIDTH});
	$("#wallCanvas").attr({"height":SCREEN_HEIGHT});
	
		//设置坦克画布的大小
	tankctx = $("#tankCanvas")[0].getContext("2d");
	$("#tankCanvas").attr({"width":SCREEN_WIDTH});
	$("#tankCanvas").attr({"height":SCREEN_HEIGHT});

	
	//设置画布背景DIV颜色
	$("#canvasDiv").css({"width":SCREEN_WIDTH});
	$("#canvasDiv").css({"height":SCREEN_HEIGHT});
	$("#canvasDiv").css({"background-color":"#000000"});
}

function drawTankAll(){
	tankctx.clearRect(0,0,SCREEN_WIDTH,SCREEN_HEIGHT)
	if(player1.lives>0){
		player1.draw();
	}
	if(player2.lives>0){
		player2.draw();
	}
}
/**
 * 循环
 */
function gameLoop(){
	if(gamestu==0){
		//循环调用菜单画布
		menu.draw();
	}else if(gamestu ==1){
		stage.draw();
	}
	else if(gamestu==2){
		drawTankAll();
	}
}
function keyEvent(e){
		if(e == keyboard.W){
				player1.dir = 0;
				player1.move();
		}else if(e == keyboard.S){
				player1.dir = 1;
				player1.move();
		}else if(e == keyboard.A){
				player1.dir = 2;
				player1.move();
		}else if(e == keyboard.D){
				player1.dir = 3;
				player1.move();
		}
}

/**
 * 键盘绑定
 */
$(document).keydown(function(e){
	if(gamestu==0){
			var n = 0;
			if(e.keyCode==keyboard.DOWN){
				n+=1;
			}
			if(e.keyCode==keyboard.UP){
				n-=1;
			}
			menu.next(n);
			if(e.keyCode==keyboard.ENTER){
				gamestu = 1; //进入游戏 开始画画布
				if(menu.playnum == 1){
					player2.lives = 0;
				}
			}
	}else if(gamestu==2){

			keyEvent(e.keyCode);
	}
});
