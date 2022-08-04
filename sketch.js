var box;
function preload() {
  boxImage = loadImage("Box.jfif");
}

function setup() {
  createCanvas(1500,1500);
  box = createSprite(750, 750, 100, 100);
  box.shapeColor = "red";
box.addImage("box",boxImage);
box.scale = 0.2;
}

function draw() 
{
  background(30);

if (keyDown(RIGHT_ARROW)) {
box.x = box.x+10;
}

if (keyDown(LEFT_ARROW)) {
box.x = box.x-10;
}

if (keyDown(UP_ARROW)) {
  box.y = box.y-10;
  }

  if (keyDown(DOWN_ARROW)) {
    box.y = box.y+10;
    }
  drawSprites() ;
}




