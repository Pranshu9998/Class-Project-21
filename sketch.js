var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX
  movingRect.y=mouseY
  if ((movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2)&&
  (fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2)&&
  (movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2)&&
  (fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2)) {
    fixedRect.shapeColor= "blue"
    movingRect.shapeColor= "blue"
  }
  else {
    fixedRect.shapeColor= "green"
    movingRect.shapeColor= "green"
  }
  drawSprites();
}