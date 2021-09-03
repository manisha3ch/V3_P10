var shipSprite , seaSprite;

function preload(){
  seaImg = loadImage("sea.png");
  shipAni = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);

  background("lightblue");
  
  seaSprite = createSprite(400,200);
  seaSprite.addImage("sea",seaImg);
  seaSprite.scale = 0.25;
  seaSprite.velocityX = -2;

  shipSprite = createSprite(130,200,30,10);
  shipSprite.addAnimation("shipMoving",shipAni);
  shipSprite.scale = 0.25;

}

function draw() {

  seaSprite.velocityX = -2;

  if(seaSprite.x < -300 ){
    seaSprite.x = 400;
  }

  drawSprites();

}