// Clock challenge
// Gavin Stewart
// Oct. 8 2024

let d = new Date();
let hour, minute, second;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  
}

function draw() {
  d = new Date();
  background(220);
  drawClock();

  hour = 30*(d.getHours() % 12);
  minute = 6*d.getMinutes();
  second = 6*d.getSeconds();
  
}

function drawClock(){
  push();
  translate(width/2, height/2);
  circle(0,0,400);
  fill(0);
  rotate(270);
  for (let i = 0; i < 60; i++){
    if ( i % 5 === 0){
      rect(175, 0, 25, 4);
      text(i/5, 150 ,0,);
    }
    else {
      rect(177.5, 0, 20 , 1);
    }
    rotate(6);
  }
  point(0,0);
  rotate(hour);
  rect(75, 0, 150, 5);
  
  rotate(-hour);
  rotate(minute);
  rect(75, 0, 150, 3);
  
  rotate(-minute);
  rotate(second);
  line(0,0,150,0);

  
  circle(0,0, 10);

  pop();

}
