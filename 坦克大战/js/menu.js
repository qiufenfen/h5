
//菜单对象
var Menu = function(ctx){
	this.ctx = ctx;
	
	this.x = 0;								//图片X
	this.y = SCREEN_HEIGHT; 				//图片Y
	
	this.selectTank = new SelectTank();
	this.ys = this.selectTank.ys;			//坦克Y距离
	this.yx = this.selectTank.x;			//坦克X距离
	
	this.tempsize = this.selectTank.size;	//坦克大小
	this.playnum = 1;						//游戏人数 
	
	this.timetemp = 0;
	this.draw = function(){
		
		this.timetemp++;
		var temp = 0;
		if(parseInt(this.timetemp/6)%2 ==0){
			temp =0;
		}else{
			temp = this.tempsize;
		}
		//如果Y减到头 那么把Y设置为0 否则 让他减10
		if(this.y <= 0 ){
			this.y == 0;
		}else{
			this.y -= 1;
		}
		
		this.ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);   
		this.ctx.save(); 
		
		//drawImage 第一个值为 图片引用 第二个值 为放入画布位置X 第三个值 放入画布的Y
		//记住 画布 是以图片左上角的左边为基准
		this.ctx.drawImage(IMG_MENU,0,this.y);
		//ontext.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
		//img 就是我们的图片
		
		//sx 是我们的想取的图片的左上角x坐标
		//sy 是我们的想取的图片的左上角y坐标
		//swidth 是我们想取的图片的宽度
		//sheight 是我们想取的图片的高度
		
		//x 放入画布中的位置的X坐标
		//y 放入画布中的位置的y坐标
		//width 放入画布中的宽度
		//height 放入画布中的高度
		//alert(POS["selectTank"][0] + " " + POS["selectTank"][1]);
		this.ctx.drawImage(	RESOURCE_IMAGE,						//加载所有坦克图片
							POS["selectTank"][0],				//坦克在图片中x的位置
							POS["selectTank"][1] + temp,				//坦克在图片中y的位置
							this.tempsize,						//坦克X剪裁的长度
							this.tempsize,						//坦克Y剪裁的长度
							this.yx,							//在画布中的X位置
							this.y+this.ys[this.playnum-1], 						//在画布中Y的位置
							this.tempsize,							//在画布中剪裁的X
							this.tempsize							//在画布中剪裁的Y
				);

		this.ctx.restore();
	}
	//这是用来选择单人和双人切换
	//this.playnum 初始化为1个人
	//this.ys[this.playnum-1] 为坦克在画布中Y的坐标
	this.next = function(n){
		this.playnum += n;
		if(this.playnum>2){
			this.playnum =1;
		}else if(this.playnum<1){
			this.playnum =2;
		}
	}
}


