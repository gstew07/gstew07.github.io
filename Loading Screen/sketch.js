// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectHeight = 40;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  loadingScreen();
  frameRate(6);
}


function loadingScreen(){
  push();
  translate(width/2, height/2);
  rotate(30*(frameCount%30));
  for(let i = 0; i < 5; i++){
    rect(50, 5 , rectHeight, 10);
    rotate(12);
  }


  pop();
}
