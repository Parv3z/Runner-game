var path,Runner, leftBoundary,rightBoundary;
var pathImg,runnerImg;
var i;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner1.png","Runner2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.velocityY = 4;
  path.scale=1.2;

  //creating boy running
  boy = createSprite(180,340,30,30);
  boy.addAnimation("Runner", runnerImg);

  //create Boundary
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;

  Runner.x = World.mouseX;

  edge = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  if(path.y > 400 ){
    path.y = height/2
  }

}
