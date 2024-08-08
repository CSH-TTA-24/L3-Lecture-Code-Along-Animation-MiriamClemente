// declare xPos globally with a value of 25
let PosX = 25;

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
   background(0);
  fill(0, 255, 0);
  // modify the ellipse function to take xPos as the x position. 
  ellipse(PosX, 250, 50, 50)
  PosX += 3;

  if(PosX > 525){
    PosX = -25
  }
}