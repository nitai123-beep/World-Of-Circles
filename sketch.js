var cir,cira;
// Load  Anything
function preload() {
cira = loadAnimation("Untitled-1.png");

}
// Implementing The Added "Anything"
function setup() {
  //CANVAS
  createCanvas(1920,1080);

 
//  cir2.loop();
}
  //DRAW!!!!



function draw() {

  background(1000,1000,1000);
  stroke("black");
  textSize(28);
  fill ("black");
  text("PRESS SPACE",960,50);
spawnCircle();
//Vision
drawSprites();
}



function spawnCircle(){
if(keyDown("space")){

  if (frameCount%1===0){
var cir = createSprite(400,200,10,10);
cir.y=random(0,1080);
cir.x=random(0,1920);
cir.addAnimation("t1",cira);
}
}
}