var mRect, fRect
function setup() {
  createCanvas(800,400);
  mRect = createSprite(300, 200, 40, 50);
  mRect.shapeColor = "green";
  mRect.debug = true;

  fRect = createSprite(500, 200, 50, 40);
  fRect.shapeColor = "green";
  fRect.debug = true;
}
function draw() {
  background("lightBlue");  
  
  mRect.x = mouseX;
  mRect.y = mouseY;
if (mRect.x - fRect.x < mRect.width/2 + fRect.width/2 && fRect.x - mRect.x < mRect.width/2 + fRect.width/2 && mRect.y - fRect.y < mRect.width/2 + fRect.width/2 && fRect.y - mRect.y < mRect.width/2 + fRect.width/2){
  mRect.shapeColor = "red";
  fRect.shapeColor = "red";
} else {
  mRect.shapeColor = "green";
  fRect.shapeColor = "green";
}
  drawSprites();
}