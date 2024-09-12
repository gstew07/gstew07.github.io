// Events
// Gavin Stewart
// Sept. 12. 2024

let tSize = 300

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // if(mouseIsPressed) tSize = random(20,900);
  textSize(tSize)
  let position = mouseX + ", " + mouseY;
  text(position, mouseX, mouseY);
  fill(255,0,0);
  circle(width/2, height/2, 100);

  fill(0, 255,0);
  square(width/2, height/2, 50);
}


function mousePressed(){
  // called automatically
  tSize = random(20,900);
}