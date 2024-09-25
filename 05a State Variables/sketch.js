// State Variables
// Gavin Stewart
// Date

// Global Variables
let currentColor = 0;
let circleSize = 50;
let growing = false
let myColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color(50, 230, 165); // 3-tuple
}

function draw() {
  background(255);

  //circle code - fill value using SWITCH statement
  switch(currentColor){
    case 0:
      fill(255,0,0);
      break;
    case 1:
      fill(myColor);
      break;
    case 2:
      fill(0,255,0);
      break;
  }
  // circle: change the color state (variable)
  if (frameCount % 30 === 0) {
    currentColor ++;
  if (currentColor > 2) currentColor = 0;
  }

  // circle, grow/shrink
  if(growing) circleSize += 2;
  else circleSize -= 2;

circle(width/2, height/2, circleSize);
}
function keyPressed(){
  if(key === "a"){
    growing = !growing;
  }
}