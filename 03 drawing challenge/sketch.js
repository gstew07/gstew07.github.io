// Drawing Challenge
// Gavin Stewart
// Sept. 13. 2024

let headSize = 50
let xpos = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  noStroke();

  if (keyIsPressed && key === "a") {
    xpos += -2
    if (xpos < -(width/2)) xpos = 0;
  }
  if (keyIsPressed && key === "d") {
    xpos += 2
    if (xpos > width/2) xpos = 0;
  }
  if (keyIsPressed && key === "x") {
    headSize += -1
  }
  if (keyIsPressed && key === "z") {
    headSize += 1
    
  }

  fill(0, 255, 0);
  circle(width / 2 + xpos, height / 2, 2 * headSize);
  rect(width / 2 + xpos, height / 2 + 0.75 * headSize, 2 * headSize, 1.5 * headSize);
  rect(width / 2 + 0.9 * headSize + xpos, height / 2 + 1.8 * headSize, 0.2 * headSize, 0.6 * headSize);
  rect(width / 2 - 0.9 * headSize + xpos, height / 2 + 1.8 * headSize, 0.2 * headSize, 0.6 * headSize);

  fill(0, 0, 0)
  circle(width / 2 + 0.5 * headSize + xpos, height / 2, 0.2 * headSize);
  circle(width / 2 - 0.5 * headSize + xpos, height / 2, 0.2 * headSize);
  rect(width / 2 + xpos, height / 2 + 0.4 * headSize, 1 * headSize, 0.06 * headSize);
}


















//moving rectangle
//   if(keyIsPressed && key === "s"){
//     //
//     rY += 2
//     if(rY > height) rY = 0;
//   }
//   if(keyIsPressed && key === "w"){
//     rY += -2
//     if(rY > height) rY = 0;
//   }
//   if(keyIsPressed && key === "a"){
//     rX += -2
//     if(rY > height) rY = 0;
//   }
//   if(keyIsPressed && key === "d"){
//     rX += 2
//     if(rY > height) rY = 0;
//   }
//   fill(200, 255, 150);
//   rect(rX, rY, 100 , 50, 10 ,20,30 ,40);
// }


// function keyPressed(){
//   if(keyCode === DOWN_ARROW){
//     rY += 50;
//   }