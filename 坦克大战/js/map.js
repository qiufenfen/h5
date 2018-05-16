

var Map = function(wallctx){
	this.wallctx = wallctx;
	
	this.offerx = 32;  //主游戏区域 X距离
	this.offery = 16;  //主游戏区域Y距离
	
	this.tilesize = 16; //砖块的大小
	this.homesize = 32; //家的大小
	
	this.gameWidth = 416;  //主游戏画布宽度
	this.gameHeight = 416; //主游戏画布高度
	this.maplevel = null;
	
	this.level = 1;
	
	this.wTileCount = 26; 		//主游戏区的宽度地图块数
	this.HTileCount = 26;		//主游戏区的高度地图块数

	this.setLevelMap = function(){
		this.maplevel = eval("map" + this.level);
	}
	
	this.draw = function(level,playnum){
		this.wallctx.fillStyle = "#7f7f7f";
		this.wallctx.fillRect(0,
			0,
			SCREEN_WIDTH,
			SCREEN_HEIGHT);
		
		this.wallctx.fillStyle = "#000000";
		this.wallctx.fillRect(this.offerx,
			this.offery,
			this.gameWidth,
			this.gameHeight);
			
		//遍历高度
		for(var i=0;i<this.HTileCount;i++){
			//遍历宽度
			for(var j=0;j<this.wTileCount;j++){
				//判断是不是地图块
				if(this.maplevel[i][j]==WALL||this.maplevel[i][j]==GRID || 
					this.maplevel[i][j]==GRASS || this.maplevel[i][j]==WATER || this.maplevel[i][j]==ICE ){
					//画入地图块
					this.wallctx.drawImage(RESOURCE_IMAGE,
					POS["map"][0]+this.tilesize*(this.maplevel[i][j]-1),		//每个地图块在图片中位置
					POS["map"][1],
					this.tilesize,
					this.tilesize,
					this.offerx + j*this.tilesize,								//画布额外的宽度和高度加上地图块占的位置
					this.offery + i*this.tilesize,
					this.tilesize,
					this.tilesize)
				}
			}
		}
		
		
		
		this.drawNoChange();
		//方法 第一个方法 敌人的个数
		this.drawTankNum(7);
		//第三个方法 写关卡数量
		this.drawlevel(level);
		//第二个方法 来写 生命值 以及 玩家个数
		this.drawTanklife(3,1);
		
		//游戏人数控制
		//选择两个人的时候 打开这个 否则关闭
		if(playnum==2){
			this.drawTanklife(3,2);
		}else{
			this.wallctx.drawImage(RESOURCE_IMAGE,	//这是图片
			POS["num"][0],	//数字在图片中x坐标
			POS["num"][1],					//数字在图片中Y坐标
			14,								//在图片中截图宽度
			14,								//在图片中截取高度
			480,							//画布中x坐标
			328,							//画布中y坐标
			14,								//画布中宽度
			14);								//画布中的高度
		}
		

	}
	
	
	this.drawNoChange = function(){
		//固定不变的部分 
		//[0,112] 图片中的坐标
		//宽度30 高度32  画布中的坐标x：464 y:256
		this.wallctx.drawImage(RESOURCE_IMAGE,
		POS["score"][0],
		POS["score"][1],
		30,
		32,
		464,
		256,
		30,
		32);
		
		this.wallctx.drawImage(RESOURCE_IMAGE,
		POS["score"][0] + 30,
		POS["score"][1],
		30,
		32,
		464,
		256 + 50,
		30,
		32);
		
		this.wallctx.drawImage(RESOURCE_IMAGE,
		POS["score"][0] + 60,
		POS["score"][1],
		30,
		32,
		464,
		256 + 100 ,
		30,
		32);
	}
	
	this.drawTankNum = function(num){
		//方法 第一个方法 敌人的个数
		var x = 466;					//X的距离坐标
		var y = 34;						//Y的距离坐标
		var emysize = 16;				//图标的尺寸
		for(var i=1;i<=num;i++){
			var tempx = x;
			var tempy =y + parseInt((i+1)/2)*emysize;
			if(i%2 ==0){
				tempx = x + emysize;
			}
			this.wallctx.drawImage(RESOURCE_IMAGE,
				POS["score"][0] + 92,
				POS["score"][1],
				emysize,
				emysize,
				tempx,
				tempy ,
				emysize,
				emysize);
		}
	}
	this.drawlevel =function(level){
		//写关卡
		this.wallctx.drawImage(RESOURCE_IMAGE,	//这是图片
			POS["num"][0]+level*14,	//数字在图片中x坐标
			POS["num"][1],					//数字在图片中Y坐标
			14,								//在图片中截图宽度
			14,								//在图片中截取高度
			470,							//画布中x坐标
			395,							//画布中y坐标
			14,								//画布中宽度
			14);								//画布中的高度
					
	}
	this.drawTanklife = function(life,whitch){
		//写坦克生命值
		//第一个坦克的生命值
		if(whitch==1){
			this.wallctx.drawImage(RESOURCE_IMAGE,	//这是图片
			POS["num"][0]+life*14,	//数字在图片中x坐标
			POS["num"][1],					//数字在图片中Y坐标
			14,								//在图片中截图宽度
			14,								//在图片中截取高度
			480,							//画布中x坐标
			275,							//画布中y坐标
			14,								//画布中宽度
			14);								//画布中的高度
		}
		if(whitch==2){
			this.wallctx.drawImage(RESOURCE_IMAGE,	//这是图片
			POS["num"][0]+life*14,	//数字在图片中x坐标
			POS["num"][1],					//数字在图片中Y坐标
			14,								//在图片中截图宽度
			14,								//在图片中截取高度
			480,							//画布中x坐标
			328,							//画布中y坐标
			14,								//画布中宽度
			14);								//画布中的高度
		}
	}
	
}
