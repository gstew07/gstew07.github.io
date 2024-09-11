// Coordinate Systems
// Gavin Stewart
// sept 11. 2024
// Looking how coordinates work in p5.js


function setup() {
  print("setup runs once, at the start")
  createCanvas(500, 400);
}

function draw() {
  background(220);
  drawCircles()

  
}

function drawCircles(){
  // draw some circles
  fill(0, 0,255);
  circle(0,0,50);
  fill(255, 0,255);
  circle(width, 0, 50);
  fill(255, 0,0);
  circle(width / 2, height / 2, 15);
  fill(150, 98,255);
  circle(0,height, 50);
  fill(255, 100, 0);
  circle(width,height, 50);
  fill(255, 0,0);
  circle(width / 2 + width / 10, height / 2 + height / 10, 15 );
  fill(255, 0,0);
  circle(width / 2 - width / 10, height / 2 + height / 10, 15 );
  fill(255, 0,0);
  circle(width / 2 - width / 10, height / 2 - height / 10, 15 );
  fill(255, 0,0);
  circle(width / 2 + width / 10, height / 2 - height / 10, 15 );
  for (let i = 0; i>= 0; i++){
    if (i % 2 === 1){
      fill(255, 0,0)
      circle(width / 2, height / 2 + height / 10, 15 );
      fill(255, 0,0);
      circle(width / 2 - width / 10, height / 2 , 15 );
      fill(255, 0,0);
      circle(width / 2 , height / 2 - height / 10, 15 );
      fill(255, 0,0);
      circle(width / 2 + width / 10, height / 2 , 15 );
    }
    else {
      fill(255, 0,0)
      circle(width / 2 + width / 10, height / 2 + height / 10, 15 );
      fill(255, 0,0);
      circle(width / 2 - width / 10, height / 2 + height / 10, 15 );
      fill(255, 0,0);
      circle(width / 2 - width / 10, height / 2 - height / 10, 15 );
      fill(255, 0,0);
      circle(width / 2 + width / 10, height / 2 - height / 10, 15 );
    }
    p5.Delay.delayTime(1.0)
  }
}
