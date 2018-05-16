//舞台
var Stage = function(ctx,level){
	this.ctx = ctx;					//画布
	this.ctx.fillStyle = "#888888"; //填充颜色
	this.temp = 0; 		//中间变量 填充高度
	this.fo = 15;		//每次增加量
	this.dir = 1;		//如果dir为-1 则为打开 为1则为关闭
	this.x = 512;		//画布宽度
	this.zero = 0;		//x0坐标
	this.level = 5;
	this.draw = function(){
		
		 	if(this.dir==1){
		 		if(this.temp==225){
		 			//显示文字
					this.ctx.drawImage(RESOURCE_IMAGE,	//这是图片
					POS["stageLevel"][0],			//字母在图片中x坐标
					POS["stageLevel"][1],			//字母在图片中Y坐标
					78,								//在图片中截图宽度
					14,								//在图片中截取高度
					194,							//画布中x坐标
					208,							//画布中y坐标
					78,								//画布中宽度
					14);								//画布中的高度
					//显示数字
					this.ctx.drawImage(RESOURCE_IMAGE,	//这是图片
					POS["num"][0]+this.level*14,	//数字在图片中x坐标
					POS["num"][1],					//数字在图片中Y坐标
					14,								//在图片中截图宽度
					14,								//在图片中截取高度
					300,							//画布中x坐标
					208,							//画布中y坐标
					14,								//画布中宽度
					14);								//画布中的高度
					
					
					//如果大于9关 10关之后怎么写？
					
					//开始画地图
					initMap();
					
					
		 		}else if(this.temp == 750+225){
		 			//缓冲时间 即画布停留时间
					this.dir = -1;
//					this.temp = 225;
					//STAR_AUDIO.play();
				}else{
					//alert(POS["stageLevel"][0] + " " + POS["stageLevel"][1]);
	
					//从上往下填充
					this.ctx.fillRect(this.zero ,this.temp,this.x,this.fo);
					//从下网上填充
					this.ctx.fillRect(this.zero ,448-this.temp-this.fo,this.x,this.fo);
			}
		}else{
			if(this.temp>=0){
				if(this.temp<=225){
					//clearRect 清除填充的画布
					//清除
					this.ctx.clearRect(this.zero ,this.temp,this.x,this.fo);
					//清除
					this.ctx.clearRect(this.zero ,448-this.temp-this.fo,this.x,this.fo);
					//每次填充多少
				}
				
			}
			if(this.temp == 0){
					gamestu = 2;
			}
		}
		
		this.temp+=this.fo*this.dir;
		//第一个问题 就是什么时候 把舞台张开
			//
		//第二个问题 文字的显示 在何时
		
		//*第三个问题 让舞台停顿一下
		
		//*第四个问题 如何去张开舞台
	}
}
