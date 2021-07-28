var runner, runnerImage;
var path, pathImage;

function preload(){
  //pre-load images
  runnerImage = loadImage("Runner-1.png","Runner-2.png")
  pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.scale = 1.2;
  path.y = path.width /2;
  path.velocityY = 5;

  runner = createSprite(190,350,30,30);
  runner.addImage(runnerImage);
  runner.scale = 0.10;

}

function draw() {
  background("white");

 

  if (path.y < 0) {
    path.y = path.width / 2;
  }
  drawSprites();

}
