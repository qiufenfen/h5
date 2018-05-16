
/*****************屏幕宽高*****************************/

var SCREEN_WIDTH = 512;
var SCREEN_HEIGHT = 448;

/*****************图片*****************************/

var IMG_MENU = new Image();
IMG_MENU.src = "img/menu.gif";

var RESOURCE_IMAGE = new Image();
RESOURCE_IMAGE.src = "img/tankAll.gif";


/*****************放图片位置坐标*****************************/
var POS = new Array();
POS["selectTank"] = [128,96]; //坦克位置的x 和 y
POS["stageLevel"] = [396,96];//字母的X坐标和Y坐标
POS["num"] = [256,96];			//数字的X坐标和Y的坐标

POS["map"] = [0,96];          //地图块的位置
POS["home"] = [256,0];;          //家的地图块位置
POS["score"] = [0,112];		  //固定不变的 部分 以及红旗

POS["player"] = [0,0];
/*****************地图块定义****************************/
var WALL = 1;
var GRID = 2;
var GRASS = 3;
var WATER = 4;
var ICE = 5;
var HOME = 9;
var ANOTHREHOME = 8;


/*****************音乐引入****************************/
var STAR_AUDIO = new Audio("audio/1.mp3");
