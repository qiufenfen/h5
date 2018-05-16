

var Tank = function(){
	this.tanksize = 32;	//坦克的大小
	this.dir = 0;   //0:上 1：下 2：左 3：右
	this.x = 0;     //在地图中的位置
	this.y = 0;
	
	this.tempx = 0;
	this.tempy = 0;
	
	this.speed = 3;
	
	this.move = function(){
		this.tempx = this.x;
		this.tempy = this.y;
		switch(this.dir){ 
			case 0:this.tempy -= this.speed;break; 
			case 1:this.tempy += this.speed;break; 
			case 2:this.tempx -= this.speed;break; 
			case 3:this.tempx += this.speed;break; 
		}

		this.x = this.tempx;
		this.y = this.tempy;
	}
}


var playTank = function(ctx){
	this.ctx = ctx;
	this.offx = 0;
	this.lives = 3;
	this.draw = function(){
		this.ctx.drawImage(RESOURCE_IMAGE,
			POS["player"][0] + this.dir*this.tanksize + this.offx,
			POS["player"][1],
			this.tanksize,
			this.tanksize,
			this.x,
			this.y,
			this.tanksize,
			this.tanksize);
	}
}
playTank.prototype = new Tank();

	/**
	 * 菜单选择坦克
	 * @returns
	 */
	var SelectTank = function(){
		this.ys = [250, 281];//两个Y坐标，分别对应1p和2p
		this.x = 135;
		this.size = 27;
	};
