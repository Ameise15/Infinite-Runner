var bg,bgImg;
var boy, boyImg;
var girl, girlImg;

function preload() {
  bgImg=loadImage("track.png")
  boyImg=loadImage("image.png")
  girlImg=loadImage("girl.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(width/2,height/2)
  bg.addImage(bgImg);
  bg.scale=6;
  bg.x=bg.width/2
  bg.velocityX=-4
  boy=createSprite(200,500,50,50);
  boy.addImage(boyImg);
  girl=createSprite(700,500,50,50);
  girl.addImage(girlImg)
  girl.scale=0.7
}

function draw() {
  background(255,255,255);  
if (bg.x<200) {
  bg.x=bg.width/2
}
  drawSprites();
}