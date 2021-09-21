var sea , seaImg;
var ship , shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(1000,825);

  sea = createSprite(0,0,500,500);
  sea.addImage(seaImg);

  ship = createSprite(500,300,150,200);
  ship.scale = 0.5;
  ship.addAnimation("ship_moving", shipImg1);
  
if (sea.x < 0){
  sea.x = sea.width/2;
}

}

function draw() {
  background("blue");
  drawSprites();
 
}