var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(600,200,90,45);
  gameObject1.shapeColor = "yellow";
  gameObject2 = createSprite(600,800,50,30);
  gameObject2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  fixedRect.velocityY=3;
  gameObject2.velocityY=-3;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  
  bounceOff(fixedRect,gameObject2)
  drawSprites();

}